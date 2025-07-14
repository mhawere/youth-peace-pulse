import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface WebsiteStat {
  id: string;
  category: string;
  subcategory: string | null;
  stat_key: string;
  stat_value: number;
}

export const useStats = (category?: string, statKey?: string) => {
  const [stats, setStats] = useState<WebsiteStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    try {
      setLoading(true);
      let query = supabase.from('website_stats').select('*');
      
      if (category) {
        query = query.eq('category', category);
      }
      
      if (statKey) {
        query = query.eq('stat_key', statKey);
      }

      const { data, error } = await query;

      if (error) throw error;
      setStats(data || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching stats:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch stats');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, [category, statKey]);

  // Optimized real-time subscription - only for dashboard stats
  useEffect(() => {
    // Only subscribe to real-time updates for dashboard stats to reduce overhead
    if (category !== 'dashboard') return;
    
    const channel = supabase
      .channel('website_stats_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'website_stats',
          filter: 'category=eq.dashboard'
        },
        () => {
          fetchStats();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [category, statKey]);

  const getStat = (category: string, statKey: string): number => {
    const stat = stats.find(s => s.category === category && s.stat_key === statKey);
    return stat?.stat_value || 0;
  };

  const getStatsByCategory = (cat: string): WebsiteStat[] => {
    return stats.filter(stat => stat.category === cat);
  };

  return {
    stats,
    loading,
    error,
    getStat,
    getStatsByCategory,
    refetch: fetchStats,
  };
};