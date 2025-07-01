
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EditableText from '@/components/EditableText';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Calendar, MapPin } from 'lucide-react';

const PressReleases = () => {
  // State for page content
  const [pageTitle, setPageTitle] = useState("Press Releases");
  const [pageSubtitle, setPageSubtitle] = useState("Latest news and announcements from Y-Peace");

  // State for press releases
  const [press1Title, setPress1Title] = useState("Y-Peace Launches Global Youth Climate Initiative");
  const [press1Date, setPress1Date] = useState("December 20, 2024");
  const [press1Location, setPress1Location] = useState("Global");
  const [press1Summary, setPress1Summary] = useState("Y-Peace announces a groundbreaking initiative to empower 10,000 young climate leaders across 50 countries by 2026.");

  const [press2Title, setPress2Title] = useState("Partnership Announced with UN Youth Envoy");
  const [press2Date, setPress2Date] = useState("December 15, 2024");
  const [press2Location, setPress2Location] = useState("New York, USA");
  const [press2Summary, setPress2Summary] = useState("Strategic partnership will amplify youth voices in global policy discussions and sustainable development initiatives.");

  const [press3Title, setPress3Title] = useState("Y-Peace Receives International Recognition Award");
  const [press3Date, setPress3Date] = useState("December 10, 2024");
  const [press3Location, setPress3Location] = useState("Geneva, Switzerland");
  const [press3Summary, setPress3Summary] = useState("Organization honored for outstanding contribution to youth empowerment and sustainable development goals achievement.");

  const [press4Title, setPress4Title] = useState("New Educational Platform Reaches 1 Million Students");
  const [press4Date, setPress4Date] = useState("November 28, 2024");
  const [press4Location, setPress4Location] = useState("Global");
  const [press4Summary, setPress4Summary] = useState("Y-Peace's innovative online learning platform achieves milestone of reaching one million students worldwide.");

  const pressReleases = [
    {
      id: 1,
      title: press1Title,
      setTitle: setPress1Title,
      date: press1Date,
      setDate: setPress1Date,
      location: press1Location,
      setLocation: setPress1Location,
      summary: press1Summary,
      setSummary: setPress1Summary,
      downloadUrl: "#"
    },
    {
      id: 2,
      title: press2Title,
      setTitle: setPress2Title,
      date: press2Date,
      setDate: setPress2Date,
      location: press2Location,
      setLocation: setPress2Location,
      summary: press2Summary,
      setSummary: setPress2Summary,
      downloadUrl: "#"
    },
    {
      id: 3,
      title: press3Title,
      setTitle: setPress3Title,
      date: press3Date,
      setDate: setPress3Date,
      location: press3Location,
      setLocation: setPress3Location,
      summary: press3Summary,
      setSummary: setPress3Summary,
      downloadUrl: "#"
    },
    {
      id: 4,
      title: press4Title,
      setTitle: setPress4Title,
      date: press4Date,
      setDate: setPress4Date,
      location: press4Location,
      setLocation: setPress4Location,
      summary: press4Summary,
      setSummary: setPress4Summary,
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
            <EditableText
              value={pageTitle}
              onChange={setPageTitle}
              className="text-4xl md:text-6xl font-bold mb-6"
              as="h1"
            >
              {pageTitle}
            </EditableText>
            <EditableText
              value={pageSubtitle}
              onChange={setPageSubtitle}
              className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto"
              as="p"
            >
              {pageSubtitle}
            </EditableText>
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
                        <EditableText
                          value={release.date}
                          onChange={release.setDate}
                          as="span"
                        >
                          {release.date}
                        </EditableText>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <EditableText
                          value={release.location}
                          onChange={release.setLocation}
                          as="span"
                        >
                          {release.location}
                        </EditableText>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                  <CardTitle className="text-2xl text-primary">
                    <EditableText
                      value={release.title}
                      onChange={release.setTitle}
                      as="span"
                    >
                      {release.title}
                    </EditableText>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <EditableText
                    value={release.summary}
                    onChange={release.setSummary}
                    multiline
                    className="text-gray-700 text-lg leading-relaxed"
                    as="p"
                  >
                    {release.summary}
                  </EditableText>
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
