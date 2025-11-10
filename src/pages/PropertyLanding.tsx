import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Bed, Bath, Maximize, MapPin, Building2, Calendar, Star, Phone, Mail, MessageCircle, Share2, Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getPropertyBySlug } from "@/data/properties";
import { useState } from "react";
import { toast } from "sonner";

const PropertyLanding = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const property = getPropertyBySlug(slug || "");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
          <p className="text-muted-foreground mb-8">The property you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const images = property.images || [property.image];

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(`Hi, I'm interested in ${property.title} (${property.price})`);
    window.open(`https://wa.me/${property.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  const handleEmailContact = () => {
    const subject = encodeURIComponent(`Inquiry about ${property.title}`);
    const body = encodeURIComponent(`Hi,\n\nI'm interested in learning more about ${property.title} located in ${property.location}.\n\nPrice: ${property.price}\n\nPlease contact me with more details.\n\nThank you.`);
    window.location.href = `mailto:${property.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this property: ${property.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? "Removed from favorites" : "Added to favorites");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-1.5 sm:gap-2 text-brand-red hover:text-luxury-gold transition-colors">
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold text-sm sm:text-base">Back</span>
            </Link>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleFavorite}
                className={`h-9 w-9 sm:h-10 sm:w-10 ${isFavorite ? "text-brand-red border-brand-red" : ""}`}
              >
                <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isFavorite ? "fill-current" : ""}`} />
              </Button>
              <Button variant="outline" size="icon" onClick={handleShare} className="h-9 w-9 sm:h-10 sm:w-10">
                <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-4 sm:py-6 md:py-8">
        {/* Image Gallery */}
        <div className="mb-6 sm:mb-8 md:mb-12 animate-fade-in">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl aspect-[16/9] sm:aspect-[21/9] mb-3 sm:mb-4">
            <img
              src={images[selectedImage]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-brand-red text-white text-xs sm:text-sm">
              {property.type}
            </Badge>
            <Badge className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-luxury-gold text-black font-semibold text-xs sm:text-sm">
              {property.completion}
            </Badge>
          </div>
          
          {/* Thumbnail Gallery */}
          {images.length > 1 && (
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative overflow-hidden rounded-lg aspect-video cursor-pointer transition-all duration-300 ${
                    selectedImage === index
                      ? "ring-2 sm:ring-4 ring-brand-red scale-105"
                      : "hover:ring-2 hover:ring-luxury-gold"
                  }`}
                >
                  <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Property Header */}
            <div className="animate-fade-in">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-brand-red via-luxury-gold to-brand-red bg-clip-text text-transparent">
                {property.title}
              </h1>
              <div className="flex items-center text-muted-foreground mb-3 sm:mb-4">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-brand-red" />
                <span className="text-base sm:text-lg">{property.location}</span>
              </div>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-red mb-4 sm:mb-6">{property.price}</p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 sm:p-6 bg-card rounded-xl border border-border">
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 text-center sm:text-left">
                  <Bed className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-gold" />
                  <div>
                    <p className="text-xl sm:text-2xl font-bold">{property.bedrooms}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Bedrooms</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 text-center sm:text-left">
                  <Bath className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-gold" />
                  <div>
                    <p className="text-xl sm:text-2xl font-bold">{property.bathrooms}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Bathrooms</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 text-center sm:text-left">
                  <Maximize className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-gold" />
                  <div>
                    <p className="text-xl sm:text-2xl font-bold">{property.sqft}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Sqft</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <Card className="animate-fade-in">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-gold" />
                  About This Property
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {property.description}
                </p>
              </CardContent>
            </Card>

            {/* Key Features */}
            <Card className="animate-fade-in">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Key Features</h2>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red flex-shrink-0" />
                      <span className="text-sm sm:text-base text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card className="animate-fade-in">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Amenities</h2>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-luxury-gold flex-shrink-0" />
                      <span className="text-sm sm:text-base text-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Developer & Payment Plan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-fade-in">
              <Card>
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-brand-red" />
                    <h3 className="text-lg sm:text-xl font-bold">Developer</h3>
                  </div>
                  <p className="text-base sm:text-lg font-semibold text-foreground">{property.developer}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2">Trusted developer with premium projects</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-brand-red" />
                    <h3 className="text-lg sm:text-xl font-bold">Payment Plan</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground">{property.paymentPlan}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Sidebar - Contact Card */}
          <div className="lg:col-span-1">
            <Card className="lg:sticky lg:top-24 shadow-xl border-border/50 animate-fade-in">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Contact Alkhail</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">Get in touch with our property experts</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <Button
                    className="w-full bg-gradient-to-r from-brand-red to-brand-red-dark hover:from-brand-red-dark hover:to-brand-red text-white h-11 sm:h-12"
                    onClick={handleWhatsAppContact}
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-sm sm:text-base">WhatsApp Us</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-brand-red/50 text-brand-red hover:bg-brand-red hover:text-white h-11 sm:h-12"
                    onClick={() => window.location.href = `tel:${property.contact.phone}`}
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-sm sm:text-base">Call Now</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-luxury-gold/50 text-luxury-gold hover:bg-luxury-gold hover:text-black h-11 sm:h-12"
                    onClick={handleEmailContact}
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="text-sm sm:text-base">Email Us</span>
                  </Button>
                </div>

                <Separator className="my-4 sm:my-6" />

                <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-red flex-shrink-0" />
                    <a href={`tel:${property.contact.phone}`} className="hover:text-brand-red transition-colors break-all">
                      {property.contact.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-red flex-shrink-0" />
                    <a href={`mailto:${property.contact.email}`} className="hover:text-brand-red transition-colors break-all">
                      {property.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-red flex-shrink-0" />
                    <a href={`https://wa.me/${property.contact.whatsapp.replace(/[^0-9]/g, '')}`} className="hover:text-brand-red transition-colors break-all" target="_blank" rel="noopener noreferrer">
                      {property.contact.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-brand-red/10 to-luxury-gold/10 rounded-lg text-center">
                  <p className="text-xs text-muted-foreground mb-1 sm:mb-2">Trusted by</p>
                  <p className="text-base sm:text-lg font-bold bg-gradient-to-r from-brand-red to-luxury-gold bg-clip-text text-transparent">
                    Alkhail Real Estate
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Since 2006</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyLanding;