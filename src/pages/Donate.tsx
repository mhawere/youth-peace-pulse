
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EditableText from '@/components/EditableText';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Globe, TrendingUp, Handshake, CheckCircle } from 'lucide-react';

const Donate = () => {
  // State for page content
  const [pageTitle, setPageTitle] = useState("Support Our Mission");
  const [pageSubtitle, setPageSubtitle] = useState("Together for Humanity - Your contribution creates lasting change");
  const [pageDescription, setPageDescription] = useState("Every donation directly supports youth-led initiatives that advance the UN Sustainable Development Goals and build a more peaceful, sustainable world.");

  // State for impact section
  const [impactTitle, setImpactTitle] = useState("Your Impact in Numbers");
  const [impactSubtitle, setImpactSubtitle] = useState("See how your support translates into real change around the world");

  // State for donation tiers section
  const [tiersTitle, setTiersTitle] = useState("Choose Your Support Level");
  const [tiersSubtitle, setTiersSubtitle] = useState("Every contribution makes a difference. Choose the level that works for you.");

  // State for custom amount section
  const [customTitle, setCustomTitle] = useState("Or Choose Your Own Amount");
  const [customSubtitle, setCustomSubtitle] = useState("Every dollar counts in creating positive change. Donate any amount that feels right for you.");

  // State for alternative support section
  const [altTitle, setAltTitle] = useState("Other Ways to Support");
  const [altSubtitle, setAltSubtitle] = useState("Can't donate right now? There are many other ways to support our mission.");

  const [volunteerTitle, setVolunteerTitle] = useState("Volunteer");
  const [volunteerDesc, setVolunteerDesc] = useState("Join our global network of volunteers and contribute your skills to meaningful projects.");

  const [partnerTitle, setPartnerTitle] = useState("Partner With Us");
  const [partnerDesc, setPartnerDesc] = useState("Explore partnership opportunities for organizations and businesses.");

  const [shareTitle, setShareTitle] = useState("Spread the Word");
  const [shareDesc, setShareDesc] = useState("Share our mission with your network and help us reach more young changemakers.");

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
          <EditableText value={pageTitle} onChange={setPageTitle} className="text-5xl md:text-6xl font-bold mb-6" as="h1">
            {pageTitle}
          </EditableText>
          <EditableText value={pageSubtitle} onChange={setPageSubtitle} className="text-xl md:text-2xl opacity-90 mb-8" as="p">
            {pageSubtitle}
          </EditableText>
          <EditableText value={pageDescription} onChange={setPageDescription} multiline className="text-lg opacity-80 max-w-3xl mx-auto" as="p">
            {pageDescription}
          </EditableText>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <EditableText value={impactTitle} onChange={setImpactTitle} className="text-3xl font-bold text-gray-800 mb-4" as="h2">
              {impactTitle}
            </EditableText>
            <EditableText value={impactSubtitle} onChange={setImpactSubtitle} className="text-gray-600 max-w-2xl mx-auto" as="p">
              {impactSubtitle}
            </EditableText>
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
            <EditableText value={tiersTitle} onChange={setTiersTitle} className="text-4xl font-bold text-gray-800 mb-4" as="h2">
              {tiersTitle}
            </EditableText>
            <EditableText value={tiersSubtitle} onChange={setTiersSubtitle} className="text-xl text-gray-600 max-w-3xl mx-auto" as="p">
              {tiersSubtitle}
            </EditableText>
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
          <EditableText value={customTitle} onChange={setCustomTitle} className="text-3xl font-bold text-gray-800 mb-6" as="h2">
            {customTitle}
          </EditableText>
          <EditableText value={customSubtitle} onChange={setCustomSubtitle} multiline className="text-gray-600 mb-8" as="p">
            {customSubtitle}
          </EditableText>
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
            <EditableText value={altTitle} onChange={setAltTitle} className="text-3xl font-bold text-gray-800 mb-4" as="h2">
              {altTitle}
            </EditableText>
            <EditableText value={altSubtitle} onChange={setAltSubtitle} className="text-gray-600 max-w-2xl mx-auto" as="p">
              {altSubtitle}
            </EditableText>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <EditableText value={volunteerTitle} onChange={setVolunteerTitle} className="text-xl font-semibold mb-4" as="h3">
                  {volunteerTitle}
                </EditableText>
                <EditableText value={volunteerDesc} onChange={setVolunteerDesc} multiline className="text-gray-600 mb-6" as="p">
                  {volunteerDesc}
                </EditableText>
                <Link to="/get-involved">
                  <Button variant="outline" className="text-primary border-primary">
                    Get Involved
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Handshake className="h-16 w-16 text-secondary mx-auto mb-4" />
                <EditableText value={partnerTitle} onChange={setPartnerTitle} className="text-xl font-semibold mb-4" as="h3">
                  {partnerTitle}
                </EditableText>
                <EditableText value={partnerDesc} onChange={setPartnerDesc} multiline className="text-gray-600 mb-6" as="p">
                  {partnerDesc}
                </EditableText>
                <Link to="/about">
                  <Button variant="outline" className="text-secondary border-secondary">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <Globe className="h-16 w-16 text-accent mx-auto mb-4" />
                <EditableText value={shareTitle} onChange={setShareTitle} className="text-xl font-semibold mb-4" as="h3">
                  {shareTitle}
                </EditableText>
                <EditableText value={shareDesc} onChange={setShareDesc} multiline className="text-gray-600 mb-6" as="p">
                  {shareDesc}
                </EditableText>
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
