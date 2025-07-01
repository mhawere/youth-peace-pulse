
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EditableText from '@/components/EditableText';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Download, Calendar } from 'lucide-react';

const Newsletter = () => {
  // State for page content
  const [pageTitle, setPageTitle] = useState("Newsletter");
  const [pageSubtitle, setPageSubtitle] = useState("Stay connected with monthly updates from the Y-Peace community");
  
  // State for signup section
  const [signupTitle, setSignupTitle] = useState("Subscribe to Our Newsletter");
  const [signupDescription, setSignupDescription] = useState("Get monthly updates on our programs, success stories, and opportunities for youth engagement");
  const [privacyText, setPrivacyText] = useState("We respect your privacy. Unsubscribe at any time.");
  
  // State for past newsletters section
  const [pastTitle, setPastTitle] = useState("Past Newsletters");
  const [pastDescription, setPastDescription] = useState("Catch up on previous editions of our monthly newsletter");
  
  // State for newsletter items
  const [newsletter1Title, setNewsletter1Title] = useState("December 2024 - Year in Review");
  const [newsletter1Date, setNewsletter1Date] = useState("December 2024");
  const [newsletter1Description, setNewsletter1Description] = useState("A comprehensive look at our achievements this year, featuring success stories from young leaders worldwide.");
  
  const [newsletter2Title, setNewsletter2Title] = useState("November 2024 - Climate Action Special");
  const [newsletter2Date, setNewsletter2Date] = useState("November 2024");
  const [newsletter2Description, setNewsletter2Description] = useState("Spotlight on youth-led climate initiatives and how young activists are driving environmental change.");
  
  const [newsletter3Title, setNewsletter3Title] = useState("October 2024 - Partnership Highlights");
  const [newsletter3Date, setNewsletter3Date] = useState("October 2024");
  const [newsletter3Description, setNewsletter3Description] = useState("Exploring new partnerships and collaborations that are expanding our global impact.");

  const newsletters = [
    {
      id: 1,
      title: newsletter1Title,
      setTitle: setNewsletter1Title,
      date: newsletter1Date,
      setDate: setNewsletter1Date,
      description: newsletter1Description,
      setDescription: setNewsletter1Description,
      downloadUrl: "#"
    },
    {
      id: 2,
      title: newsletter2Title,
      setTitle: setNewsletter2Title,
      date: newsletter2Date,
      setDate: setNewsletter2Date,
      description: newsletter2Description,
      setDescription: setNewsletter2Description,
      downloadUrl: "#"
    },
    {
      id: 3,
      title: newsletter3Title,
      setTitle: setNewsletter3Title,
      date: newsletter3Date,
      setDate: setNewsletter3Date,
      description: newsletter3Description,
      setDescription: setNewsletter3Description,
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

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="gradient-brand text-white">
            <CardHeader className="text-center">
              <Mail className="h-12 w-12 mx-auto mb-4" />
              <CardTitle className="text-3xl mb-4">
                <EditableText
                  value={signupTitle}
                  onChange={setSignupTitle}
                  as="span"
                >
                  {signupTitle}
                </EditableText>
              </CardTitle>
              <EditableText
                value={signupDescription}
                onChange={setSignupDescription}
                multiline
                className="text-lg text-gray-100"
                as="p"
              >
                {signupDescription}
              </EditableText>
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
              <EditableText
                value={privacyText}
                onChange={setPrivacyText}
                className="text-center text-sm text-gray-200 mt-4"
                as="p"
              >
                {privacyText}
              </EditableText>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Past Newsletters */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <EditableText
              value={pastTitle}
              onChange={setPastTitle}
              className="text-3xl font-bold text-gray-900 mb-4"
              as="h2"
            >
              {pastTitle}
            </EditableText>
            <EditableText
              value={pastDescription}
              onChange={setPastDescription}
              className="text-lg text-gray-600"
              as="p"
            >
              {pastDescription}
            </EditableText>
          </div>

          <div className="space-y-6">
            {newsletters.map((newsletter) => (
              <Card key={newsletter.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl text-primary mb-2">
                        <EditableText
                          value={newsletter.title}
                          onChange={newsletter.setTitle}
                          as="span"
                        >
                          {newsletter.title}
                        </EditableText>
                      </CardTitle>
                      <div className="flex items-center text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        <EditableText
                          value={newsletter.date}
                          onChange={newsletter.setDate}
                          as="span"
                        >
                          {newsletter.date}
                        </EditableText>
                      </div>
                    </div>
                    <Button variant="outline">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <EditableText
                    value={newsletter.description}
                    onChange={newsletter.setDescription}
                    multiline
                    className="text-gray-700"
                    as="p"
                  >
                    {newsletter.description}
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

export default Newsletter;
