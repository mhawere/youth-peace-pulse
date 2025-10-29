import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Settings, Users, ClipboardList, FileText, Mail, BarChart3, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';
import yPeaceLogo from '@/assets/ypeace-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 mr-auto">
            <img 
              src={yPeaceLogo} 
              alt="Y-Peace Logo" 
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                  isActive(item.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-600 hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.name}
              </Link>
              ))}
              
              {/* Admin Dropdown */}
              {user && isAdmin && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary hover:bg-primary/5 rounded-md"
                    >
                      Admin
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link to="/user-management" className="flex items-center w-full">
                        <Users className="mr-2 h-4 w-4" />
                        Users
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/application-results" className="flex items-center w-full">
                        <ClipboardList className="mr-2 h-4 w-4" />
                        Applications
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/admin/stats" className="flex items-center w-full">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Statistics
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/news/press-releases" className="flex items-center w-full">
                        <FileText className="mr-2 h-4 w-4" />
                        Press Releases
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/news/newsletter" className="flex items-center w-full">
                        <Mail className="mr-2 h-4 w-4" />
                        Newsletter
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/news/blog" className="flex items-center w-full">
                        <Settings className="mr-2 h-4 w-4" />
                        Blog
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOut} className="text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Admin Menu */}
              {user && isAdmin && (
                <>
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Admin
                  </div>
                  <Link
                    to="/user-management"
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <Users className="inline mr-2 h-4 w-4" />
                    Users
                  </Link>
                  <Link
                    to="/application-results"
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <ClipboardList className="inline mr-2 h-4 w-4" />
                    Applications
                  </Link>
                  <Link
                    to="/admin/stats"
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <BarChart3 className="inline mr-2 h-4 w-4" />
                    Statistics
                  </Link>
                  <Link
                    to="/news/press-releases"
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <FileText className="inline mr-2 h-4 w-4" />
                    Press Releases
                  </Link>
                  <Link
                    to="/news/newsletter"
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <Mail className="inline mr-2 h-4 w-4" />
                    Newsletter
                  </Link>
                  <Link
                    to="/news/blog"
                    className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <Settings className="inline mr-2 h-4 w-4" />
                    Blog
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:bg-gray-50"
                  >
                    <LogOut className="inline mr-2 h-4 w-4" />
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
