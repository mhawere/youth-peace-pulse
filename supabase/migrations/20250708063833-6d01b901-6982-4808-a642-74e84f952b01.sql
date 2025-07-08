
-- Create table for get involved form submissions
CREATE TABLE public.get_involved_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  involvement_types TEXT[] NOT NULL, -- Array to store multiple selections
  about_yourself TEXT,
  how_heard_about TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.get_involved_applications ENABLE ROW LEVEL SECURITY;

-- Create policy for admins to view all applications
CREATE POLICY "Admins can view all applications"
  ON public.get_involved_applications
  FOR SELECT
  TO authenticated
  USING (is_user_admin());

-- Create policy for anyone to submit applications
CREATE POLICY "Anyone can submit applications"
  ON public.get_involved_applications
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create policy for admins to manage applications
CREATE POLICY "Admins can manage applications"
  ON public.get_involved_applications
  FOR ALL
  TO authenticated
  USING (is_user_admin());
