
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAdmin } from '@/contexts/AdminContext';
import { Edit, LogOut, Settings } from 'lucide-react';
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
        
        <Button
          onClick={toggleEditMode}
          variant={isEditMode ? "default" : "outline"}
          className={`w-full ${isEditMode ? "bg-green-600 hover:bg-green-700 text-white" : "border-blue-600 text-blue-600 hover:bg-blue-50"}`}
        >
          <Edit className="h-4 w-4 mr-2" />
          {isEditMode ? "EDITING ON" : "Turn On Editing"}
        </Button>
        
        {isEditMode && (
          <div className="text-xs text-green-600 font-medium text-center">
            ✓ Hover over text to edit it
          </div>
        )}
        
        <Button 
          onClick={handleLogout} 
          variant="outline" 
          className="w-full border-red-600 text-red-600 hover:bg-red-50"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
    </>
  );
};

export default AdminPanel;
