-- Create storage policies for yporg bucket to allow authenticated users to upload success story images

-- Policy to allow authenticated users to upload to success-stories folder
CREATE POLICY "Authenticated users can upload success story images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (
  bucket_id = 'yporg' 
  AND auth.role() = 'authenticated'
  AND (storage.foldername(name))[1] = 'success-stories'
);

-- Policy to allow authenticated users to view success story images
CREATE POLICY "Anyone can view success story images" 
ON storage.objects 
FOR SELECT 
USING (
  bucket_id = 'yporg' 
  AND (storage.foldername(name))[1] = 'success-stories'
);

-- Policy to allow authenticated users to update their uploads
CREATE POLICY "Authenticated users can update success story images" 
ON storage.objects 
FOR UPDATE 
USING (
  bucket_id = 'yporg' 
  AND auth.role() = 'authenticated'
  AND (storage.foldername(name))[1] = 'success-stories'
);

-- Policy to allow authenticated users to delete their uploads
CREATE POLICY "Authenticated users can delete success story images" 
ON storage.objects 
FOR DELETE 
USING (
  bucket_id = 'yporg' 
  AND auth.role() = 'authenticated'
  AND (storage.foldername(name))[1] = 'success-stories'
);