import { Calendar, MapPin, Clock, Users, Phone, Mail, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  category: string;
  type: string;
  time?: string;
  description?: string;
  capacity?: string;
  contact?: {
    phone: string;
    email: string;
  };
}

interface EventDetailDialogProps {
  event: Event | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EventDetailDialog = ({ event, open, onOpenChange }: EventDetailDialogProps) => {
  if (!event) return null;

  const eventDetails = {
    time: event.time || "10:00 AM - 6:00 PM",
    description: event.description || `Join us for an exclusive ${event.type.toLowerCase()} showcasing premium properties in Dubai's most sought-after locations. This event offers a unique opportunity to explore luxury real estate, meet our expert team, and discover your dream property.`,
    capacity: event.capacity || "Limited to 50 guests",
    contact: event.contact || {
      phone: "+971 4 123 4567",
      email: "events@alkhailrealestate.ae"
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <button
          onClick={() => onOpenChange(false)}
          className="absolute right-4 top-4 z-50 rounded-full bg-background/80 backdrop-blur-sm p-2 hover:bg-background transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Event Image */}
        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <span className="inline-block bg-[hsl(var(--luxury-gold))] text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {event.type}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{event.title}</h2>
          </div>
        </div>

        {/* Event Details */}
        <div className="p-8 space-y-8">
          {/* Key Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[hsl(var(--accent))]/10">
                <Calendar className="w-6 h-6 text-[hsl(var(--accent))]" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Date</p>
                <p className="font-semibold text-lg">{event.date}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[hsl(var(--accent))]/10">
                <Clock className="w-6 h-6 text-[hsl(var(--accent))]" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Time</p>
                <p className="font-semibold text-lg">{eventDetails.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[hsl(var(--accent))]/10">
                <MapPin className="w-6 h-6 text-[hsl(var(--accent))]" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-semibold text-lg">{event.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-[hsl(var(--accent))]/10">
                <Users className="w-6 h-6 text-[hsl(var(--accent))]" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Capacity</p>
                <p className="font-semibold text-lg">{eventDetails.capacity}</p>
              </div>
            </div>
          </div>

          <Separator />

          {/* Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">About This Event</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {eventDetails.description}
            </p>
          </div>

          <Separator />

          {/* What to Expect */}
          <div>
            <h3 className="text-2xl font-bold mb-4">What to Expect</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-[hsl(var(--accent))] mt-1">•</span>
                <span>Exclusive property tours with our expert advisors</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[hsl(var(--accent))] mt-1">•</span>
                <span>Comprehensive market insights and investment opportunities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[hsl(var(--accent))] mt-1">•</span>
                <span>Networking opportunities with industry professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[hsl(var(--accent))] mt-1">•</span>
                <span>Refreshments and hospitality throughout the event</span>
              </li>
            </ul>
          </div>

          <Separator />

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-[hsl(var(--accent))]" />
                <a href={`tel:${eventDetails.contact.phone}`} className="hover:text-[hsl(var(--accent))] transition-colors">
                  {eventDetails.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-[hsl(var(--accent))]" />
                <a href={`mailto:${eventDetails.contact.email}`} className="hover:text-[hsl(var(--accent))] transition-colors">
                  {eventDetails.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              variant="accent" 
              size="lg" 
              className="flex-1 h-14 text-lg font-semibold"
            >
              {event.category === "upcoming" ? "Register Now" : "View Gallery"}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex-1 h-14 text-lg"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailDialog;
