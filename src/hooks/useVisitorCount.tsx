import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch initial count
    const fetchVisitorCount = async () => {
      try {
        const { count, error } = await supabase
          .from('visits')
          .select('*', { count: 'exact', head: true });

        if (error) {
          console.error('Error fetching visitor count:', error);
        } else {
          setVisitorCount(count || 0);
        }
      } catch (error) {
        console.error('Error fetching visitor count:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisitorCount();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('visitor-counter')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'visits'
        },
        () => {
          // Increment count when new visit is inserted
          setVisitorCount(prev => prev + 1);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { visitorCount, isLoading };
};