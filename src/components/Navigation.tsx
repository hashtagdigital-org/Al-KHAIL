import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-lg shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className={`text-2xl font-bold transition-colors ${
              scrolled ? 'text-primary' : 'text-white'
            }`}>
              AL<span className="text-accent">KHAIL</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#home" 
              className={`font-medium transition-all duration-300 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-accent after:transition-all ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Home
            </a>
            <a 
              href="#about" 
              className={`font-medium transition-all duration-300 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-accent after:transition-all ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              About Us
            </a>
            <a 
              href="#team" 
              className={`font-medium transition-all duration-300 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-accent after:transition-all ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Our Team
            </a>
            <a 
              href="#contact" 
              className={`font-medium transition-all duration-300 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-accent after:transition-all ${
                scrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Contact
            </a>
          </div>
          
          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Button 
              variant="accent" 
              className="hidden md:inline-flex rounded-full font-semibold hover:scale-105 transition-transform"
            >
              Get Started
            </Button>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon"
              className={`md:hidden ${scrolled ? 'text-foreground' : 'text-white'}`}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
