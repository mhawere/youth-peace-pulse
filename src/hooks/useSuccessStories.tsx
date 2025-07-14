import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface SuccessStory {
  id: string;
  title: string;
  summary?: string;
  content: string;
  participant_name: string;
  participant_location: string;
  program_name: string;
  featured_image_url?: string;
  date_achieved: string;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export const useSuccessStories = () => {
  const [successStories, setSuccessStories] = useState<SuccessStory[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchSuccessStories = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('success_stories')
        .select('*')
        .order('date_achieved', { ascending: false });

      if (error) throw error;
      setSuccessStories(data || []);
    } catch (error) {
      console.error('Error fetching success stories:', error);
      toast({
        title: "Error",
        description: "Failed to load success stories",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const createSuccessStory = async (story: Omit<SuccessStory, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('success_stories')
        .insert([story])
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Success",
        description: "Success story created successfully",
      });

      await fetchSuccessStories();
      return { success: true, data };
    } catch (error) {
      console.error('Error creating success story:', error);
      toast({
        title: "Error",
        description: "Failed to create success story",
        variant: "destructive",
      });
      return { success: false, error };
    }
  };

  const updateSuccessStory = async (id: string, updates: Partial<SuccessStory>) => {
    try {
      const { data, error } = await supabase
        .from('success_stories')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      toast({
        title: "Success",
        description: "Success story updated successfully",
      });

      await fetchSuccessStories();
      return { success: true, data };
    } catch (error) {
      console.error('Error updating success story:', error);
      toast({
        title: "Error",
        description: "Failed to update success story",
        variant: "destructive",
      });
      return { success: false, error };
    }
  };

  const deleteSuccessStory = async (id: string) => {
    try {
      const { error } = await supabase
        .from('success_stories')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Success story deleted successfully",
      });

      await fetchSuccessStories();
      return { success: true };
    } catch (error) {
      console.error('Error deleting success story:', error);
      toast({
        title: "Error",
        description: "Failed to delete success story",
        variant: "destructive",
      });
      return { success: false, error };
    }
  };

  useEffect(() => {
    fetchSuccessStories();
  }, []);

  return {
    successStories,
    loading,
    fetchSuccessStories,
    createSuccessStory,
    updateSuccessStory,
    deleteSuccessStory,
  };
};