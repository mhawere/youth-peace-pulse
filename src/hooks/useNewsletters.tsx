
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface Newsletter {
  id: string;
  title: string;
  description: string;
  issue_date: string;
  pdf_url: string | null;
  pdf_filename: string | null;
  created_at: string;
}

export const useNewsletters = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchNewsletters = async () => {
    try {
      const { data, error } = await supabase
        .from('newsletters' as any)
        .select('*')
        .order('issue_date', { ascending: false });

      if (error) {
        throw error;
      }

      setNewsletters(data || []);
    } catch (error) {
      console.error('Error fetching newsletters:', error);
      toast({
        title: "Error",
        description: "Failed to load newsletters",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const subscribeToNewsletter = async (email: string) => {
    try {
      const { error } = await supabase
        .from('newsletter_subscribers' as any)
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          throw new Error('Email is already subscribed');
        }
        throw error;
      }

      toast({
        title: "Success",
        description: "Successfully subscribed to newsletter!",
      });
      return { success: true };
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe",
        variant: "destructive",
      });
      return { success: false, error: error.message };
    }
  };

  useEffect(() => {
    fetchNewsletters();
  }, []);

  return {
    newsletters,
    loading,
    subscribeToNewsletter,
    refetch: fetchNewsletters
  };
};
