import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save, BarChart3 } from 'lucide-react';

interface WebsiteStat {
  id: string;
  category: string;
  subcategory: string | null;
  stat_key: string;
  stat_value: number;
}

const AdminStatsManager = () => {
  const [stats, setStats] = useState<WebsiteStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const fetchStats = async () => {
    try {
      const { data, error } = await supabase
        .from('website_stats')
        .select('*')
        .order('category', { ascending: true })
        .order('stat_key', { ascending: true });

      if (error) throw error;
      setStats(data || []);
    } catch (error) {
      console.error('Error fetching stats:', error);
      toast({
        title: "Error",
        description: "Failed to fetch statistics",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const updateStat = async (id: string, newValue: number) => {
    setSaving(true);
    try {
      const { error } = await supabase
        .from('website_stats')
        .update({ stat_value: newValue })
        .eq('id', id);

      if (error) throw error;

      setStats(prev => prev.map(stat => 
        stat.id === id ? { ...stat, stat_value: newValue } : stat
      ));

      toast({
        title: "Success",
        description: "Statistic updated successfully",
      });
    } catch (error) {
      console.error('Error updating stat:', error);
      toast({
        title: "Error",
        description: "Failed to update statistic",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const getStatsByCategory = (category: string) => {
    return stats.filter(stat => stat.category === category);
  };

  const formatStatKey = (key: string) => {
    return key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const StatCard = ({ stat }: { stat: WebsiteStat }) => (
    <Card className="p-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-muted-foreground">
          {formatStatKey(stat.stat_key)}
        </label>
        <div className="flex gap-2">
          <Input
            type="number"
            value={stat.stat_value}
            onChange={(e) => {
              const newValue = parseInt(e.target.value) || 0;
              setStats(prev => prev.map(s => 
                s.id === stat.id ? { ...s, stat_value: newValue } : s
              ));
            }}
            className="flex-1"
          />
          <Button
            size="sm"
            onClick={() => updateStat(stat.id, stat.stat_value)}
            disabled={saving}
          >
            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </Card>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <BarChart3 className="h-6 w-6" />
        <h1 className="text-3xl font-bold">Statistics Manager</h1>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="pillars">Five Ps</TabsTrigger>
          <TabsTrigger value="get_involved">Get Involved</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard Statistics</CardTitle>
              <CardDescription>Manage the main statistics displayed on the homepage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {getStatsByCategory('dashboard').map(stat => (
                  <StatCard key={stat.id} stat={stat} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="programs" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Programs Statistics</CardTitle>
              <CardDescription>Manage statistics for the People program</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {getStatsByCategory('programs').map(stat => (
                  <StatCard key={stat.id} stat={stat} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pillars" className="space-y-4">
          <div className="space-y-6">
            {['planet', 'prosperity', 'peace', 'partnership'].map(pillar => (
              <Card key={pillar}>
                <CardHeader>
                  <CardTitle className="capitalize">{pillar} Statistics</CardTitle>
                  <CardDescription>Manage statistics for the {pillar} pillar</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    {getStatsByCategory(pillar).map(stat => (
                      <StatCard key={stat.id} stat={stat} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="get_involved" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Get Involved Statistics</CardTitle>
              <CardDescription>Manage statistics for the Get Involved page</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {getStatsByCategory('get_involved').map(stat => (
                  <StatCard key={stat.id} stat={stat} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Contact Page Statistics</CardTitle>
              <CardDescription>Manage statistics for the Contact page</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {getStatsByCategory('contact').map(stat => (
                  <StatCard key={stat.id} stat={stat} />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminStatsManager;