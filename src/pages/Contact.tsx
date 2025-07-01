import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EditableText from '@/components/EditableText';
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
  // Page content state
  const [pageTitle, setPageTitle] = useState('Contact Us');
  const [pageSubtitle, setPageSubtitle] = useState('Let\'s work together to create positive change');
  const [pageDescription, setPageDescription] = useState('Whether you have questions, want to get involved, or are interested in partnerships, we\'d love to hear from you. Every conversation is a step toward building a better world.');

  // Contact info section state
  const [contactTitle, setContactTitle] = useState('Get in Touch');
  const [contactSubtitle, setContactSubtitle] = useState('Multiple ways to reach our team around the world');

  // Individual contact info state
  const [emailTitle, setEmailTitle] = useState('Email Us');
  const [emailPrimary, setEmailPrimary] = useState('hello@y-peace.org');
  const [emailSecondary, setEmailSecondary] = useState('partnerships@y-peace.org');
  const [emailDescription, setEmailDescription] = useState('General inquiries and partnership opportunities');

  const [phoneTitle, setPhoneTitle] = useState('Call Us');
  const [phonePrimary, setPhonePrimary] = useState('+1 (555) 123-4567');
  const [phoneSecondary, setPhoneSecondary] = useState('+44 20 7123 4567');
  const [phoneDescription, setPhoneDescription] = useState('Available Monday to Friday, 9 AM - 6 PM');

  const [addressTitle, setAddressTitle] = useState('Main Office');
  const [addressPrimary, setAddressPrimary] = useState('123 Peace Avenue');
  const [addressSecondary, setAddressSecondary] = useState('Global City, GC 12345');
  const [addressDescription, setAddressDescription] = useState('Our headquarters and main coordination center');

  const [hoursTitle, setHoursTitle] = useState('Office Hours');
  const [hoursPrimary, setHoursPrimary] = useState('Mon - Fri: 9:00 AM - 6:00 PM');
  const [hoursSecondary, setHoursSecondary] = useState('Weekend: Emergency only');
  const [hoursDescription, setHoursDescription] = useState('We respond to emails within 24 hours');

  // Contact form state
  const [formTitle, setFormTitle] = useState('Send us a Message');
  const [formDescription, setFormDescription] = useState('Fill out the form below and we\'ll get back to you as soon as possible. All fields marked with * are required.');

  // Inquiry types state
  const [inquiryTitle, setInquiryTitle] = useState('What can we help you with?');

  const [inquiry1Title, setInquiry1Title] = useState('General Inquiries');
  const [inquiry1Description, setInquiry1Description] = useState('Questions about Y-Peace, our mission, or how to get started');

  const [inquiry2Title, setInquiry2Title] = useState('Program Information');
  const [inquiry2Description, setInquiry2Description] = useState('Details about our Five Ps programs and how to participate');

  const [inquiry3Title, setInquiry3Title] = useState('Partnership Opportunities');
  const [inquiry3Description, setInquiry3Description] = useState('Corporate partnerships, NGO collaborations, and institutional alliances');

  const [inquiry4Title, setInquiry4Title] = useState('Media & Press');
  const [inquiry4Description, setInquiry4Description] = useState('Press inquiries, interview requests, and media partnerships');

  // Social media state
  const [socialTitle, setSocialTitle] = useState('Follow Us');
  const [socialDescription, setSocialDescription] = useState('Stay connected with our latest updates, stories, and opportunities to make a difference.');

  // Quick response state
  const [responseTitle, setResponseTitle] = useState('Quick Response Promise');

  // Map section state
  const [mapTitle, setMapTitle] = useState('Our Global Presence');
  const [mapSubtitle, setMapSubtitle] = useState('Y-Peace operates in over 50 countries worldwide');
  const [mapHeading, setMapHeading] = useState('Interactive Map Coming Soon');
  const [mapDescription, setMapDescription] = useState('Explore our global network of programs, partners, and impact stories');

  const [mapStat1, setMapStat1] = useState('50+');
  const [mapStat1Label, setMapStat1Label] = useState('Countries');
  const [mapStat2, setMapStat2] = useState('200+');
  const [mapStat2Label, setMapStat2Label] = useState('Local Partners');
  const [mapStat3, setMapStat3] = useState('25K+');
  const [mapStat3Label, setMapStat3Label] = useState('Youth Reached');

  const contactInfo = [
    {
      icon: Mail,
      title: emailTitle,
      setTitle: setEmailTitle,
      primary: emailPrimary,
      setPrimary: setEmailPrimary,
      secondary: emailSecondary,
      setSecondary: setEmailSecondary,
      description: emailDescription,
      setDescription: setEmailDescription
    },
    {
      icon: Phone,
      title: phoneTitle,
      setTitle: setPhoneTitle,
      primary: phonePrimary,
      setPrimary: setPhonePrimary,
      secondary: phoneSecondary,
      setSecondary: setPhoneSecondary,
      description: phoneDescription,
      setDescription: setPhoneDescription
    },
    {
      icon: MapPin,
      title: addressTitle,
      setTitle: setAddressTitle,
      primary: addressPrimary,
      setPrimary: setAddressPrimary,
      secondary: addressSecondary,
      setSecondary: setAddressSecondary,
      description: addressDescription,
      setDescription: setAddressDescription
    },
    {
      icon: Clock,
      title: hoursTitle,
      setTitle: setHoursTitle,
      primary: hoursPrimary,
      setPrimary: setHoursPrimary,
      secondary: hoursSecondary,
      setSecondary: setHoursSecondary,
      description: hoursDescription,
      setDescription: setHoursDescription
    }
  ];

  const inquiryTypes = [
    {
      icon: Users,
      title: inquiry1Title,
      setTitle: setInquiry1Title,
      description: inquiry1Description,
      setDescription: setInquiry1Description
    },
    {
      icon: HelpCircle,
      title: inquiry2Title,
      setTitle: setInquiry2Title,
      description: inquiry2Description,
      setDescription: setInquiry2Description
    },
    {
      icon: Briefcase,
      title: inquiry3Title,
      setTitle: setInquiry3Title,
      description: inquiry3Description,
      setDescription: setInquiry3Description
    },
    {
      icon: MessageSquare,
      title: inquiry4Title,
      setTitle: setInquiry4Title,
      description: inquiry4Description,
      setDescription: setInquiry4Description
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
          <EditableText
            value={pageTitle}
            onChange={setPageTitle}
            className="text-5xl md:text-6xl font-bold mb-6"
            as="h1"
          >
            {pageTitle}
          </EditableText>
          <EditableText
            value={pageSubtitle}
            onChange={setPageSubtitle}
            className="text-xl md:text-2xl opacity-90 mb-8"
            as="p"
          >
            {pageSubtitle}
          </EditableText>
          <EditableText
            value={pageDescription}
            onChange={setPageDescription}
            multiline
            className="text-lg opacity-80 max-w-3xl mx-auto"
            as="p"
          >
            {pageDescription}
          </EditableText>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <EditableText
              value={contactTitle}
              onChange={setContactTitle}
              className="text-4xl font-bold mb-4 text-gray-800"
              as="h2"
            >
              {contactTitle}
            </EditableText>
            <EditableText
              value={contactSubtitle}
              onChange={setContactSubtitle}
              className="text-xl text-gray-600"
              as="p"
            >
              {contactSubtitle}
            </EditableText>
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
                    <EditableText
                      value={contact.title}
                      onChange={contact.setTitle}
                      className="text-xl font-semibold mb-4 text-gray-800"
                      as="h3"
                    >
                      {contact.title}
                    </EditableText>
                    <div className="space-y-2 mb-4">
                      <EditableText
                        value={contact.primary}
                        onChange={contact.setPrimary}
                        className="font-medium text-gray-700"
                        as="p"
                      >
                        {contact.primary}
                      </EditableText>
                      <EditableText
                        value={contact.secondary}
                        onChange={contact.setSecondary}
                        className="text-gray-600"
                        as="p"
                      >
                        {contact.secondary}
                      </EditableText>
                    </div>
                    <EditableText
                      value={contact.description}
                      onChange={contact.setDescription}
                      className="text-sm text-gray-500"
                      as="p"
                    >
                      {contact.description}
                    </EditableText>
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
              <EditableText
                value={formTitle}
                onChange={setFormTitle}
                className="text-4xl font-bold mb-6 text-gray-800"
                as="h2"
              >
                {formTitle}
              </EditableText>
              <EditableText
                value={formDescription}
                onChange={setFormDescription}
                multiline
                className="text-lg text-gray-600 mb-8"
                as="p"
              >
                {formDescription}
              </EditableText>

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
                <EditableText
                  value={inquiryTitle}
                  onChange={setInquiryTitle}
                  className="text-2xl font-semibold mb-6 text-gray-800"
                  as="h3"
                >
                  {inquiryTitle}
                </EditableText>
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
                              <EditableText
                                value={type.title}
                                onChange={type.setTitle}
                                className="font-semibold text-gray-800 mb-2"
                                as="h4"
                              >
                                {type.title}
                              </EditableText>
                              <EditableText
                                value={type.description}
                                onChange={type.setDescription}
                                className="text-gray-600 text-sm"
                                as="p"
                              >
                                {type.description}
                              </EditableText>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <div>
                <EditableText
                  value={socialTitle}
                  onChange={setSocialTitle}
                  className="text-2xl font-semibold mb-6 text-gray-800"
                  as="h3"
                >
                  {socialTitle}
                </EditableText>
                <EditableText
                  value={socialDescription}
                  onChange={setSocialDescription}
                  multiline
                  className="text-gray-600 mb-6"
                  as="p"
                >
                  {socialDescription}
                </EditableText>
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
                  <EditableText
                    value={responseTitle}
                    onChange={setResponseTitle}
                    className="font-semibold text-gray-800 mb-3"
                    as="h4"
                  >
                    {responseTitle}
                  </EditableText>
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
            <EditableText
              value={mapTitle}
              onChange={setMapTitle}
              className="text-4xl font-bold mb-4 text-gray-800"
              as="h2"
            >
              {mapTitle}
            </EditableText>
            <EditableText
              value={mapSubtitle}
              onChange={setMapSubtitle}
              className="text-xl text-gray-600"
              as="p"
            >
              {mapSubtitle}
            </EditableText>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-0">
              <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden rounded-t-lg">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                    <EditableText
                      value={mapHeading}
                      onChange={setMapHeading}
                      className="text-2xl font-bold text-gray-800 mb-2"
                      as="h3"
                    >
                      {mapHeading}
                    </EditableText>
                    <EditableText
                      value={mapDescription}
                      onChange={setMapDescription}
                      className="text-gray-600"
                      as="p"
                    >
                      {mapDescription}
                    </EditableText>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <EditableText
                      value={mapStat1}
                      onChange={setMapStat1}
                      className="text-3xl font-bold text-primary mb-2"
                      as="div"
                    >
                      {mapStat1}
                    </EditableText>
                    <EditableText
                      value={mapStat1Label}
                      onChange={setMapStat1Label}
                      className="text-gray-600"
                      as="div"
                    >
                      {mapStat1Label}
                    </EditableText>
                  </div>
                  <div>
                    <EditableText
                      value={mapStat2}
                      onChange={setMapStat2}
                      className="text-3xl font-bold text-secondary mb-2"
                      as="div"
                    >
                      {mapStat2}
                    </EditableText>
                    <EditableText
                      value={mapStat2Label}
                      onChange={setMapStat2Label}
                      className="text-gray-600"
                      as="div"
                    >
                      {mapStat2Label}
                    </EditableText>
                  </div>
                  <div>
                    <EditableText
                      value={mapStat3}
                      onChange={setMapStat3}
                      className="text-3xl font-bold text-accent mb-2"
                      as="div"
                    >
                      {mapStat3}
                    </EditableText>
                    <EditableText
                      value={mapStat3Label}
                      onChange={setMapStat3Label}
                      className="text-gray-600"
                      as="div"
                    >
                      {mapStat3Label}
                    </EditableText>
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
