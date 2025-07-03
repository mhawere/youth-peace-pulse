
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { UserPlus, Users, Shield, Trash2 } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

interface UserProfile {
  id: string;
  username: string;
  email: string;
  created_at: string;
  roles: string[];
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
      // Fetch profiles with user roles
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select(`
          id,
          username,
          created_at,
          user_roles (role)
        `);

      if (profilesError) throw profilesError;

      // Fetch auth users to get email addresses
      const { data: { users: authUsers }, error: authError } = await supabase.auth.admin.listUsers();
      
      if (authError) throw authError;

      // Combine the data
      const combinedUsers = profilesData?.map((profile: any) => {
        const authUser = authUsers.find(u => u.id === profile.id);
        return {
          id: profile.id,
          username: profile.username || 'Unknown',
          email: authUser?.email || 'Unknown',
          created_at: profile.created_at,
          roles: profile.user_roles?.map((r: any) => r.role) || []
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
        .insert([{ user_id: userId, role: 'admin' }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "User promoted to admin successfully",
      });
      
      fetchUsers();
    } catch (error) {
      console.error('Error making user admin:', error);
      toast({
        title: "Error",
        description: "Failed to promote user to admin",
        variant: "destructive",
      });
    }
  };

  const handleRemoveAdmin = async (userId: string) => {
    try {
      const { error } = await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', userId)
        .eq('role', 'admin');

      if (error) throw error;

      toast({
        title: "Success",
        description: "Admin role removed successfully",
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
              <p className="text-gray-600">Manage system users and their permissions</p>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Username</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Roles</TableHead>
                  <TableHead>Created Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((userProfile) => (
                  <TableRow key={userProfile.id}>
                    <TableCell className="font-medium">{userProfile.username}</TableCell>
                    <TableCell>{userProfile.email}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        {userProfile.roles.map(role => (
                          <span key={role} className={`px-2 py-1 rounded text-xs ${
                            role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {role}
                          </span>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>{new Date(userProfile.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {!userProfile.roles.includes('admin') ? (
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
