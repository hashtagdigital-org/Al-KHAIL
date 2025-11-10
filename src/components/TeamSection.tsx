import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  const team = [
    {
      name: "Hadi Dehghan",
      role: "CEO",
      bio: "A real estate expert with 18+ years of experience in the UAE market, specializing in sales, leasing, and investment with personalized multilingual service.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      expertise: ["Sales", "Investment", "Multilingual"],
      experience: "18+ Years"
    },
    {
      name: "Nasser Dehghan",
      role: "Managing Director",
      bio: "A real estate specialist with strong expertise in sales, leasing, and investment in Dubai's property market.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      expertise: ["Leasing", "Sales", "Investment"],
      experience: "15+ Years"
    },
    {
      name: "Mohanned Mohamed",
      role: "Senior Property Consultant",
      bio: "Dedicated property consultant with extensive knowledge of Dubai's real estate landscape and commitment to client success.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      expertise: ["Consultation", "Market Analysis", "Client Relations"],
      experience: "10+ Years"
    },
  ];

  return (
    <section id="team" className="relative py-32 overflow-hidden">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-luxury-gold/10 via-transparent to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent/10 to-luxury-gold/10 border border-accent/20 rounded-full mb-6 backdrop-blur-sm">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-accent font-bold text-sm tracking-wider uppercase">Our Team</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient-luxury leading-tight">
            Meet Our Experts
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A dedicated team of professionals committed to turning your real estate dreams into reality
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className="relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2">
                <CardContent className="p-0">
                  {/* Image Section with Overlay */}
                  <div className="relative overflow-hidden h-96">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />
                    
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-luxury-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Experience Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-luxury-gold/90 backdrop-blur-md rounded-full border border-white/20 shadow-xl">
                      <TrendingUp className="w-4 h-4 text-white" />
                      <span className="text-white font-bold text-sm">{member.experience}</span>
                    </div>
                    
                    {/* Social Icons - Appear on Hover */}
                    <div className="absolute top-4 left-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <Button size="icon" className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-accent hover:border-accent shadow-lg">
                        <Linkedin className="w-5 h-5 text-white" />
                      </Button>
                      <Button size="icon" className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-accent hover:border-accent shadow-lg">
                        <Mail className="w-5 h-5 text-white" />
                      </Button>
                      <Button size="icon" className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-accent hover:border-accent shadow-lg">
                        <Phone className="w-5 h-5 text-white" />
                      </Button>
                    </div>
                    
                    {/* Name & Role - Always Visible at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500">
                      <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="h-1 w-12 bg-gradient-to-r from-accent to-luxury-gold rounded-full" />
                        <p className="text-white/90 font-semibold text-lg">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6 space-y-6">
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Bio */}
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {member.bio}
                    </p>
                    
                    {/* CTA Button */}
                    <Button 
                      variant="outline" 
                      className="w-full group/btn border-accent/30 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    >
                      <span className="mr-2">Connect with {member.name.split(' ')[0]}</span>
                      <Mail className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
