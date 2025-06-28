
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  MessageSquare,
  HelpCircle,
  Users,
  Briefcase
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      primary: 'hello@y-peace.org',
      secondary: 'partnerships@y-peace.org',
      description: 'General inquiries and partnership opportunities'
    },
    {
      icon: Phone,
      title: 'Call Us',
      primary: '+1 (555) 123-4567',
      secondary: '+44 20 7123 4567',
      description: 'Available Monday to Friday, 9 AM - 6 PM'
    },
    {
      icon: MapPin,
      title: 'Main Office',
      primary: '123 Peace Avenue',
      secondary: 'Global City, GC 12345',
      description: 'Our headquarters and main coordination center'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      primary: 'Mon - Fri: 9:00 AM - 6:00 PM',
      secondary: 'Weekend: Emergency only',
      description: 'We respond to emails within 24 hours'
    }
  ];

  const inquiryTypes = [
    {
      icon: Users,
      title: 'General Inquiries',
      description: 'Questions about Y-Peace, our mission, or how to get started'
    },
    {
      icon: HelpCircle,
      title: 'Program Information', 
      description: 'Details about our Five Ps programs and how to participate'
    },
    {
      icon: Briefcase,
      title: 'Partnership Opportunities',
      description: 'Corporate partnerships, NGO collaborations, and institutional alliances'
    },
    {
      icon: MessageSquare,
      title: 'Media & Press',
      description: 'Press inquiries, interview requests, and media partnerships'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'text-blue-600' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'text-sky-500' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'text-pink-600' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'text-blue-700' },
    { icon: Youtube, name: 'YouTube', url: '#', color: 'text-red-600' }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="gradient-brand py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Let's work together to create positive change
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Whether you have questions, want to get involved, or are interested in partnerships, 
            we'd love to hear from you. Every conversation is a step toward building a better world.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach our team around the world</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{contact.title}</h3>
                    <div className="space-y-2 mb-4">
                      <p className="font-medium text-gray-700">{contact.primary}</p>
                      <p className="text-gray-600">{contact.secondary}</p>
                    </div>
                    <p className="text-sm text-gray-500">{contact.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Send us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                All fields marked with * are required.
              </p>

              <Card className="shadow-lg">
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
                          Phone Number
                        </label>
                        <Input placeholder="+1 (555) 123-4567" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization (if applicable)
                      </label>
                      <Input placeholder="Your organization name" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <Input placeholder="Brief subject of your message" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Tell us more about your inquiry, ideas, or how we can help..."
                        rows={5}
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1 rounded" />
                      <label className="text-sm text-gray-600">
                        I agree to receive communications from Y-Peace and understand that I can 
                        unsubscribe at any time. View our Privacy Policy for more information.
                      </label>
                    </div>

                    <Button size="lg" className="w-full gradient-primary text-white text-lg py-4">
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Inquiry Types & Social */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">What can we help you with?</h3>
                <div className="space-y-4">
                  {inquiryTypes.map((type, index) => {
                    const Icon = type.icon;
                    return (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                              <Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-2">{type.title}</h4>
                              <p className="text-gray-600 text-sm">{type.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Follow Us</h3>
                <p className="text-gray-600 mb-6">
                  Stay connected with our latest updates, stories, and opportunities 
                  to make a difference.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className={`hover:${social.color} hover:bg-gray-50 transition-colors`}
                      >
                        <Icon className="h-5 w-5" />
                      </Button>
                    );
                  })}
                </div>
              </div>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Quick Response Promise</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>📧 Email inquiries: Within 24 hours</p>
                    <p>📞 Phone calls: During business hours</p>
                    <p>💬 Social media: Within 12 hours</p>
                    <p>🤝 Partnership requests: Within 48 hours</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Global Presence</h2>
            <p className="text-xl text-gray-600">
              Y-Peace operates in over 50 countries worldwide
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Interactive Map Coming Soon</h3>
                    <p className="text-gray-600">
                      Explore our global network of programs, partners, and impact stories
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-gray-600">Countries</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">200+</div>
                    <div className="text-gray-600">Local Partners</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-2">25K+</div>
                    <div className="text-gray-600">Youth Reached</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
