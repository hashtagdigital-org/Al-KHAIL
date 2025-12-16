import { Building2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
              <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              <span className="text-xl sm:text-2xl font-bold">
                AL<span className="text-accent">KHAIL</span>
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed text-sm sm:text-base">
              Your trusted partner in Dubai's real estate market since 2006. Excellence in every transaction.
            </p>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">About Us</a></li>
              <li><a href="#team" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">Our Team</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm sm:text-base">Contact</a></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-accent">Services</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80 text-sm sm:text-base">Property Sales</li>
              <li className="text-primary-foreground/80 text-sm sm:text-base">Property Leasing</li>
              <li className="text-primary-foreground/80 text-sm sm:text-base">Investment Advisory</li>
              <li className="text-primary-foreground/80 text-sm sm:text-base">Property Management</li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-accent">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-primary-foreground/80 justify-center sm:justify-start">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base">Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80 justify-center sm:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-sm sm:text-base">+971 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80 justify-center sm:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <span className="text-sm sm:text-base">info@alkhail.ae</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/60">
          <p className="text-xs sm:text-sm">&copy; {new Date().getFullYear()} Al Khail Real Estate Broker LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
