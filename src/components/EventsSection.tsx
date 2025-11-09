import { useState } from "react";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import eventOpenHouse from "@/assets/event-open-house.jpg";
import eventExhibition from "@/assets/event-exhibition.jpg";
import eventPropertyLaunch from "@/assets/event-property-launch.jpg";
import eventPenthouse from "@/assets/event-penthouse.jpg";
import eventTeamGathering from "@/assets/event-team-gathering.jpg";
import eventVillaViewing from "@/assets/event-villa-viewing.jpg";

const events = [
  {
    id: 1,
    title: "Downtown Dubai Open House",
    date: "March 15, 2025",
    location: "Burj Khalifa District, Dubai",
    image: eventOpenHouse,
    category: "upcoming",
    type: "Open House"
  },
  {
    id: 2,
    title: "Luxury Real Estate Exhibition",
    date: "March 22, 2025",
    location: "Dubai World Trade Centre",
    image: eventExhibition,
    category: "upcoming",
    type: "Exhibition"
  },
  {
    id: 3,
    title: "Marina Residence Launch",
    date: "April 5, 2025",
    location: "Dubai Marina",
    image: eventPropertyLaunch,
    category: "upcoming",
    type: "Property Launch"
  },
  {
    id: 4,
    title: "Palm Jumeirah Penthouse Viewing",
    date: "February 28, 2025",
    location: "Palm Jumeirah, Dubai",
    image: eventPenthouse,
    category: "past",
    type: "Exclusive Viewing"
  },
  {
    id: 5,
    title: "Annual Team Excellence Gala",
    date: "February 14, 2025",
    location: "Burj Al Arab, Dubai",
    image: eventTeamGathering,
    category: "past",
    type: "Team Gathering"
  },
  {
    id: 6,
    title: "Emirates Hills Villa Showcase",
    date: "January 20, 2025",
    location: "Emirates Hills, Dubai",
    image: eventVillaViewing,
    category: "past",
    type: "Open House"
  }
];

const EventsSection = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "upcoming" | "past">("all");

  const filteredEvents = activeFilter === "all" 
    ? events 
    : events.filter(event => event.category === activeFilter);

  return (
    <section className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Alkhail Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our latest open houses, property launches, and special gatherings.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12 animate-fade-in">
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            onClick={() => setActiveFilter("all")}
            className="transition-all duration-300"
          >
            All Events
          </Button>
          <Button
            variant={activeFilter === "upcoming" ? "default" : "outline"}
            onClick={() => setActiveFilter("upcoming")}
            className="transition-all duration-300"
          >
            Upcoming Events
          </Button>
          <Button
            variant={activeFilter === "past" ? "default" : "outline"}
            onClick={() => setActiveFilter("past")}
            className="transition-all duration-300"
          >
            Past Events
          </Button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <Card
              key={event.id}
              className="group overflow-hidden border-border hover:shadow-2xl transition-all duration-500 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-card-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4 text-accent" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group/btn hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <p className="text-xl text-muted-foreground">
              No events found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
