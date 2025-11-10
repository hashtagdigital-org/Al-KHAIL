import heroImage from "@/assets/hero-real-estate.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(32, 43, 61, 0.9) 0%, rgba(32, 43, 61, 0.7) 100%), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/10 border border-accent/30 rounded-full mb-4 sm:mb-6">
            <span className="text-accent font-semibold text-sm sm:text-base">Trusted Since 2006</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Where Trust Meets
            <span className="block text-accent">Property Excellence</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 leading-relaxed px-4">
            Your premier real estate partner in Dubai's dynamic property market
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto"
            >
              Explore Properties
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary font-semibold text-base sm:text-lg px-6 sm:px-8 h-12 sm:h-14 w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
