
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Edit, LogOut, Settings, Users, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { makeUserAdmin } from '@/utils/adminHelpers';

const AdminPanel = () => {
  const { user, isAdmin } = useAuth();
  const { toast } = useToast();

  const handleMakeAdmin = async () => {
    if (!user) return;
    
    const success = await makeUserAdmin(user.id);
    if (success) {
      toast({
        title: "Success",
        description: "You are now an admin! Please refresh the page.",
      });
      // Refresh the page to update admin status
      window.location.reload();
    } else {
      toast({
        title: "Error",
        description: "Failed to make you an admin",
        variant: "destructive",
      });
    }
  };

  if (!user) {
    return null;
  }

  if (!isAdmin) {
    return (
      <div className="fixed top-4 right-4 z-50 bg-white shadow-lg border rounded-lg p-4">
        <div className="text-sm text-gray-600 mb-2">
          Not an admin? Click below to make yourself admin:
        </div>
        <Button onClick={handleMakeAdmin} className="w-full">
          <Shield className="h-4 w-4 mr-2" />
          Make Me Admin
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Admin Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-red-600 text-white text-center py-2 font-bold">
        ADMIN MODE ACTIVE - You are logged in as Administrator
      </div>
      
      {/* Admin Control Panel */}
      <div className="fixed top-12 right-4 z-50 bg-white shadow-lg border rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <Settings className="h-4 w-4" />
          Admin Controls
        </div>
        
        <Link to="/user-management">
          <Button 
            variant="outline" 
            className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            <Users className="h-4 w-4 mr-2" />
            User Management
          </Button>
        </Link>
      </div>
    </>
  );
};

export default AdminPanel;
