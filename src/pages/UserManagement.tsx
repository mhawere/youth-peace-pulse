
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useAdmin } from '@/contexts/AdminContext';
import { useToast } from '@/hooks/use-toast';
import { UserPlus, Key, UserX, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  createdAt: string;
}

const UserManagement = () => {
  const { isAdminLoggedIn } = useAdmin();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      username: 'admin',
      email: 'admin@example.com',
      role: 'Administrator',
      createdAt: '2024-01-01'
    },
    {
      id: '2',
      username: 'user1',
      email: 'user1@example.com',
      role: 'User',
      createdAt: '2024-01-15'
    }
  ]);

  const [isAddUserOpen, setIsAddUserOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  
  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    role: 'User'
  });
  
  const [passwordChange, setPasswordChange] = useState({
    newPassword: '',
    confirmPassword: ''
  });

  React.useEffect(() => {
    if (!isAdminLoggedIn) {
      navigate('/admin');
    }
  }, [isAdminLoggedIn, navigate]);

  if (!isAdminLoggedIn) {
    return null;
  }

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (newUser.username && newUser.email && newUser.password) {
      const user: User = {
        id: Date.now().toString(),
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        createdAt: new Date().toISOString().split('T')[0]
      };
      setUsers([...users, user]);
      setNewUser({ username: '', email: '', password: '', role: 'User' });
      setIsAddUserOpen(false);
      toast({
        title: "Success",
        description: "User added successfully",
      });
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordChange.newPassword !== passwordChange.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }
    if (passwordChange.newPassword.length < 6) {
      toast({
        title: "Error",
        description: "Password must be at least 6 characters long",
        variant: "destructive",
      });
      return;
    }
    setPasswordChange({ newPassword: '', confirmPassword: '' });
    setIsChangePasswordOpen(false);
    setSelectedUserId(null);
    toast({
      title: "Success",
      description: "Password changed successfully",
    });
  };

  const handleDeleteUser = (userId: string) => {
    if (userId === '1') {
      toast({
        title: "Error",
        description: "Cannot delete the main admin user",
        variant: "destructive",
      });
      return;
    }
    setUsers(users.filter(user => user.id !== userId));
    toast({
      title: "Success",
      description: "User deleted successfully",
    });
  };

  const openChangePassword = (userId: string) => {
    setSelectedUserId(userId);
    setIsChangePasswordOpen(true);
  };

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
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">Manage system users and their permissions</p>
              <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2">
                    <UserPlus className="h-4 w-4" />
                    Add User
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New User</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAddUser} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        value={newUser.username}
                        onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                        placeholder="Enter username"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={newUser.password}
                        onChange={(e) => setNewUser({...newUser, password: e.target.value})}
                        placeholder="Enter password"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <select
                        id="role"
                        value={newUser.role}
                        onChange={(e) => setNewUser({...newUser, role: e.target.value})}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="User">User</option>
                        <option value="Administrator">Administrator</option>
                      </select>
                    </div>
                    <Button type="submit" className="w-full">Add User</Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Username</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Created Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.username}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.createdAt}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => openChangePassword(user.id)}
                          className="flex items-center gap-1"
                        >
                          <Key className="h-3 w-3" />
                          Change Password
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDeleteUser(user.id)}
                          disabled={user.id === '1'}
                          className="flex items-center gap-1"
                        >
                          <UserX className="h-3 w-3" />
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Dialog open={isChangePasswordOpen} onOpenChange={setIsChangePasswordOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Change Password</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleChangePassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                  id="newPassword"
                  type="password"
                  value={passwordChange.newPassword}
                  onChange={(e) => setPasswordChange({...passwordChange, newPassword: e.target.value})}
                  placeholder="Enter new password"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={passwordChange.confirmPassword}
                  onChange={(e) => setPasswordChange({...passwordChange, confirmPassword: e.target.value})}
                  placeholder="Confirm new password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">Change Password</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default UserManagement;
