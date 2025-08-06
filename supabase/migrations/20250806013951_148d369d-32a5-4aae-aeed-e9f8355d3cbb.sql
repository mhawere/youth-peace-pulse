-- Create visits table to track website visits with location data
CREATE TABLE public.visits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address TEXT,
  country TEXT,
  city TEXT,
  region TEXT,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  user_agent TEXT,
  referrer TEXT,
  page_path TEXT,
  visit_timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  session_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.visits ENABLE ROW LEVEL SECURITY;

-- Create policies for visit data
CREATE POLICY "Admins can view all visits" 
ON public.visits 
FOR SELECT 
USING (is_user_admin());

CREATE POLICY "Anyone can insert visit data" 
ON public.visits 
FOR INSERT 
WITH CHECK (true);

-- Create index for better performance on location queries
CREATE INDEX idx_visits_location ON public.visits(country, city);
CREATE INDEX idx_visits_timestamp ON public.visits(visit_timestamp);
CREATE INDEX idx_visits_page_path ON public.visits(page_path);

-- Create function to get visit statistics by location
CREATE OR REPLACE FUNCTION public.get_visit_stats_by_location()
RETURNS TABLE (
  country TEXT,
  city TEXT,
  region TEXT,
  latitude DECIMAL,
  longitude DECIMAL,
  visit_count BIGINT,
  latest_visit TIMESTAMP WITH TIME ZONE
)
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT 
    v.country,
    v.city,
    v.region,
    v.latitude,
    v.longitude,
    COUNT(*) as visit_count,
    MAX(v.visit_timestamp) as latest_visit
  FROM public.visits v
  WHERE v.latitude IS NOT NULL 
    AND v.longitude IS NOT NULL
    AND v.country IS NOT NULL
    AND v.city IS NOT NULL
  GROUP BY v.country, v.city, v.region, v.latitude, v.longitude
  ORDER BY visit_count DESC;
$$;