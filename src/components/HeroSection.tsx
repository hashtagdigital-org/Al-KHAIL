import heroImage from "@/assets/hero-real-estate.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with parallax effect */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-1000"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(44, 44, 44, 0.95) 0%, rgba(0, 0, 0, 0.85) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Animated overlay pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--accent)) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>
      
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 glass-effect rounded-full animate-scale-in">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white font-semibold tracking-wide">Trusted Since 2006 • Dubai's Premier Real Estate</span>
          </div>
          
          {/* Main heading with gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="block text-white mb-2">Where Trust Meets</span>
            <span className="block text-gradient-accent">Property Excellence</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
            Your premier real estate partner in Dubai's dynamic property market
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="accent" className="group text-lg px-10 py-7 rounded-full font-semibold">
              Explore Properties
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-7 rounded-full font-semibold">
              <Play className="mr-2 w-5 h-5" />
              Watch Video
            </Button>
          </div>
          
          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">18+</div>
              <div className="text-white/70 text-sm">Years Experience</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">1000+</div>
              <div className="text-white/70 text-sm">Happy Clients</div>
            </div>
            <div className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
              <div className="text-white/70 text-sm">Properties Sold</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Modern scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-7 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2 glass-effect">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
