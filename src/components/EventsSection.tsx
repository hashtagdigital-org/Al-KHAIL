import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { events } from "@/data/events";
import { parseISO, isBefore, parse } from "date-fns";
const EventsSection = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<"all" | "upcoming" | "past">("all");
  
  // Helper function to check if event date has passed
  const isEventPast = (dateString: string) => {
    try {
      const eventDate = parse(dateString, "MMMM d, yyyy", new Date());
      return isBefore(eventDate, new Date());
    } catch {
      return false;
    }
  };
  
  const filteredEvents = activeFilter === "all" ? events : events.filter(event => event.category === activeFilter);
  
  const handleViewDetails = (slug: string) => {
    navigate(`/event/${slug}`);
  };
  return <section className="py-32 px-4 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent))_0%,transparent_50%)] opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--luxury-gold))_0%,transparent_50%)] opacity-5" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-effect">
            <Sparkles className="w-4 h-4 text-[hsl(var(--luxury-gold))]" />
            <span className="text-sm font-medium text-muted-foreground">Exclusive Events</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-luxury">
            Alkhail Events
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our latest open houses, property launches, and special gatherings.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-16 animate-fade-in flex-wrap">
          <Button variant={activeFilter === "all" ? "accent" : "outline"} onClick={() => setActiveFilter("all")} className="min-w-[140px] h-12 text-base font-medium" size="lg">
            All Events
          </Button>
          <Button variant={activeFilter === "upcoming" ? "accent" : "outline"} onClick={() => setActiveFilter("upcoming")} className="min-w-[140px] h-12 text-base font-medium" size="lg">
            Upcoming Events
          </Button>
          <Button variant={activeFilter === "past" ? "accent" : "outline"} onClick={() => setActiveFilter("past")} className="min-w-[140px] h-12 text-base font-medium" size="lg">
            Past Events
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => {
            const isPast = isEventPast(event.date);
            return (
              <Card 
                key={event.id} 
                className={`group overflow-hidden border-border/50 transition-all duration-500 animate-fade-in bg-card/50 backdrop-blur-sm ${
                  isPast 
                    ? 'opacity-75 hover:opacity-90' 
                    : 'hover:border-[hsl(var(--accent))]/50 hover:-translate-y-2'
                }`} 
                style={{ animationDelay: `${index * 100}ms` }}
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
              
                <CardContent className="p-8">
                  <h3 className={`text-xl font-bold mb-6 transition-colors duration-300 line-clamp-2 ${
                    isPast 
                      ? 'text-muted-foreground' 
                      : 'text-card-foreground group-hover:text-[hsl(var(--accent))]'
                  }`}>
                    {event.title}
                  </h3>
                  
                  <div className="space-y-3 mb-8">
                    <div className={`flex items-center gap-3 transition-colors duration-300 ${
                      isPast 
                        ? 'text-muted-foreground' 
                        : 'text-muted-foreground group-hover:text-foreground'
                    }`}>
                      <Calendar className={`w-5 h-5 ${
                        isPast ? 'text-muted-foreground' : 'text-[hsl(var(--accent))]'
                      }`} />
                      <span className="text-sm font-medium">{event.date}</span>
                    </div>
                    <div className={`flex items-center gap-3 transition-colors duration-300 ${
                      isPast 
                        ? 'text-muted-foreground' 
                        : 'text-muted-foreground group-hover:text-foreground'
                    }`}>
                      <MapPin className={`w-5 h-5 ${
                        isPast ? 'text-muted-foreground' : 'text-[hsl(var(--accent))]'
                      }`} />
                      <span className="text-sm font-medium">{event.location}</span>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className={`w-full h-12 transition-all duration-300 ${
                      isPast
                        ? 'border-muted text-muted-foreground cursor-default hover:bg-transparent'
                        : 'group/btn border-[hsl(var(--accent))]/30 hover:bg-[hsl(var(--accent))] hover:text-white hover:border-[hsl(var(--accent))]'
                    }`}
                    size="lg" 
                    onClick={() => handleViewDetails(event.slug)}
                  >
                    <span className="font-semibold">
                      {isPast ? 'Event Ended' : 'View Details'}
                    </span>
                    {!isPast && (
                      <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                    )}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* No Results Message */}
        {filteredEvents.length === 0 && <div className="text-center py-20 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted/50 mb-6">
              <Calendar className="w-10 h-10 text-muted-foreground" />
            </div>
            <p className="text-xl text-muted-foreground font-medium">
              No events found in this category.
            </p>
          </div>}
      </div>
    </section>;
};
export default EventsSection;