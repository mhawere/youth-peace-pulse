-- Fix function security issues by setting search_path
ALTER FUNCTION public.update_updated_at_column() SET search_path = public;
ALTER FUNCTION public.is_user_admin(uuid) SET search_path = public;  
ALTER FUNCTION public.handle_new_user() SET search_path = public;
ALTER FUNCTION public.get_visit_stats_by_location() SET search_path = public;