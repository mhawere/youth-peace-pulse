
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LogIn } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect to main auth page since this is deprecated
  useEffect(() => {
    navigate('/auth');
  }, [navigate]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Info",
      description: "Please use the main authentication system",
    });
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold flex items-center justify-center gap-2">
            <LogIn className="h-6 w-6" />
            Redirecting...
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600">
            Please use the main authentication system at /auth
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLoginPage;
