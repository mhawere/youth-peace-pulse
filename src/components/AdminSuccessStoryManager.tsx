import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit, Trash2, MapPin, Calendar, User, Award, Upload } from 'lucide-react';
import { useSuccessStories } from '@/hooks/useSuccessStories';
import { supabase } from '@/integrations/supabase/client';

interface SuccessStoryFormData {
  title: string;
  summary: string;
  content: string;
  participant_name: string;
  participant_location: string;
  program_name: string;
  featured_image_url: string;
  date_achieved: string;
  is_featured: boolean;
}

const AdminSuccessStoryManager = () => {
  const { successStories, loading, createSuccessStory, updateSuccessStory, deleteSuccessStory } = useSuccessStories();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingStory, setEditingStory] = useState<any>(null);
  const [formData, setFormData] = useState<SuccessStoryFormData>({
    title: '',
    summary: '',
    content: '',
    participant_name: '',
    participant_location: '',
    program_name: '',
    featured_image_url: '',
    date_achieved: new Date().toISOString().split('T')[0],
    is_featured: false,
  });
  const [uploading, setUploading] = useState(false);

  const resetForm = () => {
    setFormData({
      title: '',
      summary: '',
      content: '',
      participant_name: '',
      participant_location: '',
      program_name: '',
      featured_image_url: '',
      date_achieved: new Date().toISOString().split('T')[0],
      is_featured: false,
    });
    setEditingStory(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingStory) {
      await updateSuccessStory(editingStory.id, formData);
    } else {
      await createSuccessStory(formData);
    }
    
    setIsDialogOpen(false);
    resetForm();
  };

  const handleEdit = (story: any) => {
    setEditingStory(story);
    setFormData({
      title: story.title,
      summary: story.summary || '',
      content: story.content,
      participant_name: story.participant_name,
      participant_location: story.participant_location,
      program_name: story.program_name,
      featured_image_url: story.featured_image_url || '',
      date_achieved: story.date_achieved,
      is_featured: story.is_featured,
    });
    setIsDialogOpen(true);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `success-stories/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('yporg')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('yporg')
        .getPublicUrl(filePath);

      setFormData({ ...formData, featured_image_url: publicUrl });
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this success story?')) {
      await deleteSuccessStory(id);
    }
  };

  const programs = [
    'Youth Leadership Program',
    'Peace Building Initiative',
    'Community Development Project',
    'Environmental Action Campaign',
    'Digital Skills Training',
    'Entrepreneurship Program',
    'Other'
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Success Stories Manager</h2>
          <p className="text-muted-foreground">Manage inspiring success stories from Y-Peace participants</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={resetForm}>
              <Plus className="h-4 w-4 mr-2" />
              Add Success Story
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingStory ? 'Edit Success Story' : 'Create New Success Story'}
              </DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Success story title"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="participant_name">Participant Name</Label>
                  <Input
                    id="participant_name"
                    value={formData.participant_name}
                    onChange={(e) => setFormData({...formData, participant_name: e.target.value})}
                    placeholder="Full name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="participant_location">Location</Label>
                  <Input
                    id="participant_location"
                    value={formData.participant_location}
                    onChange={(e) => setFormData({...formData, participant_location: e.target.value})}
                    placeholder="City, Country"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="program_name">Program</Label>
                  <Select
                    value={formData.program_name}
                    onValueChange={(value) => setFormData({...formData, program_name: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select program" />
                    </SelectTrigger>
                    <SelectContent>
                      {programs.map((program) => (
                        <SelectItem key={program} value={program}>
                          {program}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                  id="summary"
                  value={formData.summary}
                  onChange={(e) => setFormData({...formData, summary: e.target.value})}
                  placeholder="Brief summary that will appear on the website (2-3 sentences)"
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date_achieved">Date Achieved</Label>
                  <Input
                    id="date_achieved"
                    type="date"
                    value={formData.date_achieved}
                    onChange={(e) => setFormData({...formData, date_achieved: e.target.value})}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="image_upload">Featured Image</Label>
                  <Input
                    id="image_upload"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploading}
                    placeholder={uploading ? 'Uploading...' : 'Choose image file'}
                  />
                  {formData.featured_image_url && (
                    <div className="mt-2">
                      <img 
                        src={formData.featured_image_url} 
                        alt="Preview"
                        className="w-20 h-20 object-cover rounded-md"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Full Success Story Content</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  placeholder="Tell the complete inspiring story of this participant's journey and achievements..."
                  rows={8}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="is_featured"
                  checked={formData.is_featured}
                  onCheckedChange={(checked) => setFormData({...formData, is_featured: checked})}
                />
                <Label htmlFor="is_featured">Feature this story on homepage</Label>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  {editingStory ? 'Update' : 'Create'} Success Story
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading success stories...</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {successStories.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <Award className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No success stories yet. Create your first one!</p>
              </CardContent>
            </Card>
          ) : (
            successStories.map((story) => (
              <Card key={story.id} className="relative">
                {story.is_featured && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
                
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{story.title}</CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {story.participant_name}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {story.participant_location}
                        </div>
                        <div className="flex items-center">
                          <Award className="h-4 w-4 mr-1" />
                          {story.program_name}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(story.date_achieved).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(story)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(story.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground line-clamp-3">
                    {story.content.substring(0, 200)}...
                  </p>
                  {story.featured_image_url && (
                    <div className="mt-3">
                      <img 
                        src={story.featured_image_url} 
                        alt={story.title}
                        className="w-full h-32 object-cover rounded-md"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default AdminSuccessStoryManager;