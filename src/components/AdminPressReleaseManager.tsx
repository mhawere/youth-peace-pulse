
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plus, Upload } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface AdminPressReleaseManagerProps {
  onUpdate: () => void;
}

const AdminPressReleaseManager = ({ onUpdate }: AdminPressReleaseManagerProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    location: '',
    release_date: '',
    pdf_file: null as File | null
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let pdf_url = null;
      let pdf_filename = null;

      // Upload PDF if provided
      if (formData.pdf_file) {
        const fileExt = formData.pdf_file.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('press_releases' as any)
          .upload(fileName, formData.pdf_file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('press_releases' as any)
          .getPublicUrl(fileName);

        pdf_url = publicUrl;
        pdf_filename = formData.pdf_file.name;
      }

      // Insert press release
      const { error } = await supabase
        .from('press_releases' as any)
        .insert([{
          title: formData.title,
          summary: formData.summary,
          location: formData.location,
          release_date: formData.release_date,
          pdf_url,
          pdf_filename
        }]);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Press release added successfully",
      });

      setFormData({
        title: '',
        summary: '',
        location: '',
        release_date: '',
        pdf_file: null
      });
      setIsAdding(false);
      onUpdate();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to add press release",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, pdf_file: file });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Manage Press Releases
          <Button onClick={() => setIsAdding(!isAdding)}>
            <Plus className="h-4 w-4 mr-2" />
            {isAdding ? 'Cancel' : 'Add New'}
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isAdding && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="summary">Summary</Label>
              <Textarea
                id="summary"
                value={formData.summary}
                onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="release_date">Release Date</Label>
              <Input
                id="release_date"
                type="date"
                value={formData.release_date}
                onChange={(e) => setFormData({ ...formData, release_date: e.target.value })}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="pdf_file">PDF File (Optional)</Label>
              <Input
                id="pdf_file"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
              />
            </div>
            
            <Button type="submit" disabled={loading}>
              <Upload className="h-4 w-4 mr-2" />
              {loading ? 'Adding...' : 'Add Press Release'}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default AdminPressReleaseManager;
