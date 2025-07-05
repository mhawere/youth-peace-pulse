
-- Drop the existing problematic policies
DROP POLICY IF EXISTS "Admins can manage user roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can manage press releases" ON public.press_releases;
DROP POLICY IF EXISTS "News editors can manage press releases" ON public.press_releases;
DROP POLICY IF EXISTS "Admins can manage newsletters" ON public.newsletters;
DROP POLICY IF EXISTS "News editors can manage newsletters" ON public.newsletters;

-- Create a security definer function to check user roles without recursion
CREATE OR REPLACE FUNCTION public.get_user_role(user_id UUID)
RETURNS app_role AS $$
DECLARE
    user_role app_role;
BEGIN
    SELECT role INTO user_role
    FROM public.user_roles
    WHERE user_roles.user_id = get_user_role.user_id
    LIMIT 1;
    
    RETURN user_role;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Create a helper function to check if user has a specific role
CREATE OR REPLACE FUNCTION public.has_role(check_role app_role)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN public.get_user_role(auth.uid()) = check_role;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Create a helper function to check if user has admin or news_editor role
CREATE OR REPLACE FUNCTION public.can_manage_content()
RETURNS BOOLEAN AS $$
BEGIN
    RETURN public.get_user_role(auth.uid()) IN ('admin', 'news_editor');
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Recreate the RLS policies using the security definer functions
CREATE POLICY "Admins can manage user roles" ON public.user_roles
FOR ALL USING (public.has_role('admin'));

CREATE POLICY "Admins can manage press releases" ON public.press_releases
FOR ALL USING (public.has_role('admin'));

CREATE POLICY "Content managers can manage press releases" ON public.press_releases
FOR ALL USING (public.can_manage_content());

CREATE POLICY "Admins can manage newsletters" ON public.newsletters
FOR ALL USING (public.has_role('admin'));

CREATE POLICY "Content managers can manage newsletters" ON public.newsletters
FOR ALL USING (public.can_manage_content());

-- Insert an admin role for the current user (replace with your actual user ID)
-- You'll need to get your user ID from the auth logs and run this manually
-- INSERT INTO public.user_roles (user_id, role) VALUES ('17ce33d0-d651-4a9a-8290-0321f6009558', 'admin');
