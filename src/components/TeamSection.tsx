import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const TeamSection = () => {
  const team = [
    {
      name: "Hadi Dehghan",
      role: "CEO",
      bio: "A real estate expert with 18+ years of experience in the UAE market, specializing in sales, leasing, and investment with personalized multilingual service.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
    },
    {
      name: "Nasser Dehghan",
      role: "Managing Director",
      bio: "A real estate specialist with strong expertise in sales, leasing, and investment in Dubai's property market.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    },
    {
      name: "Mohanned Mohamed",
      role: "Senior Property Consultant",
      bio: "Dedicated property consultant with extensive knowledge of Dubai's real estate landscape and commitment to client success.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section id="team" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/30 rounded-full mb-4">
            <span className="text-accent font-semibold">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Meet Our Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A dedicated team of professionals committed to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors">
                        <Mail className="w-4 h-4 text-accent-foreground" />
                      </button>
                      <button className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors">
                        <Phone className="w-4 h-4 text-accent-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                  <p className="text-accent font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
