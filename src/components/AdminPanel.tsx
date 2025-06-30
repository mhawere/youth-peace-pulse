
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import { Edit, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminPanel = () => {
  const { isAdminLoggedIn, isEditMode, logout, toggleEditMode } = useAdmin();
  const { toast } = useToast();

  if (!isAdminLoggedIn) {
    return null;
  }

  const handleLogout = () => {
    logout();
    toast({
      title: "Success",
      description: "Admin logged out successfully",
    });
  };

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
};

export default AdminPanel;
