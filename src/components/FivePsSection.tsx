
import { Users, Globe, TrendingUp, Heart, Handshake } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FivePsSection = () => {
  const pillars = [
    {
      title: 'People',
      icon: Users,
      color: 'text-primary',
      bgColor: 'bg-primary/10 hover:bg-primary/20',
      description: 'Ensuring health, education, and equality for all. Empowering youth through leadership programs and community health initiatives.',
      actions: ['Youth leadership programs', 'Community health workshops', 'Education initiatives', 'Gender equity campaigns']
    },
    {
      title: 'Planet',
      icon: Globe,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10 hover:bg-secondary/20',
      description: 'Advocating for environmental protection and sustainable practices to preserve our planet for future generations.',
      actions: ['Tree-planting campaigns', 'Climate education', 'Waste reduction programs', 'Renewable energy advocacy']
    },
    {
      title: 'Prosperity',
      icon: TrendingUp,
      color: 'text-accent',
      bgColor: 'bg-accent/10 hover:bg-accent/20',
      description: 'Encouraging inclusive economic growth and innovation that benefits everyone, everywhere.',
      actions: ['Social entrepreneurship', 'Digital training', 'Vocational skills', 'Economic justice dialogues']
    },
    {
      title: 'Peace',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50 hover:bg-pink-100',
      description: 'Building just and inclusive societies free from violence through dialogue and understanding.',
      actions: ['Peace education circles', 'Interfaith initiatives', 'Conflict resolution', 'Restorative justice forums']
    },
    {
      title: 'Partnership',
      icon: Handshake,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 hover:bg-purple-100',
      description: 'Collaborating across sectors to achieve shared goals and create lasting global impact.',
      actions: ['Global networks', 'Partnership accelerators', 'SDG-aligned events', 'Cross-sector collaboration']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            The Five Ps Framework
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our approach is built on the UN's five pillars for achieving all 17 Sustainable Development Goals by 2030.
            Each pillar represents a critical pathway to global transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
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
                    <h3 className="text-2xl font-bold text-gray-800">{pillar.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Actions:</h4>
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

        {/* SDGs Reference */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Connected to All 17 UN SDGs</h3>
            <p className="text-gray-600 max-w-2xl">
              From No Poverty to Partnerships for the Goals, our Five Ps framework ensures comprehensive coverage 
              of all United Nations Sustainable Development Goals, creating a unified approach to global change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FivePsSection;
