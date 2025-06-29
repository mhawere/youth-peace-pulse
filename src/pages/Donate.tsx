
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Globe, TrendingUp, Handshake, CheckCircle } from 'lucide-react';

const Donate = () => {
  const donationTiers = [
    {
      amount: '$25',
      title: 'Supporter',
      description: 'Help us reach more youth with educational resources',
      benefits: ['Monthly newsletter', 'Digital thank you card', 'Impact updates']
    },
    {
      amount: '$50',
      title: 'Advocate',
      description: 'Fund community workshops and training programs',
      benefits: ['All Supporter benefits', 'Exclusive webinar access', 'Y-Peace sticker pack']
    },
    {
      amount: '$100',
      title: 'Champion',
      description: 'Support local project implementation',
      benefits: ['All previous benefits', 'Annual impact report', 'Recognition on website'],
      popular: true
    },
    {
      amount: '$250',
      title: 'Leader',
      description: 'Enable youth leadership development programs',
      benefits: ['All previous benefits', 'Virtual meeting with team', 'Custom thank you video']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="gradient-brand py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Support Our Mission</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Together for Humanity - Your contribution creates lasting change
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Every donation directly supports youth-led initiatives that advance the UN Sustainable Development Goals 
            and build a more peaceful, sustainable world.
          </p>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Impact in Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how your support translates into real change around the world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-primary mb-2">8,500+</div>
                <div className="text-gray-600">Youth Empowered</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                <div className="text-gray-600">Countries Reached</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-accent mx-auto mb-4" />
                <div className="text-3xl font-bold text-accent mb-2">120+</div>
                <div className="text-gray-600">Projects Funded</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-pink-600 mb-2">$2M+</div>
                <div className="text-gray-600">Impact Created</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Support Level</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every contribution makes a difference. Choose the level that works for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {donationTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? 'ring-2 ring-primary transform scale-105' : ''}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">{tier.amount}</div>
                    <div className="text-xl font-semibold text-gray-800 mb-2">{tier.title}</div>
                    <div className="text-gray-600 text-sm">{tier.description}</div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${tier.popular ? 'gradient-primary' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    Donate {tier.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Amount */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Or Choose Your Own Amount</h2>
          <p className="text-gray-600 mb-8">
            Every dollar counts in creating positive change. Donate any amount that feels right for you.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-2xl font-bold text-gray-800">$</span>
              <input 
                type="number" 
                placeholder="Enter amount" 
                className="flex-1 text-2xl font-bold text-center border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-primary focus:outline-none"
              />
            </div>
            <Button size="lg" className="w-full gradient-primary text-white text-lg px-8 py-4">
              Donate Now
            </Button>
          </div>
        </div>
      </section>

      {/* Alternative Ways to Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Other Ways to Support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Can't donate right now? There are many other ways to support our mission.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
                <p className="text-gray-600 mb-6">
                  Join our global network of volunteers and contribute your skills to meaningful projects.
                </p>
                <Button variant="outline" className="text-primary border-primary">
                  Get Involved
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Handshake className="h-16 w-16 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Partner With Us</h3>
                <p className="text-gray-600 mb-6">
                  Explore partnership opportunities for organizations and businesses.
                </p>
                <Button variant="outline" className="text-secondary border-secondary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Globe className="h-16 w-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Spread the Word</h3>
                <p className="text-gray-600 mb-6">
                  Share our mission with your network and help us reach more young changemakers.
                </p>
                <Button variant="outline" className="text-accent border-accent">
                  Share Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
