import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import yPeaceLogo from '@/assets/ypeace-logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <img 
              src={yPeaceLogo} 
              alt="Y-Peace Logo" 
              className="h-24 w-auto"
            />
            <p className="text-gray-300 text-sm">
              Youth for Peace - Empowering and supporting youth and their communities to foster peace, sustainability, and prosperity worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-white transition-colors">Get Involved</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* News Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">News</h3>
            <ul className="space-y-2">
              <li><Link to="/news/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/news/press-releases" className="text-gray-300 hover:text-white transition-colors">Press Releases</Link></li>
              <li><Link to="/news/newsletter" className="text-gray-300 hover:text-white transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Focus</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Advocacy & Voice</span></li>
              <li><span className="text-gray-300">Global Mobilization</span></li>
              <li><span className="text-gray-300">Community Engagement</span></li>
              <li><span className="text-gray-300">Innovation</span></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest news and updates from Y-Peace.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="gradient-primary text-white">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Y-Peace. All rights reserved. Together for Humanity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
