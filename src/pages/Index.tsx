
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FivePsSection from '@/components/FivePsSection';
import EditableText from '@/components/EditableText';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Quote, Users, Globe2, Zap } from 'lucide-react';
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
    <div className="min-h-screen">
      <Navigation />
      
      <HeroSection />
      
      <FivePsSection />
      
      {/* Mission Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <EditableText
                value={missionSectionTitle}
                onChange={setMissionSectionTitle}
                className="text-4xl font-bold mb-6 text-gray-800"
                as="h2"
              >
                {missionSectionTitle}
              </EditableText>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Mission</h3>
                  <EditableText
                    value={missionText}
                    onChange={setMissionText}
                    multiline
                    className="text-gray-600 leading-relaxed"
                    as="p"
                  >
                    {missionText}
                  </EditableText>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-secondary">Vision</h3>
                  <EditableText
                    value={visionText}
                    onChange={setVisionText}
                    multiline
                    className="text-gray-600 leading-relaxed"
                    as="p"
                  >
                    {visionText}
                  </EditableText>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <EditableText
                    value={youthCardTitle}
                    onChange={setYouthCardTitle}
                    className="text-xl font-semibold mb-2"
                    as="h3"
                  >
                    {youthCardTitle}
                  </EditableText>
                  <EditableText
                    value={youthCardDescription}
                    onChange={setYouthCardDescription}
                    className="text-gray-600"
                    as="p"
                  >
                    {youthCardDescription}
                  </EditableText>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                <CardContent className="p-6">
                  <Globe2 className="h-12 w-12 text-secondary mb-4" />
                  <EditableText
                    value={globalCardTitle}
                    onChange={setGlobalCardTitle}
                    className="text-xl font-semibold mb-2"
                    as="h3"
                  >
                    {globalCardTitle}
                  </EditableText>
                  <EditableText
                    value={globalCardDescription}
                    onChange={setGlobalCardDescription}
                    className="text-gray-600"
                    as="p"
                  >
                    {globalCardDescription}
                  </EditableText>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 text-accent mb-4" />
                  <EditableText
                    value={actionCardTitle}
                    onChange={setActionCardTitle}
                    className="text-xl font-semibold mb-2"
                    as="h3"
                  >
                    {actionCardTitle}
                  </EditableText>
                  <EditableText
                    value={actionCardDescription}
                    onChange={setActionCardDescription}
                    className="text-gray-600"
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
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <EditableText
              value={storiesTitle}
              onChange={setStoriesTitle}
              className="text-4xl font-bold mb-4 text-gray-800"
              as="h2"
            >
              {storiesTitle}
            </EditableText>
            <EditableText
              value={storiesSubtitle}
              onChange={setStoriesSubtitle}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              as="p"
            >
              {storiesSubtitle}
            </EditableText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <EditableText
                      value={kenyaTitle}
                      onChange={setKenyaTitle}
                      className="text-lg font-semibold"
                      as="h3"
                    >
                      {kenyaTitle}
                    </EditableText>
                    <p className="text-sm opacity-90">Sarah, 19</p>
                  </div>
                </div>
                <div className="p-6">
                  <Quote className="h-6 w-6 text-primary mb-3" />
                  <EditableText
                    value={kenyaQuote}
                    onChange={setKenyaQuote}
                    multiline
                    className="text-gray-600 italic mb-4"
                    as="p"
                  >
                    {kenyaQuote}
                  </EditableText>
                  <Button variant="ghost" className="text-primary group-hover:bg-primary/10">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-secondary to-secondary/80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <EditableText
                      value={colombiaTitle}
                      onChange={setColombiaTitle}
                      className="text-lg font-semibold"
                      as="h3"
                    >
                      {colombiaTitle}
                    </EditableText>
                    <p className="text-sm opacity-90">Miguel, 22</p>
                  </div>
                </div>
                <div className="p-6">
                  <Quote className="h-6 w-6 text-secondary mb-3" />
                  <EditableText
                    value={colombiaQuote}
                    onChange={setColombiaQuote}
                    multiline
                    className="text-gray-600 italic mb-4"
                    as="p"
                  >
                    {colombiaQuote}
                  </EditableText>
                  <Button variant="ghost" className="text-secondary group-hover:bg-secondary/10">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-accent to-accent/80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <EditableText
                      value={indiaTitle}
                      onChange={setIndiaTitle}
                      className="text-lg font-semibold"
                      as="h3"
                    >
                      {indiaTitle}
                    </EditableText>
                    <p className="text-sm opacity-90">Priya, 20</p>
                  </div>
                </div>
                <div className="p-6">
                  <Quote className="h-6 w-6 text-accent mb-3" />
                  <EditableText
                    value={indiaQuote}
                    onChange={setIndiaQuote}
                    multiline
                    className="text-gray-600 italic mb-4"
                    as="p"
                  >
                    {indiaQuote}
                  </EditableText>
                  <Button variant="ghost" className="text-accent group-hover:bg-accent/10">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-brand">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <EditableText
            value={ctaTitle}
            onChange={setCtaTitle}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            as="h2"
          >
            {ctaTitle}
          </EditableText>
          <EditableText
            value={ctaDescription}
            onChange={setCtaDescription}
            multiline
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
            as="p"
          >
            {ctaDescription}
          </EditableText>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
            >
              <Link to="/get-involved">
                Start Your Journey
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              <Link to="/donate">
                Support Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
