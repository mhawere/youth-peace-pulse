
import { supabase } from '@/integrations/supabase/client';

export const checkIsAdmin = async (userId: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', userId)
      .eq('role', 'admin')
      .single();
    
    if (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
    
    return !!data;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
};

export const makeUserAdmin = async (userId: string): Promise<boolean> => {
  try {
    const { error } = await supabase
      .from('user_roles')
      .insert([{ user_id: userId, role: 'admin' }]);
    
    if (error) {
      console.error('Error making user admin:', error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error('Error making user admin:', error);
    return false;
  }
};
