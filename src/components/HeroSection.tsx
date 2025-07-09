
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-brand opacity-50"></div>
      
      {/* Floating words distributed across the entire section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-16 text-8xl font-light text-primary/[3%] animate-float" style={{animationDelay: '0s'}}>Peace</div>
        <div className="absolute top-32 right-24 text-6xl font-light text-secondary/[3%] animate-float" style={{animationDelay: '3s'}}>Unity</div>
        <div className="absolute top-64 left-1/3 text-7xl font-light text-accent/[3%] animate-float" style={{animationDelay: '1.5s'}}>Hope</div>
        <div className="absolute top-80 right-16 text-5xl font-light text-primary/[3%] animate-float" style={{animationDelay: '4.5s'}}>Happy</div>
        <div className="absolute top-40 left-2/3 text-6xl font-light text-secondary/[3%] animate-float" style={{animationDelay: '2.5s'}}>Change</div>
        <div className="absolute bottom-40 left-20 text-9xl font-light text-accent/[3%] animate-float" style={{animationDelay: '5s'}}>Future</div>
        <div className="absolute bottom-24 right-32 text-7xl font-light text-primary/[3%] animate-float" style={{animationDelay: '6s'}}>Love</div>
        <div className="absolute bottom-64 left-1/2 text-5xl font-light text-secondary/[3%] animate-float" style={{animationDelay: '7s'}}>Dream</div>
        <div className="absolute top-56 right-1/3 text-6xl font-light text-accent/[3%] animate-float" style={{animationDelay: '8s'}}>Inspire</div>
        <div className="absolute bottom-80 right-1/4 text-8xl font-light text-primary/[3%] animate-float" style={{animationDelay: '9s'}}>Together</div>
        <div className="absolute top-96 left-12 text-4xl font-light text-secondary/[3%] animate-float" style={{animationDelay: '10s'}}>Harmony</div>
        <div className="absolute bottom-32 left-3/4 text-7xl font-light text-accent/[3%] animate-float" style={{animationDelay: '11s'}}>Global</div>
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
            Together for Humanity
          </p>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Empowering youth globally to create lasting change through unity, peace, and sustainable development. 
            Join us in building a world where every individual thrives in harmony.
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
              <div className="text-3xl md:text-4xl font-bold mb-2">17</div>
              <div className="text-sm md:text-base text-gray-200">UN SDGs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">5</div>
              <div className="text-sm md:text-base text-gray-200">Core Pillars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">50+</div>
              <div className="text-sm md:text-base text-gray-200">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">1000+</div>
              <div className="text-sm md:text-base text-gray-200">Youth Leaders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
