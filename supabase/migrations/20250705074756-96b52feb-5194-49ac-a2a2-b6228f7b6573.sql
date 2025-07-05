
-- Drop existing policies and functions
DROP POLICY IF EXISTS "Admins can manage user roles" ON public.user_roles;
DROP POLICY IF EXISTS "Admins can manage press releases" ON public.press_releases;
DROP POLICY IF EXISTS "Content managers can manage press releases" ON public.press_releases;
DROP POLICY IF EXISTS "Admins can manage newsletters" ON public.newsletters;
DROP POLICY IF EXISTS "Content managers can manage newsletters" ON public.newsletters;

DROP FUNCTION IF EXISTS public.get_user_role(uuid);
DROP FUNCTION IF EXISTS public.has_role(app_role);
DROP FUNCTION IF EXISTS public.can_manage_content();

-- Simplify user_roles table to only store admin status
ALTER TABLE public.user_roles DROP COLUMN IF EXISTS role;
ALTER TABLE public.user_roles ADD COLUMN is_admin BOOLEAN NOT NULL DEFAULT FALSE;

-- Drop the enum since we're not using roles anymore
DROP TYPE IF EXISTS public.app_role;

-- Create simple function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_user_admin(user_id UUID DEFAULT auth.uid())
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 FROM public.user_roles 
        WHERE user_roles.user_id = is_user_admin.user_id 
        AND is_admin = TRUE
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER STABLE;

-- Create simple RLS policies
CREATE POLICY "Admins can manage user roles" ON public.user_roles
FOR ALL USING (public.is_user_admin());

CREATE POLICY "Admins can manage press releases" ON public.press_releases
FOR ALL USING (public.is_user_admin());

CREATE POLICY "Admins can manage newsletters" ON public.newsletters
FOR ALL USING (public.is_user_admin());

-- Clean up existing data and make current user admin
DELETE FROM public.user_roles;
INSERT INTO public.user_roles (user_id, is_admin) VALUES ('17ce33d0-d651-4a9a-8290-0321f6009558', TRUE);
