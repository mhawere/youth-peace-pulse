
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FivePsSection from '@/components/FivePsSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Quote, Users, Globe2, Zap } from 'lucide-react';

const Index = () => {
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
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To mobilize and empower young people worldwide by connecting them to the resources, platforms, 
                    and partnerships needed to advance the United Nations Sustainable Development Goals through 
                    advocacy, funding, and community-led action.
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-secondary">Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A peaceful and united world where youth lead the way in solving the planet's most urgent challenges—from 
                    climate action to social justice—by turning shared values into global impact.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Youth-Powered Movement</h3>
                  <p className="text-gray-600">Driven by young leaders who understand tomorrow's challenges today.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
                <CardContent className="p-6">
                  <Globe2 className="h-12 w-12 text-secondary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                  <p className="text-gray-600">Connecting local solutions with global resources for maximum impact.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <Zap className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Action-Oriented</h3>
                  <p className="text-gray-600">We don't just advocate—we activate and create tangible change.</p>
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
            <h2 className="text-4xl font-bold mb-4 text-gray-800">
              Stories of Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the young changemakers transforming communities around the world
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="h-48 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold">Climate Action in Kenya</h3>
                    <p className="text-sm opacity-90">Sarah, 19</p>
                  </div>
                </div>
                <div className="p-6">
                  <Quote className="h-6 w-6 text-primary mb-3" />
                  <p className="text-gray-600 italic mb-4">
                    "Through Y-Peace, we planted over 10,000 trees and educated 500+ youth about climate change in our community."
                  </p>
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
                    <h3 className="text-lg font-semibold">Peace Building in Colombia</h3>
                    <p className="text-sm opacity-90">Miguel, 22</p>
                  </div>
                </div>
                <div className="p-6">
                  <Quote className="h-6 w-6 text-secondary mb-3" />
                  <p className="text-gray-600 italic mb-4">
                    "Our interfaith dialogue program brought together 200 youth from different backgrounds to build lasting peace."
                  </p>
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
                    <h3 className="text-lg font-semibold">Digital Skills in India</h3>
                    <p className="text-sm opacity-90">Priya, 20</p>
                  </div>
                </div>
                <div className="p-6">
                  <Quote className="h-6 w-6 text-accent mb-3" />
                  <p className="text-gray-600 italic mb-4">
                    "We trained 300+ women in digital skills, helping them start their own online businesses and achieve financial independence."
                  </p>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of young changemakers worldwide. Whether you want to volunteer, 
            start a program, or partner with us—there's a place for you in the Y-Peace movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
