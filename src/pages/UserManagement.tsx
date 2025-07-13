
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { Users, Shield, Trash2, Lock, Ban, Play, ScrollText } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';

interface UserProfile {
  id: string;
  email: string;
  created_at: string;
  is_admin: boolean;
  is_suspended: boolean;
}

const UserManagement = () => {
  const { user, isAdmin } = useAuth();
  const { toast } = useToast();
  
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);
  const [newPassword, setNewPassword] = useState('');
  const [suspensionReason, setSuspensionReason] = useState('');
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

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
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 pt-20">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-destructive">Access Denied</CardTitle>
            </CardHeader>
            <CardContent>
              <p>You don't have permission to access this page. Admin access required.</p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }


  const fetchUsers = async () => {
    try {
      // Get all profiles first
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('id, username, created_at');

      if (profilesError) throw profilesError;

      // Get user roles
      const { data: rolesData, error: rolesError } = await supabase
        .from('user_roles')
        .select('user_id, is_admin, is_suspended');

      if (rolesError) throw rolesError;

      // For each profile, we'll use the profile ID to get email from auth metadata
      // Since we can't access auth.users directly, we'll show the user ID as email fallback
      const combinedUsers = profilesData?.map((profile: any) => {
        const userRole = rolesData?.find((role: any) => role.user_id === profile.id);
        
        return {
          id: profile.id,
          email: profile.id, // Using ID as fallback since we can't access auth.users
          created_at: profile.created_at,
          is_admin: userRole?.is_admin || false,
          is_suspended: userRole?.is_suspended || false
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

  const callAdminAction = async (action: string, targetUserId: string, additionalData?: any) => {
    try {
      const { data, error } = await supabase.functions.invoke('admin-user-actions', {
        body: {
          action,
          targetUserId,
          ...additionalData
        }
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: data.message,
      });
      
      fetchUsers();
      return { success: true };
    } catch (error: any) {
      console.error(`Error performing ${action}:`, error);
      toast({
        title: "Error",
        description: error.message || `Failed to ${action.replace('_', ' ')}`,
        variant: "destructive",
      });
      return { success: false };
    }
  };

  const handleChangePassword = async () => {
    if (!newPassword || !selectedUserId) return;
    
    const result = await callAdminAction('change_password', selectedUserId, { 
      newPassword 
    });
    
    if (result.success) {
      setNewPassword('');
      setSelectedUserId(null);
    }
  };

  const handleSuspendUser = async (userId: string) => {
    const result = await callAdminAction('suspend_user', userId, { 
      suspensionReason 
    });
    
    if (result.success) {
      setSuspensionReason('');
    }
  };

  const handleUnsuspendUser = async (userId: string) => {
    await callAdminAction('unsuspend_user', userId);
  };

  const handleDeleteUser = async (userId: string) => {
    await callAdminAction('delete_user', userId);
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
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 pt-20">
          <div className="text-center">Loading users...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-20">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Users className="h-6 w-6" />
              User Management
            </CardTitle>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground">Manage system users and their admin permissions</p>
                <div className="mt-2 text-sm text-muted-foreground">
                  <strong>Admin:</strong> Full access to all features including user management and content editing
                </div>
              </div>
              <Button
                onClick={() => window.location.href = '/admin/logs'}
                variant="outline"
                className="flex items-center gap-2"
              >
                <ScrollText className="h-4 w-4" />
                View Admin Logs
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User ID</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((userProfile) => (
                  <TableRow key={userProfile.id}>
                    <TableCell className="font-medium font-mono text-sm">{userProfile.email}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <span className={`px-2 py-1 rounded text-xs ${
                          userProfile.is_admin ? 'bg-destructive/10 text-destructive' : 'bg-muted text-muted-foreground'
                        }`}>
                          {userProfile.is_admin ? 'Admin' : 'User'}
                        </span>
                        {userProfile.is_suspended && (
                          <span className="px-2 py-1 rounded text-xs bg-red-100 text-red-800">
                            Suspended
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>{new Date(userProfile.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <div className="flex gap-2 flex-wrap">
                        {/* Change Password Dialog */}
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setSelectedUserId(userProfile.id)}
                              className="flex items-center gap-1"
                            >
                              <Lock className="h-3 w-3" />
                              Change Password
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Change User Password</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="newPassword">New Password</Label>
                                <Input
                                  id="newPassword"
                                  type="password"
                                  value={newPassword}
                                  onChange={(e) => setNewPassword(e.target.value)}
                                  placeholder="Enter new password"
                                />
                              </div>
                              <div className="flex justify-end gap-2">
                                <Button
                                  onClick={handleChangePassword}
                                  disabled={!newPassword}
                                >
                                  Change Password
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>

                        {/* Suspend/Unsuspend User */}
                        {!userProfile.is_suspended ? (
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                size="sm"
                                variant="outline"
                                className="flex items-center gap-1"
                                disabled={userProfile.id === user?.id}
                              >
                                <Ban className="h-3 w-3" />
                                Suspend
                              </Button>
                            </DialogTrigger>
                            <DialogContent>
                              <DialogHeader>
                                <DialogTitle>Suspend User</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor="suspensionReason">Reason for Suspension</Label>
                                  <Textarea
                                    id="suspensionReason"
                                    value={suspensionReason}
                                    onChange={(e) => setSuspensionReason(e.target.value)}
                                    placeholder="Enter reason for suspension"
                                  />
                                </div>
                                <div className="flex justify-end gap-2">
                                  <Button
                                    onClick={() => handleSuspendUser(userProfile.id)}
                                    variant="destructive"
                                  >
                                    Suspend User
                                  </Button>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        ) : (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleUnsuspendUser(userProfile.id)}
                            className="flex items-center gap-1"
                            disabled={userProfile.id === user?.id}
                          >
                            <Play className="h-3 w-3" />
                            Unsuspend
                          </Button>
                        )}

                        {/* Admin Role Toggle */}
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

                        {/* Delete User */}
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button
                              size="sm"
                              variant="destructive"
                              className="flex items-center gap-1"
                              disabled={userProfile.id === user?.id}
                            >
                              <Trash2 className="h-3 w-3" />
                              Delete
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the user account and remove all associated data.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => handleDeleteUser(userProfile.id)}
                                className="bg-destructive text-destructive-foreground"
                              >
                                Delete User
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};
  
  export default UserManagement;
