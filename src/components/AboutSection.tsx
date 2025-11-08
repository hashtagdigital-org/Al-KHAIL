import { Building2, Users, Award, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Building2, value: "18+", label: "Years Experience" },
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "100%", label: "Client Satisfaction" },
    { icon: TrendingUp, value: "500+", label: "Properties Sold" },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-10 h-10 mx-auto mb-4 text-accent" />
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full">
              <span className="text-accent font-semibold">Who We Are</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Dubai's Trusted Real Estate Partner
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Al Khail Real Estate Broker LLC</span> is a trusted leader in Dubai's dynamic real estate market since 2006, dedicated to providing exceptional brokerage services to buyers, sellers, and investors.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With deep local knowledge and a client-focused approach, we strive to deliver personalized solutions tailored to meet your unique property needs.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="leading-relaxed mb-6">
                Our experienced team combines market expertise, integrity, and professionalism to guide you through every step of the real estate journey.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                  </div>
                  <span>Dream homes and lucrative investments</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                  </div>
                  <span>Premium commercial spaces</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-accent-foreground rounded-full" />
                  </div>
                  <span>Seamless, transparent transactions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
