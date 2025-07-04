
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import { Settings, Users, LogOut } from 'lucide-react';

const AdminPanel = () => {
  const { user, isAdmin, isNewsEditor, signOut } = useAuth();

  // Don't show admin panel if user is not logged in or doesn't have any admin/editor roles
  if (!user || (!isAdmin && !isNewsEditor)) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg border p-4 space-y-2">
        <div className="text-sm font-medium text-gray-700">
          Admin Panel
        </div>
        
        <div className="space-y-1">
          {isAdmin && (
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="w-full justify-start"
            >
              <Link to="/user-management">
                <Users className="w-4 h-4 mr-2" />
                Users
              </Link>
            </Button>
          )}
          
          {(isAdmin || isNewsEditor) && (
            <>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <Link to="/news/press-releases">
                  <Settings className="w-4 h-4 mr-2" />
                  Press Releases
                </Link>
              </Button>
              
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="w-full justify-start"
              >
                <Link to="/news/newsletter">
                  <Settings className="w-4 h-4 mr-2" />
                  Newsletter
                </Link>
              </Button>
            </>
          )}
          
          <Button
            onClick={signOut}
            variant="ghost"
            size="sm"
            className="w-full justify-start text-red-600 hover:text-red-700"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
