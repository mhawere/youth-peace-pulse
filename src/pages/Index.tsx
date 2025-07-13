
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FivePsSection from '@/components/FivePsSection';
import EditableText from '@/components/EditableText';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Quote, Users, Globe2, Zap, Sparkles, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [missionText, setMissionText] = useState("To mobilize and empower young people worldwide by connecting them to the resources, platforms, and partnerships needed to advance the United Nations Sustainable Development Goals through advocacy, funding, and community-led action.");
  const [visionText, setVisionText] = useState("A peaceful and united world where youth lead the way in solving the planet's most urgent challenges—from climate action to social justice—by turning shared values into global impact.");
  const [ctaTitle, setCtaTitle] = useState("Ready to Make a Difference?");
  const [ctaDescription, setCtaDescription] = useState("Join thousands of young changemakers worldwide. Whether you want to volunteer, start a program, or partner with us—there's a place for you in the Y-Peace movement.");
  
  // New state for additional editable content
  const [missionSectionTitle, setMissionSectionTitle] = useState("Our Mission & Vision");
  const [youthCardTitle, setYouthCardTitle] = useState("Youth-Powered Movement");
  const [youthCardDescription, setYouthCardDescription] = useState("Driven by young leaders who understand tomorrow's challenges today.");
  const [globalCardTitle, setGlobalCardTitle] = useState("Global Impact");
  const [globalCardDescription, setGlobalCardDescription] = useState("Connecting local solutions with global resources for maximum impact.");
  const [actionCardTitle, setActionCardTitle] = useState("Action-Oriented");
  const [actionCardDescription, setActionCardDescription] = useState("We don't just advocate—we activate and create tangible change.");
  const [storiesTitle, setStoriesTitle] = useState("Stories of Impact");
  const [storiesSubtitle, setStoriesSubtitle] = useState("Meet the young changemakers transforming communities around the world");
  const [kenyaTitle, setKenyaTitle] = useState("Climate Action in Kenya");
  const [kenyaQuote, setKenyaQuote] = useState("Through Y-Peace, we planted over 10,000 trees and educated 500+ youth about climate change in our community.");
  const [colombiaTitle, setColombiaTitle] = useState("Peace Building in Colombia");
  const [colombiaQuote, setColombiaQuote] = useState("Our interfaith dialogue program brought together 200 youth from different backgrounds to build lasting peace.");
  const [indiaTitle, setIndiaTitle] = useState("Digital Skills in India");
  const [indiaQuote, setIndiaQuote] = useState("We trained 300+ women in digital skills, helping them start their own online businesses and achieve financial independence.");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-surface">
      <Navigation />
      
      <HeroSection />
      
      <FivePsSection />
      
      {/* Mission Statement Section */}
      <section className="section-padding bg-gradient-to-br from-white via-surface to-white">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <EditableText
                value={missionSectionTitle}
                onChange={setMissionSectionTitle}
                className="text-4xl md:text-5xl font-bold mb-8 text-foreground font-heading"
                as="h2"
              >
                {missionSectionTitle}
              </EditableText>
              <div className="space-y-8">
                <div className="border-l-4 border-primary pl-6 hover-lift transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-3">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold text-primary font-heading">Mission</h3>
                  </div>
                  <EditableText
                    value={missionText}
                    onChange={setMissionText}
                    multiline
                    className="text-muted-foreground leading-relaxed text-lg"
                    as="p"
                  >
                    {missionText}
                  </EditableText>
                </div>
                <div className="border-l-4 border-secondary pl-6 hover-lift transition-all duration-300">
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-secondary" />
                    <h3 className="text-xl font-semibold text-secondary font-heading">Vision</h3>
                  </div>
                  <EditableText
                    value={visionText}
                    onChange={setVisionText}
                    multiline
                    className="text-muted-foreground leading-relaxed text-lg"
                    as="p"
                  >
                    {visionText}
                  </EditableText>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in-right">
              <Card className="card-hover bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 border-primary/20 shadow-brand">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <EditableText
                      value={youthCardTitle}
                      onChange={setYouthCardTitle}
                      className="text-xl font-semibold font-heading"
                      as="h3"
                    >
                      {youthCardTitle}
                    </EditableText>
                  </div>
                  <EditableText
                    value={youthCardDescription}
                    onChange={setYouthCardDescription}
                    className="text-muted-foreground leading-relaxed"
                    as="p"
                  >
                    {youthCardDescription}
                  </EditableText>
                </CardContent>
              </Card>
              
              <Card className="card-hover bg-gradient-to-br from-secondary/5 via-secondary/10 to-secondary/5 border-secondary/20 shadow-glow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-secondary/10">
                      <Globe2 className="h-8 w-8 text-secondary" />
                    </div>
                    <EditableText
                      value={globalCardTitle}
                      onChange={setGlobalCardTitle}
                      className="text-xl font-semibold font-heading"
                      as="h3"
                    >
                      {globalCardTitle}
                    </EditableText>
                  </div>
                  <EditableText
                    value={globalCardDescription}
                    onChange={setGlobalCardDescription}
                    className="text-muted-foreground leading-relaxed"
                    as="p"
                  >
                    {globalCardDescription}
                  </EditableText>
                </CardContent>
              </Card>
              
              <Card className="card-hover bg-gradient-to-br from-accent/5 via-accent/10 to-accent/5 border-accent/20 shadow-glow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 rounded-xl bg-accent/10">
                      <Zap className="h-8 w-8 text-accent" />
                    </div>
                    <EditableText
                      value={actionCardTitle}
                      onChange={setActionCardTitle}
                      className="text-xl font-semibold font-heading"
                      as="h3"
                    >
                      {actionCardTitle}
                    </EditableText>
                  </div>
                  <EditableText
                    value={actionCardDescription}
                    onChange={setActionCardDescription}
                    className="text-muted-foreground leading-relaxed"
                    as="p"
                  >
                    {actionCardDescription}
                  </EditableText>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="section-padding bg-gradient-to-br from-surface via-white to-surface relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 bg-primary rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto container-padding relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Award className="h-6 w-6 text-primary" />
              <span className="text-primary font-medium uppercase tracking-wider text-sm">Impact Stories</span>
            </div>
            <EditableText
              value={storiesTitle}
              onChange={setStoriesTitle}
              className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-heading"
              as="h2"
            >
              {storiesTitle}
            </EditableText>
            <EditableText
              value={storiesSubtitle}
              onChange={setStoriesSubtitle}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              as="p"
            >
              {storiesSubtitle}
            </EditableText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group card-hover shadow-medium overflow-hidden animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <CardContent className="p-0">
                <div className="h-56 bg-gradient-to-br from-primary via-primary-light to-primary-dark relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <EditableText
                      value={kenyaTitle}
                      onChange={setKenyaTitle}
                      className="text-xl font-semibold mb-2 font-heading"
                      as="h3"
                    >
                      {kenyaTitle}
                    </EditableText>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
                      <p className="text-sm opacity-90 font-medium">Sarah, 19</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
                  <EditableText
                    value={kenyaQuote}
                    onChange={setKenyaQuote}
                    multiline
                    className="text-muted-foreground italic mb-6 leading-relaxed text-lg"
                    as="p"
                  >
                    {kenyaQuote}
                  </EditableText>
                  <Button variant="ghost" className="text-primary group-hover:bg-primary/10 hover-lift transition-all duration-200 p-0">
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group card-hover shadow-medium overflow-hidden animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <CardContent className="p-0">
                <div className="h-56 bg-gradient-to-br from-secondary via-secondary-light to-secondary-dark relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <EditableText
                      value={colombiaTitle}
                      onChange={setColombiaTitle}
                      className="text-xl font-semibold mb-2 font-heading"
                      as="h3"
                    >
                      {colombiaTitle}
                    </EditableText>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
                      <p className="text-sm opacity-90 font-medium">Miguel, 22</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <Quote className="h-8 w-8 text-secondary mb-4 opacity-50" />
                  <EditableText
                    value={colombiaQuote}
                    onChange={setColombiaQuote}
                    multiline
                    className="text-muted-foreground italic mb-6 leading-relaxed text-lg"
                    as="p"
                  >
                    {colombiaQuote}
                  </EditableText>
                  <Button variant="ghost" className="text-secondary group-hover:bg-secondary/10 hover-lift transition-all duration-200 p-0">
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group card-hover shadow-medium overflow-hidden animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <CardContent className="p-0">
                <div className="h-56 bg-gradient-to-br from-accent via-accent-light to-accent-dark relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <EditableText
                      value={indiaTitle}
                      onChange={setIndiaTitle}
                      className="text-xl font-semibold mb-2 font-heading"
                      as="h3"
                    >
                      {indiaTitle}
                    </EditableText>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse-slow"></div>
                      <p className="text-sm opacity-90 font-medium">Priya, 20</p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <Quote className="h-8 w-8 text-accent mb-4 opacity-50" />
                  <EditableText
                    value={indiaQuote}
                    onChange={setIndiaQuote}
                    multiline
                    className="text-muted-foreground italic mb-6 leading-relaxed text-lg"
                    as="p"
                  >
                    {indiaQuote}
                  </EditableText>
                  <Button variant="ghost" className="text-accent group-hover:bg-accent/10 hover-lift transition-all duration-200 p-0">
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* View All Stories Button */}
          <div className="text-center mt-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button 
              asChild
              size="lg" 
              variant="outline"
              className="hover-lift border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Link to="/news/blog" className="flex items-center space-x-2">
                <span>View All Stories</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Call to Action */}
      <section className="section-padding gradient-brand relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float blur-xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/20 rounded-full animate-float blur-lg" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/15 rounded-full animate-float blur-lg" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-40 h-40 bg-white/5 rounded-full animate-float blur-2xl" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center container-padding relative animate-fade-in-up">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Sparkles className="h-5 w-5 text-white" />
              <span className="text-white font-medium">Join the Movement</span>
            </div>
          </div>
          
          <EditableText
            value={ctaTitle}
            onChange={setCtaTitle}
            className="text-4xl md:text-6xl font-bold text-white mb-8 font-heading leading-tight"
            as="h2"
          >
            {ctaTitle}
          </EditableText>
          <EditableText
            value={ctaDescription}
            onChange={setCtaDescription}
            multiline
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            as="p"
          >
            {ctaDescription}
          </EditableText>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-4 shadow-large hover-lift btn-glow font-semibold"
            >
              <Link to="/get-involved" className="flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-4 hover-lift font-semibold"
            >
              <Link to="/donate" className="flex items-center space-x-2">
                <span>Support Our Mission</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <p className="text-white/70 text-sm mb-4">Trusted by organizations worldwide</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <span className="text-white font-semibold">UN SDGs</span>
              <span className="text-white">•</span>
              <span className="text-white font-semibold">50+ Countries</span>
              <span className="text-white">•</span>
              <span className="text-white font-semibold">1000+ Youth Leaders</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
