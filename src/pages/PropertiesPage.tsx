import { useState } from "react";
import { Link } from "react-router-dom";
import { properties } from "@/data/properties";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bed,
  Bath,
  Maximize,
  MapPin,
  Search,
  Building2,
  ArrowLeft,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PropertiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      propertyType === "all" ||
      property.type.toLowerCase() === propertyType.toLowerCase();

    let matchesPrice = true;
    if (priceRange !== "all") {
      const priceNum = parseInt(property.price.replace(/[^0-9]/g, ""));
      switch (priceRange) {
        case "under-5m":
          matchesPrice = priceNum < 5000000;
          break;
        case "5m-10m":
          matchesPrice = priceNum >= 5000000 && priceNum < 10000000;
          break;
        case "10m-15m":
          matchesPrice = priceNum >= 10000000 && priceNum < 15000000;
          break;
        case "above-15m":
          matchesPrice = priceNum >= 15000000;
          break;
      }
    }

    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/10 via-background to-accent/5">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center max-w-3xl mx-auto">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              Premium Properties
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Discover Your Dream <span className="text-primary">Property</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore our exclusive collection of luxury properties in Dubai's
              most prestigious locations
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger className="w-full md:w-40">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="penthouse">Penthouse</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-5m">Under AED 5M</SelectItem>
                  <SelectItem value="5m-10m">AED 5M - 10M</SelectItem>
                  <SelectItem value="10m-15m">AED 10M - 15M</SelectItem>
                  <SelectItem value="above-15m">Above AED 15M</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-semibold">{filteredProperties.length}</span> properties
            </p>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="text-center py-16">
              <Building2 className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No properties found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProperties.map((property) => (
                <Link key={property.id} to={`/property/${property.slug}`}>
                  <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-pointer h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-primary text-primary-foreground">
                          {property.type}
                        </Badge>
                        <Badge className="bg-accent/90 text-accent-foreground">
                          {property.completion}
                        </Badge>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <p className="text-2xl font-bold text-white">
                          {property.price}
                        </p>
                      </div>
                    </div>

                    <CardContent className="p-5">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {property.title}
                      </h3>

                      <div className="flex items-center gap-1 text-muted-foreground mb-4">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm">{property.location}</span>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Bed className="w-4 h-4" />
                          <span className="text-sm">{property.bedrooms}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Bath className="w-4 h-4" />
                          <span className="text-sm">{property.bathrooms}</span>
                        </div>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Maximize className="w-4 h-4" />
                          <span className="text-sm">{property.sqft} sqft</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {property.features.slice(0, 2).map((feature, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-border text-muted-foreground"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertiesPage;
