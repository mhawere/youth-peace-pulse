import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-6 rounded-full bg-primary/10 mb-8">
            <Mail className="h-16 w-16 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Email us
          </h1>
          
          <a 
            href="mailto:info@ypeace.org" 
            className="text-3xl md:text-4xl font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            info@ypeace.org
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
