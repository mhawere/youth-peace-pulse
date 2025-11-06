
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useStats } from '@/hooks/useStats';

const HeroSection = () => {
  const { getStat } = useStats('dashboard');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Enhanced gradient background with mesh effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-secondary"></div>
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      
      {/* Radial gradient spotlight effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      {/* Animated background elements - larger and more dramatic */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-white rounded-full blur-[150px] animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-accent rounded-full blur-[100px] animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-secondary rounded-full blur-[90px] animate-float" style={{animationDelay: '4.5s'}}></div>
      </div>
      
      {/* Floating geometric shapes for modern touch */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-white rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 border-2 border-white -rotate-45 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-10 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-semibold text-white/95 shadow-xl">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Empowering Youth Worldwide
          </div>
          
          {/* Main heading with premium typography */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.1] tracking-tight">
            <span className="block text-white/95">Welcome to</span>
            <span className="block mt-2 bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,255,255,0.5)]">
              Y-Peace
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-white/95 drop-shadow-lg">
            Youth for Peace
          </p>
          
          {/* Mission statement with enhanced readability */}
          <p className="text-base md:text-lg lg:text-xl max-w-4xl mx-auto text-white/85 leading-relaxed font-light px-4 backdrop-blur-sm bg-black/10 p-6 rounded-2xl border border-white/10">
            To empower and support youth and their communities to foster peace, sustainability, and prosperity—through diplomacy, advocacy, climate action, interfaith cooperation, education, and community service.
          </p>

          {/* Enhanced CTA with glow effect */}
          <div className="flex justify-center pt-6">
            <Button 
              asChild
              size="lg" 
              className="bg-white text-primary hover:bg-white/95 hover:scale-110 text-lg md:text-xl px-12 py-7 rounded-full shadow-[0_20px_60px_rgba(255,255,255,0.4)] hover:shadow-[0_25px_80px_rgba(255,255,255,0.6)] transition-all duration-500 group font-bold tracking-wide"
            >
              <Link to="/donate">
                Support Us
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
          </div>

          {/* Enhanced statistics with modern cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-20 pt-12">
            <div className="group text-center p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)]">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">{getStat('dashboard', 'un_sdgs')}</div>
              <div className="text-xs md:text-sm lg:text-base text-white/80 font-semibold tracking-wider uppercase">UN SDGs</div>
            </div>
            <div className="group text-center p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)]">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">{getStat('dashboard', 'core_pillars')}</div>
              <div className="text-xs md:text-sm lg:text-base text-white/80 font-semibold tracking-wider uppercase">Core Pillars</div>
            </div>
            <div className="group text-center p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)]">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">{getStat('dashboard', 'countries')}+</div>
              <div className="text-xs md:text-sm lg:text-base text-white/80 font-semibold tracking-wider uppercase">Countries</div>
            </div>
            <div className="group text-center p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(255,255,255,0.2)]">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">{getStat('dashboard', 'youth_leaders')}+</div>
              <div className="text-xs md:text-sm lg:text-base text-white/80 font-semibold tracking-wider uppercase">Youth Leaders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
