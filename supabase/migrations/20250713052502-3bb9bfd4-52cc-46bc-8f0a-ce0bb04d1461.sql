-- Create a table for managing website statistics
CREATE TABLE public.website_stats (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL,
  subcategory TEXT,
  stat_key TEXT NOT NULL,
  stat_value INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(category, subcategory, stat_key)
);

-- Enable Row Level Security
ALTER TABLE public.website_stats ENABLE ROW LEVEL SECURITY;

-- Create policies for website stats
CREATE POLICY "Anyone can view website stats" 
ON public.website_stats 
FOR SELECT 
USING (true);

CREATE POLICY "Admins can manage website stats" 
ON public.website_stats 
FOR ALL 
USING (is_user_admin()) 
WITH CHECK (is_user_admin());

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_website_stats_updated_at
BEFORE UPDATE ON public.website_stats
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default statistics
INSERT INTO public.website_stats (category, stat_key, stat_value) VALUES
('dashboard', 'un_sdgs', 17),
('dashboard', 'core_pillars', 5),
('dashboard', 'countries', 50),
('dashboard', 'youth_leaders', 1000),
('programs', 'people_participants', 2500),
('programs', 'people_communities', 150),
('programs', 'people_countries', 25),
('planet', 'participants', 1800),
('planet', 'communities', 120),
('planet', 'countries', 20),
('prosperity', 'participants', 2200),
('prosperity', 'communities', 140),
('prosperity', 'countries', 22),
('peace', 'participants', 1600),
('peace', 'communities', 100),
('peace', 'countries', 18),
('partnership', 'participants', 1900),
('partnership', 'communities', 130),
('partnership', 'countries', 21),
('get_involved', 'active_volunteers', 500),
('get_involved', 'country_chapters', 35),
('get_involved', 'partner_organizations', 75),
('get_involved', 'lives_impacted', 10000),
('contact', 'countries', 50),
('contact', 'local_partners', 85),
('contact', 'youth_reached', 15000);