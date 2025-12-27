import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    { href: "#home", label: "Home", isAnchor: true },
    { href: "#about", label: "About Us", isAnchor: true },
    { href: "/projects", label: "All Projects", isAnchor: false },
    { href: "/events", label: "Events", isAnchor: false },
    { href: "/blogs", label: "Blog", isAnchor: false },
    { href: "/properties", label: "Single Property", isAnchor: false },
    { href: "/agents", label: "Our Agents", isAnchor: false },
    { href: "#contact", label: "Contact", isAnchor: true },
  ];

  const handleNavClick = (href: string, isAnchor: boolean) => {
    setIsOpen(false);
    if (isAnchor && isHomePage) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else if (isAnchor && !isHomePage) {
      window.location.href = "/" + href;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="text-xl sm:text-2xl font-bold text-primary">
              AL<span className="text-accent">KHAIL</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isAnchor ? (
                <a
                  key={link.href}
                  href={isHomePage ? link.href : "/" + link.href}
                  className="text-foreground hover:text-accent transition-colors"
                  onClick={(e) => {
                    if (isHomePage) {
                      e.preventDefault();
                      handleNavClick(link.href, true);
                    }
                  }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
          
          {/* Desktop CTA Button */}
          <Button className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            Get Started
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) =>
                  link.isAnchor ? (
                    <a
                      key={link.href}
                      href={isHomePage ? link.href : "/" + link.href}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors py-2"
                      onClick={(e) => {
                        if (isHomePage) {
                          e.preventDefault();
                          handleNavClick(link.href, true);
                        } else {
                          setIsOpen(false);
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-lg font-medium text-foreground hover:text-accent transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold h-12 mt-4">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
