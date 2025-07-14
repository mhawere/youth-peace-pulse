import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, User, Award, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useSuccessStories } from '@/hooks/useSuccessStories';

const SuccessStoryDetail = () => {
  const { id } = useParams();
  const { successStories, loading } = useSuccessStories();
  
  const story = successStories.find(s => s.id === id);
  const relatedStories = successStories.filter(s => s.id !== id && s.program_name === story?.program_name).slice(0, 3);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="text-center mt-4 text-muted-foreground">Loading success story...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Success Story Not Found</h1>
          <p className="text-muted-foreground mb-8">The success story you're looking for doesn't exist.</p>
          <Link to="/success-stories">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Success Stories
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Back Navigation */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/success-stories" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Success Stories
          </Link>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              {story.program_name}
            </Badge>
            {story.is_featured && (
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                Featured Story
              </Badge>
            )}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {story.title}
          </h1>
          
          <div className="flex flex-wrap gap-6 text-muted-foreground">
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span className="font-medium">{story.participant_name}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{story.participant_location}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{new Date(story.date_achieved).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
          </div>
        </header>

        {story.featured_image_url && (
          <div className="mb-8">
            <img 
              src={story.featured_image_url} 
              alt={story.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <div className="text-foreground leading-relaxed whitespace-pre-wrap">
            {story.content}
          </div>
        </div>

        {/* Achievement Highlight */}
        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <div className="flex items-center mb-3">
            <Award className="h-6 w-6 text-primary mr-2" />
            <h3 className="text-lg font-semibold text-foreground">Program Achievement</h3>
          </div>
          <p className="text-muted-foreground">
            {story.participant_name} successfully completed the <strong>{story.program_name}</strong> program, 
            demonstrating exceptional commitment to personal growth and community impact.
          </p>
        </div>
      </article>

      {/* Related Success Stories */}
      {relatedStories.length > 0 && (
        <section className="bg-muted/30 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              More Stories from {story.program_name}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStories.map((relatedStory) => (
                <Card key={relatedStory.id} className="hover:shadow-lg transition-shadow">
                  {relatedStory.featured_image_url && (
                    <div className="h-32 overflow-hidden">
                      <img 
                        src={relatedStory.featured_image_url} 
                        alt={relatedStory.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2">
                      {relatedStory.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {relatedStory.participant_name}
                    </p>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                      {relatedStory.content.substring(0, 100)}...
                    </p>
                    <Link to={`/news/success-stories/${relatedStory.id}`}>
                      <Button variant="outline" size="sm" className="w-full group">
                        Read Story
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default SuccessStoryDetail;