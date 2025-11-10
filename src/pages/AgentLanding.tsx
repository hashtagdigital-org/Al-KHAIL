import { useParams, Link } from "react-router-dom";
import { agents } from "@/data/agents";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Award,
  TrendingUp,
  Globe,
  CheckCircle,
  ArrowLeft,
  Filter
} from "lucide-react";
import { useState } from "react";

const AgentLanding = () => {
  const { agentId } = useParams();
  const agent = agents.find((a) => a.id === agentId);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Agent Not Found</h1>
          <Link to="/">
            <Button className="bg-brand-red hover:bg-brand-red/90">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const propertyTypes = ["All", ...new Set(agent.projects.map(p => p.type))];
  const filteredProjects = selectedFilter === "All" 
    ? agent.projects 
    : agent.projects.filter(p => p.type === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex items-center gap-2 text-brand-red hover:text-brand-red/80 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold text-sm sm:text-base">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-4">
              <a href={`mailto:${agent.email}`}>
                <Button size="sm" variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white">
                  <Mail className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Email</span>
                </Button>
              </a>
              <a href={`https://wa.me/${agent.whatsapp}`}>
                <Button size="sm" className="bg-brand-red hover:bg-brand-red/90 text-white">
                  <MessageCircle className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-brand-red/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Agent Image */}
            <div className="relative group">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-6 right-6">
                  <Badge className="bg-luxury-gold text-white border-0 text-lg px-4 py-2">
                    ⭐ {agent.rating}
                  </Badge>
                </div>

                {/* Status Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-semibold text-gray-900">Available Now</span>
                </div>
              </div>
            </div>

            {/* Agent Info */}
            <div className="text-white space-y-6">
              <div>
                <Badge className="bg-brand-red text-white border-0 mb-4">
                  {agent.role}
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                  {agent.name}
                </h1>
                <p className="text-xl sm:text-2xl text-white/90 mb-6">
                  {agent.specialty}
                </p>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  {agent.bio}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 text-center">
                  <TrendingUp className="w-6 h-6 mx-auto mb-2 text-luxury-gold" />
                  <div className="text-2xl font-bold">{agent.experience}</div>
                  <div className="text-sm text-white/70">Experience</div>
                </Card>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 text-center">
                  <Award className="w-6 h-6 mx-auto mb-2 text-luxury-gold" />
                  <div className="text-2xl font-bold">{agent.properties}</div>
                  <div className="text-sm text-white/70">Properties</div>
                </Card>
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-4 text-center">
                  <Globe className="w-6 h-6 mx-auto mb-2 text-luxury-gold" />
                  <div className="text-2xl font-bold">{agent.languages.length}</div>
                  <div className="text-sm text-white/70">Languages</div>
                </Card>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href={agent.linkedin}
                  className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href={`https://wa.me/${agent.whatsapp}`}
                  className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md hover:bg-[#25D366] flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a
                  href={`mailto:${agent.email}`}
                  className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md hover:bg-luxury-gold flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href={`tel:${agent.whatsapp}`}
                  className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md hover:bg-brand-red flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Details */}
            <div className="lg:col-span-1 space-y-8">
              {/* Languages */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-brand-red" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {agent.languages.map((lang, idx) => (
                    <Badge key={idx} variant="outline" className="border-luxury-gold text-luxury-gold">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Expertise */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-brand-red" />
                  Expertise
                </h3>
                <div className="space-y-2">
                  {agent.expertise.map((exp, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-luxury-gold" />
                      <span className="text-sm">{exp}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Certifications */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand-red" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {agent.certifications.map((cert, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-luxury-gold mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Right Column - Awards & Projects */}
            <div className="lg:col-span-2 space-y-8">
              {/* Awards */}
              <div>
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Award className="w-8 h-8 text-brand-red" />
                  Awards & Recognition
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {agent.awards.map((award, idx) => (
                    <Card key={idx} className="p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-luxury-gold">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-red to-luxury-gold flex items-center justify-center text-white font-bold flex-shrink-0">
                          {award.year}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-1">{award.title}</h4>
                          <p className="text-sm text-gray-600">{award.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Projects */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                  <h2 className="text-3xl font-bold flex items-center gap-2">
                    <TrendingUp className="w-8 h-8 text-brand-red" />
                    Featured Projects ({filteredProjects.length})
                  </h2>
                  
                  {/* Filter */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <Filter className="w-4 h-4 text-gray-500" />
                    {propertyTypes.map((type) => (
                      <Button
                        key={type}
                        size="sm"
                        variant={selectedFilter === type ? "default" : "outline"}
                        onClick={() => setSelectedFilter(type)}
                        className={selectedFilter === type ? "bg-brand-red hover:bg-brand-red/90" : ""}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {filteredProjects.map((project) => (
                    <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                          <Badge className={`${
                            project.status === "Sold" 
                              ? "bg-green-500" 
                              : project.status === "Active" 
                              ? "bg-brand-red" 
                              : "bg-blue-500"
                          } text-white border-0`}>
                            {project.status}
                          </Badge>
                          <Badge className="bg-luxury-gold text-white border-0">
                            {project.year}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="border-brand-red text-brand-red">
                            {project.type}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{project.location}</p>
                        <div className="text-2xl font-bold text-brand-red">
                          {project.price}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-brand-red to-luxury-gold">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-white/90">
            Get in touch with {agent.name.split(" ")[0]} today for personalized service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${agent.whatsapp}`}>
              <Button size="lg" className="bg-white text-brand-red hover:bg-white/90 font-semibold w-full sm:w-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Now
              </Button>
            </a>
            <a href={`mailto:${agent.email}`}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-red font-semibold w-full sm:w-auto">
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgentLanding;
