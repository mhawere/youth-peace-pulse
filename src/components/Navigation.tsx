import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Settings, Users, ClipboardList, FileText, Mail, BarChart3, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';
import yPeaceLogo from '@/assets/ypeace-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, isAdmin, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav 
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ease-out ${
        isHomePage && !isScrolled
          ? 'bg-transparent py-8 z-[1000]'
          : 'py-4 z-[1000]'
      } ${
        isHomePage && isScrolled
          ? 'backdrop-blur-2xl bg-gradient-to-b from-white/30 via-white/25 to-white/20 shadow-[0_8px_40px_rgba(0,0,0,0.12)] border-b border-white/40'
          : !isHomePage
          ? 'bg-gradient-to-b from-background via-background/98 to-background/95 backdrop-blur-xl border-b border-border/40 shadow-sm'
          : ''
      }`}
      style={isHomePage && isScrolled ? { backdropFilter: 'blur(16px) saturate(180%)' } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center hover-lift transition-all duration-500 group">
            <img 
              src={yPeaceLogo} 
              alt="Y-Peace Logo" 
              className={`w-auto drop-shadow-2xl transition-all duration-500 group-hover:scale-105 ${
                isHomePage && !isScrolled ? 'h-32' : 'h-20'
              }`}
              style={isHomePage && !isScrolled ? { filter: 'drop-shadow(0 10px 25px rgba(255,255,255,0.3))' } : {}}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-6 py-3 text-sm font-bold tracking-wide transition-all duration-500 rounded-full relative overflow-hidden group ${
                  isActive(item.path)
                    ? isHomePage && !isScrolled
                      ? 'text-white bg-white/25 backdrop-blur-md shadow-lg shadow-white/20'
                      : isHomePage && isScrolled
                      ? 'text-white bg-white/35 backdrop-blur-md shadow-lg shadow-white/25'
                      : 'text-primary bg-gradient-to-r from-primary/15 to-primary/10 shadow-md'
                    : isHomePage && !isScrolled
                      ? 'text-white/95 hover:text-white hover:bg-white/15 backdrop-blur-sm'
                      : isHomePage && isScrolled
                      ? 'text-white hover:text-white hover:bg-white/25 backdrop-blur-md'
                      : 'text-foreground/75 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {!isActive(item.path) && (
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                )}
              </Link>
            ))}
              
            {/* Admin Dropdown */}
            {user && isAdmin && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    className={`px-6 py-3 text-sm font-bold tracking-wide rounded-full transition-all duration-500 ${
                      isHomePage && !isScrolled
                        ? 'text-white/95 hover:text-white hover:bg-white/15 backdrop-blur-sm'
                        : isHomePage && isScrolled
                        ? 'text-white hover:text-white hover:bg-white/25 backdrop-blur-md'
                        : 'text-foreground/75 hover:text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5'
                    }`}
                  >
                    Admin
                    <ChevronDown className="ml-1.5 h-4 w-4" />
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
              className={`rounded-full transition-all duration-500 hover:scale-110 ${
                isHomePage && !isScrolled
                  ? 'text-white hover:bg-white/15 backdrop-blur-sm'
                  : isHomePage && isScrolled
                  ? 'text-white hover:bg-white/25 backdrop-blur-md'
                  : 'text-foreground hover:bg-primary/10'
              }`}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className={`md:hidden pb-4 animate-fade-in transition-all duration-300 ${
              isHomePage && isScrolled
                ? 'backdrop-blur-xl bg-white/25 border-t border-white/30'
                : isHomePage && !isScrolled
                ? 'bg-black/20 backdrop-blur-lg'
                : 'bg-background/95'
            }`}
            style={isHomePage && isScrolled ? { backdropFilter: 'blur(12px)' } : {}}
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 ${
                    isActive(item.path)
                      ? isHomePage && !isScrolled
                        ? 'text-white bg-white/20'
                        : isHomePage && isScrolled
                        ? 'text-white bg-white/30'
                        : 'text-primary bg-primary/10'
                      : isHomePage && !isScrolled
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : isHomePage && isScrolled
                        ? 'text-white/95 hover:text-white hover:bg-white/20'
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
