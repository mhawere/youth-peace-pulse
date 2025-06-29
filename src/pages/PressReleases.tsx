
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Calendar, MapPin } from 'lucide-react';

const PressReleases = () => {
  const pressReleases = [
    {
      id: 1,
      title: "Y-Peace Launches Global Youth Climate Initiative",
      date: "December 20, 2024",
      location: "Global",
      summary: "Y-Peace announces a groundbreaking initiative to empower 10,000 young climate leaders across 50 countries by 2026.",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Partnership Announced with UN Youth Envoy",
      date: "December 15, 2024",
      location: "New York, USA",
      summary: "Strategic partnership will amplify youth voices in global policy discussions and sustainable development initiatives.",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Y-Peace Receives International Recognition Award",
      date: "December 10, 2024",
      location: "Geneva, Switzerland",
      summary: "Organization honored for outstanding contribution to youth empowerment and sustainable development goals achievement.",
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "New Educational Platform Reaches 1 Million Students",
      date: "November 28, 2024",
      location: "Global",
      summary: "Y-Peace's innovative online learning platform achieves milestone of reaching one million students worldwide.",
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Press Releases
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Latest news and announcements from Y-Peace
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {pressReleases.map((release) => (
              <Card key={release.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {release.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {release.location}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                  <CardTitle className="text-2xl text-primary">
                    {release.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {release.summary}
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

export default PressReleases;
