import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.50.2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface AdminActionRequest {
  action: 'change_password' | 'delete_user' | 'suspend_user' | 'unsuspend_user';
  targetUserId: string;
  newPassword?: string;
  suspensionReason?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client with service role for admin operations
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    // Initialize regular client for user authentication
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    // Get the authorization header
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'No authorization header' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Verify the user is authenticated and is admin
    const { data: { user }, error: authError } = await supabase.auth.getUser(
      authHeader.replace('Bearer ', '')
    );

    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Invalid authentication' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Check if user is admin
    const { data: userRole, error: roleError } = await supabase
      .from('user_roles')
      .select('is_admin')
      .eq('user_id', user.id)
      .single();

    if (roleError || !userRole?.is_admin) {
      return new Response(
        JSON.stringify({ error: 'Admin access required' }),
        { status: 403, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse request body
    const { action, targetUserId, newPassword, suspensionReason }: AdminActionRequest = await req.json();

    // Get client info for logging
    const userAgent = req.headers.get('User-Agent') || 'Unknown';
    const ipAddress = req.headers.get('CF-Connecting-IP') || 
                     req.headers.get('X-Forwarded-For') || 
                     req.headers.get('X-Real-IP') || 'Unknown';

    let result: any = {};
    let actionDetails: any = {};

    console.log(`Admin ${user.id} performing action: ${action} on user: ${targetUserId}`);

    switch (action) {
      case 'change_password':
        if (!newPassword) {
          return new Response(
            JSON.stringify({ error: 'New password is required' }),
            { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        const { error: passwordError } = await supabaseAdmin.auth.admin.updateUserById(
          targetUserId,
          { password: newPassword }
        );

        if (passwordError) {
          console.error('Password change error:', passwordError);
          return new Response(
            JSON.stringify({ error: 'Failed to change password' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        result = { message: 'Password changed successfully' };
        actionDetails = { action: 'password_changed' };
        break;

      case 'delete_user':
        const { error: deleteError } = await supabaseAdmin.auth.admin.deleteUser(targetUserId);

        if (deleteError) {
          console.error('User deletion error:', deleteError);
          return new Response(
            JSON.stringify({ error: 'Failed to delete user' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        result = { message: 'User deleted successfully' };
        actionDetails = { action: 'user_deleted' };
        break;

      case 'suspend_user':
        const { error: suspendError } = await supabase
          .from('user_roles')
          .upsert({
            user_id: targetUserId,
            is_suspended: true,
            suspended_at: new Date().toISOString(),
            suspended_by: user.id,
            suspension_reason: suspensionReason || 'No reason provided'
          });

        if (suspendError) {
          console.error('User suspension error:', suspendError);
          return new Response(
            JSON.stringify({ error: 'Failed to suspend user' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        result = { message: 'User suspended successfully' };
        actionDetails = { action: 'user_suspended', reason: suspensionReason };
        break;

      case 'unsuspend_user':
        const { error: unsuspendError } = await supabase
          .from('user_roles')
          .update({
            is_suspended: false,
            suspended_at: null,
            suspended_by: null,
            suspension_reason: null
          })
          .eq('user_id', targetUserId);

        if (unsuspendError) {
          console.error('User unsuspension error:', unsuspendError);
          return new Response(
            JSON.stringify({ error: 'Failed to unsuspend user' }),
            { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        }

        result = { message: 'User unsuspended successfully' };
        actionDetails = { action: 'user_unsuspended' };
        break;

      default:
        return new Response(
          JSON.stringify({ error: 'Invalid action' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }

    // Log the admin action
    const { error: logError } = await supabase
      .from('admin_action_logs')
      .insert({
        admin_user_id: user.id,
        target_user_id: targetUserId,
        action_type: action,
        action_details: actionDetails,
        ip_address: ipAddress,
        user_agent: userAgent
      });

    if (logError) {
      console.error('Failed to log admin action:', logError);
    }

    console.log(`Action ${action} completed successfully for user ${targetUserId}`);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error('Error in admin-user-actions function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
};

serve(handler);