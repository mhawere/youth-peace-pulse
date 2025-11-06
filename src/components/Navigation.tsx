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

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isHomePage 
        ? 'bg-transparent' 
        : 'bg-background/95 backdrop-blur-lg border-b border-border/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center hover-lift">
            <div className={`rounded-xl transition-all duration-300 ${
              isHomePage ? 'bg-white/95 backdrop-blur-sm px-3 py-2 shadow-lg' : ''
            }`}>
              <img 
                src={yPeaceLogo} 
                alt="Y-Peace Logo" 
                className="h-12 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-full relative ${
                  isActive(item.path)
                    ? isHomePage
                      ? 'text-white bg-white/20 backdrop-blur-sm'
                      : 'text-primary bg-primary/10'
                    : isHomePage
                      ? 'text-white/90 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                      : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
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
                    className={`px-5 py-2.5 text-sm font-semibold rounded-full ${
                      isHomePage
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    Admin
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link to="/user-management" className="flex items-center w-full cursor-pointer">
                      <Users className="mr-2 h-4 w-4" />
                      Users
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/application-results" className="flex items-center w-full cursor-pointer">
                      <ClipboardList className="mr-2 h-4 w-4" />
                      Applications
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/admin/stats" className="flex items-center w-full cursor-pointer">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Statistics
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/news/press-releases" className="flex items-center w-full cursor-pointer">
                      <FileText className="mr-2 h-4 w-4" />
                      Press Releases
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/news/newsletter" className="flex items-center w-full cursor-pointer">
                      <Mail className="mr-2 h-4 w-4" />
                      Newsletter
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/news/blog" className="flex items-center w-full cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      Blog
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut} className="text-destructive cursor-pointer">
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
              className={`rounded-full ${
                isHomePage
                  ? 'text-white hover:bg-white/10'
                  : 'text-foreground hover:bg-primary/5'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden pb-4 animate-fade-in ${
            isHomePage ? 'bg-black/20 backdrop-blur-lg' : 'bg-background/95'
          }`}>
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-semibold rounded-xl transition-colors ${
                    isActive(item.path)
                      ? isHomePage
                        ? 'text-white bg-white/20'
                        : 'text-primary bg-primary/10'
                      : isHomePage
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Admin Menu */}
              {user && isAdmin && (
                <>
                  <div className="px-4 pt-4 pb-2">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Admin
                    </div>
                  </div>
                  <Link
                    to="/user-management"
                    className="flex items-center px-4 py-2.5 text-base font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Users
                  </Link>
                  <Link
                    to="/application-results"
                    className="flex items-center px-4 py-2.5 text-base font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <ClipboardList className="mr-2 h-4 w-4" />
                    Applications
                  </Link>
                  <Link
                    to="/admin/stats"
                    className="flex items-center px-4 py-2.5 text-base font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Statistics
                  </Link>
                  <Link
                    to="/news/press-releases"
                    className="flex items-center px-4 py-2.5 text-base font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Press Releases
                  </Link>
                  <Link
                    to="/news/newsletter"
                    className="flex items-center px-4 py-2.5 text-base font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Newsletter
                  </Link>
                  <Link
                    to="/news/blog"
                    className="flex items-center px-4 py-2.5 text-base font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Blog
                  </Link>
                  <button
                    onClick={() => {
                      signOut();
                      setIsOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-2.5 text-base font-medium text-destructive hover:bg-destructive/5 rounded-lg transition-colors"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
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
