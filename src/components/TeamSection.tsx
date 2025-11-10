import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  const team = [
    {
      name: "Hadi Dehghan",
      role: "CEO",
      specialty: "Luxury Property Investment & Multilingual Service",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      linkedin: "#",
      whatsapp: "#",
      email: "hadi@alkhail.com"
    },
    {
      name: "Nasser Dehghan",
      role: "Managing Director",
      specialty: "Strategic Sales & Leasing Expert",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      linkedin: "#",
      whatsapp: "#",
      email: "nasser@alkhail.com"
    },
    {
      name: "Mohanned Mohamed",
      role: "Senior Property Consultant",
      specialty: "Client Success & Market Analysis Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      linkedin: "#",
      whatsapp: "#",
      email: "mohanned@alkhail.com"
    },
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Title & Subtitle */}
        <div className="text-center mb-20 animate-fade-in">
          <p className="text-sm font-bold tracking-[0.2em] uppercase text-[#2C2C2C] mb-4">
            OUR TEAM
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#2C2C2C] mb-4 relative inline-block">
            Meet the Experts Behind Alkhail Real Estate
            <div className="h-1 w-32 bg-gradient-to-r from-brand-red to-luxury-gold rounded-full mx-auto mt-4" />
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {team.map((member, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Modern Card Container */}
              <div className="relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-3 border border-gray-100">
                
                {/* Profile Photo with Overlay */}
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Social Icons - Appear on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100">
                    <a
                      href={member.linkedin}
                      className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm hover:bg-brand-red flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-[#2C2C2C] hover:text-white transition-colors" />
                    </a>
                    <a
                      href={`https://wa.me/${member.whatsapp}`}
                      className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm hover:bg-[#25D366] flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5 text-[#2C2C2C] hover:text-white transition-colors" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-12 h-12 rounded-full bg-white/95 backdrop-blur-sm hover:bg-luxury-gold flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110"
                      aria-label="Email"
                    >
                      <Mail className="w-5 h-5 text-[#2C2C2C] hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-8">
                  {/* Name */}
                  <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2 tracking-tight">
                    {member.name}
                  </h3>
                  
                  {/* Job Title with Accent */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-1 w-8 bg-gradient-to-r from-brand-red to-luxury-gold rounded-full" />
                    <p className="text-brand-red font-semibold text-sm tracking-wide uppercase">
                      {member.role}
                    </p>
                  </div>
                  
                  {/* Specialty/Tagline */}
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {member.specialty}
                  </p>
                  
                  {/* Decorative Bottom Element */}
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Available
                      </span>
                      <span className="font-medium hover:text-brand-red transition-colors cursor-pointer">
                        View Profile →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Button
            size="lg"
            className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Work With Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
