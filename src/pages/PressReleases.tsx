
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EditableText from '@/components/EditableText';
import AdminPressReleaseManager from '@/components/AdminPressReleaseManager';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Download, FileText } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';

interface PressRelease {
  id: string;
  title: string;
  summary: string;
  location: string;
  release_date: string;
  pdf_url: string | null;
  pdf_filename: string | null;
}

const PressReleases = () => {
  const [pressReleases, setPressReleases] = useState<PressRelease[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { isAdmin } = useAuth();

  // State for page content
  const [pageTitle, setPageTitle] = useState("Press Releases");
  const [pageSubtitle, setPageSubtitle] = useState("Latest news and announcements from Y-Peace");

  useEffect(() => {
    fetchPressReleases();
  }, []);

  const fetchPressReleases = async () => {
    try {
      const { data, error } = await supabase
        .from('press_releases')
        .select('*')
        .order('release_date', { ascending: false });

      if (error) {
        throw error;
      }

      setPressReleases(data || []);
    } catch (error) {
      console.error('Error fetching press releases:', error);
      toast({
        title: "Error",
        description: "Failed to load press releases",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (pressRelease: PressRelease) => {
    if (pressRelease.pdf_url) {
      window.open(pressRelease.pdf_url, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <EditableText
              value={pageTitle}
              onChange={setPageTitle}
              className="text-4xl md:text-6xl font-bold mb-6"
              as="h1"
              editable={isAdmin}
            >
              {pageTitle}
            </EditableText>
            <EditableText
              value={pageSubtitle}
              onChange={setPageSubtitle}
              className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto"
              as="p"
              editable={isAdmin}
            >
              {pageSubtitle}
            </EditableText>
          </div>
        </div>
      </section>

      {/* Admin Management Section */}
      {isAdmin && (
        <section className="py-8 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdminPressReleaseManager onUpdate={fetchPressReleases} />
          </div>
        </section>
      )}

      {/* Press Releases */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center">Loading press releases...</div>
          ) : (
            <div className="space-y-8">
              {pressReleases.map((release) => (
                <Card key={release.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-2xl text-primary mb-4">
                          {release.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {new Date(release.release_date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {release.location}
                          </div>
                        </div>
                      </div>
                      {release.pdf_url && (
                        <Button 
                          variant="outline"
                          onClick={() => handleDownload(release)}
                          className="ml-4"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed">
                      {release.summary}
                    </p>
                    {!release.pdf_url && (
                      <div className="flex items-center text-gray-400 mt-4">
                        <FileText className="h-4 w-4 mr-2" />
                        <span className="text-sm">PDF version coming soon</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PressReleases;
