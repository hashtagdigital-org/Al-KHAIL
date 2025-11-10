import { useParams, useNavigate } from "react-router-dom";
import { Calendar, MapPin, Clock, Users, Phone, Mail, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ShareButton from "@/components/ShareButton";
import { getEventBySlug } from "@/data/events";
import { useEffect, useState } from "react";
import EventRegistrationDialog from "@/components/EventRegistrationDialog";

const EventLanding = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const event = slug ? getEventBySlug(slug) : null;
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  useEffect(() => {
    if (event) {
      document.title = `${event.title} | Alkhail Events`;
    }
  }, [event]);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-6 p-8">
          <h1 className="text-4xl font-bold text-foreground">Event Not Found</h1>
          <p className="text-muted-foreground text-lg">The event you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")} size="lg" variant="accent">
            <Home className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const currentUrl = window.location.href;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        
        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 p-6 md:p-8 z-10">
          <div className="container mx-auto max-w-7xl flex justify-between items-center">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => navigate("/")}
              className="text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Events
            </Button>
            <ShareButton 
              title={event.title}
              url={currentUrl}
              description={event.description}
            />
          </div>
        </div>

        {/* Event Title */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="container mx-auto max-w-7xl">
            <span className="inline-block bg-[hsl(var(--luxury-gold))] text-white px-5 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
              {event.type}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto max-w-7xl px-6 md:px-8 py-16 md:py-24">
        {/* Key Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
            <div className="p-3 rounded-lg bg-[hsl(var(--accent))]/10">
              <Calendar className="w-6 h-6 text-[hsl(var(--accent))]" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Date</p>
              <p className="font-semibold text-lg">{event.date}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
            <div className="p-3 rounded-lg bg-[hsl(var(--accent))]/10">
              <Clock className="w-6 h-6 text-[hsl(var(--accent))]" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Time</p>
              <p className="font-semibold text-lg">{event.time}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
            <div className="p-3 rounded-lg bg-[hsl(var(--accent))]/10">
              <MapPin className="w-6 h-6 text-[hsl(var(--accent))]" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="font-semibold text-lg">{event.location}</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
            <div className="p-3 rounded-lg bg-[hsl(var(--accent))]/10">
              <Users className="w-6 h-6 text-[hsl(var(--accent))]" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Capacity</p>
              <p className="font-semibold text-lg">{event.capacity}</p>
            </div>
          </div>
        </div>

        <Separator className="my-16" />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient-luxury">
                About This Event
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {event.description}
              </p>
            </div>

            <Separator />

            {/* What to Expect */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">What to Expect</h3>
              <ul className="space-y-4 text-muted-foreground text-lg">
                <li className="flex items-start gap-4">
                  <span className="text-[hsl(var(--accent))] text-2xl mt-1">•</span>
                  <span>Exclusive property tours with our expert advisors</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[hsl(var(--accent))] text-2xl mt-1">•</span>
                  <span>Comprehensive market insights and investment opportunities</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[hsl(var(--accent))] text-2xl mt-1">•</span>
                  <span>Networking opportunities with industry professionals</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[hsl(var(--accent))] text-2xl mt-1">•</span>
                  <span>Refreshments and hospitality throughout the event</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[hsl(var(--accent))] text-2xl mt-1">•</span>
                  <span>Personalized consultation with real estate specialists</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* CTA Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[hsl(var(--accent))] to-[hsl(var(--accent))]/80 text-white shadow-xl sticky top-8">
              <h3 className="text-2xl font-bold mb-6">
                {event.category === "upcoming" ? "Join This Event" : "Event Highlights"}
              </h3>
              <p className="mb-8 opacity-90">
                {event.category === "upcoming" 
                  ? "Reserve your spot at this exclusive event and discover luxury properties in Dubai."
                  : "View the highlights and gallery from this successful event."}
              </p>
              <Button 
                variant="secondary"
                size="lg" 
                className="w-full h-14 text-lg font-semibold mb-4 bg-white text-[hsl(var(--accent))] hover:bg-white/90"
                onClick={() => event.category === "upcoming" && setIsRegistrationOpen(true)}
              >
                {event.category === "upcoming" ? "Register Now" : "View Gallery"}
              </Button>
              <Button 
                variant="ghost"
                size="lg" 
                className="w-full h-14 text-lg text-white hover:bg-white/20"
                onClick={() => navigate("/")}
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Button>
            </div>

            {/* Contact Card */}
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-[hsl(var(--accent))] transition-colors">
                  <Phone className="w-5 h-5 text-[hsl(var(--accent))]" />
                  <a href={`tel:${event.contact?.phone}`} className="text-lg">
                    {event.contact?.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-[hsl(var(--accent))] transition-colors">
                  <Mail className="w-5 h-5 text-[hsl(var(--accent))]" />
                  <a href={`mailto:${event.contact?.email}`} className="text-lg break-all">
                    {event.contact?.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Registration Dialog */}
      <EventRegistrationDialog
        open={isRegistrationOpen}
        onOpenChange={setIsRegistrationOpen}
        eventTitle={event.title}
        eventId={event.id.toString()}
      />
    </div>
  );
};

export default EventLanding;
