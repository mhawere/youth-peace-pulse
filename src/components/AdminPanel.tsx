
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Edit, LogOut, Settings, Users, Shield, Newspaper } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { makeUserAdmin } from '@/utils/adminHelpers';

const AdminPanel = () => {
  const { user, isAdmin, isNewsEditor, signOut } = useAuth();
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

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Success",
      description: "Signed out successfully",
    });
  };

  if (!user) {
    return null;
  }

  // Show "Make Me Admin" button if user has no roles
  if (!isAdmin && !isNewsEditor) {
    return (
      <div className="fixed top-4 right-4 z-50 bg-white shadow-lg border rounded-lg p-4">
        <div className="text-sm text-gray-600 mb-2">
          Need admin access? Click below:
        </div>
        <Button onClick={handleMakeAdmin} className="w-full mb-2">
          <Shield className="h-4 w-4 mr-2" />
          Make Me Admin
        </Button>
        <Button onClick={handleSignOut} variant="outline" className="w-full">
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Role Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white text-center py-2 font-bold">
        {isAdmin ? 'ADMIN MODE' : 'NEWS EDITOR MODE'} - {user.email}
      </div>
      
      {/* Admin/Editor Control Panel */}
      <div className="fixed top-12 right-4 z-50 bg-white shadow-lg border rounded-lg p-4 space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
          <Settings className="h-4 w-4" />
          {isAdmin ? 'Admin Controls' : 'Editor Controls'}
        </div>
        
        {/* Admin-only controls */}
        {isAdmin && (
          <Link to="/user-management">
            <Button 
              variant="outline" 
              className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              <Users className="h-4 w-4 mr-2" />
              User Management
            </Button>
          </Link>
        )}

        {/* News management controls (for both admin and news_editor) */}
        {(isAdmin || isNewsEditor) && (
          <>
            <Link to="/news/press-releases">
              <Button 
                variant="outline" 
                className="w-full border-green-600 text-green-600 hover:bg-green-50"
              >
                <Newspaper className="h-4 w-4 mr-2" />
                Manage Press Releases
              </Button>
            </Link>
            
            <Link to="/news/newsletter">
              <Button 
                variant="outline" 
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Edit className="h-4 w-4 mr-2" />
                Manage Newsletter
              </Button>
            </Link>
          </>
        )}

        <Button 
          onClick={handleSignOut} 
          variant="outline" 
          className="w-full border-red-600 text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </>
  );
};

export default AdminPanel;
