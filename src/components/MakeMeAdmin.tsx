
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

const MakeMeAdmin = () => {
  const { user, isAdmin } = useAuth();
  const { toast } = useToast();

  const handleMakeMeAdmin = async () => {
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to become an admin",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('user_roles')
        .insert([{ user_id: user.id, role: 'admin' }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Info",
            description: "You already have an admin role!",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Success",
          description: "Admin role added successfully! Please refresh the page.",
        });
      }
    } catch (error: any) {
      console.error('Error adding admin role:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to add admin role",
        variant: "destructive",
      });
    }
  };

  if (isAdmin) {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-600" />
            Admin Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-green-600">You already have admin privileges!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="h-5 w-5" />
          Become Admin
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">
          Click the button below to give yourself admin privileges for testing purposes.
        </p>
        <Button onClick={handleMakeMeAdmin} className="w-full">
          <Shield className="h-4 w-4 mr-2" />
          Make Me Admin
        </Button>
      </CardContent>
    </Card>
  );
};

export default MakeMeAdmin;
