
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Users, Shield, Trash2 } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

interface UserProfile {
  id: string;
  username: string;
  created_at: string;
  is_admin: boolean;
}

const UserManagement = () => {
  const { user, isAdmin } = useAuth();
  const { toast } = useToast();
  
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAdmin) {
      fetchUsers();
    }
  }, [isAdmin]);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 pt-16">
        <div className="max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-red-600">Access Denied</CardTitle>
            </CardHeader>
            <CardContent>
              <p>You don't have permission to access this page. Admin access required.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const fetchUsers = async () => {
    try {
      // Fetch profiles with admin status by joining with user_roles
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select(`
          id,
          username,
          created_at,
          user_roles(is_admin)
        `);

      if (profilesError) throw profilesError;

      // Transform the data
      const combinedUsers = profilesData?.map((profile: any) => {
        return {
          id: profile.id,
          username: profile.username || 'Unknown User',
          created_at: profile.created_at,
          is_admin: profile.user_roles?.[0]?.is_admin || false
        };
      }) || [];

      setUsers(combinedUsers);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        title: "Error",
        description: "Failed to load users",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleMakeAdmin = async (userId: string) => {
    try {
      const { error } = await supabase
        .from('user_roles')
        .upsert([{ user_id: userId, is_admin: true }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "User is now an admin",
      });
      
      fetchUsers();
    } catch (error) {
      console.error('Error making user admin:', error);
      toast({
        title: "Error",
        description: "Failed to make user admin",
        variant: "destructive",
      });
    }
  };

  const handleRemoveAdmin = async (userId: string) => {
    try {
      const { error } = await supabase
        .from('user_roles')
        .update({ is_admin: false })
        .eq('user_id', userId);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Admin role removed",
      });
      
      fetchUsers();
    } catch (error) {
      console.error('Error removing admin role:', error);
      toast({
        title: "Error",
        description: "Failed to remove admin role",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">Loading users...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 pt-16">
      <div className="max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="h-6 w-6" />
              User Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-gray-600">Manage system users and their admin permissions</p>
              <div className="mt-2 text-sm text-gray-500">
                <strong>Admin:</strong> Full access to all features including user management and content editing
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Username</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((userProfile) => (
                  <TableRow key={userProfile.id}>
                    <TableCell className="font-medium">{userProfile.username}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded text-xs ${
                        userProfile.is_admin ? 'bg-red-100 text-red-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {userProfile.is_admin ? 'Admin' : 'User'}
                      </span>
                    </TableCell>
                    <TableCell>{new Date(userProfile.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {!userProfile.is_admin ? (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleMakeAdmin(userProfile.id)}
                            className="flex items-center gap-1"
                          >
                            <Shield className="h-3 w-3" />
                            Make Admin
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleRemoveAdmin(userProfile.id)}
                            className="flex items-center gap-1"
                            disabled={userProfile.id === user?.id}
                          >
                            <Trash2 className="h-3 w-3" />
                            Remove Admin
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserManagement;
