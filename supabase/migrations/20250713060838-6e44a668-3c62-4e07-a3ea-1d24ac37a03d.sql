-- Add suspension status to user_roles table
ALTER TABLE public.user_roles 
ADD COLUMN is_suspended BOOLEAN DEFAULT FALSE,
ADD COLUMN suspended_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN suspended_by UUID REFERENCES auth.users(id),
ADD COLUMN suspension_reason TEXT;

-- Create admin action logs table
CREATE TABLE public.admin_action_logs (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    admin_user_id UUID NOT NULL REFERENCES auth.users(id),
    target_user_id UUID REFERENCES auth.users(id),
    action_type TEXT NOT NULL,
    action_details JSONB,
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on admin_action_logs
ALTER TABLE public.admin_action_logs ENABLE ROW LEVEL SECURITY;

-- Create policy for admin action logs (only admins can view)
CREATE POLICY "Admins can view all action logs" 
ON public.admin_action_logs 
FOR SELECT 
USING (is_user_admin());

CREATE POLICY "System can insert action logs" 
ON public.admin_action_logs 
FOR INSERT 
WITH CHECK (true);

-- Create index for better performance
CREATE INDEX idx_admin_action_logs_admin_user ON public.admin_action_logs(admin_user_id);
CREATE INDEX idx_admin_action_logs_target_user ON public.admin_action_logs(target_user_id);
CREATE INDEX idx_admin_action_logs_created_at ON public.admin_action_logs(created_at DESC);