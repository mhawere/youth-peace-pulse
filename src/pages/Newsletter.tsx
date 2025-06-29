
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Download, Calendar } from 'lucide-react';

const Newsletter = () => {
  const newsletters = [
    {
      id: 1,
      title: "December 2024 - Year in Review",
      date: "December 2024",
      description: "A comprehensive look at our achievements this year, featuring success stories from young leaders worldwide.",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "November 2024 - Climate Action Special",
      date: "November 2024",
      description: "Spotlight on youth-led climate initiatives and how young activists are driving environmental change.",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "October 2024 - Partnership Highlights",
      date: "October 2024",
      description: "Exploring new partnerships and collaborations that are expanding our global impact.",
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Newsletter
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Stay connected with monthly updates from the Y-Peace community
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-brand text-white">
            <CardHeader className="text-center">
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <CardTitle className="text-3xl mb-4">Subscribe to Our Newsletter</CardTitle>
              <p className="text-lg text-gray-100">
                Get monthly updates on our programs, success stories, and opportunities for youth engagement
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email address" 
                  className="bg-white text-gray-900 border-0"
                />
                <Button className="bg-white text-primary hover:bg-gray-100 font-semibold">
                  Subscribe
                </Button>
              </div>
              <p className="text-center text-sm text-gray-200 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Past Newsletters */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Past Newsletters
            </h2>
            <p className="text-lg text-gray-600">
              Catch up on previous editions of our monthly newsletter
            </p>
          </div>

          <div className="space-y-6">
            {newsletters.map((newsletter) => (
              <Card key={newsletter.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-primary mb-2">
                        {newsletter.title}
                      </CardTitle>
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {newsletter.date}
                      </div>
                    </div>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    {newsletter.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;
