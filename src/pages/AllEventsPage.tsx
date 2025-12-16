import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, ArrowRight, Sparkles, Search, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { events } from "@/data/events";

const AllEventsPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<"all" | "upcoming" | "past">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  // Get unique types and locations for filters
  const eventTypes = [...new Set(events.map(e => e.type))];
  const eventLocations = [...new Set(events.map(e => e.location))];

  // Filter events
  const filteredEvents = events.filter(event => {
    const matchesCategory = activeFilter === "all" || event.category === activeFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          event.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || event.type === selectedType;
    const matchesLocation = selectedLocation === "all" || event.location === selectedLocation;
    return matchesCategory && matchesSearch && matchesType && matchesLocation;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedType("all");
    setSelectedLocation("all");
    setActiveFilter("all");
  };

  const hasActiveFilters = searchQuery || selectedType !== "all" || selectedLocation !== "all" || activeFilter !== "all";

  const handleViewDetails = (slug: string) => {
    navigate(`/event/${slug}`);
  };

  const handleCardClick = (slug: string, isPast: boolean) => {
    if (!isPast) {
      navigate(`/event/${slug}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent))_0%,transparent_50%)] opacity-5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--luxury-gold))_0%,transparent_50%)] opacity-5" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-effect">
              <Sparkles className="w-4 h-4 text-[hsl(var(--luxury-gold))]" />
              <span className="text-sm font-medium text-muted-foreground">Exclusive Events</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient-luxury">
              Alkhail Events
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our latest open houses, property launches, exhibitions, and special gatherings. 
              Join us for exclusive real estate experiences in Dubai.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-lg animate-fade-in">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search events by name or location..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-background/50 border-border/50"
                />
              </div>

              {/* Type Filter */}
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full lg:w-[200px] h-12 bg-background/50 border-border/50">
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {eventTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Location Filter */}
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger className="w-full lg:w-[250px] h-12 bg-background/50 border-border/50">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {eventLocations.map(location => (
                    <SelectItem key={location} value={location}>{location}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border/50">
              <Button 
                variant={activeFilter === "all" ? "accent" : "outline"} 
                onClick={() => setActiveFilter("all")}
                className="h-10"
              >
                All Events ({events.length})
              </Button>
              <Button 
                variant={activeFilter === "upcoming" ? "accent" : "outline"} 
                onClick={() => setActiveFilter("upcoming")}
                className="h-10"
              >
                Upcoming ({events.filter(e => e.category === "upcoming").length})
              </Button>
              <Button 
                variant={activeFilter === "past" ? "accent" : "outline"} 
                onClick={() => setActiveFilter("past")}
                className="h-10"
              >
                Past Events ({events.filter(e => e.category === "past").length})
              </Button>

              {hasActiveFilters && (
                <Button 
                  variant="ghost" 
                  onClick={clearFilters}
                  className="h-10 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4 mr-2" />
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredEvents.length}</span> events
            </p>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredEvents.map((event, index) => {
                const isPast = event.category === "past";
                return (
                  <Card 
                    key={event.id} 
                    onClick={() => handleCardClick(event.slug, isPast)}
                    className={`group overflow-hidden border-border/50 transition-all duration-500 animate-fade-in bg-card/50 backdrop-blur-sm ${
                      isPast 
                        ? 'opacity-75 hover:opacity-90 cursor-default' 
                        : 'hover:border-[hsl(var(--accent))]/50 hover:-translate-y-2 cursor-pointer'
                    }`} 
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className={`w-full h-full object-cover transition-all duration-700 ${
                          isPast 
                            ? 'grayscale group-hover:grayscale-[50%]' 
                            : 'group-hover:scale-110'
                        }`}
                      />
                      <div className="absolute top-4 right-4 z-10 flex gap-2">
                        {isPast && (
                          <Badge variant="secondary" className="bg-muted text-muted-foreground">
                            Past Event
                          </Badge>
                        )}
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm ${
                          isPast 
                            ? 'bg-muted text-muted-foreground' 
                            : 'bg-[hsl(var(--luxury-gold))] text-white'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                      <div className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                        isPast 
                          ? 'from-muted/90 via-muted/50 to-transparent opacity-70' 
                          : 'from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80'
                      }`} />
                      
                      {/* Hover Overlay */}
                      {!isPast && (
                        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--accent))] via-[hsl(var(--accent))]/50 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center">
                          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <ArrowRight className="w-12 h-12 text-white" />
                          </div>
                        </div>
                      )}
                    </div>
                  
                    <CardContent className="p-5 sm:p-6 md:p-8">
                      <h3 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 transition-colors duration-300 line-clamp-2 ${
                        isPast 
                          ? 'text-muted-foreground' 
                          : 'text-card-foreground group-hover:text-[hsl(var(--accent))]'
                      }`}>
                        {event.title}
                      </h3>
                      
                      <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                        <div className={`flex items-center gap-2 sm:gap-3 transition-colors duration-300 ${
                          isPast 
                            ? 'text-muted-foreground' 
                            : 'text-muted-foreground group-hover:text-foreground'
                        }`}>
                          <Calendar className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${
                            isPast ? 'text-muted-foreground' : 'text-[hsl(var(--accent))]'
                          }`} />
                          <span className="text-xs sm:text-sm font-medium">{event.date}</span>
                        </div>
                        <div className={`flex items-center gap-2 sm:gap-3 transition-colors duration-300 ${
                          isPast 
                            ? 'text-muted-foreground' 
                            : 'text-muted-foreground group-hover:text-foreground'
                        }`}>
                          <MapPin className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${
                            isPast ? 'text-muted-foreground' : 'text-[hsl(var(--accent))]'
                          }`} />
                          <span className="text-xs sm:text-sm font-medium line-clamp-1">{event.location}</span>
                        </div>
                      </div>

                      <Button 
                        variant="outline" 
                        className={`w-full h-11 sm:h-12 transition-all duration-300 ${
                          isPast
                            ? 'border-muted text-muted-foreground cursor-default hover:bg-transparent'
                            : 'group/btn border-[hsl(var(--accent))]/30 hover:bg-[hsl(var(--accent))] hover:text-white hover:border-[hsl(var(--accent))]'
                        }`}
                        size="lg" 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewDetails(event.slug);
                        }}
                      >
                        <span className="font-semibold text-sm sm:text-base">
                          {isPast ? 'Event Ended' : 'View Details'}
                        </span>
                        {!isPast && (
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted/50 mb-6">
                <Calendar className="w-10 h-10 text-muted-foreground" />
              </div>
              <p className="text-xl text-muted-foreground font-medium mb-4">
                No events found matching your criteria.
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--luxury-gold))]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Stay Updated?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Be the first to know about our upcoming events, exclusive property launches, and VIP gatherings.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[hsl(var(--accent))] hover:bg-white/90 h-14 px-8 text-lg font-semibold"
            onClick={() => window.open('https://wa.me/971041234567', '_blank')}
          >
            Contact Us on WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AllEventsPage;
