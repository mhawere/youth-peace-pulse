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
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-brand opacity-90"></div>
      
      {/* Animated background elements - reduced for performance */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Y-Peace
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-semibold mb-4 text-gray-100">
            Youth for Peace
          </p>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed">
            To empower and support youth and their communities to foster peace, sustainability, and prosperity—through diplomacy, advocacy, climate action, interfaith cooperation, education, and community service.
          </p>

          <div className="flex justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 group"
            >
              <Link to="/donate">
                Support Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{getStat('dashboard', 'un_sdgs')}</div>
              <div className="text-sm md:text-base text-gray-200">UN SDGs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{getStat('dashboard', 'core_pillars')}</div>
              <div className="text-sm md:text-base text-gray-200">Core Pillars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{getStat('dashboard', 'countries')}+</div>
              <div className="text-sm md:text-base text-gray-200">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{getStat('dashboard', 'youth_leaders')}+</div>
              <div className="text-sm md:text-base text-gray-200">Youth Leaders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

OptimizedHeroSection.displayName = 'OptimizedHeroSection';

export default OptimizedHeroSection;