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
      {/* Navigation Bar - Responsive */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-3 md:py-4">
          <div className="flex justify-between items-center gap-2">
            <Button
              variant="ghost"
              size={window.innerWidth < 768 ? "default" : "lg"}
              onClick={() => navigate("/")}
              className="hover:bg-accent/10 text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              <span className="hidden xs:inline">Back to Events</span>
              <span className="xs:hidden">Back</span>
            </Button>
            <ShareButton 
              title={event.title}
              url={currentUrl}
              description={event.description}
            />
          </div>
        </div>
      </div>

      {/* Modern Hero Section - Fully Responsive */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* Image Container - Responsive with rounded corners */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl group">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Floating Badge - Responsive */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <span className="inline-block bg-luxury-gold text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-xl backdrop-blur-sm">
                  {event.type}
                </span>
              </div>
            </div>
            
            {/* Decorative Element - Hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-accent to-luxury-gold rounded-3xl opacity-20 blur-2xl -z-10" />
            <div className="hidden sm:block absolute -top-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-luxury-gold to-accent rounded-3xl opacity-20 blur-2xl -z-10" />
          </div>

          {/* Content - Responsive */}
          <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gradient-luxury">
                {event.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Quick Info Cards - Responsive Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">Date</p>
                </div>
                <p className="font-bold text-sm sm:text-base lg:text-lg">{event.date}</p>
              </div>

              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">Time</p>
                </div>
                <p className="font-bold text-sm sm:text-base lg:text-lg">{event.time}</p>
              </div>

              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">Location</p>
                </div>
                <p className="font-bold text-xs sm:text-sm">{event.location}</p>
              </div>

              <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">Capacity</p>
                </div>
                <p className="font-bold text-sm sm:text-base lg:text-lg">{event.capacity}</p>
              </div>
            </div>

            {/* CTA Buttons - Responsive */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button 
                size={window.innerWidth < 640 ? "default" : "lg"}
                className="h-12 sm:h-14 text-base sm:text-lg font-semibold flex-1 bg-gradient-to-r from-accent to-luxury-gold hover:opacity-90 transition-opacity"
                onClick={() => event.category === "upcoming" && setIsRegistrationOpen(true)}
              >
                {event.category === "upcoming" ? "Register Now" : "View Gallery"}
              </Button>
              <Button 
                variant="outline"
                size={window.innerWidth < 640 ? "default" : "lg"}
                className="h-12 sm:h-14 text-base sm:text-lg font-semibold border-2"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - Responsive */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-20">
        <Separator className="my-6 sm:my-8" />

        {/* Main Content - Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* What to Expect - Responsive */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-card via-card to-muted/20 border border-border">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gradient-luxury">
                What to Expect
              </h2>
              <ul className="space-y-3 sm:space-y-5 text-muted-foreground text-base sm:text-lg">
                <li className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-background/50 transition-colors">
                  <span className="text-accent text-xl sm:text-2xl mt-1 font-bold">•</span>
                  <span>Exclusive property tours with our expert advisors</span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-background/50 transition-colors">
                  <span className="text-accent text-xl sm:text-2xl mt-1 font-bold">•</span>
                  <span>Comprehensive market insights and investment opportunities</span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-background/50 transition-colors">
                  <span className="text-accent text-xl sm:text-2xl mt-1 font-bold">•</span>
                  <span>Networking opportunities with industry professionals</span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-background/50 transition-colors">
                  <span className="text-accent text-xl sm:text-2xl mt-1 font-bold">•</span>
                  <span>Refreshments and hospitality throughout the event</span>
                </li>
                <li className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-background/50 transition-colors">
                  <span className="text-accent text-xl sm:text-2xl mt-1 font-bold">•</span>
                  <span>Personalized consultation with real estate specialists</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Sidebar - Responsive */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Card - Sticky only on desktop */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border-2 border-border shadow-lg lg:sticky lg:top-24">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-5">
                <a 
                  href={`tel:${event.contact?.phone}`}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-muted/50 hover:bg-accent/10 hover:border-accent border border-transparent transition-all group"
                >
                  <div className="p-2 sm:p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <span className="text-base sm:text-lg font-medium">{event.contact?.phone}</span>
                </a>
                <a 
                  href={`mailto:${event.contact?.email}`}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-muted/50 hover:bg-accent/10 hover:border-accent border border-transparent transition-all group"
                >
                  <div className="p-2 sm:p-3 rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <span className="text-sm sm:text-base font-medium break-all">{event.contact?.email}</span>
                </a>
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
