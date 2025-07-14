import React, { memo } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import OptimizedHeroSection from '@/components/OptimizedHeroSection';
import FivePsSection from '@/components/FivePsSection';
import OptimizedEditableText from '@/components/OptimizedEditableText';
import AdminPanel from '@/components/AdminPanel';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Quote, Users, Globe2, Zap, Sparkles, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageContent } from '@/hooks/usePageContent';
import { useSuccessStories } from '@/hooks/useSuccessStories';

// Memoized components for better performance
const MissionCard = memo(({ title, description, icon: Icon, colorClass, bgClass }: any) => (
  <Card className={`card-hover ${bgClass} border-opacity-20 shadow-glow`}>
    <CardContent className="p-8">
      <div className="flex items-center space-x-4 mb-4">
        <div className={`p-3 rounded-xl ${bgClass.replace('hover:', '').replace('/5', '/10')}`}>
          <Icon className={`h-8 w-8 ${colorClass}`} />
        </div>
        <h3 className={`text-xl font-semibold font-heading`}>{title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </CardContent>
  </Card>
));

MissionCard.displayName = 'MissionCard';

const StoryCard = memo(({ title, quote, author, colorFrom, colorTo, delay }: any) => (
  <Card className="group card-hover shadow-medium overflow-hidden animate-fade-in-up" style={{animationDelay: delay}}>
    <CardContent className="p-0">
      <div className={`h-56 bg-gradient-to-br ${colorFrom} ${colorTo} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h3 className="text-xl font-semibold mb-2 font-heading">{title}</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
            <p className="text-sm opacity-90 font-medium">{author}</p>
          </div>
        </div>
      </div>
      <div className="p-8">
        <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
        <p className="text-muted-foreground italic mb-6 leading-relaxed text-lg">{quote}</p>
        <Button variant="ghost" className="text-primary group-hover:bg-primary/10 hover-lift transition-all duration-200 p-0">
          Read Full Story <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </CardContent>
  </Card>
));

StoryCard.displayName = 'StoryCard';

const OptimizedIndex = memo(() => {
  const { getContent, updateContent } = usePageContent('index');
  const { successStories } = useSuccessStories();

  const missionCards = [
    {
      title: getContent('youthCardTitle', 'Youth-Powered Movement'),
      description: getContent('youthCardDescription', 'Driven by young leaders who understand tomorrow\'s challenges today.'),
      icon: Users,
      colorClass: 'text-primary',
      bgClass: 'bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20'
    },
    {
      title: getContent('globalCardTitle', 'Global Impact'),
      description: getContent('globalCardDescription', 'Connecting local solutions with global resources for maximum impact.'),
      icon: Globe2,
      colorClass: 'text-secondary',
      bgClass: 'bg-gradient-to-br from-secondary/5 via-secondary/10 to-secondary/5 border-secondary/20'
    },
    {
      title: getContent('actionCardTitle', 'Action-Oriented'),
      description: getContent('actionCardDescription', 'We don\'t just advocate—we activate and create tangible change.'),
      icon: Zap,
      colorClass: 'text-accent',
      bgClass: 'bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 border-accent/20'
    }
  ];

  // Get featured stories from database (max 3)
  const featuredStories = successStories.filter(story => story.is_featured).slice(0, 3);
  
  // Color schemes for story cards
  const colorSchemes = [
    { colorFrom: 'from-primary', colorTo: 'to-primary-dark' },
    { colorFrom: 'from-secondary', colorTo: 'to-secondary-dark' },
    { colorFrom: 'from-accent', colorTo: 'to-accent-dark' },
  ];
  
  // Fallback stories if no featured stories exist
  const fallbackStories = [
    {
      title: getContent('kenyaTitle', 'Climate Action in Kenya'),
      content: getContent('kenyaQuote', 'Through Y-Peace, we planted over 10,000 trees and educated 500+ youth about climate change in our community.'),
      participant_name: 'Sarah, 19',
      id: 'fallback-1'
    },
    {
      title: getContent('colombiaTitle', 'Peace Building in Colombia'),
      content: getContent('colombiaQuote', 'Our interfaith dialogue program brought together 200 youth from different backgrounds to build lasting peace.'),
      participant_name: 'Miguel, 22',
      id: 'fallback-2'
    },
    {
      title: getContent('indiaTitle', 'Digital Skills in India'),
      content: getContent('indiaQuote', 'We trained 300+ women in digital skills, helping them start their own online businesses and achieve financial independence.'),
      participant_name: 'Priya, 20',
      id: 'fallback-3'
    }
  ];
  
  const storiesToDisplay = featuredStories.length > 0 ? featuredStories : fallbackStories;

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-surface">
      <Navigation />
      <AdminPanel />
      
      <OptimizedHeroSection />
      
      <FivePsSection />
      
      {/* Mission Statement Section */}
      <section className="section-padding bg-gradient-to-br from-white via-surface to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <OptimizedEditableText
                value={getContent('missionSectionTitle', 'Our Mission & Vision')}
                onChange={(value) => updateContent('missionSectionTitle', value)}
                className="text-4xl md:text-5xl font-bold mb-8 text-foreground font-heading"
                as="h2"
              >
                {getContent('missionSectionTitle', 'Our Mission & Vision')}
              </OptimizedEditableText>
              
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6 hover-lift transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold text-primary font-heading">Mission</h3>
                  </div>
                  <OptimizedEditableText
                    value={getContent('missionText')}
                    onChange={(value) => updateContent('missionText', value)}
                    multiline
                    className="text-muted-foreground leading-relaxed text-lg"
                    as="p"
                  >
                    {getContent('missionText')}
                  </OptimizedEditableText>
                </div>
                
                <div className="border-l-4 border-secondary pl-6 hover-lift transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                    <h3 className="text-xl font-semibold text-secondary font-heading">Vision</h3>
                  </div>
                  <OptimizedEditableText
                    value={getContent('visionText')}
                    onChange={(value) => updateContent('visionText', value)}
                    multiline
                    className="text-muted-foreground leading-relaxed text-lg"
                    as="p"
                  >
                    {getContent('visionText')}
                  </OptimizedEditableText>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in-right">
              {missionCards.map((card, index) => (
                <MissionCard key={index} {...card} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="section-padding bg-gradient-to-br from-surface via-white to-surface relative overflow-hidden">
        {/* Simplified background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto container-padding relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="h-6 w-6 text-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Impact Stories</span>
            </div>
            <OptimizedEditableText
              value={getContent('storiesTitle', 'Stories of Impact')}
              onChange={(value) => updateContent('storiesTitle', value)}
              className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-heading"
              as="h2"
            >
              {getContent('storiesTitle', 'Stories of Impact')}
            </OptimizedEditableText>
            <OptimizedEditableText
              value={getContent('storiesSubtitle')}
              onChange={(value) => updateContent('storiesSubtitle', value)}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              as="p"
            >
              {getContent('storiesSubtitle')}
            </OptimizedEditableText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storiesToDisplay.map((story, index) => (
              <StoryCard 
                key={story.id} 
                title={story.title}
                quote={story.content}
                author={story.participant_name}
                colorFrom={colorSchemes[index % colorSchemes.length].colorFrom}
                colorTo={colorSchemes[index % colorSchemes.length].colorTo}
                delay={`${0.1 * (index + 1)}s`}
              />
            ))}
          </div>

          {/* View All Stories Button */}
          <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="hover-lift border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Link to="/news/success-stories" className="flex items-center space-x-2">
                <span>View All Stories</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding gradient-brand relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/20 rounded-full animate-float blur-lg" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto text-center text-white relative z-10 container-padding">
          <div className="animate-fade-in-up">
            <OptimizedEditableText
              value={getContent('ctaTitle', 'Ready to Make a Difference?')}
              onChange={(value) => updateContent('ctaTitle', value)}
              className="text-4xl md:text-5xl font-bold mb-6 font-heading"
              as="h2"
            >
              {getContent('ctaTitle', 'Ready to Make a Difference?')}
            </OptimizedEditableText>
            
            <OptimizedEditableText
              value={getContent('ctaDescription')}
              onChange={(value) => updateContent('ctaDescription', value)}
              multiline
              className="text-xl mb-12 leading-relaxed text-gray-100"
              as="p"
            >
              {getContent('ctaDescription')}
            </OptimizedEditableText>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 group hover-lift"
              >
                <Link to="/get-involved">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 group hover-lift"
              >
                <Link to="/donate">
                  Support Our Mission
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
});

OptimizedIndex.displayName = 'OptimizedIndex';

export default OptimizedIndex;