import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">
              AL<span className="text-accent">KHAIL</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-accent transition-colors">
              Home
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About Us
            </a>
            <a href="#team" className="text-foreground hover:text-accent transition-colors">
              Our Team
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </div>
          
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
