
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EditableText from '@/components/EditableText';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Globe, TrendingUp, Heart, Handshake, ArrowRight, CheckCircle } from 'lucide-react';

const Programs = () => {
  // Page content state
  const [pageTitle, setPageTitle] = useState('Our Programs');
  const [pageSubtitle, setPageSubtitle] = useState('Turning values into action through the Five Ps framework');
  const [pageDescription, setPageDescription] = useState('Every initiative aligns with the UN\'s Sustainable Development Goals and reflects our core belief in empowering youth and communities worldwide.');

  // Programs state
  const [peopleTitle, setPeopleTitle] = useState('People');
  const [peopleDescription, setPeopleDescription] = useState('We champion equity, dignity, and opportunity for all through comprehensive programs that empower individuals and strengthen communities.');
  const [peopleStats1, setPeopleStats1] = useState('2,500+');
  const [peopleStats2, setPeopleStats2] = useState('15');
  const [peopleStats3, setPeopleStats3] = useState('8');

  const [planetTitle, setPlanetTitle] = useState('Planet');
  const [planetDescription, setPlanetDescription] = useState('We promote environmental stewardship and climate action through education, advocacy, and hands-on conservation efforts.');
  const [planetStats1, setPlanetStats1] = useState('1,800+');
  const [planetStats2, setPlanetStats2] = useState('12');
  const [planetStats3, setPlanetStats3] = useState('6');

  const [prosperityTitle, setProsperityTitle] = useState('Prosperity');
  const [prosperityDescription, setProsperityDescription] = useState('We foster economic empowerment and innovation through skills development, entrepreneurship support, and advocacy for economic justice.');
  const [prosperityStats1, setProsperityStats1] = useState('1,200+');
  const [prosperityStats2, setProsperityStats2] = useState('10');
  const [prosperityStats3, setProsperityStats3] = useState('7');

  const [peaceTitle, setPeaceTitle] = useState('Peace');
  const [peaceDescription, setPeaceDescription] = useState('We build inclusive societies through dialogue, conflict resolution, and community healing initiatives that promote lasting peace.');
  const [peaceStats1, setPeaceStats1] = useState('900+');
  const [peaceStats2, setPeaceStats2] = useState('8');
  const [peaceStats3, setPeaceStats3] = useState('5');

  const [partnershipTitle, setPartnershipTitle] = useState('Partnership');
  const [partnershipDescription, setPartnershipDescription] = useState('We create global networks and collaborative frameworks that connect diverse stakeholders for maximum collective impact.');
  const [partnershipStats1, setPartnershipStats1] = useState('3,000+');
  const [partnershipStats2, setPartnershipStats2] = useState('25');
  const [partnershipStats3, setPartnershipStats3] = useState('12');

  // Success stories state
  const [successTitle, setSuccessTitle] = useState('Success Stories');
  const [successSubtitle, setSuccessSubtitle] = useState('Meet the youth and community leaders transforming their regions through Y-Peace programs');

  const [story1Title, setStory1Title] = useState('Climate Action in Kenya');
  const [story1Location, setStory1Location] = useState('Nairobi, Kenya');
  const [story1Impact, setStory1Impact] = useState('10,000+ trees planted');
  const [story1Participant, setStory1Participant] = useState('Sarah M., 19');
  const [story1Description, setStory1Description] = useState('Led a youth-driven reforestation project that not only planted trees but educated 500+ community members about climate change.');

  const [story2Title, setStory2Title] = useState('Peace Building in Colombia');
  const [story2Location, setStory2Location] = useState('Medellín, Colombia');
  const [story2Impact, setStory2Impact] = useState('200+ youth engaged');
  const [story2Participant, setStory2Participant] = useState('Miguel R., 22');
  const [story2Description, setStory2Description] = useState('Organized interfaith dialogue sessions that brought together young people from different backgrounds to build lasting peace.');

  const [story3Title, setStory3Title] = useState('Digital Skills in India');
  const [story3Location, setStory3Location] = useState('Mumbai, India');
  const [story3Impact, setStory3Impact] = useState('300+ women trained');
  const [story3Participant, setStory3Participant] = useState('Priya S., 20');
  const [story3Description, setStory3Description] = useState('Developed a digital literacy program that helped women start online businesses and achieve financial independence.');

  // CTA state
  const [ctaTitle, setCtaTitle] = useState('Start Your Own Program');
  const [ctaDescription, setCtaDescription] = useState('Have an idea that aligns with the Five Ps? We provide funding, mentorship, and resources to help you turn your vision into reality.');
  const [ctaButton1, setCtaButton1] = useState('Apply for Funding');
  const [ctaButton2, setCtaButton2] = useState('Program Guidelines');

  const programs = [
    {
      title: peopleTitle,
      setTitle: setPeopleTitle,
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      gradientFrom: 'from-primary',
      gradientTo: 'to-primary/80',
      description: peopleDescription,
      setDescription: setPeopleDescription,
      keyActions: [
        'Youth leadership and mentoring programs',
        'Community health workshops and clinics',
        'Education and literacy projects',
        'Gender equity campaigns and advocacy'
      ],
      stats: { 
        participants: peopleStats1, 
        setParticipants: setPeopleStats1,
        communities: peopleStats2, 
        setCommunities: setPeopleStats2,
        countries: peopleStats3,
        setCountries: setPeopleStats3
      }
    },
    {
      title: planetTitle,
      setTitle: setPlanetTitle,
      icon: Globe,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      gradientFrom: 'from-secondary',
      gradientTo: 'to-secondary/80',
      description: planetDescription,
      setDescription: setPlanetDescription,
      keyActions: [
        'Tree-planting campaigns and reforestation',
        'Climate education and awareness programs',
        'Waste reduction and recycling outreach',
        'Renewable energy advocacy and projects'
      ],
      stats: { 
        participants: planetStats1, 
        setParticipants: setPlanetStats1,
        communities: planetStats2, 
        setCommunities: setPlanetStats2,
        countries: planetStats3,
        setCountries: setPlanetStats3
      }
    },
    {
      title: prosperityTitle,
      setTitle: setProsperityTitle,
      icon: TrendingUp,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      gradientFrom: 'from-accent',
      gradientTo: 'to-accent/80',
      description: prosperityDescription,
      setDescription: setProsperityDescription,
      keyActions: [
        'Social entrepreneurship incubators',
        'Digital and vocational training programs',
        'Microfinance and business development',
        'Economic justice dialogues and advocacy'
      ],
      stats: { 
        participants: prosperityStats1, 
        setParticipants: setProsperityStats1,
        communities: prosperityStats2, 
        setCommunities: setProsperityStats2,
        countries: prosperityStats3,
        setCountries: setProsperityStats3
      }
    },
    {
      title: peaceTitle,
      setTitle: setPeaceTitle,
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      gradientFrom: 'from-pink-500',
      gradientTo: 'to-pink-400',
      description: peaceDescription,
      setDescription: setPeaceDescription,
      keyActions: [
        'Peace education circles and workshops',
        'Interfaith dialogue and understanding',
        'Conflict resolution and mediation training',
        'Restorative justice forums and practices'
      ],
      stats: { 
        participants: peaceStats1, 
        setParticipants: setPeaceStats1,
        communities: peaceStats2, 
        setCommunities: setPeaceStats2,
        countries: peaceStats3,
        setCountries: setPeaceStats3
      }
    },
    {
      title: partnershipTitle,
      setTitle: setPartnershipTitle,
      icon: Handshake,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-purple-400',
      description: partnershipDescription,
      setDescription: setPartnershipDescription,
      keyActions: [
        'Multi-stakeholder partnership hubs',
        'Grassroots partnership accelerators',
        'SDG-aligned events and conferences',
        'Cross-sector collaboration initiatives'
      ],
      stats: { 
        participants: partnershipStats1, 
        setParticipants: setPartnershipStats1,
        communities: partnershipStats2, 
        setCommunities: setPartnershipStats2,
        countries: partnershipStats3,
        setCountries: setPartnershipStats3
      }
    }
  ];

  const successStories = [
    {
      title: story1Title,
      setTitle: setStory1Title,
      location: story1Location,
      setLocation: setStory1Location,
      impact: story1Impact,
      setImpact: setStory1Impact,
      participant: story1Participant,
      setParticipant: setStory1Participant,
      description: story1Description,
      setDescription: setStory1Description,
      category: 'Planet'
    },
    {
      title: story2Title,
      setTitle: setStory2Title,
      location: story2Location,
      setLocation: setStory2Location,
      impact: story2Impact,
      setImpact: setStory2Impact,
      participant: story2Participant,
      setParticipant: setStory2Participant,
      description: story2Description,
      setDescription: setStory2Description,
      category: 'Peace'
    },
    {
      title: story3Title,
      setTitle: setStory3Title,
      location: story3Location,
      setLocation: setStory3Location,
      impact: story3Impact,
      setImpact: setStory3Impact,
      participant: story3Participant,
      setParticipant: setStory3Participant,
      description: story3Description,
      setDescription: setStory3Description,
      category: 'Prosperity'
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
            className="text-lg opacity-80 max-w-3xl mx-auto"
            as="p"
          >
            {pageDescription}
          </EditableText>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={program.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={isEven ? '' : 'lg:order-2'}>
                    <Card className="h-full">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className={`p-4 rounded-full ${program.bgColor} mr-4`}>
                            <Icon className={`h-10 w-10 ${program.color}`} />
                          </div>
                          <EditableText
                            value={program.title}
                            onChange={program.setTitle}
                            className="text-3xl font-bold text-gray-800"
                            as="h2"
                          >
                            {program.title}
                          </EditableText>
                        </div>
                        
                        <EditableText
                          value={program.description}
                          onChange={program.setDescription}
                          multiline
                          className="text-gray-600 text-lg mb-8 leading-relaxed"
                          as="p"
                        >
                          {program.description}
                        </EditableText>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          <div className="text-center">
                            <EditableText
                              value={program.stats.participants}
                              onChange={program.stats.setParticipants}
                              className={`text-2xl font-bold ${program.color}`}
                              as="div"
                            >
                              {program.stats.participants}
                            </EditableText>
                            <div className="text-sm text-gray-500">Participants</div>
                          </div>
                          <div className="text-center">
                            <EditableText
                              value={program.stats.communities}
                              onChange={program.stats.setCommunities}
                              className={`text-2xl font-bold ${program.color}`}
                              as="div"
                            >
                              {program.stats.communities}
                            </EditableText>
                            <div className="text-sm text-gray-500">Communities</div>
                          </div>
                          <div className="text-center">
                            <EditableText
                              value={program.stats.countries}
                              onChange={program.stats.setCountries}
                              className={`text-2xl font-bold ${program.color}`}
                              as="div"
                            >
                              {program.stats.countries}
                            </EditableText>
                            <div className="text-sm text-gray-500">Countries</div>
                          </div>
                        </div>

                        <Button className={`bg-gradient-to-r ${program.gradientFrom} ${program.gradientTo} text-white hover:opacity-90`}>
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className={isEven ? '' : 'lg:order-1'}>
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Key Actions</h3>
                      {program.keyActions.map((action, actionIndex) => (
                        <div key={actionIndex} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                          <CheckCircle className={`h-6 w-6 ${program.color} mt-0.5 flex-shrink-0`} />
                          <p className="text-gray-700">{action}</p>
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

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <EditableText
              value={successTitle}
              onChange={setSuccessTitle}
              className="text-4xl font-bold mb-4 text-gray-800"
              as="h2"
            >
              {successTitle}
            </EditableText>
            <EditableText
              value={successSubtitle}
              onChange={setSuccessSubtitle}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              as="p"
            >
              {successSubtitle}
            </EditableText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                        {story.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <EditableText
                        value={story.title}
                        onChange={story.setTitle}
                        className="text-lg font-semibold mb-1"
                        as="h3"
                      >
                        {story.title}
                      </EditableText>
                      <EditableText
                        value={story.location}
                        onChange={story.setLocation}
                        className="text-sm opacity-90"
                        as="p"
                      >
                        {story.location}
                      </EditableText>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <EditableText
                        value={story.impact}
                        onChange={story.setImpact}
                        className="text-primary font-semibold"
                        as="span"
                      >
                        {story.impact}
                      </EditableText>
                      <EditableText
                        value={story.participant}
                        onChange={story.setParticipant}
                        className="text-sm text-gray-500"
                        as="span"
                      >
                        {story.participant}
                      </EditableText>
                    </div>
                    <EditableText
                      value={story.description}
                      onChange={story.setDescription}
                      multiline
                      className="text-gray-600 mb-4 leading-relaxed"
                      as="p"
                    >
                      {story.description}
                    </EditableText>
                    <Button variant="ghost" className="text-primary group-hover:bg-primary/10 w-full">
                      Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-brand">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <EditableText
            value={ctaTitle}
            onChange={setCtaTitle}
            className="text-4xl font-bold mb-6"
            as="h2"
          >
            {ctaTitle}
          </EditableText>
          <EditableText
            value={ctaDescription}
            onChange={setCtaDescription}
            multiline
            className="text-xl opacity-90 mb-8 max-w-2xl mx-auto"
            as="p"
          >
            {ctaDescription}
          </EditableText>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
              <EditableText
                value={ctaButton1}
                onChange={setCtaButton1}
                as="span"
              >
                {ctaButton1}
              </EditableText>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              <EditableText
                value={ctaButton2}
                onChange={setCtaButton2}
                as="span"
              >
                {ctaButton2}
              </EditableText>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
