
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Globe, TrendingUp, Heart, Handshake, ArrowRight, CheckCircle } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: 'People',
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      gradientFrom: 'from-primary',
      gradientTo: 'to-primary/80',
      description: 'We champion equity, dignity, and opportunity for all through comprehensive programs that empower individuals and strengthen communities.',
      keyActions: [
        'Youth leadership and mentoring programs',
        'Community health workshops and clinics',
        'Education and literacy projects',
        'Gender equity campaigns and advocacy'
      ],
      stats: { participants: '2,500+', communities: '15', countries: '8' }
    },
    {
      title: 'Planet',
      icon: Globe,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      gradientFrom: 'from-secondary',
      gradientTo: 'to-secondary/80',
      description: 'We promote environmental stewardship and climate action through education, advocacy, and hands-on conservation efforts.',
      keyActions: [
        'Tree-planting campaigns and reforestation',
        'Climate education and awareness programs',
        'Waste reduction and recycling outreach',
        'Renewable energy advocacy and projects'
      ],
      stats: { participants: '1,800+', communities: '12', countries: '6' }
    },
    {
      title: 'Prosperity',
      icon: TrendingUp,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      gradientFrom: 'from-accent',
      gradientTo: 'to-accent/80',
      description: 'We foster economic empowerment and innovation through skills development, entrepreneurship support, and advocacy for economic justice.',
      keyActions: [
        'Social entrepreneurship incubators',
        'Digital and vocational training programs',
        'Microfinance and business development',
        'Economic justice dialogues and advocacy'
      ],
      stats: { participants: '1,200+', communities: '10', countries: '7' }
    },
    {
      title: 'Peace',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      gradientFrom: 'from-pink-500',
      gradientTo: 'to-pink-400',
      description: 'We build inclusive societies through dialogue, conflict resolution, and community healing initiatives that promote lasting peace.',
      keyActions: [
        'Peace education circles and workshops',
        'Interfaith dialogue and understanding',
        'Conflict resolution and mediation training',
        'Restorative justice forums and practices'
      ],
      stats: { participants: '900+', communities: '8', countries: '5' }
    },
    {
      title: 'Partnership',
      icon: Handshake,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-purple-400',
      description: 'We create global networks and collaborative frameworks that connect diverse stakeholders for maximum collective impact.',
      keyActions: [
        'Multi-stakeholder partnership hubs',
        'Grassroots partnership accelerators',
        'SDG-aligned events and conferences',
        'Cross-sector collaboration initiatives'
      ],
      stats: { participants: '3,000+', communities: '25', countries: '12' }
    }
  ];

  const successStories = [
    {
      title: 'Climate Action in Kenya',
      location: 'Nairobi, Kenya',
      impact: '10,000+ trees planted',
      participant: 'Sarah M., 19',
      description: 'Led a youth-driven reforestation project that not only planted trees but educated 500+ community members about climate change.',
      category: 'Planet'
    },
    {
      title: 'Peace Building in Colombia',
      location: 'Medellín, Colombia',
      impact: '200+ youth engaged',
      participant: 'Miguel R., 22',
      description: 'Organized interfaith dialogue sessions that brought together young people from different backgrounds to build lasting peace.',
      category: 'Peace'
    },
    {
      title: 'Digital Skills in India',
      location: 'Mumbai, India',
      impact: '300+ women trained',
      participant: 'Priya S., 20',
      description: 'Developed a digital literacy program that helped women start online businesses and achieve financial independence.',
      category: 'Prosperity'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="gradient-brand py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Programs</h1>
          <p className="text-xl md:text-2xl opacity-90 mb-8">
            Turning values into action through the Five Ps framework
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Every initiative aligns with the UN's Sustainable Development Goals and reflects 
            our core belief in empowering youth and communities worldwide.
          </p>
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
                          <h2 className="text-3xl font-bold text-gray-800">{program.title}</h2>
                        </div>
                        
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                          {program.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                          <div className="text-center">
                            <div className={`text-2xl font-bold ${program.color}`}>{program.stats.participants}</div>
                            <div className="text-sm text-gray-500">Participants</div>
                          </div>
                          <div className="text-center">
                            <div className={`text-2xl font-bold ${program.color}`}>{program.stats.communities}</div>
                            <div className="text-sm text-gray-500">Communities</div>
                          </div>
                          <div className="text-center">
                            <div className={`text-2xl font-bold ${program.color}`}>{program.stats.countries}</div>
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
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the youth and community leaders transforming their regions through Y-Peace programs
            </p>
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
                      <h3 className="text-lg font-semibold mb-1">{story.title}</h3>
                      <p className="text-sm opacity-90">{story.location}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-primary font-semibold">{story.impact}</span>
                      <span className="text-sm text-gray-500">{story.participant}</span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {story.description}
                    </p>
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
          <h2 className="text-4xl font-bold mb-6">Start Your Own Program</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Have an idea that aligns with the Five Ps? We provide funding, mentorship, 
            and resources to help you turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4">
              Apply for Funding
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
              Program Guidelines
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;
