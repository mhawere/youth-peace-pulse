
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import EditableText from '@/components/EditableText';
import AdminBlogManager from '@/components/AdminBlogManager';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { useBlogs } from '@/hooks/useBlogs';
import { useAuth } from '@/hooks/useAuth';

const Blog = () => {
  const { blogs, loading } = useBlogs();
  const { isAdmin } = useAuth();

  // State for page content
  const [pageTitle, setPageTitle] = useState("Y-Peace Blog");
  const [pageSubtitle, setPageSubtitle] = useState("Stories of change, insights on youth leadership, and the latest updates from our global community");

  const formatContent = (content: string) => {
    // Simple markdown-like formatting for display
    return content
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/_(.*?)_/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code>$1</code>')
      .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
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

      {/* Admin Management Section */}
      {isAdmin && (
        <section className="py-8 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AdminBlogManager />
          </div>
        </section>
      )}

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center">Loading blog posts...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span>{post.read_time}</span>
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {post.excerpt || post.content.substring(0, 150) + '...'}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                        <Calendar className="h-4 w-4 ml-2" />
                        <span>
                          {new Date(post.published_date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <Button className="mt-4 bg-primary text-primary-foreground group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
              {blogs.length === 0 && (
                <div className="col-span-full text-center py-16">
                  <p className="text-gray-500 text-lg">No blog posts available yet.</p>
                  {isAdmin && (
                    <p className="text-gray-400 text-sm mt-2">
                      Use the admin panel above to create your first blog post!
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
