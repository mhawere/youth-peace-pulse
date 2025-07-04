
-- Update user_roles table to use an enum for better type safety
CREATE TYPE public.app_role AS ENUM ('admin', 'news_editor');

-- Update the user_roles table to use the enum
ALTER TABLE public.user_roles ALTER COLUMN role TYPE public.app_role USING role::public.app_role;

-- Add RLS policies for admins to manage content
CREATE POLICY "Admins can manage press releases" ON public.press_releases
FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "News editors can manage press releases" ON public.press_releases
FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND (role = 'admin' OR role = 'news_editor')
  )
);

CREATE POLICY "Admins can manage newsletters" ON public.newsletters
FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND role = 'admin'
  )
);

CREATE POLICY "News editors can manage newsletters" ON public.newsletters
FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_id = auth.uid() AND (role = 'admin' OR role = 'news_editor')
  )
);

-- Add RLS policies for user_roles management
CREATE POLICY "Admins can manage user roles" ON public.user_roles
FOR ALL USING (
  EXISTS (
    SELECT 1 FROM public.user_roles ur 
    WHERE ur.user_id = auth.uid() AND ur.role = 'admin'
  )
);
