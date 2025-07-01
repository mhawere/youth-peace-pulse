import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EditableText from '@/components/EditableText';
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
  // Page content state
  const [pageTitle, setPageTitle] = useState('Get Involved');
  const [pageSubtitle, setPageSubtitle] = useState('Join the global movement for peace and sustainable development');
  const [pageDescription, setPageDescription] = useState('Whether you have 2 hours a week or want to make Y-Peace your full-time passion, there\'s a perfect way for you to contribute to our mission.');

  // Steps section state
  const [stepsTitle, setStepsTitle] = useState('How to Get Started');
  const [stepsSubtitle, setStepsSubtitle] = useState('Four simple steps to join the Y-Peace community');

  const [step1Title, setStep1Title] = useState('Choose Your Path');
  const [step1Description, setStep1Description] = useState('Select the involvement option that best matches your interests, skills, and availability.');

  const [step2Title, setStep2Title] = useState('Complete Application');
  const [step2Description, setStep2Description] = useState('Fill out our simple application form with your background, interests, and goals.');

  const [step3Title, setStep3Title] = useState('Get Matched');
  const [step3Description, setStep3Description] = useState('Our team will connect you with relevant opportunities and provide orientation materials.');

  const [step4Title, setStep4Title] = useState('Start Making Impact');
  const [step4Description, setStep4Description] = useState('Begin your journey with Y-Peace and start creating positive change in your community.');

  // Opportunities section state
  const [opportunitiesTitle, setOpportunitiesTitle] = useState('Ways to Get Involved');
  const [opportunitiesSubtitle, setOpportunitiesSubtitle] = useState('From volunteering to partnerships, find the perfect way to contribute your skills and passion');

  // Volunteer opportunity state
  const [volunteerTitle, setVolunteerTitle] = useState('Volunteer Opportunities');
  const [volunteerDescription, setVolunteerDescription] = useState('Join our global community of volunteers supporting programs on the ground and online.');
  const [volunteerCommitment, setVolunteerCommitment] = useState('Flexible: 2-10 hours per week');

  // Membership opportunity state
  const [membershipTitle, setMembershipTitle] = useState('Membership Program');
  const [membershipDescription, setMembershipDescription] = useState('Become a Y-Peace member to gain access to exclusive events, updates, and community networks.');
  const [membershipCommitment, setMembershipCommitment] = useState('Annual membership with monthly activities');

  // Partnership opportunity state
  const [partnershipTitle, setPartnershipTitle] = useState('Partnership Opportunities');
  const [partnershipDescription, setPartnershipDescription] = useState('Explore how your organization, company, or government agency can collaborate with Y-Peace.');
  const [partnershipCommitment, setPartnershipCommitment] = useState('Customized partnership agreements');

  // Events opportunity state
  const [eventsTitle, setEventsTitle] = useState('Events & Workshops');
  const [eventsDescription, setEventsDescription] = useState('Attend or host educational, cultural, and training events that support our mission.');
  const [eventsCommitment, setEventsCommitment] = useState('Event-based participation');

  // Application form state
  const [formTitle, setFormTitle] = useState('Ready to Join Us?');
  const [formSubtitle, setFormSubtitle] = useState('Fill out this form and we\'ll get back to you within 48 hours');

  // Stats section state
  const [statsTitle, setStatsTitle] = useState('Join a Growing Movement');
  const [stat1, setStat1] = useState('1,000+');
  const [stat1Label, setStat1Label] = useState('Active Volunteers');
  const [stat2, setStat2] = useState('50+');
  const [stat2Label, setStat2Label] = useState('Country Chapters');
  const [stat3, setStat3] = useState('200+');
  const [stat3Label, setStat3Label] = useState('Partner Organizations');
  const [stat4, setStat4] = useState('25,000+');
  const [stat4Label, setStat4Label] = useState('Lives Impacted');

  const opportunities = [
    {
      title: volunteerTitle,
      setTitle: setVolunteerTitle,
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      gradientFrom: 'from-pink-500',
      gradientTo: 'to-pink-400',
      description: volunteerDescription,
      setDescription: setVolunteerDescription,
      options: [
        'Program facilitation and mentoring',
        'Content creation and social media',
        'Event planning and coordination',
        'Research and data analysis',
        'Translation and interpretation',
        'Fundraising and outreach'
      ],
      commitment: volunteerCommitment,
      setCommitment: setVolunteerCommitment,
      benefits: ['Global network access', 'Skill development', 'Leadership training', 'Recognition certificates']
    },
    {
      title: membershipTitle,
      setTitle: setMembershipTitle,
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      gradientFrom: 'from-primary',
      gradientTo: 'to-primary/80',
      description: membershipDescription,
      setDescription: setMembershipDescription,
      options: [
        'Youth Membership (18-35 years)',
        'Community Leader Membership',
        'Organization Membership',
        'Student Membership (Discounted)',
        'Alumni Network Access',
        'Professional Development Track'
      ],
      commitment: membershipCommitment,
      setCommitment: setMembershipCommitment,
      benefits: ['Exclusive events', 'Networking opportunities', 'Resource access', 'Mentorship programs']
    },
    {
      title: partnershipTitle,
      setTitle: setPartnershipTitle,
      icon: Handshake,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      gradientFrom: 'from-secondary',
      gradientTo: 'to-secondary/80',
      description: partnershipDescription,
      setDescription: setPartnershipDescription,
      options: [
        'Corporate Social Responsibility partnerships',
        'NGO collaboration agreements',
        'Government and UN agency partnerships',
        'Academic institution alliances',
        'Faith-based organization partnerships',
        'Youth organization networks'
      ],
      commitment: partnershipCommitment,
      setCommitment: setPartnershipCommitment,
      benefits: ['Brand visibility', 'Impact amplification', 'Shared resources', 'Joint programming']
    },
    {
      title: eventsTitle,
      setTitle: setEventsTitle,
      icon: Calendar,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      gradientFrom: 'from-accent',
      gradientTo: 'to-accent/80',
      description: eventsDescription,
      setDescription: setEventsDescription,
      options: [
        'SDG awareness workshops',
        'Youth leadership summits',
        'Cultural exchange programs',
        'Skills development bootcamps',
        'Peace-building dialogues',
        'Innovation challenges'
      ],
      commitment: eventsCommitment,
      setCommitment: setEventsCommitment,
      benefits: ['Skill building', 'Cultural exchange', 'Leadership development', 'Certificate programs']
    }
  ];

  const steps = [
    {
      icon: Target,
      title: step1Title,
      setTitle: setStep1Title,
      description: step1Description,
      setDescription: setStep1Description
    },
    {
      icon: Users,
      title: step2Title,
      setTitle: setStep2Title,
      description: step2Description,
      setDescription: setStep2Description
    },
    {
      icon: Zap,
      title: step3Title,
      setTitle: setStep3Title,
      description: step3Description,
      setDescription: setStep3Description
    },
    {
      icon: Star,
      title: step4Title,
      setTitle: setStep4Title,
      description: step4Description,
      setDescription: setStep4Description
    }
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

      {/* How to Get Started */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <EditableText
              value={stepsTitle}
              onChange={setStepsTitle}
              className="text-4xl font-bold mb-4 text-gray-800"
              as="h2"
            >
              {stepsTitle}
            </EditableText>
            <EditableText
              value={stepsSubtitle}
              onChange={setStepsSubtitle}
              className="text-xl text-gray-600"
              as="p"
            >
              {stepsSubtitle}
            </EditableText>
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
                  <EditableText
                    value={step.title}
                    onChange={step.setTitle}
                    className="text-xl font-semibold mb-3 text-gray-800"
                    as="h3"
                  >
                    {step.title}
                  </EditableText>
                  <EditableText
                    value={step.description}
                    onChange={step.setDescription}
                    multiline
                    className="text-gray-600"
                    as="p"
                  >
                    {step.description}
                  </EditableText>
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
            <EditableText
              value={opportunitiesTitle}
              onChange={setOpportunitiesTitle}
              className="text-4xl font-bold mb-4 text-gray-800"
              as="h2"
            >
              {opportunitiesTitle}
            </EditableText>
            <EditableText
              value={opportunitiesSubtitle}
              onChange={setOpportunitiesSubtitle}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              as="p"
            >
              {opportunitiesSubtitle}
            </EditableText>
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
                          <EditableText
                            value={opportunity.title}
                            onChange={opportunity.setTitle}
                            className="text-3xl font-bold text-gray-800"
                            as="h3"
                          >
                            {opportunity.title}
                          </EditableText>
                        </div>
                        
                        <EditableText
                          value={opportunity.description}
                          onChange={opportunity.setDescription}
                          multiline
                          className="text-gray-700 text-lg mb-6 leading-relaxed"
                          as="p"
                        >
                          {opportunity.description}
                        </EditableText>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Time Commitment</h4>
                            <EditableText
                              value={opportunity.commitment}
                              onChange={opportunity.setCommitment}
                              className="text-sm text-gray-600"
                              as="p"
                            >
                              {opportunity.commitment}
                            </EditableText>
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
            <EditableText
              value={formTitle}
              onChange={setFormTitle}
              className="text-4xl font-bold mb-4 text-gray-800"
              as="h2"
            >
              {formTitle}
            </EditableText>
            <EditableText
              value={formSubtitle}
              onChange={setFormSubtitle}
              className="text-xl text-gray-600"
              as="p"
            >
              {formSubtitle}
            </EditableText>
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
          <EditableText
            value={statsTitle}
            onChange={setStatsTitle}
            className="text-4xl font-bold mb-12"
            as="h2"
          >
            {statsTitle}
          </EditableText>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <EditableText
                value={stat1}
                onChange={setStat1}
                className="text-4xl md:text-5xl font-bold mb-2"
                as="div"
              >
                {stat1}
              </EditableText>
              <EditableText
                value={stat1Label}
                onChange={setStat1Label}
                className="text-lg opacity-90"
                as="div"
              >
                {stat1Label}
              </EditableText>
            </div>
            <div>
              <EditableText
                value={stat2}
                onChange={setStat2}
                className="text-4xl md:text-5xl font-bold mb-2"
                as="div"
              >
                {stat2}
              </EditableText>
              <EditableText
                value={stat2Label}
                onChange={setStat2Label}
                className="text-lg opacity-90"
                as="div"
              >
                {stat2Label}
              </EditableText>
            </div>
            <div>
              <EditableText
                value={stat3}
                onChange={setStat3}
                className="text-4xl md:text-5xl font-bold mb-2"
                as="div"
              >
                {stat3}
              </EditableText>
              <EditableText
                value={stat3Label}
                onChange={setStat3Label}
                className="text-lg opacity-90"
                as="div"
              >
                {stat3Label}
              </EditableText>
            </div>
            <div>
              <EditableText
                value={stat4}
                onChange={setStat4}
                className="text-4xl md:text-5xl font-bold mb-2"
                as="div"
              >
                {stat4}
              </EditableText>
              <EditableText
                value={stat4Label}
                onChange={setStat4Label}
                className="text-lg opacity-90"
                as="div"
              >
                {stat4Label}
              </EditableText>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;
