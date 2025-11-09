import { Building2, Users, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const stats = [
    { icon: Building2, value: "18+", label: "Years Experience" },
    { icon: Users, value: "1000+", label: "Happy Clients" },
    { icon: Award, value: "100%", label: "Client Satisfaction" },
    { icon: TrendingUp, value: "500+", label: "Properties Sold" },
  ];

  const features = [
    "Dream homes and lucrative investments",
    "Premium commercial spaces",
    "Seamless, transparent transactions",
    "Multilingual professional support",
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        {/* Modern Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="group card-hover border-0 bg-gradient-to-br from-card to-card/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent/10 border border-accent/20 rounded-full">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent font-semibold">Who We Are</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
              Dubai's Trusted
              <span className="block text-gradient-accent">Real Estate Partner</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Al Khail Real Estate Broker LLC</span> is a trusted leader in Dubai's dynamic real estate market since 2006, dedicated to providing exceptional brokerage services to buyers, sellers, and investors.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              With deep local knowledge and a client-focused approach, we strive to deliver personalized solutions tailored to meet your unique property needs.
            </p>
            
            {/* Features List */}
            <div className="grid grid-cols-1 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Modern Card Design */}
          <div className="space-y-6 animate-fade-in">
            <Card className="overflow-hidden border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-primary via-primary/95 to-primary/80 text-primary-foreground p-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-semibold">Our Commitment</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4">Excellence in Every Transaction</h3>
                  
                  <p className="leading-relaxed text-primary-foreground/90 text-lg mb-8">
                    Our experienced team combines market expertise, integrity, and professionalism to guide you through every step of the real estate journey.
                  </p>
                  
                  <div className="space-y-4">
                    {["Expert Market Analysis", "Transparent Communication", "Personalized Service"].map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
