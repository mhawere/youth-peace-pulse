
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, MessageSquare, Heart, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Globe,
      title: 'Unity in Diversity',
      description: 'Embracing and celebrating the richness of diverse cultures, beliefs, and backgrounds worldwide.'
    },
    {
      icon: Lightbulb,
      title: 'Empowerment',
      description: 'Equipping individuals and communities with the tools, knowledge, and resources to drive positive change.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong partnerships across sectors, cultures, and generations to address global challenges.'
    },
    {
      icon: Heart,
      title: 'Sustainability',
      description: 'Ensuring environmental, economic, and social well-being for current and future generations.'
    },
    {
      icon: MessageSquare,
      title: 'Peace and Justice',
      description: 'Advocating for peaceful coexistence, human rights, and just societies for all people everywhere.'
    },
    {
      icon: Target,
      title: 'Legacy',
      description: 'Leaving a lasting, positive impact on future generations through transformative action today.'
    }
  ];

  const taglines = [
    'Together for change. Powered by youth.',
    'Where Peace Meets Action.',
    'Global Goals. Local Power.',
    'Backing the Voices That Move the World.',
    'Mobilizing Hope. Funding Impact.'
  ];

  const keyMessages = [
    'Y Peace is a global movement empowering youth to lead the charge on urgent issues.',
    'We don\'t just advocate — we activate.',
    'Our mission is rooted in the SDGs, but driven by people.',
    'We serve as a bridge between global donors and local solutions.',
    'Peace is more than a goal. It\'s a movement.'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="gradient-brand py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Y-Peace</h1>
          <p className="text-xl md:text-2xl opacity-90">
            A global movement powered by youth and driven by purpose
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide everything we do and shape how we work with communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Target className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Mission Statement</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To mobilize and empower young people worldwide by connecting them to the resources, platforms, 
                  and partnerships needed to advance the United Nations Sustainable Development Goals through 
                  advocacy, funding, and community-led action.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Globe className="h-12 w-12 text-secondary mb-4" />
                  <h2 className="text-3xl font-bold text-gray-800">Vision Statement</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  A peaceful and united world where youth lead the way in solving the planet's most urgent challenges—from 
                  climate action to social justice—by turning shared values into global impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Messaging Framework */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Message</h2>
            <p className="text-xl text-gray-600">How we communicate our purpose and impact to the world</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Taglines */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Tagline Options</h3>
              <div className="space-y-4">
                {taglines.map((tagline, index) => (
                  <div key={index} className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                    <p className="text-lg font-medium text-gray-700">"{tagline}"</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Messages */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Key Messages</h3>
              <div className="space-y-4">
                {keyMessages.map((message, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Messaging Framework */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-primary mb-2">Who We Are</h4>
                <p className="text-sm text-gray-700">A global movement powered by youth and driven by purpose.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/10 border-secondary/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-secondary mb-2">What We Do</h4>
                <p className="text-sm text-gray-700">Platform and funding mechanism for SDG-aligned grassroots organizations.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-accent/10 border-accent/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-accent mb-2">How We Do It</h4>
                <p className="text-sm text-gray-700">Through partnerships, mobilization, funding, and storytelling.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-pink-50 border-pink-200">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-pink-600 mb-2">Why It Matters</h4>
                <p className="text-sm text-gray-700">Bridging the gap between resources and local initiatives.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the diverse leaders driving Y-Peace forward with expertise and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">CEO & Founder</h3>
                <p className="text-gray-600 mb-4">Leading strategic vision and global partnerships</p>
                <p className="text-sm text-gray-500">Background in international development and youth advocacy</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-secondary to-secondary/80 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Target className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">President</h3>
                <p className="text-gray-600 mb-4">Overseeing program implementation and community engagement</p>
                <p className="text-sm text-gray-500">Expert in sustainable development and project management</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-accent to-accent/80 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Board Members</h3>
                <p className="text-gray-600 mb-4">Diverse expertise in governance, finance, and social impact</p>
                <p className="text-sm text-gray-500">Committed to transparent and effective leadership</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
