
-- Create profiles table for user information
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletters table
CREATE TABLE public.newsletters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  issue_date DATE NOT NULL,
  pdf_url TEXT,
  pdf_filename TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create press_releases table
CREATE TABLE public.press_releases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  location TEXT NOT NULL,
  release_date DATE NOT NULL,
  pdf_url TEXT,
  pdf_filename TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, role)
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletters ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.press_releases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for profiles
CREATE POLICY "Users can view all profiles" ON public.profiles FOR SELECT USING (true);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Create RLS policies for newsletters (public read, admin write)
CREATE POLICY "Anyone can view newsletters" ON public.newsletters FOR SELECT USING (true);

-- Create RLS policies for press_releases (public read, admin write)
CREATE POLICY "Anyone can view press releases" ON public.press_releases FOR SELECT USING (true);

-- Create RLS policies for newsletter_subscribers (public insert, admin read)
CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscribers FOR INSERT WITH CHECK (true);

-- Create RLS policies for user_roles
CREATE POLICY "Users can view all roles" ON public.user_roles FOR SELECT USING (true);

-- Create storage buckets for file uploads
INSERT INTO storage.buckets (id, name, public) VALUES ('newsletters', 'newsletters', true);
INSERT INTO storage.buckets (id, name, public) VALUES ('press_releases', 'press_releases', true);

-- Create storage policies
CREATE POLICY "Anyone can view newsletter files" ON storage.objects FOR SELECT USING (bucket_id = 'newsletters');
CREATE POLICY "Anyone can view press release files" ON storage.objects FOR SELECT USING (bucket_id = 'press_releases');

-- Create trigger to automatically create profile when user signs up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, username)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'username');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
