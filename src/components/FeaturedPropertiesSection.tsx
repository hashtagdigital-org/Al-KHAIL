import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize, MapPin, Building2, Calendar, Star } from "lucide-react";
import { properties } from "@/data/properties";

const FeaturedPropertiesSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-primary">
            Featured Properties
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Discover our handpicked selection of premium properties across Dubai's most prestigious locations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {properties.map((property) => (
            <Link key={property.id} to={`/property/${property.slug}`}>
              <Card className="group overflow-hidden hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 cursor-pointer hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-accent text-accent-foreground text-xs sm:text-sm">
                    {property.type}
                  </Badge>
                </div>
              
              <CardContent className="p-4 sm:p-6">
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                    <span className="text-xs sm:text-sm line-clamp-1">{property.location}</span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-accent mb-4">{property.price}</p>
                  
                  {/* Developer & Completion */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="w-4 h-4 text-[hsl(var(--luxury-gold))]" />
                      <span className="text-muted-foreground">Developer:</span>
                      <span className="font-semibold text-foreground">{property.developer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-[hsl(var(--luxury-gold))]" />
                      <span className="text-muted-foreground">Completion:</span>
                      <span className="font-semibold text-foreground">{property.completion}</span>
                    </div>
                  </div>

                  {/* Specialized Features */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-[hsl(var(--luxury-gold))]" />
                      <span className="text-sm font-semibold text-foreground">Key Features:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {property.features.map((feature, index) => (
                        <Badge 
                          key={index} 
                          variant="outline" 
                          className="text-xs border-[hsl(var(--luxury-gold))]/30 text-foreground"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground font-medium">{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground font-medium">{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-foreground font-medium">{property.sqft} sqft</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
