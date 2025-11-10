import eventOpenHouse from "@/assets/event-open-house.jpg";
import eventExhibition from "@/assets/event-exhibition.jpg";
import eventPropertyLaunch from "@/assets/event-property-launch.jpg";
import eventPenthouse from "@/assets/event-penthouse.jpg";
import eventTeamGathering from "@/assets/event-team-gathering.jpg";
import eventVillaViewing from "@/assets/event-villa-viewing.jpg";

export interface Event {
  id: number;
  slug: string;
  title: string;
  date: string;
  location: string;
  image: string;
  category: "upcoming" | "past";
  type: string;
  time?: string;
  description?: string;
  capacity?: string;
  contact?: {
    phone: string;
    email: string;
  };
}

export const events: Event[] = [
  {
    id: 1,
    slug: "downtown-dubai-open-house",
    title: "Downtown Dubai Open House",
    date: "March 15, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Burj Khalifa District, Dubai",
    image: eventOpenHouse,
    category: "upcoming",
    type: "Open House",
    description: "Experience luxury living in the heart of Downtown Dubai. This exclusive open house showcases premium properties with breathtaking views of the Burj Khalifa and Dubai Fountain. Join us for a day of exploration and discover your dream home in one of the world's most prestigious addresses.",
    capacity: "Limited to 50 guests",
    contact: {
      phone: "+971 4 123 4567",
      email: "events@alkhailrealestate.ae"
    }
  },
  {
    id: 2,
    slug: "luxury-real-estate-exhibition",
    title: "Luxury Real Estate Exhibition",
    date: "March 22, 2025",
    time: "9:00 AM - 8:00 PM",
    location: "Dubai World Trade Centre",
    image: eventExhibition,
    category: "upcoming",
    type: "Exhibition",
    description: "The region's premier luxury real estate exhibition featuring exclusive properties from Dubai's most sought-after developments. Meet leading developers, explore investment opportunities, and network with industry professionals. This is your gateway to the finest properties in the UAE.",
    capacity: "Open to all registered guests",
    contact: {
      phone: "+971 4 123 4567",
      email: "events@alkhailrealestate.ae"
    }
  },
  {
    id: 3,
    slug: "marina-residence-launch",
    title: "Marina Residence Launch",
    date: "April 5, 2025",
    time: "6:00 PM - 10:00 PM",
    location: "Dubai Marina",
    image: eventPropertyLaunch,
    category: "upcoming",
    type: "Property Launch",
    description: "Be among the first to discover the newest luxury residential development in Dubai Marina. This exclusive launch event unveils stunning waterfront apartments with world-class amenities, featuring panoramic marina views and direct yacht access. Early bird offers available for attendees.",
    capacity: "VIP invitation only - 100 guests",
    contact: {
      phone: "+971 4 123 4567",
      email: "events@alkhailrealestate.ae"
    }
  },
  {
    id: 4,
    slug: "palm-jumeirah-penthouse-viewing",
    title: "Palm Jumeirah Penthouse Viewing",
    date: "February 28, 2025",
    time: "2:00 PM - 7:00 PM",
    location: "Palm Jumeirah, Dubai",
    image: eventPenthouse,
    category: "past",
    type: "Exclusive Viewing",
    description: "An exclusive viewing of ultra-luxury penthouses on the iconic Palm Jumeirah. This invite-only event showcased some of Dubai's most prestigious properties with private beach access, infinity pools, and unparalleled views of the Arabian Gulf and Dubai skyline.",
    capacity: "VIP guests only - 30 attendees",
    contact: {
      phone: "+971 4 123 4567",
      email: "events@alkhailrealestate.ae"
    }
  },
  {
    id: 5,
    slug: "annual-team-excellence-gala",
    title: "Annual Team Excellence Gala",
    date: "February 14, 2025",
    time: "7:00 PM - 11:00 PM",
    location: "Burj Al Arab, Dubai",
    image: eventTeamGathering,
    category: "past",
    type: "Team Gathering",
    description: "Our annual celebration honoring the exceptional achievements of the Alkhail Real Estate team. An evening of recognition, networking, and celebration at Dubai's most iconic hotel, featuring awards presentation, gourmet dining, and entertainment.",
    capacity: "Team members and special guests - 150 attendees",
    contact: {
      phone: "+971 4 123 4567",
      email: "events@alkhailrealestate.ae"
    }
  },
  {
    id: 6,
    slug: "emirates-hills-villa-showcase",
    title: "Emirates Hills Villa Showcase",
    date: "January 20, 2025",
    time: "11:00 AM - 5:00 PM",
    location: "Emirates Hills, Dubai",
    image: eventVillaViewing,
    category: "past",
    type: "Open House",
    description: "A showcase of architectural masterpieces in Emirates Hills, Dubai's most exclusive residential community. This event featured custom-designed villas with private pools, landscaped gardens, and luxury finishes throughout. Attendees experienced the pinnacle of premium living.",
    capacity: "Pre-registered guests - 60 attendees",
    contact: {
      phone: "+971 4 123 4567",
      email: "events@alkhailrealestate.ae"
    }
  }
];

export const getEventBySlug = (slug: string): Event | undefined => {
  return events.find(event => event.slug === slug);
};

export const getEventById = (id: number): Event | undefined => {
  return events.find(event => event.id === id);
};
