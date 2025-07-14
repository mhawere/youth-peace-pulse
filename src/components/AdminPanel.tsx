
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';
import { Settings, Users, LogOut, FileText, Mail, ClipboardList, BarChart3, Award } from 'lucide-react';

const AdminPanel = () => {
  const { user, isAdmin, signOut } = useAuth();

  // Only show admin panel if user is logged in and is an admin
  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-background rounded-lg shadow-lg border p-4 space-y-2 max-h-[80vh] overflow-y-auto">
        <div className="text-sm font-medium text-foreground">
          Admin Panel
        </div>
        
        <div className="space-y-1">
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
          
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="w-full justify-start"
          >
            <Link to="/application-results">
              <ClipboardList className="w-4 h-4 mr-2" />
              Applications
            </Link>
          </Button>
          
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="w-full justify-start"
          >
            <Link to="/admin/stats">
              <BarChart3 className="w-4 h-4 mr-2" />
              Statistics
            </Link>
          </Button>
          
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="w-full justify-start"
          >
            <Link to="/news/press-releases">
              <FileText className="w-4 h-4 mr-2" />
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
              <Mail className="w-4 h-4 mr-2" />
              Newsletter
            </Link>
          </Button>
          
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="w-full justify-start"
          >
            <Link to="/news/blog">
              <Settings className="w-4 h-4 mr-2" />
              Blog
            </Link>
          </Button>
          
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="w-full justify-start"
          >
            <Link to="/admin/success-stories">
              <Award className="w-4 h-4 mr-2" />
              Success Stories
            </Link>
          </Button>
          
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
