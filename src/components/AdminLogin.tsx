
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAdmin } from '@/contexts/AdminContext';
import { LogIn, Edit, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminLogin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isAdminLoggedIn, isEditMode, login, logout, toggleEditMode } = useAdmin();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      setIsOpen(false);
      setUsername('');
      setPassword('');
      toast({
        title: "Success",
        description: "Admin logged in successfully",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Success",
      description: "Admin logged out successfully",
    });
  };

  if (isAdminLoggedIn) {
    return (
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <Button
          onClick={toggleEditMode}
          variant={isEditMode ? "default" : "outline"}
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          <Edit className="h-4 w-4 mr-2" />
          {isEditMode ? "Exit Edit" : "Edit Mode"}
        </Button>
        <Button onClick={handleLogout} variant="outline">
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm"
          className="fixed top-4 right-4 z-50 bg-white/80 hover:bg-white"
        >
          <LogIn className="h-4 w-4 mr-2" />
          Admin
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Admin Login</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <p className="text-sm text-gray-500 text-center">
            Default: admin / admin
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminLogin;
