
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EditableText from '@/components/EditableText';
import AdminNewsletterManager from '@/components/AdminNewsletterManager';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Download, Calendar } from 'lucide-react';
import { useNewsletters } from '@/hooks/useNewsletters';
import { useAuth } from '@/hooks/useAuth';

const Newsletter = () => {
  const { newsletters, loading, subscribeToNewsletter, refetch } = useNewsletters();
  const { isAdmin } = useAuth();
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);

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

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribing(true);
    const result = await subscribeToNewsletter(email);
    if (result.success) {
      setEmail('');
    }
    setSubscribing(false);
  };

  const handleDownload = (newsletter: any) => {
    if (newsletter.pdf_url) {
      window.open(newsletter.pdf_url, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-accent text-accent-foreground py-20">
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

      {/* Admin Management Section */}
      {isAdmin && (
        <section className="py-8 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdminNewsletterManager onUpdate={refetch} />
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-secondary text-secondary-foreground">
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
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email"
                  placeholder="Enter your email address" 
                  className="bg-white text-gray-900 border-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button 
                  type="submit"
                  className="bg-white text-primary hover:bg-gray-100 font-semibold"
                  disabled={subscribing}
                >
                  {subscribing ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </form>
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

          {loading ? (
            <div className="text-center">Loading newsletters...</div>
          ) : (
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
                          {new Date(newsletter.issue_date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long' 
                          })}
                        </div>
                      </div>
                      <Button 
                        variant="outline"
                        onClick={() => handleDownload(newsletter)}
                        disabled={!newsletter.pdf_url}
                      >
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
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Newsletter;
