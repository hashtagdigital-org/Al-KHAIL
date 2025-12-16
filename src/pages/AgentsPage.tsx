import { useState } from "react";
import { Link } from "react-router-dom";
import { agents } from "@/data/agents";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  ArrowLeft,
  Linkedin,
  Mail,
  MessageCircle,
  Award,
  TrendingUp,
  ArrowRight,
  Users,
  Star,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AgentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("all");

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.role.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesExperience = true;
    if (experienceFilter !== "all") {
      const years = parseInt(agent.experience);
      switch (experienceFilter) {
        case "junior":
          matchesExperience = years < 5;
          break;
        case "senior":
          matchesExperience = years >= 5 && years < 10;
          break;
        case "expert":
          matchesExperience = years >= 10;
          break;
      }
    }

    return matchesSearch && matchesExperience;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-8 sm:pb-12 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-4 sm:mb-6 transition-colors text-sm sm:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-3 sm:mb-4 bg-accent/20 text-accent border-accent/30 text-xs sm:text-sm">
              Our Expert Team
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Alkhail <span className="text-primary">Agents</span>
            </h1>
            <p className="text-muted-foreground text-sm sm:text-lg px-2">
              Meet our team of experienced property consultants dedicated to finding your perfect home in Dubai
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 sm:py-8 border-b border-border bg-card/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-6 items-center">
            <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-primary">{agents.length}+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Expert Agents</p>
              </div>
              <div className="h-8 sm:h-10 w-px bg-border" />
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent">500+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Properties Sold</p>
              </div>
              <div className="h-8 sm:h-10 w-px bg-border hidden sm:block" />
              <div className="text-center hidden sm:block">
                <p className="text-2xl sm:text-3xl font-bold text-primary">98%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-lg">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search agents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>

              <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                <SelectTrigger className="w-full sm:w-40 h-11">
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Experience</SelectItem>
                  <SelectItem value="junior">Under 5 Years</SelectItem>
                  <SelectItem value="senior">5-10 Years</SelectItem>
                  <SelectItem value="expert">10+ Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-muted-foreground">
              Showing <span className="text-foreground font-semibold">{filteredAgents.length}</span> agents
            </p>
          </div>

          {filteredAgents.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <Users className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">
                No agents found
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredAgents.map((agent, index) => (
                <Card
                  key={agent.id}
                  className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Agent Image */}
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <Badge className="bg-accent/90 backdrop-blur-sm text-accent-foreground text-xs">
                        <Star className="w-3 h-3 mr-1 fill-current" />
                        {agent.rating}
                      </Badge>
                      <Badge className="bg-white/90 backdrop-blur-sm text-foreground text-xs">
                        <Award className="w-3 h-3 mr-1" />
                        Top Agent
                      </Badge>
                    </div>

                    {/* Agent Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs text-white/80">Available</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{agent.name}</h3>
                      <p className="text-white/80 text-sm">{agent.role}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-white/70">
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {agent.experience}
                        </span>
                        <span>{agent.properties} Properties</span>
                      </div>
                    </div>

                    {/* Hover Social Icons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/30 backdrop-blur-sm">
                      <a
                        href={agent.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-white/90 hover:bg-primary flex items-center justify-center transition-all hover:scale-110"
                      >
                        <Linkedin className="w-5 h-5 text-foreground" />
                      </a>
                      <a
                        href={`https://wa.me/${agent.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-white/90 hover:bg-green-500 flex items-center justify-center transition-all hover:scale-110"
                      >
                        <MessageCircle className="w-5 h-5 text-foreground" />
                      </a>
                      <a
                        href={`mailto:${agent.email}`}
                        className="w-12 h-12 rounded-xl bg-white/90 hover:bg-accent flex items-center justify-center transition-all hover:scale-110"
                      >
                        <Mail className="w-5 h-5 text-foreground" />
                      </a>
                    </div>
                  </div>

                  {/* Card Content */}
                  <CardContent className="p-5 space-y-4">
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {agent.specialty}
                    </p>

                    <div className="h-px bg-border" />

                    <Link to={`/agent/${agent.id}`}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group/btn">
                        View Profile
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>

                    <a
                      href={`mailto:${agent.email}`}
                      className="block text-center text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      or contact via email →
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 sm:py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base px-2">
            We're always looking for talented real estate professionals to join Alkhail. 
            If you're passionate about property and client service, we'd love to hear from you.
          </p>
          <Link to="/#contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold h-11 sm:h-12 px-6 sm:px-8">
              Apply Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgentsPage;
