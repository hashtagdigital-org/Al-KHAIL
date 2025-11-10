import { Linkedin, Mail, MessageCircle, Award, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Link } from "react-router-dom";
import { agents } from "@/data/agents";

const TeamSection = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedTeam = showAll ? agents : agents.slice(0, 3);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {displayedTeam.map((member, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Ultra Modern Agent Card */}
              <div className="relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_25px_70px_rgba(0,0,0,0.15)] hover:-translate-y-4 border border-gray-100 group-hover:border-brand-red/20">
                
                {/* Profile Photo with Modern Overlay */}
                <div className="relative overflow-hidden aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-50">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Top Stats Bar */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <Badge className="bg-luxury-gold/90 backdrop-blur-md border-0 text-white text-xs px-3 py-1.5 shadow-lg">
                      ⭐ {member.rating}
                    </Badge>
                    <Badge className="bg-white/90 backdrop-blur-md border-0 text-[#2C2C2C] text-xs px-3 py-1.5 shadow-lg">
                      <Award className="w-3 h-3 mr-1" />
                      Top Agent
                    </Badge>
                  </div>
                  
                  {/* Agent Info Overlay - Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
                      <span className="text-xs font-medium text-white/90">Available Now</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-1 drop-shadow-lg">
                      {member.name}
                    </h3>
                    
                    <p className="text-white/90 text-sm font-medium mb-3">
                      {member.role}
                    </p>
                    
                    {/* Quick Stats */}
                    <div className="flex items-center gap-4 text-xs text-white/80">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{member.experience}</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-white/40" />
                      <div className="flex items-center gap-1">
                        <span className="font-semibold">{member.properties}</span>
                        <span>Properties</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Social Icons - Hover State */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/30 backdrop-blur-sm">
                    <a
                      href={member.linkedin}
                      className="w-14 h-14 rounded-2xl bg-white/95 hover:bg-brand-red flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 group/icon"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-6 h-6 text-[#2C2C2C] group-hover/icon:text-white transition-colors" />
                    </a>
                    <a
                      href={`https://wa.me/${member.whatsapp}`}
                      className="w-14 h-14 rounded-2xl bg-white/95 hover:bg-[#25D366] flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 group/icon"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-6 h-6 text-[#2C2C2C] group-hover/icon:text-white transition-colors" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-14 h-14 rounded-2xl bg-white/95 hover:bg-luxury-gold flex items-center justify-center transition-all duration-300 shadow-2xl hover:scale-110 group/icon"
                      aria-label="Email"
                    >
                      <Mail className="w-6 h-6 text-[#2C2C2C] group-hover/icon:text-white transition-colors" />
                    </a>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 space-y-4">
                  {/* Specialty */}
                  <p className="text-[#6B7280] text-sm leading-relaxed min-h-[2.5rem]">
                    {member.specialty}
                  </p>
                  
                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                  
                  {/* Show More Button */}
                  <Link to={`/agent/${member.id}`}>
                    <Button 
                      className="w-full bg-gradient-to-r from-brand-red to-brand-red/90 hover:from-brand-red/90 hover:to-brand-red text-white font-semibold py-6 rounded-xl shadow-lg shadow-brand-red/20 hover:shadow-xl hover:shadow-brand-red/30 transition-all duration-300 group/btn"
                    >
                      <span>View Agent Profile</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </Link>
                  
                  {/* Quick Contact Link */}
                  <a 
                    href={`mailto:${member.email}`}
                    className="block text-center text-sm text-brand-red hover:text-brand-red/80 font-medium transition-colors duration-300"
                  >
                    or contact via email →
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
            onClick={() => setShowAll(!showAll)}
            className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-6 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            {showAll ? "Show Less Agents" : "See More Agents"}
            <ArrowRight className={`w-5 h-5 ml-2 transition-transform duration-300 ${showAll ? 'rotate-180' : 'group-hover:translate-x-1'}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
