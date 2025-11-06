import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useStats } from '@/hooks/useStats';

// Memoized hero section to prevent unnecessary re-renders
const OptimizedHeroSection = memo(() => {
  const { getStat } = useStats('dashboard');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 gradient-brand"></div>
      
      {/* Smooth gradient transition overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background/50 z-[1]"></div>
      
      {/* Sophisticated animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-8 animate-fade-in-up">
          {/* Main heading with enhanced typography */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              Welcome to{' '}
              <span className="block mt-2 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-lg">
                Y-Peace
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-white/95">
              Youth for Peace
            </p>
          </div>
          
          {/* Mission statement with improved readability */}
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-white/90 leading-relaxed font-light px-4">
            To empower and support youth and their communities to foster peace, sustainability, and prosperity—through diplomacy, advocacy, climate action, interfaith cooperation, education, and community service.
          </p>

          {/* Enhanced CTA button */}
          <div className="flex justify-center pt-4">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 text-lg px-10 py-6 rounded-full shadow-2xl transition-all duration-300 group font-semibold"
            >
              <Link to="/donate">
                Support Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Enhanced statistics with better visual hierarchy */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 pt-12 border-t border-white/30 backdrop-blur-sm">
            <div className="text-center group hover-lift p-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">{getStat('dashboard', 'un_sdgs')}</div>
              <div className="text-sm md:text-base lg:text-lg text-white/90 font-light tracking-wide">UN SDGs</div>
            </div>
            <div className="text-center group hover-lift p-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">{getStat('dashboard', 'core_pillars')}</div>
              <div className="text-sm md:text-base lg:text-lg text-white/90 font-light tracking-wide">Core Pillars</div>
            </div>
            <div className="text-center group hover-lift p-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">{getStat('dashboard', 'countries')}+</div>
              <div className="text-sm md:text-base lg:text-lg text-white/90 font-light tracking-wide">Countries</div>
            </div>
            <div className="text-center group hover-lift p-4">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">{getStat('dashboard', 'youth_leaders')}+</div>
              <div className="text-sm md:text-base lg:text-lg text-white/90 font-light tracking-wide">Youth Leaders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

OptimizedHeroSection.displayName = 'OptimizedHeroSection';

export default OptimizedHeroSection;