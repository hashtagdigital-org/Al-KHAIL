import { useState } from "react";
import { Link } from "react-router-dom";
import { properties, Property } from "@/data/properties";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Bed,
  Bath,
  Maximize,
  MapPin,
  Building2,
  ArrowLeft,
  Phone,
  Mail,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
  Home,
  Dumbbell,
  Car,
  Shield,
  Waves,
  Trees,
  Wifi,
  Wind,
  Users,
  Download,
  TrendingUp,
  Award,
  Landmark,
  Plane,
  GraduationCap,
  ShoppingBag,
  Train,
  Star,
  Play,
  ZoomIn,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

// Featured property for single property view
const featuredProperty = properties[0];

const amenityIcons: Record<string, any> = {
  "Private Beach Access": Waves,
  "Smart Home System": Wifi,
  "Infinity Pool": Waves,
  "Private Garden": Trees,
  "Maid's Room": Users,
  "Driver's Room": Users,
  "Private Parking": Car,
  "24/7 Security": Shield,
  "Gym": Dumbbell,
  "Steam & Sauna": Wind,
  "Built-in Wardrobes": Home,
  "Central A/C": Wind,
  "Burj Khalifa View": Building2,
  "Private Elevator": Building2,
  "Rooftop Terrace": Trees,
  "Italian Kitchen": Home,
  "Study Room": Home,
  "Concierge Service": Users,
  "Gym & Pool Access": Dumbbell,
  "Private Marina Berth": Waves,
  "Home Cinema": Play,
  "Private Gym": Dumbbell,
  "Spa & Sauna": Wind,
  "Landscaped Garden": Trees,
  "Elevator": Building2,
  "Maid's Quarters": Users,
  "BBQ Area": Home,
};

const PropertiesPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const { toast } = useToast();

  const property = featuredProperty;
  const images = property.images || [property.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Our agent will contact you shortly.",
    });
  };

  const handleWhatsApp = () => {
    const message = `Hi, I'm interested in ${property.title} at ${property.location}. Please share more details.`;
    window.open(
      `https://wa.me/${property.contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const similarProperties = properties.filter((p) => p.id !== property.id);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 relative">
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 p-2 sm:p-3 rounded-full transition-all"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 p-2 sm:p-3 rounded-full transition-all"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </>
          )}

          {/* Image Indicators */}
          <div className="absolute bottom-20 sm:bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentImageIndex
                    ? "bg-white w-6 sm:w-8"
                    : "bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-12">
            <div className="container mx-auto">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-3 sm:mb-4 transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>

              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
                    <Badge className="bg-primary text-primary-foreground text-xs">
                      {property.type}
                    </Badge>
                    <Badge className="bg-accent text-accent-foreground text-xs">
                      {property.completion}
                    </Badge>
                    <Badge className="bg-white/20 text-white backdrop-blur-sm text-xs">
                      Premium
                    </Badge>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-1 sm:mb-2">
                    {property.title}
                  </h1>
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    <span className="text-sm sm:text-lg">{property.location}</span>
                  </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-2 sm:gap-3">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    {property.price}
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <Button
                      size="sm"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-xs sm:text-sm h-9 sm:h-10"
                      onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Request Details
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-xs sm:text-sm h-9 sm:h-10 hidden sm:flex"
                      onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      Book Viewing
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm h-9 sm:h-10"
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky CTA Bar */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-3 hidden md:block">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-bold text-foreground">{property.title}</span>
            <span className="text-2xl font-bold text-primary">{property.price}</span>
          </div>
          <div className="flex gap-3">
            <Button onClick={handleWhatsApp} className="bg-green-600 hover:bg-green-700">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-primary hover:bg-primary/90"
            >
              Contact Agent
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* Property Overview */}
            <section className="animate-fade-in">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Property Overview
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-lg">
                {property.description}
              </p>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6">
                <div className="text-center p-3 sm:p-4 bg-primary/5 rounded-xl">
                  <p className="text-xl sm:text-3xl font-bold text-primary">{property.bedrooms}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Bedrooms</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-primary/5 rounded-xl">
                  <p className="text-xl sm:text-3xl font-bold text-primary">{property.bathrooms}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Bathrooms</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-primary/5 rounded-xl">
                  <p className="text-xl sm:text-3xl font-bold text-primary">{property.sqft}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">Sq. Ft.</p>
                </div>
              </div>
            </section>

            {/* Property Details */}
            <section className="animate-fade-in">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
                <Home className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Property Details
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { label: "Price", value: property.price },
                  { label: "Bedrooms", value: property.bedrooms },
                  { label: "Bathrooms", value: property.bathrooms },
                  { label: "Size", value: `${property.sqft} sqft` },
                  { label: "Property Type", value: property.type },
                  { label: "Completion", value: property.completion },
                  { label: "Developer", value: property.developer },
                  { label: "Location", value: property.location },
                  { label: "Payment Plan", value: property.paymentPlan ? "Available" : "N/A" },
                ].map((detail, index) => (
                  <div
                    key={index}
                    className="p-3 sm:p-4 border border-border rounded-xl hover:border-primary/50 transition-colors"
                  >
                    <p className="text-xs sm:text-sm text-muted-foreground">{detail.label}</p>
                    <p className="font-semibold text-foreground text-sm sm:text-base truncate">{detail.value}</p>
                  </div>
                ))}
              </div>
              {property.paymentPlan && (
                <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-accent/10 border border-accent/30 rounded-xl">
                  <p className="text-xs sm:text-sm text-accent font-semibold mb-1">Payment Plan</p>
                  <p className="text-foreground text-sm sm:text-base">{property.paymentPlan}</p>
                </div>
              )}
            </section>

            {/* Image Gallery */}
            <section className="animate-fade-in">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
                <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Image Gallery
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="relative aspect-[4/3] rounded-lg sm:rounded-xl overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={image}
                      alt={`${property.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Amenities & Features */}
            <section className="animate-fade-in">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                Amenities & Features
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {property.amenities.map((amenity, index) => {
                  const IconComponent = amenityIcons[amenity] || Home;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all"
                    >
                      <div className="p-1.5 sm:p-2 bg-primary/10 rounded-lg flex-shrink-0">
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-foreground line-clamp-2">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Location Section */}
            <section className="animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-primary" />
                Location
              </h2>
              <div className="rounded-xl overflow-hidden border border-border">
                <div className="h-[300px] bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-lg font-semibold text-foreground">{property.location}</p>
                    <p className="text-muted-foreground">Interactive map coming soon</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {[
                  { icon: Train, label: "Metro Station", distance: "5 min" },
                  { icon: ShoppingBag, label: "Dubai Mall", distance: "10 min" },
                  { icon: GraduationCap, label: "Schools", distance: "8 min" },
                  { icon: Plane, label: "Airport", distance: "25 min" },
                ].map((place, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-card border border-border rounded-lg">
                    <place.icon className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{place.label}</p>
                      <p className="text-xs text-muted-foreground">{place.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Floor Plans */}
            <section className="animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Landmark className="w-6 h-6 text-primary" />
                Floor Plans
              </h2>
              <div className="border border-border rounded-xl p-8 bg-card">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <Home className="w-16 h-16 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Floor plan visualization</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Floor Plan PDF
                </Button>
              </div>
            </section>

            {/* Investment Highlights */}
            <section className="animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-primary" />
                Investment Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "ROI Potential",
                    value: "7-9%",
                    description: "Expected annual rental yield in this premium location",
                    icon: TrendingUp,
                  },
                  {
                    title: "Rental Demand",
                    value: "High",
                    description: "Strong demand from expats and tourists year-round",
                    icon: Users,
                  },
                  {
                    title: "Capital Appreciation",
                    value: "12%+",
                    description: "Historical annual property value increase",
                    icon: Award,
                  },
                  {
                    title: "Golden Visa",
                    value: "Eligible",
                    description: "Property qualifies for UAE Golden Visa program",
                    icon: Star,
                  },
                ].map((highlight, index) => (
                  <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <highlight.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{highlight.title}</p>
                          <p className="text-2xl font-bold text-foreground mb-1">{highlight.value}</p>
                          <p className="text-sm text-muted-foreground">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Agent Contact */}
          <div className="lg:col-span-1">
            <div className="sticky top-36 space-y-6">
              {/* Agent Card */}
              <Card className="border-border overflow-hidden" id="contact-form">
                <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-center">
                  <div className="w-24 h-24 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Ahmed Al Mansouri</h3>
                  <p className="text-white/80">Senior Property Consultant</p>
                  <div className="flex justify-center gap-1 mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`tel:${property.contact.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      {property.contact.phone}
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`mailto:${property.contact.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email Agent
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-4">Send Inquiry</h3>
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <Input placeholder="Your Name" required />
                    <Input type="email" placeholder="Email Address" required />
                    <Input type="tel" placeholder="Phone Number" required />
                    <Textarea
                      placeholder={`I'm interested in ${property.title}. Please contact me with more details.`}
                      rows={4}
                    />
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Trust Signals */}
              <Card className="border-border bg-card/50">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Verified Property Listing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-accent" />
                    <span className="text-sm text-muted-foreground">Award-Winning Agency</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Developer: {property.developer}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <section className="mt-12 sm:mt-16 animate-fade-in">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            Similar Properties
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {similarProperties.map((prop) => (
              <Link key={prop.id} to={`/property/${prop.slug}`}>
                <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all hover:shadow-xl cursor-pointer h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={prop.image}
                      alt={prop.title}
                      className="w-full h-40 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex gap-2">
                      <Badge className="bg-primary text-primary-foreground text-xs">{prop.type}</Badge>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 sm:p-4">
                      <p className="text-lg sm:text-xl font-bold text-white">{prop.price}</p>
                    </div>
                  </div>
                  <CardContent className="p-3 sm:p-4">
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                      {prop.title}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs sm:text-sm mt-1">
                      <MapPin className="w-3 h-3" />
                      {prop.location}
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-border text-xs sm:text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Bed className="w-3 h-3 sm:w-4 sm:h-4" /> {prop.bedrooms}
                      </span>
                      <span className="flex items-center gap-1">
                        <Bath className="w-3 h-3 sm:w-4 sm:h-4" /> {prop.bathrooms}
                      </span>
                      <span className="flex items-center gap-1">
                        <Maximize className="w-3 h-3 sm:w-4 sm:h-4" /> {prop.sqft}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="relative">
            <img
              src={images[lightboxIndex]}
              alt={`${property.title} - Image ${lightboxIndex + 1}`}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={() => setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={() => setLightboxIndex((prev) => (prev + 1) % images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </>
            )}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setLightboxIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === lightboxIndex ? "bg-white w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-t border-border md:hidden z-50">
        <div className="flex gap-3">
          <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={handleWhatsApp}>
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
          <Button
            className="flex-1 bg-primary hover:bg-primary/90"
            onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact
          </Button>
        </div>
      </div>

      <div className="pb-20 md:pb-0">
        <Footer />
      </div>
    </div>
  );
};

export default PropertiesPage;
