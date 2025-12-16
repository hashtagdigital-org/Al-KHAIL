import { useParams, Link } from "react-router-dom";
import { agents } from "@/data/agents";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MessageCircle,
  Linkedin,
  Instagram,
  Award,
  TrendingUp,
  Globe,
  CheckCircle,
  ArrowLeft,
  Star,
  MapPin,
  Shield,
  Lock,
  FileCheck,
  Home,
  Building,
  Key,
  Repeat,
  Calendar,
  Quote,
  ExternalLink,
  Users,
  DollarSign,
  Briefcase,
  Search,
  Filter,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const iconMap: { [key: string]: React.ReactNode } = {
  Home: <Home className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Building: <Building className="w-6 h-6" />,
  Repeat: <Repeat className="w-6 h-6" />,
  Key: <Key className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
};

const AgentLanding = () => {
  const { agentId } = useParams();
  const agent = agents.find((a) => a.id === agentId);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  
  // Property search state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Get unique values for filters
  const propertyTypes = ["All", ...new Set(agent.projects.map(p => p.type))];
  const propertyStatuses = ["All", ...new Set(agent.projects.map(p => p.status))];
  const propertyLocations = ["All", ...new Set(agent.projects.map(p => p.location))];
  
  // Filter projects
  const filteredProjects = agent.projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "All" || project.type === selectedType;
    const matchesStatus = selectedStatus === "All" || project.status === selectedStatus;
    const matchesLocation = selectedLocation === "All" || project.location === selectedLocation;
    return matchesSearch && matchesType && matchesStatus && matchesLocation;
  });
  
  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 6);

  if (!agent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Agent Not Found</h1>
          <Link to="/">
            <Button variant="default">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: `Thank you ${formData.name}. ${agent.name.split(" ")[0]} will contact you shortly.`,
    });
    setFormData({ name: "", email: "", phone: "", budget: "", message: "" });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi ${agent.name.split(" ")[0]}, I'm interested in discussing property opportunities with you.`
    );
    window.open(`https://wa.me/${agent.whatsapp}?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold text-sm sm:text-base">Back to Home</span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-4">
              <a href={`mailto:${agent.email}`}>
                <Button size="sm" variant="outline">
                  <Mail className="w-4 h-4 sm:mr-2" />
                  <span className="hidden sm:inline">Email</span>
                </Button>
              </a>
              <Button size="sm" onClick={handleWhatsApp} className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                <MessageCircle className="w-4 h-4 sm:mr-2" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-br from-card via-card to-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Agent Image */}
            <div className="relative group">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-border">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-6 right-6">
                  <Badge className="bg-[hsl(var(--luxury-gold))] text-white border-0 text-lg px-4 py-2">
                    <Star className="w-4 h-4 mr-1 fill-current" /> {agent.rating}
                  </Badge>
                </div>

                {/* Status Badge */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-background/95 backdrop-blur-sm px-4 py-2 rounded-full">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-semibold text-foreground">Available Now</span>
                </div>
              </div>
            </div>

            {/* Agent Info */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-primary text-primary-foreground border-0 mb-4">
                  {agent.role}
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-foreground">
                  {agent.name}
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
                  {agent.specialty}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {agent.expertise.map((exp, idx) => (
                    <Badge key={idx} variant="outline" className="border-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-gold))]">
                      {exp}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Card className="bg-card/50 backdrop-blur-md border-border p-4 text-center">
                  <Briefcase className="w-6 h-6 mx-auto mb-2 text-[hsl(var(--luxury-gold))]" />
                  <div className="text-xl font-bold text-foreground">{agent.experience}</div>
                  <div className="text-xs text-muted-foreground">Experience</div>
                </Card>
                <Card className="bg-card/50 backdrop-blur-md border-border p-4 text-center">
                  <Home className="w-6 h-6 mx-auto mb-2 text-[hsl(var(--luxury-gold))]" />
                  <div className="text-xl font-bold text-foreground">{agent.properties}</div>
                  <div className="text-xs text-muted-foreground">Properties</div>
                </Card>
                <Card className="bg-card/50 backdrop-blur-md border-border p-4 text-center">
                  <DollarSign className="w-6 h-6 mx-auto mb-2 text-[hsl(var(--luxury-gold))]" />
                  <div className="text-xl font-bold text-foreground">{agent.totalTransactionValue}</div>
                  <div className="text-xs text-muted-foreground">Transactions</div>
                </Card>
                <Card className="bg-card/50 backdrop-blur-md border-border p-4 text-center">
                  <Users className="w-6 h-6 mx-auto mb-2 text-[hsl(var(--luxury-gold))]" />
                  <div className="text-xl font-bold text-foreground">{agent.clientSatisfaction}</div>
                  <div className="text-xs text-muted-foreground">Satisfaction</div>
                </Card>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleWhatsApp} className="bg-[#25D366] hover:bg-[#25D366]/90 text-white">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </Button>
                <a href="#contact">
                  <Button size="lg" variant="default" className="w-full sm:w-auto">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Agent
                  </Button>
                </a>
                <a href="#contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Consultation
                  </Button>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {agent.linkedin && (
                  <a
                    href={agent.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card border border-border hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] flex items-center justify-center transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {agent.instagram && (
                  <a
                    href={agent.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card border border-border hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white hover:border-transparent flex items-center justify-center transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                )}
                <a
                  href={`mailto:${agent.email}`}
                  className="w-12 h-12 rounded-xl bg-card border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary flex items-center justify-center transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={`tel:${agent.whatsapp}`}
                  className="w-12 h-12 rounded-xl bg-card border border-border hover:bg-[hsl(var(--luxury-gold))] hover:text-white hover:border-[hsl(var(--luxury-gold))] flex items-center justify-center transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">About {agent.name.split(" ")[0]}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{agent.bio}</p>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                <p className="text-foreground italic">"{agent.uniqueValueProposition}"</p>
              </div>
            </div>
            <div className="space-y-6">
              {/* Languages */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                  <Globe className="w-5 h-5 text-primary" />
                  Languages Spoken
                </h3>
                <div className="flex flex-wrap gap-2">
                  {agent.languages.map((lang, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm px-4 py-2">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </Card>
              
              {/* Certifications Preview */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                  <FileCheck className="w-5 h-5 text-primary" />
                  RERA License
                </h3>
                <p className="text-lg font-semibold text-[hsl(var(--luxury-gold))]">{agent.reraLicense}</p>
                <p className="text-sm text-muted-foreground mt-1">{agent.companyAffiliation}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Key Achievements</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-8 text-center bg-background hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Home className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{agent.properties}</div>
              <div className="text-muted-foreground">Properties Sold</div>
            </Card>
            <Card className="p-8 text-center bg-background hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--luxury-gold))]/10 flex items-center justify-center">
                <DollarSign className="w-8 h-8 text-[hsl(var(--luxury-gold))]" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{agent.totalTransactionValue}</div>
              <div className="text-muted-foreground">Transaction Value</div>
            </Card>
            <Card className="p-8 text-center bg-background hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{agent.experience}</div>
              <div className="text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="p-8 text-center bg-background hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-500" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{agent.clientSatisfaction}</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </Card>
          </div>

          {/* Awards */}
          {agent.awards.length > 0 && (
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Awards & Recognition</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {agent.awards.map((award, idx) => (
                  <Card key={idx} className="p-6 bg-background border-l-4 border-[hsl(var(--luxury-gold))] hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-[hsl(var(--luxury-gold))]" />
                      <span className="text-sm font-semibold text-[hsl(var(--luxury-gold))]">{award.year}</span>
                    </div>
                    <h4 className="font-bold text-foreground mb-1">{award.title}</h4>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Specializations & Services</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Comprehensive real estate services tailored to your unique needs
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {agent.services.map((service) => (
              <Card key={service.id} className="p-6 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {iconMap[service.icon] || <Home className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Featured Properties</h2>
          <p className="text-center text-muted-foreground mb-8">
            Properties managed and sold by {agent.name.split(" ")[0]}
          </p>
          
          {/* Advanced Search */}
          <Card className="p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Search & Filter Properties</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search properties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              {/* Type Filter */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Status Filter */}
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  {propertyStatuses.map((status) => (
                    <SelectItem key={status} value={status}>{status}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {/* Location Filter */}
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  {propertyLocations.map((location) => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Active Filters */}
            {(searchQuery || selectedType !== "All" || selectedStatus !== "All" || selectedLocation !== "All") && (
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {searchQuery && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Search: {searchQuery}
                    <button onClick={() => setSearchQuery("")}><X className="w-3 h-3" /></button>
                  </Badge>
                )}
                {selectedType !== "All" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Type: {selectedType}
                    <button onClick={() => setSelectedType("All")}><X className="w-3 h-3" /></button>
                  </Badge>
                )}
                {selectedStatus !== "All" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Status: {selectedStatus}
                    <button onClick={() => setSelectedStatus("All")}><X className="w-3 h-3" /></button>
                  </Badge>
                )}
                {selectedLocation !== "All" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    Location: {selectedLocation}
                    <button onClick={() => setSelectedLocation("All")}><X className="w-3 h-3" /></button>
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedType("All");
                    setSelectedStatus("All");
                    setSelectedLocation("All");
                  }}
                  className="text-primary"
                >
                  Clear all
                </Button>
              </div>
            )}
            
            {/* Results count */}
            <p className="text-sm text-muted-foreground mt-4">
              Showing {displayedProjects.length} of {filteredProjects.length} properties
            </p>
          </Card>
          
          {/* Properties Grid */}
          {displayedProjects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-all">
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
                          ? "bg-primary" 
                          : "bg-blue-500"
                      } text-white border-0`}>
                        {project.status}
                      </Badge>
                      <Badge className="bg-[hsl(var(--luxury-gold))] text-white border-0">
                        {project.year}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <Badge variant="outline" className="mb-2">{project.type}</Badge>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{project.price}</span>
                      <Button size="sm" variant="outline">View Details</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="p-12 text-center">
              <Search className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No properties found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search filters</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType("All");
                  setSelectedStatus("All");
                  setSelectedLocation("All");
                }}
              >
                Clear Filters
              </Button>
            </Card>
          )}
          
          {/* Show All / Show Less Button */}
          {filteredProjects.length > 6 && (
            <div className="text-center mt-8">
              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="min-w-[200px]"
              >
                {showAllProjects ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-2" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-2" />
                    View All {filteredProjects.length} Projects
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Areas of Expertise</h2>
          <p className="text-center text-muted-foreground mb-12">
            Dubai locations where {agent.name.split(" ")[0]} specializes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {agent.areasOfExpertise.map((area, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-card border border-border px-6 py-3 rounded-full hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-primary" />
                <span className="font-medium text-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {agent.testimonials.length > 0 && (
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Client Testimonials</h2>
            <p className="text-center text-muted-foreground mb-12">
              What clients say about working with {agent.name.split(" ")[0]}
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {agent.testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="p-8 bg-background">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating
                            ? "text-[hsl(var(--luxury-gold))] fill-[hsl(var(--luxury-gold))]"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-foreground leading-relaxed mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-foreground">{testimonial.clientName}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Globe className="w-3 h-3" />
                        {testimonial.clientCountry}
                      </p>
                    </div>
                    <Badge variant="outline" className="text-xs">{testimonial.date}</Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certifications & Licenses */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Certifications & Licenses</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center bg-card border-2 border-primary">
              <FileCheck className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-bold text-lg text-foreground mb-2">RERA License</h3>
              <p className="text-2xl font-bold text-primary">{agent.reraLicense}</p>
            </Card>
            <Card className="p-6 text-center bg-card">
              <Building className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--luxury-gold))]" />
              <h3 className="font-bold text-lg text-foreground mb-2">Company</h3>
              <p className="text-lg text-muted-foreground">{agent.companyAffiliation}</p>
            </Card>
            <Card className="p-6 text-center bg-card sm:col-span-2 lg:col-span-1">
              <Award className="w-12 h-12 mx-auto mb-4 text-green-500" />
              <h3 className="font-bold text-lg text-foreground mb-2">Certifications</h3>
              <p className="text-lg text-muted-foreground">{agent.certifications.length} Professional</p>
            </Card>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {agent.certifications.map((cert, idx) => (
              <Badge key={idx} variant="secondary" className="px-4 py-2">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Get in Touch</h2>
          <p className="text-center text-muted-foreground mb-12">
            Ready to start your property journey? Contact {agent.name.split(" ")[0]} today.
          </p>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-6 text-foreground">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <Select
                  value={formData.budget}
                  onValueChange={(value) => setFormData({ ...formData, budget: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Budget Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-5m">Under AED 5M</SelectItem>
                    <SelectItem value="5m-10m">AED 5M - 10M</SelectItem>
                    <SelectItem value="10m-25m">AED 10M - 25M</SelectItem>
                    <SelectItem value="25m-50m">AED 25M - 50M</SelectItem>
                    <SelectItem value="over-50m">Over AED 50M</SelectItem>
                  </SelectContent>
                </Select>
                <Textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <Button type="submit" className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Direct Contact</h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${agent.whatsapp}`}
                    className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-semibold text-foreground">{agent.whatsapp}</p>
                    </div>
                  </a>
                  <button
                    onClick={handleWhatsApp}
                    className="w-full flex items-center gap-4 p-4 bg-[#25D366]/10 rounded-lg hover:bg-[#25D366]/20 transition-colors text-left"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-semibold text-foreground">Chat Now</p>
                    </div>
                  </button>
                  <a
                    href={`mailto:${agent.email}`}
                    className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground">{agent.email}</p>
                    </div>
                  </a>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Connect Online</h3>
                <div className="flex gap-4">
                  {agent.linkedin && (
                    <a
                      href={agent.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-4 bg-[#0077B5]/10 rounded-lg hover:bg-[#0077B5]/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-[#0077B5]" />
                      <span className="font-medium text-foreground">LinkedIn</span>
                    </a>
                  )}
                  {agent.instagram && (
                    <a
                      href={agent.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 p-4 bg-pink-500/10 rounded-lg hover:bg-pink-500/20 transition-colors"
                    >
                      <Instagram className="w-5 h-5 text-pink-500" />
                      <span className="font-medium text-foreground">Instagram</span>
                    </a>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-500" />
              <span className="text-sm">RERA Verified Agent</span>
            </div>
            <Separator orientation="vertical" className="h-6 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-blue-500" />
              <span className="text-sm">Secure Data Protection</span>
            </div>
            <Separator orientation="vertical" className="h-6 hidden sm:block" />
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[hsl(var(--luxury-gold))]" />
              <span className="text-sm">DLD Compliant</span>
            </div>
            <Separator orientation="vertical" className="h-6 hidden sm:block" />
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm">Privacy Protected</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border p-4 lg:hidden z-50">
        <div className="flex gap-3">
          <Button onClick={handleWhatsApp} className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90 text-white">
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          <a href={`tel:${agent.whatsapp}`} className="flex-1">
            <Button variant="default" className="w-full">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgentLanding;
