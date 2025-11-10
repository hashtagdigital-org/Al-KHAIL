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
              className="group animate-fade-in bg-white rounded-xl transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Profile Photo */}
              <div className="relative overflow-hidden rounded-t-xl mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="px-6 pb-8 text-center">
                {/* Name */}
                <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2">
                  {member.name}
                </h3>
                
                {/* Job Title */}
                <p className="text-brand-red font-semibold mb-3">
                  {member.role}
                </p>
                
                {/* Divider */}
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-brand-red to-transparent mx-auto mb-4" />
                
                {/* Specialty/Tagline */}
                <p className="text-sm text-[#6B7280] mb-6 leading-relaxed">
                  {member.specialty}
                </p>
                
                {/* Social Icons - Hidden by default, visible on hover */}
                <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 rounded-full bg-[#F9FAFB] hover:bg-brand-red flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-[#2C2C2C] hover:text-white transition-colors" />
                  </a>
                  <a
                    href={`https://wa.me/${member.whatsapp}`}
                    className="w-10 h-10 rounded-full bg-[#F9FAFB] hover:bg-[#25D366] flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5 text-[#2C2C2C] hover:text-white transition-colors" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-full bg-[#F9FAFB] hover:bg-luxury-gold flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5 text-[#2C2C2C] hover:text-white transition-colors" />
                  </a>
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
