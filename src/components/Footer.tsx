import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary to-primary/95 text-primary-foreground">
      <div className="container mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-accent" />
              </div>
              <span className="text-2xl font-bold">
                AL<span className="text-accent">KHAIL</span>
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner in Dubai's real estate market since 2006. Excellence in every transaction.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-primary-foreground/80 group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Our Team", href: "#team" },
                { label: "Contact", href: "#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-accent transition-colors flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/50 group-hover:bg-accent transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Services</h3>
            <ul className="space-y-3">
              {[
                "Property Sales",
                "Property Leasing",
                "Investment Advisory",
                "Property Management",
              ].map((service, index) => (
                <li key={index} className="text-primary-foreground/80 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/80 group hover:text-primary-foreground transition-colors">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <span className="pt-2">Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80 group hover:text-primary-foreground transition-colors">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <span>+971 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80 group hover:text-primary-foreground transition-colors">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <span>info@alkhail.ae</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/60 text-sm">
            <p>&copy; {new Date().getFullYear()} Al Khail Real Estate Broker LLC. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
