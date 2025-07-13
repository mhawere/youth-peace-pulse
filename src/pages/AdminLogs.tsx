import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { ScrollText, Calendar, User, Activity } from 'lucide-react';
import { Navigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { supabase } from '@/integrations/supabase/client';

interface AdminLog {
  id: string;
  admin_user_id: string;
  target_user_id: string | null;
  action_type: string;
  action_details: any;
  ip_address: string;
  user_agent: string;
  created_at: string;
}

const AdminLogs = () => {
  const { user, isAdmin } = useAuth();
  const { toast } = useToast();
  
  const [logs, setLogs] = useState<AdminLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAdmin) {
      fetchLogs();
    }
  }, [isAdmin]);

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 pt-20">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-destructive">Access Denied</CardTitle>
            </CardHeader>
            <CardContent>
              <p>You don't have permission to access this page. Admin access required.</p>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  const fetchLogs = async () => {
    try {
      const { data, error } = await supabase
        .from('admin_action_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) throw error;

      setLogs(data || []);
    } catch (error) {
      console.error('Error fetching admin logs:', error);
      toast({
        title: "Error",
        description: "Failed to load admin logs",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getActionBadgeVariant = (actionType: string) => {
    switch (actionType) {
      case 'change_password':
        return 'secondary';
      case 'suspend_user':
        return 'destructive';
      case 'unsuspend_user':
        return 'default';
      case 'delete_user':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  const getActionDisplayName = (actionType: string) => {
    switch (actionType) {
      case 'change_password':
        return 'Password Changed';
      case 'suspend_user':
        return 'User Suspended';
      case 'unsuspend_user':
        return 'User Unsuspended';
      case 'delete_user':
        return 'User Deleted';
      default:
        return actionType.replace('_', ' ').toUpperCase();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-8 pt-20">
          <div className="text-center">Loading admin logs...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-8 pt-20">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <ScrollText className="h-6 w-6" />
              Admin Action Logs
            </CardTitle>
            <div className="text-sm text-muted-foreground">
              Total logged actions: <span className="font-semibold">{logs.length}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Action</TableHead>
                    <TableHead>Admin User</TableHead>
                    <TableHead>Target User</TableHead>
                    <TableHead>Details</TableHead>
                    <TableHead>IP Address</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {logs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell>
                        <Badge variant={getActionBadgeVariant(log.action_type)}>
                          {getActionDisplayName(log.action_type)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span className="font-mono text-sm">{log.admin_user_id.slice(0, 8)}...</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {log.target_user_id ? (
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="font-mono text-sm">{log.target_user_id.slice(0, 8)}...</span>
                          </div>
                        ) : (
                          <span className="text-muted-foreground">N/A</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs">
                          {log.action_details && typeof log.action_details === 'object' ? (
                            <div className="text-sm">
                              {log.action_details.reason && (
                                <div>
                                  <strong>Reason:</strong> {log.action_details.reason}
                                </div>
                              )}
                              {log.action_details.action && (
                                <div>
                                  <strong>Action:</strong> {log.action_details.action}
                                </div>
                              )}
                            </div>
                          ) : (
                            <span className="text-muted-foreground">No details</span>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="font-mono text-sm">{log.ip_address}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <div className="text-sm">
                            <div>{new Date(log.created_at).toLocaleDateString()}</div>
                            <div className="text-muted-foreground">
                              {new Date(log.created_at).toLocaleTimeString()}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                  {logs.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        No admin actions logged yet.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLogs;