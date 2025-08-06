import React, { useState } from 'react';
import { AdminLayout } from '@/components/AdminLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import VisitMap from '@/components/VisitMap';
import { 
  ExternalLink, 
  Search, 
  BarChart3,
  Target, 
  Globe, 
  Map, 
  Tags, 
  LinkIcon,
  FileText,
  TrendingUp,
  Zap
} from 'lucide-react';

const AdminSEO = () => {
  const [seoNotes, setSeoNotes] = useState('');

  const seoTools = [
    {
      name: 'Google Search Console',
      description: 'Monitor and maintain your site\'s presence in Google Search results',
      url: 'https://search.google.com/search-console',
      icon: Search,
      category: 'analytics',
      free: true,
      embeddable: false
    },
    {
      name: 'Google Analytics',
      description: 'Detailed insights about your website traffic and user behavior',
      url: 'https://analytics.google.com',
      icon: BarChart3,
      category: 'analytics',
      free: true,
      embeddable: false
    },
    {
      name: 'Ubersuggest',
      description: 'Keyword research, competitor analysis, and SEO audits',
      url: 'https://neilpatel.com/ubersuggest',
      icon: Target,
      category: 'research',
      free: true,
      embeddable: false
    },
    {
      name: 'SEMrush',
      description: 'Comprehensive SEO toolkit for keyword research and competitor analysis',
      url: 'https://www.semrush.com',
      icon: TrendingUp,
      category: 'research',
      free: false,
      embeddable: false
    },
    {
      name: 'Google Keyword Planner',
      description: 'Find keywords and get search volume data from Google Ads',
      url: 'https://ads.google.com/home/tools/keyword-planner',
      icon: Zap,
      category: 'research',
      free: true,
      embeddable: false
    },
    {
      name: 'XML Sitemap Generator',
      description: 'Create and validate XML sitemaps for search engines',
      url: 'https://www.xml-sitemaps.com',
      icon: Map,
      category: 'technical',
      free: true,
      embeddable: false
    },
    {
      name: 'Meta Tags Analyzer',
      description: 'Preview and analyze meta tags for social media and search engines',
      url: 'https://metatags.io',
      icon: Tags,
      category: 'technical',
      free: true,
      embeddable: false
    },
    {
      name: 'Broken Link Checker',
      description: 'Find and fix broken links on your website',
      url: 'https://www.brokenlinkcheck.com',
      icon: LinkIcon,
      category: 'technical',
      free: true,
      embeddable: false
    }
  ];

  const categories = {
    analytics: 'Analytics & Monitoring',
    research: 'Keyword Research',
    technical: 'Technical SEO'
  };

  const handleToolOpen = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">SEO Tools</h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive SEO toolkit to optimize your website's search engine performance
            </p>
          </div>
        </div>

        <Tabs defaultValue="tools" className="space-y-4">
          <TabsList>
            <TabsTrigger value="tools">SEO Tools</TabsTrigger>
            <TabsTrigger value="analytics">Visit Analytics</TabsTrigger>
            <TabsTrigger value="notes">SEO Notes</TabsTrigger>
          </TabsList>

          <TabsContent value="tools" className="space-y-6">
            {Object.entries(categories).map(([categoryKey, categoryName]) => (
              <div key={categoryKey} className="space-y-4">
                <h2 className="text-xl font-semibold text-foreground">{categoryName}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {seoTools
                    .filter(tool => tool.category === categoryKey)
                    .map((tool) => {
                      const IconComponent = tool.icon;
                      return (
                        <Card key={tool.name} className="hover:shadow-lg transition-shadow duration-200">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <IconComponent className="h-5 w-5 text-primary" />
                                <CardTitle className="text-lg">{tool.name}</CardTitle>
                              </div>
                              <div className="flex space-x-1">
                                {tool.free && (
                                  <Badge variant="secondary" className="text-xs">
                                    Free
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <CardDescription className="text-sm">
                              {tool.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <Button
                              onClick={() => handleToolOpen(tool.url)}
                              className="w-full"
                              variant="outline"
                            >
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Open Tool
                            </Button>
                          </CardContent>
                        </Card>
                      );
                    })}
                </div>
              </div>
            ))}

            {/* Quick Actions */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center">
                      <Globe className="h-4 w-4 mr-2 text-primary" />
                      Domain Authority
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button
                      onClick={() => handleToolOpen('https://www.google.com/search?q=site:' + window.location.hostname)}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Check Site Index
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center">
                      <FileText className="h-4 w-4 mr-2 text-primary" />
                      Page Speed
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button
                      onClick={() => handleToolOpen('https://pagespeed.web.dev/?url=' + encodeURIComponent(window.location.origin))}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Test Speed
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center">
                      <Map className="h-4 w-4 mr-2 text-primary" />
                      Sitemap
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button
                      onClick={() => handleToolOpen(window.location.origin + '/sitemap.xml')}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      View Sitemap
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow duration-200">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center">
                      <Tags className="h-4 w-4 mr-2 text-primary" />
                      Meta Tags
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button
                      onClick={() => handleToolOpen('https://metatags.io/?url=' + encodeURIComponent(window.location.origin))}
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      Analyze Meta
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <VisitMap />
          </TabsContent>

          <TabsContent value="notes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>SEO Notes & Tips</CardTitle>
                <CardDescription>
                  Keep track of your SEO strategies, observations, and improvement notes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Add your SEO notes, strategies, and observations here..."
                  value={seoNotes}
                  onChange={(e) => setSeoNotes(e.target.value)}
                  className="min-h-[200px]"
                />
                <div className="mt-4">
                  <Button onClick={() => localStorage.setItem('seo-notes', seoNotes)}>
                    Save Notes
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* SEO Tips */}
            <Card>
              <CardHeader>
                <CardTitle>SEO Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Content Quality:</strong> Create valuable, original content that answers user questions and provides genuine value.
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Page Speed:</strong> Optimize images, minimize HTTP requests, and use efficient hosting to improve load times.
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Mobile-First:</strong> Ensure your website is fully responsive and provides excellent mobile user experience.
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Meta Tags:</strong> Write compelling titles and descriptions that include target keywords naturally.
                  </div>
                  <div className="p-3 bg-muted rounded-lg">
                    <strong>Internal Linking:</strong> Create a logical site structure with strategic internal links to improve navigation and SEO.
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default AdminSEO;