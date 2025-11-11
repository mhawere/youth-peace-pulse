
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EditableText from '@/components/EditableText';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Globe, TrendingUp, Heart, Handshake, ArrowRight, CheckCircle, Quote } from 'lucide-react';
import { useSuccessStories } from '@/hooks/useSuccessStories';

const Programs = () => {
  const { successStories, loading } = useSuccessStories();
  
  // Page content state
  const [pageTitle, setPageTitle] = useState('Our Programs');
  const [pageSubtitle, setPageSubtitle] = useState('Turning values into action through strategic pillars and focused areas of work');
  const [pageDescription, setPageDescription] = useState('Every initiative aligns with the UN Sustainable Development Goals and reflects our commitment to empowering youth and communities worldwide through measurable impact.');

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

  // Color schemes for story cards
  const colorSchemes = [
    { colorFrom: 'from-primary', colorTo: 'to-primary/80' },
    { colorFrom: 'from-secondary', colorTo: 'to-secondary/80' },
    { colorFrom: 'from-accent', colorTo: 'to-accent/80' },
    { colorFrom: 'from-purple-500', colorTo: 'to-purple-400' },
    { colorFrom: 'from-pink-500', colorTo: 'to-pink-400' },
    { colorFrom: 'from-indigo-500', colorTo: 'to-indigo-400' }
  ];

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

  // Success story card component
  const StoryCard = ({ title, quote, author, colorFrom, colorTo, delay, image, id }: any) => (
    <Card className="group card-hover shadow-medium overflow-hidden animate-fade-in-up" style={{animationDelay: delay}}>
      <CardContent className="p-0">
        <div className={`h-56 bg-gradient-to-br ${colorFrom} ${colorTo} relative overflow-hidden`}>
          {image && (
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-white/20 text-white">
              Featured
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm opacity-90">{author}</p>
          </div>
        </div>
        <div className="p-8">
          <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />
          <p className="text-muted-foreground italic mb-6 leading-relaxed text-lg">{quote}</p>
          <Link to={`/news/success-stories/${id}`}>
            <Button variant="ghost" className="text-primary group-hover:bg-primary/10 hover-lift transition-all duration-200 p-0">
              Read Full Story <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );

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

      {/* Youth-Led Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Youth-Led Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turning Vision into Impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Climate Labs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Youth-driven environmental action and climate education programs that create sustainable communities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
              <CardContent className="p-8 text-center">
                <Heart className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Interfaith Dialogues</h3>
                <p className="text-gray-600 leading-relaxed">
                  Building bridges across religious and cultural divides through open conversation and mutual understanding.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Education for Peace</h3>
                <p className="text-gray-600 leading-relaxed">
                  Empowering communities through knowledge, skills training, and peace-building education.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="p-8 text-center">
                <Handshake className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community Action Projects</h3>
                <p className="text-gray-600 leading-relaxed">
                  Grassroots initiatives that address local challenges and create lasting positive change.
                </p>
              </CardContent>
            </Card>
          </div>
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
            {loading ? (
              <div className="col-span-3 text-center py-12">
                <p className="text-muted-foreground">Loading success stories...</p>
              </div>
            ) : successStories.length > 0 ? (
              successStories.slice(0, 3).map((story, index) => (
                <StoryCard 
                  key={story.id} 
                  id={story.id}
                  title={story.title}
                  quote={story.summary || story.content}
                  author={story.participant_name}
                  image={story.featured_image_url}
                  colorFrom={colorSchemes[index % colorSchemes.length].colorFrom}
                  colorTo={colorSchemes[index % colorSchemes.length].colorTo}
                  delay={`${0.1 * (index + 1)}s`}
                />
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-muted-foreground">No success stories available yet.</p>
              </div>
            )}
          </div>

          {/* View All Stories Button */}
          {successStories.length > 3 && (
            <div className="text-center mt-12">
              <Link to="/news/success-stories">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  View All Success Stories <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-brand">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <EditableText
            value={ctaTitle}
            onChange={setCtaTitle}
            className="text-4xl md:text-5xl font-bold mb-6"
            as="h2"
          >
            {ctaTitle}
          </EditableText>
          <EditableText
            value={ctaDescription}
            onChange={setCtaDescription}
            multiline
            className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed"
            as="p"
          >
            {ctaDescription}
          </EditableText>
          <div className="text-center">
            <p className="text-2xl font-semibold mb-3">Email us on</p>
            <a 
              href="mailto:info@ypeace.org" 
              className="text-3xl md:text-4xl font-bold hover:opacity-80 transition-opacity"
            >
              info@ypeace.org
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
