
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EditableText from '@/components/EditableText';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  // State for page content
  const [pageTitle, setPageTitle] = useState("Y-Peace Blog");
  const [pageSubtitle, setPageSubtitle] = useState("Stories of change, insights on youth leadership, and the latest updates from our global community");

  // State for blog posts
  const [post1Title, setPost1Title] = useState("Youth Leadership in Climate Action");
  const [post1Excerpt, setPost1Excerpt] = useState("Exploring how young leaders are driving climate change initiatives across the globe through innovative solutions and community engagement.");
  const [post1Author, setPost1Author] = useState("Sarah Johnson");
  const [post1Date, setPost1Date] = useState("December 15, 2024");
  const [post1ReadTime, setPost1ReadTime] = useState("5 min read");
  const [post1Category, setPost1Category] = useState("Climate Action");

  const [post2Title, setPost2Title] = useState("Building Sustainable Communities");
  const [post2Excerpt, setPost2Excerpt] = useState("A deep dive into community-led sustainability projects that are making real impact in local neighborhoods worldwide.");
  const [post2Author, setPost2Author] = useState("Michael Chen");
  const [post2Date, setPost2Date] = useState("December 10, 2024");
  const [post2ReadTime, setPost2ReadTime] = useState("7 min read");
  const [post2Category, setPost2Category] = useState("Sustainability");

  const [post3Title, setPost3Title] = useState("The Power of Youth Partnerships");
  const [post3Excerpt, setPost3Excerpt] = useState("How strategic partnerships between youth organizations are amplifying impact and creating lasting change in communities.");
  const [post3Author, setPost3Author] = useState("Emma Rodriguez");
  const [post3Date, setPost3Date] = useState("December 5, 2024");
  const [post3ReadTime, setPost3ReadTime] = useState("6 min read");
  const [post3Category, setPost3Category] = useState("Partnership");

  const blogPosts = [
    {
      id: 1,
      title: post1Title,
      setTitle: setPost1Title,
      excerpt: post1Excerpt,
      setExcerpt: setPost1Excerpt,
      author: post1Author,
      setAuthor: setPost1Author,
      date: post1Date,
      setDate: setPost1Date,
      readTime: post1ReadTime,
      setReadTime: setPost1ReadTime,
      category: post1Category,
      setCategory: setPost1Category
    },
    {
      id: 2,
      title: post2Title,
      setTitle: setPost2Title,
      excerpt: post2Excerpt,
      setExcerpt: setPost2Excerpt,
      author: post2Author,
      setAuthor: setPost2Author,
      date: post2Date,
      setDate: setPost2Date,
      readTime: post2ReadTime,
      setReadTime: setPost2ReadTime,
      category: post2Category,
      setCategory: setPost2Category
    },
    {
      id: 3,
      title: post3Title,
      setTitle: setPost3Title,
      excerpt: post3Excerpt,
      setExcerpt: setPost3Excerpt,
      author: post3Author,
      setAuthor: setPost3Author,
      date: post3Date,
      setDate: setPost3Date,
      readTime: post3ReadTime,
      setReadTime: setPost3ReadTime,
      category: post3Category,
      setCategory: setPost3Category
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-primary text-white py-20">
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
              multiline
              className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto"
              as="p"
            >
              {pageSubtitle}
            </EditableText>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <EditableText
                      value={post.category}
                      onChange={post.setCategory}
                      className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium"
                      as="span"
                    >
                      {post.category}
                    </EditableText>
                    <EditableText
                      value={post.readTime}
                      onChange={post.setReadTime}
                      as="span"
                    >
                      {post.readTime}
                    </EditableText>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors">
                    <EditableText
                      value={post.title}
                      onChange={post.setTitle}
                      as="span"
                    >
                      {post.title}
                    </EditableText>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <EditableText
                    value={post.excerpt}
                    onChange={post.setExcerpt}
                    multiline
                    className="text-gray-600 mb-4"
                    as="p"
                  >
                    {post.excerpt}
                  </EditableText>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      <EditableText
                        value={post.author}
                        onChange={post.setAuthor}
                        as="span"
                      >
                        {post.author}
                      </EditableText>
                      <Calendar className="h-4 w-4 ml-2" />
                      <EditableText
                        value={post.date}
                        onChange={post.setDate}
                        as="span"
                      >
                        {post.date}
                      </EditableText>
                    </div>
                  </div>
                  <Button className="mt-4 gradient-primary text-white group">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
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

export default Blog;
