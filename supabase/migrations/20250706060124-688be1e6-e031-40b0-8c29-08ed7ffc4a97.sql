
-- Fix RLS policies for newsletters and press_releases to work with the current auth setup
-- Since any logged-in user is treated as admin, we'll update the policies

-- Drop existing policies for newsletters
DROP POLICY IF EXISTS "Admins can manage newsletters" ON public.newsletters;
DROP POLICY IF EXISTS "Anyone can view newsletters" ON public.newsletters;

-- Create new policies for newsletters
CREATE POLICY "Authenticated users can manage newsletters"
  ON public.newsletters
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can view newsletters"
  ON public.newsletters
  FOR SELECT
  TO public
  USING (true);

-- Drop existing policies for press_releases
DROP POLICY IF EXISTS "Admins can manage press releases" ON public.press_releases;
DROP POLICY IF EXISTS "Anyone can view press releases" ON public.press_releases;

-- Create new policies for press_releases  
CREATE POLICY "Authenticated users can manage press releases"
  ON public.press_releases
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Anyone can view press releases"
  ON public.press_releases
  FOR SELECT
  TO public
  USING (true);

-- Create blogs table for the blog manager
CREATE TABLE public.blogs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  read_time TEXT NOT NULL DEFAULT '5 min read',
  published_date DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for blogs
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Create policies for blogs
CREATE POLICY "Anyone can view published blogs"
  ON public.blogs
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage blogs"
  ON public.blogs
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);
