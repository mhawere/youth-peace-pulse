import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EditableText from '@/components/EditableText';
import AdminSuccessStoryManager from '@/components/AdminSuccessStoryManager';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, MapPin, User, Award, Star } from 'lucide-react';
import { useSuccessStories } from '@/hooks/useSuccessStories';
import { useAuth } from '@/hooks/useAuth';

const SuccessStories = () => {
  const { successStories, loading } = useSuccessStories();
  const { isAdmin } = useAuth();

  // State for page content
  const [pageTitle, setPageTitle] = useState("Success Stories");
  const [pageSubtitle, setPageSubtitle] = useState("Inspiring journeys of transformation and achievement from our global Y-Peace community");

  const featuredStories = successStories.filter(story => story.is_featured).slice(0, 3);
  const regularStories = successStories.filter(story => !story.is_featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-secondary text-secondary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <EditableText
              value={pageTitle}
              onChange={setPageTitle}
              className="text-4xl md:text-6xl font-bold mb-6"
              as="h1"
            >
              {pageTitle}
            </EditableText>
            <EditableText
              value={pageSubtitle}
              onChange={setPageSubtitle}
              multiline
              className="text-xl md:text-2xl text-secondary-foreground/80 max-w-3xl mx-auto"
              as="p"
            >
              {pageSubtitle}
            </EditableText>
          </div>
        </div>
      </section>

      {/* Admin Management Section */}
      {isAdmin && (
        <section className="py-8 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdminSuccessStoryManager />
          </div>
        </section>
      )}

      {/* Featured Success Stories */}
      {featuredStories.length > 0 && (
        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-primary mr-3" />
                Featured Success Stories
              </h2>
              <p className="text-lg text-muted-foreground">
                Highlighting exceptional achievements from our community
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredStories.map((story) => (
                <Card key={story.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {story.featured_image_url && (
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={story.featured_image_url} 
                        alt={story.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-primary mb-3">
                      {story.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
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
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {story.summary || story.content.substring(0, 200) + '...'}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(story.date_achieved).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <Link to={`/success-stories/${story.id}`}>
                        <Button variant="outline" className="group">
                          Read Full Story
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Success Stories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">All Success Stories</h2>
            <p className="text-lg text-muted-foreground">
              Discover more inspiring journeys from our global community
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading success stories...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularStories.map((story) => (
                <Card key={story.id} className="hover:shadow-lg transition-shadow">
                  {story.featured_image_url && (
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={story.featured_image_url} 
                        alt={story.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                      <Badge variant="outline">
                        {story.program_name}
                      </Badge>
                      <span className="text-xs">
                        {new Date(story.date_achieved).toLocaleDateString()}
                      </span>
                    </div>
                    <CardTitle className="text-lg hover:text-primary transition-colors">
                      {story.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <User className="h-4 w-4" />
                      <span>{story.participant_name}</span>
                      <span>•</span>
                      <MapPin className="h-4 w-4" />
                      <span>{story.participant_location}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">
                      {story.summary || story.content.substring(0, 120) + '...'}
                    </p>
                    
                    <Link to={`/success-stories/${story.id}`}>
                      <Button variant="outline" size="sm" className="w-full group">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
              
              {successStories.length === 0 && (
                <div className="col-span-full text-center py-16">
                  <Award className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg">No success stories available yet.</p>
                  {isAdmin && (
                    <p className="text-muted-foreground text-sm mt-2">
                      Use the admin panel above to create your first success story!
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;