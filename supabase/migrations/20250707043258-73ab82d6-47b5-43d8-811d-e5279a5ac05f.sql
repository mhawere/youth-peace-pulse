
-- Fix storage bucket policies for newsletters and press_releases
-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Authenticated users can upload newsletter files" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view newsletter files" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can upload press release files" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view press release files" ON storage.objects;

-- Create policies for newsletters bucket
CREATE POLICY "Authenticated users can upload newsletter files"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'newsletters');

CREATE POLICY "Anyone can view newsletter files"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'newsletters');

CREATE POLICY "Authenticated users can update newsletter files"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'newsletters');

CREATE POLICY "Authenticated users can delete newsletter files"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'newsletters');

-- Create policies for press_releases bucket
CREATE POLICY "Authenticated users can upload press release files"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'press_releases');

CREATE POLICY "Anyone can view press release files"
  ON storage.objects
  FOR SELECT
  TO public
  USING (bucket_id = 'press_releases');

CREATE POLICY "Authenticated users can update press release files"
  ON storage.objects
  FOR UPDATE
  TO authenticated
  USING (bucket_id = 'press_releases');

CREATE POLICY "Authenticated users can delete press release files"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (bucket_id = 'press_releases');
