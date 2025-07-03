
-- Create storage bucket for PDF files
INSERT INTO storage.buckets (id, name, public) 
VALUES ('pdfs', 'pdfs', true);

-- Create press_releases table
CREATE TABLE public.press_releases (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  summary TEXT,
  location TEXT,
  release_date DATE NOT NULL,
  pdf_url TEXT,
  pdf_filename TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  PRIMARY KEY (id)
);

-- Create newsletters table
CREATE TABLE public.newsletters (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  issue_date DATE NOT NULL,
  pdf_url TEXT,
  pdf_filename TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id),
  PRIMARY KEY (id)
);

-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid(),
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true,
  PRIMARY KEY (id)
);

-- Enable Row Level Security
ALTER TABLE public.press_releases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- RLS Policies for press_releases
CREATE POLICY "Anyone can view press releases"
  ON public.press_releases
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admins can insert press releases"
  ON public.press_releases
  FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update press releases"
  ON public.press_releases
  FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete press releases"
  ON public.press_releases
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for newsletters
CREATE POLICY "Anyone can view newsletters"
  ON public.newsletters
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Admins can insert newsletters"
  ON public.newsletters
  FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update newsletters"
  ON public.newsletters
  FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete newsletters"
  ON public.newsletters
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for newsletter_subscribers
CREATE POLICY "Anyone can subscribe to newsletter"
  ON public.newsletter_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Admins can view all subscribers"
  ON public.newsletter_subscribers
  FOR SELECT
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update subscribers"
  ON public.newsletter_subscribers
  FOR UPDATE
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete subscribers"
  ON public.newsletter_subscribers
  FOR DELETE
  USING (public.has_role(auth.uid(), 'admin'));

-- Storage policies for PDF uploads
CREATE POLICY "Anyone can view PDFs"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'pdfs');

CREATE POLICY "Admins can upload PDFs"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'pdfs' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update PDFs"
  ON storage.objects
  FOR UPDATE
  USING (bucket_id = 'pdfs' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete PDFs"
  ON storage.objects
  FOR DELETE
  USING (bucket_id = 'pdfs' AND public.has_role(auth.uid(), 'admin'));

-- Insert some sample data for press releases
INSERT INTO public.press_releases (title, summary, location, release_date) VALUES 
('Y-Peace Launches Global Youth Climate Initiative', 'Y-Peace announces a groundbreaking initiative to empower 10,000 young climate leaders across 50 countries by 2026.', 'Global', '2024-12-20'),
('Partnership Announced with UN Youth Envoy', 'Strategic partnership will amplify youth voices in global policy discussions and sustainable development initiatives.', 'New York, USA', '2024-12-15'),
('Y-Peace Receives International Recognition Award', 'Organization honored for outstanding contribution to youth empowerment and sustainable development goals achievement.', 'Geneva, Switzerland', '2024-12-10'),
('New Educational Platform Reaches 1 Million Students', 'Y-Peace''s innovative online learning platform achieves milestone of reaching one million students worldwide.', 'Global', '2024-11-28');

-- Insert some sample data for newsletters
INSERT INTO public.newsletters (title, description, issue_date) VALUES 
('December 2024 - Year in Review', 'A comprehensive look at our achievements this year, featuring success stories from young leaders worldwide.', '2024-12-01'),
('November 2024 - Climate Action Special', 'Spotlight on youth-led climate initiatives and how young activists are driving environmental change.', '2024-11-01'),
('October 2024 - Partnership Highlights', 'Exploring new partnerships and collaborations that are expanding our global impact.', '2024-10-01');
