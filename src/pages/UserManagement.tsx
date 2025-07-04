
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { UserPlus, Users, Shield, Trash2, Edit } from 'lucide-react';
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
        const authUser = authUsers?.find((u: any) => u.id === profile.id);
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

  const handleAssignRole = async (userId: string, role: 'admin' | 'news_editor') => {
    try {
      const { error } = await supabase
        .from('user_roles')
        .insert([{ user_id: userId, role: role }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: `User assigned ${role} role successfully`,
      });
      
      fetchUsers();
    } catch (error) {
      console.error('Error assigning role:', error);
      toast({
        title: "Error",
        description: `Failed to assign ${role} role`,
        variant: "destructive",
      });
    }
  };

  const handleRemoveRole = async (userId: string, role: 'admin' | 'news_editor') => {
    try {
      const { error } = await supabase
        .from('user_roles')
        .delete()
        .eq('user_id', userId)
        .eq('role', role);

      if (error) throw error;

      toast({
        title: "Success",
        description: `${role} role removed successfully`,
      });
      
      fetchUsers();
    } catch (error) {
      console.error('Error removing role:', error);
      toast({
        title: "Error",
        description: `Failed to remove ${role} role`,
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
              <div className="mt-2 text-sm text-gray-500">
                <strong>Admin:</strong> Full access to all features including user management<br/>
                <strong>News Editor:</strong> Can manage press releases and newsletters only
              </div>
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
                      <div className="flex gap-1 flex-wrap">
                        {userProfile.roles.length === 0 ? (
                          <span className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-800">
                            No roles
                          </span>
                        ) : (
                          userProfile.roles.map(role => (
                            <span key={role} className={`px-2 py-1 rounded text-xs ${
                              role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                            }`}>
                              {role}
                            </span>
                          ))
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{new Date(userProfile.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-2 flex-wrap">
                        {!userProfile.roles.includes('admin') && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleAssignRole(userProfile.id, 'admin')}
                            className="flex items-center gap-1"
                          >
                            <Shield className="h-3 w-3" />
                            Make Admin
                          </Button>
                        )}
                        
                        {!userProfile.roles.includes('news_editor') && !userProfile.roles.includes('admin') && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleAssignRole(userProfile.id, 'news_editor')}
                            className="flex items-center gap-1"
                          >
                            <Edit className="h-3 w-3" />
                            Make Editor
                          </Button>
                        )}
                        
                        {userProfile.roles.map(role => (
                          <Button
                            key={role}
                            size="sm"
                            variant="destructive"
                            onClick={() => handleRemoveRole(userProfile.id, role as 'admin' | 'news_editor')}
                            className="flex items-center gap-1"
                            disabled={userProfile.id === user?.id && role === 'admin'}
                          >
                            <Trash2 className="h-3 w-3" />
                            Remove {role}
                          </Button>
                        ))}
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
