-- Add summary field to success_stories table
ALTER TABLE public.success_stories 
ADD COLUMN summary TEXT;