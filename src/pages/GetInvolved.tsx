
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Users, 
  Heart, 
  Handshake, 
  Calendar, 
  ArrowRight, 
  CheckCircle, 
  Globe,
  Star,
  Target,
  Zap
} from 'lucide-react';

const GetInvolved = () => {
  const opportunities = [
    {
      title: 'Volunteer Opportunities',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      gradientFrom: 'from-pink-500',
      gradientTo: 'to-pink-400',
      description: 'Join our global community of volunteers supporting programs on the ground and online.',
      options: [
        'Program facilitation and mentoring',
        'Content creation and social media',
        'Event planning and coordination',
        'Research and data analysis',
        'Translation and interpretation',
        'Fundraising and outreach'
      ],
      commitment: 'Flexible: 2-10 hours per week',
      benefits: ['Global network access', 'Skill development', 'Leadership training', 'Recognition certificates']
    },
    {
      title: 'Membership Program',
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      gradientFrom: 'from-primary',
      gradientTo: 'to-primary/80',
      description: 'Become a Y-Peace member to gain access to exclusive events, updates, and community networks.',
      options: [
        'Youth Membership (18-35 years)',
        'Community Leader Membership',
        'Organization Membership',
        'Student Membership (Discounted)',
        'Alumni Network Access',
        'Professional Development Track'
      ],
      commitment: 'Annual membership with monthly activities',
      benefits: ['Exclusive events', 'Networking opportunities', 'Resource access', 'Mentorship programs']
    },
    {
      title: 'Partnership Opportunities',
      icon: Handshake,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      gradientFrom: 'from-secondary',
      gradientTo: 'to-secondary/80',
      description: 'Explore how your organization, company, or government agency can collaborate with Y-Peace.',
      options: [
        'Corporate Social Responsibility partnerships',
        'NGO collaboration agreements',
        'Government and UN agency partnerships',
        'Academic institution alliances',
        'Faith-based organization partnerships',
        'Youth organization networks'
      ],
      commitment: 'Customized partnership agreements',
      benefits: ['Brand visibility', 'Impact amplification', 'Shared resources', 'Joint programming']
    },
    {
      title: 'Events & Workshops',
      icon: Calendar,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      gradientFrom: 'from-accent',
      gradientTo: 'to-accent/80',
      description: 'Attend or host educational, cultural, and training events that support our mission.',
      options: [
        'SDG awareness workshops',
        'Youth leadership summits',
        'Cultural exchange programs',
        'Skills development bootcamps',
        'Peace-building dialogues',
        'Innovation challenges'
      ],
      commitment: 'Event-based participation',
      benefits: ['Skill building', 'Cultural exchange', 'Leadership development', 'Certificate programs']
    }
  ];

  const steps = [
    {
      icon: Target,
      title: 'Choose Your Path',
      description: 'Select the involvement option that best matches your interests, skills, and availability.'
    },
    {
      icon: Users,
      title: 'Complete Application',
      description: 'Fill out our simple application form with your background, interests, and goals.'
    },
    {
      icon: Zap,
      title: 'Get Matched',
      description: 'Our team will connect you with relevant opportunities and provide orientation materials.'
    },
    {
      icon: Star,
      title: 'Start Making Impact',
      description: 'Begin your journey with Y-Peace and start creating positive change in your community.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="gradient-brand py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Join the global movement for peace and sustainable development
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Whether you have 2 hours a week or want to make Y-Peace your full-time passion, 
            there's a perfect way for you to contribute to our mission.
          </p>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">How to Get Started</h2>
            <p className="text-xl text-gray-600">Four simple steps to join the Y-Peace community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Ways to Get Involved</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From volunteering to partnerships, find the perfect way to contribute your skills and passion
            </p>
          </div>

          <div className="space-y-12">
            {opportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={opportunity.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <Card className={`h-full ${opportunity.bgColor}`}>
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className={`p-4 rounded-full bg-white/50 mr-4`}>
                            <Icon className={`h-10 w-10 ${opportunity.color}`} />
                          </div>
                          <h3 className="text-3xl font-bold text-gray-800">{opportunity.title}</h3>
                        </div>
                        
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                          {opportunity.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Time Commitment</h4>
                            <p className="text-sm text-gray-600">{opportunity.commitment}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>
                            <ul className="text-sm text-gray-600">
                              {opportunity.benefits.slice(0, 2).map((benefit, i) => (
                                <li key={i} className="flex items-center">
                                  <CheckCircle className="h-3 w-3 text-green-500 mr-2" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <Button className={`bg-gradient-to-r ${opportunity.gradientFrom} ${opportunity.gradientTo} text-white hover:opacity-90`}>
                          Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="space-y-4">
                      <h4 className="text-2xl font-semibold text-gray-800 mb-6">Available Options</h4>
                      {opportunity.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                          <CheckCircle className={`h-6 w-6 ${opportunity.color} mt-0.5 flex-shrink-0`} />
                          <p className="text-gray-700">{option}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Ready to Join Us?</h2>
            <p className="text-xl text-gray-600">
              Fill out this form and we'll get back to you within 48 hours
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country/Region *
                    </label>
                    <Input placeholder="Your country" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How would you like to get involved? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" className="rounded" />
                      <span>Volunteer</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" className="rounded" />
                      <span>Membership</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" className="rounded" />
                      <span>Partnership</span>
                    </label>
                    <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                      <input type="checkbox" className="rounded" />
                      <span>Events</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about yourself and your interests
                  </label>
                  <Textarea 
                    placeholder="Share your background, skills, interests, and what motivates you to join Y-Peace..."
                    rows={4}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about Y-Peace?
                  </label>
                  <Input placeholder="Social media, friend, event, etc." />
                </div>

                <Button size="lg" className="w-full gradient-primary text-white text-lg py-4">
                  Submit Application
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats & Impact */}
      <section className="py-20 gradient-brand">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
          <h2 className="text-4xl font-bold mb-12">Join a Growing Movement</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1,000+</div>
              <div className="text-lg opacity-90">Active Volunteers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Country Chapters</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">200+</div>
              <div className="text-lg opacity-90">Partner Organizations</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25,000+</div>
              <div className="text-lg opacity-90">Lives Impacted</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;
