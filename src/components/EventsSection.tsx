import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { events } from "@/data/events";

const EventsSection = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<"all" | "upcoming" | "past">("all");
  
  const filteredEvents = activeFilter === "all" ? events : events.filter(event => event.category === activeFilter);
  
  const handleViewDetails = (slug: string) => {
    navigate(`/event/${slug}`);
  };

  const handleCardClick = (slug: string, isPast: boolean) => {
    if (!isPast) {
      navigate(`/event/${slug}`);
    }
  };
  return <section className="py-16 sm:py-20 md:py-32 px-4 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--accent))_0%,transparent_50%)] opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--luxury-gold))_0%,transparent_50%)] opacity-5" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-effect">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[hsl(var(--luxury-gold))]" />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground">Exclusive Events</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gradient-luxury">
            Alkhail Events
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 mb-8">
            Discover our latest open houses, property launches, and special gatherings.
          </p>
          <Button 
            variant="accent" 
            size="lg" 
            onClick={() => navigate('/events')}
            className="h-12 px-8 text-base font-semibold"
          >
            View All Events
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 sm:gap-3 mb-10 sm:mb-12 md:mb-16 animate-fade-in flex-wrap px-4">
          <Button variant={activeFilter === "all" ? "accent" : "outline"} onClick={() => setActiveFilter("all")} className="min-w-[100px] sm:min-w-[140px] h-10 sm:h-12 text-sm sm:text-base font-medium" size="lg">
            All Events
          </Button>
          <Button variant={activeFilter === "upcoming" ? "accent" : "outline"} onClick={() => setActiveFilter("upcoming")} className="min-w-[100px] sm:min-w-[140px] h-10 sm:h-12 text-sm sm:text-base font-medium" size="lg">
            Upcoming
          </Button>
          <Button variant={activeFilter === "past" ? "accent" : "outline"} onClick={() => setActiveFilter("past")} className="min-w-[100px] sm:min-w-[140px] h-10 sm:h-12 text-sm sm:text-base font-medium" size="lg">
            Past Events
          </Button>
        </div>

        {/* Events Grid */}
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
                    onClick={() => handleViewDetails(event.slug)}
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