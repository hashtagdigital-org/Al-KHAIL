import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const properties = [
  {
    id: 1,
    title: "Luxury Modern Villa",
    location: "Palm Jumeirah, Dubai",
    price: "AED 12,500,000",
    image: property1,
    bedrooms: 5,
    bathrooms: 6,
    sqft: "8,500",
    type: "Villa",
  },
  {
    id: 2,
    title: "Penthouse with Skyline View",
    location: "Downtown Dubai",
    price: "AED 8,900,000",
    image: property2,
    bedrooms: 4,
    bathrooms: 5,
    sqft: "5,200",
    type: "Penthouse",
  },
  {
    id: 3,
    title: "Beachfront Villa",
    location: "Jumeirah Beach Residence",
    price: "AED 15,200,000",
    image: property3,
    bedrooms: 6,
    bathrooms: 7,
    sqft: "10,000",
    type: "Villa",
  },
  {
    id: 4,
    title: "Modern City Apartment",
    location: "Business Bay, Dubai",
    price: "AED 3,200,000",
    image: property4,
    bedrooms: 3,
    bathrooms: 3,
    sqft: "2,800",
    type: "Apartment",
  },
  {
    id: 5,
    title: "Contemporary Townhouse",
    location: "Arabian Ranches",
    price: "AED 4,500,000",
    image: property5,
    bedrooms: 4,
    bathrooms: 4,
    sqft: "3,500",
    type: "Townhouse",
  },
  {
    id: 6,
    title: "Luxury Duplex",
    location: "Dubai Marina",
    price: "AED 6,800,000",
    image: property6,
    bedrooms: 4,
    bathrooms: 4,
    sqft: "4,200",
    type: "Duplex",
  },
];

const FeaturedPropertiesSection = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Featured Properties
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties across Dubai's most prestigious locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="group overflow-hidden hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {property.type}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                  <p className="text-2xl font-bold text-accent">{property.price}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPropertiesSection;
