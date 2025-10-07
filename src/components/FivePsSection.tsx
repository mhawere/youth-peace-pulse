
import { Users, Globe, TrendingUp, Heart, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FivePsSection = () => {
  const strategicPillars = [
    {
      title: 'Advocacy & Voice',
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10 hover:bg-primary/20',
      description: 'Strengthen the role of youth in global and local peace and climate discourse—through international convenings, interfaith dialogue, policy engagement, and awareness campaigns.',
      sdgs: 'SDGs: 16, 10, 13, 17',
      actions: ['International convenings', 'Interfaith dialogue', 'Policy engagement', 'Awareness campaigns']
    },
    {
      title: 'Global Mobilization & Education',
      icon: Globe,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10 hover:bg-secondary/20',
      description: 'Equip young people with the knowledge, skills, and platforms to lead as peacebuilders and climate stewards—via leadership academies, research, exchanges, and digital learning.',
      sdgs: 'SDGs: 4, 13, 16, 17',
      actions: ['Leadership academies', 'Research programs', 'Youth exchanges', 'Digital learning platforms']
    },
    {
      title: 'Volunteering & Community Engagement',
      icon: Heart,
      color: 'text-accent',
      bgColor: 'bg-accent/10 hover:bg-accent/20',
      description: 'Turn youth activism into tangible community impact through programs in health, education, humanitarian response, and environmental protection.',
      sdgs: 'SDGs: 3, 4, 11, 13',
      actions: ['Health programs', 'Education initiatives', 'Humanitarian response', 'Environmental protection']
    }
  ];

  const areasOfWork = [
    {
      title: 'Education & Opportunity',
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 hover:bg-purple-100',
      description: 'Develop skills and expand access to education and mentorship so youth can lead with purpose and create lasting community change.',
      sdgs: 'SDGs: 4, 1, 5, 8, 10, 17'
    },
    {
      title: 'Food, Health & Nutrition',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50 hover:bg-pink-100',
      description: 'Advance youth physical and mental well-being through nutrition, clean water, sanitation, and health education.',
      sdgs: 'SDGs: 2, 3, 6, 10, 17'
    },
    {
      title: 'Environment & Community',
      icon: Globe,
      color: 'text-green-600',
      bgColor: 'bg-green-50 hover:bg-green-100',
      description: 'Promote safe, healthy, and climate-resilient communities through youth-led environmental action and social cohesion.',
      sdgs: 'SDGs: 11, 13, 14, 15, 16, 17'
    },
    {
      title: 'Innovation & Sustainability',
      icon: Handshake,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
      description: 'Invest in creative, community-led, and youth-driven solutions that generate lasting peace and prosperity.',
      sdgs: 'SDGs: 1–17'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strategic Pillars */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Our Strategic Pillars
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three core pillars guide our work in empowering youth and building peaceful, sustainable communities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {strategicPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card 
                key={pillar.title} 
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${pillar.bgColor} border-0`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-full ${pillar.bgColor.replace('hover:', '').replace('/10', '/20')} mr-4`}>
                      <Icon className={`h-8 w-8 ${pillar.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{pillar.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  <p className="text-sm font-semibold text-gray-700 mb-4">{pillar.sdgs}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm">Key Actions:</h4>
                    <ul className="space-y-1">
                      {pillar.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 rounded-full ${pillar.color.replace('text-', 'bg-')} mr-3 flex-shrink-0`}></div>
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Areas of Work */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Our Areas of Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four interconnected areas where we create lasting impact through youth-led initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {areasOfWork.map((area) => {
            const Icon = area.icon;
            return (
              <Card 
                key={area.title} 
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${area.bgColor} border-0`}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className={`p-3 rounded-full ${area.bgColor.replace('hover:', '').replace('/50', '/100')} mb-4`}>
                      <Icon className={`h-8 w-8 ${area.color}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{area.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {area.description}
                  </p>
                  
                  <p className="text-xs font-semibold text-gray-700">{area.sdgs}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* SDGs Reference */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Connected to All 17 UN SDGs</h3>
            <p className="text-gray-600 max-w-2xl">
              All Y-Peace initiatives are aligned with the UN Sustainable Development Goals (SDGs) and guided by Results-Based Management (RBM) principles—ensuring that every investment yields measurable outcomes in peace, equity, sustainability, and inclusion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FivePsSection;
