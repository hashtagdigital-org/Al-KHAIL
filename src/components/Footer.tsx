import { Building2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-accent" />
              <span className="text-2xl font-bold">
                AL<span className="text-accent">KHAIL</span>
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner in Dubai's real estate market since 2006. Excellence in every transaction.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#team" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Team</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Services</h3>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">Property Sales</li>
              <li className="text-primary-foreground/80">Property Leasing</li>
              <li className="text-primary-foreground/80">Investment Advisory</li>
              <li className="text-primary-foreground/80">Property Management</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-accent">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-5 h-5 text-accent" />
                <span>+971 XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="w-5 h-5 text-accent" />
                <span>info@alkhail.ae</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Al Khail Real Estate Broker LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
