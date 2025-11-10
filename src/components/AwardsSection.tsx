import { Award, Trophy, Star, Building2, Medal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const awards = [
  {
    developer: "Emaar Properties",
    award: "Top Performing Agency 2024",
    year: "2024",
    icon: Trophy,
    color: "text-luxury-gold",
  },
  {
    developer: "Damac Properties",
    award: "Excellence in Sales Award",
    year: "2023",
    icon: Award,
    color: "text-luxury-gold",
  },
  {
    developer: "Dubai Land Department",
    award: "Certified Real Estate Broker",
    year: "2023",
    icon: Medal,
    color: "text-luxury-gold",
  },
  {
    developer: "Sobha Realty",
    award: "Platinum Partner Recognition",
    year: "2024",
    icon: Star,
    color: "text-luxury-gold",
  },
  {
    developer: "Nakheel",
    award: "Outstanding Achievement Award",
    year: "2023",
    icon: Trophy,
    color: "text-luxury-gold",
  },
  {
    developer: "Dubai Properties",
    award: "Premier Agency Partner",
    year: "2024",
    icon: Building2,
    color: "text-luxury-gold",
  },
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 border-luxury-gold/30 text-luxury-gold">
            Recognition
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold bg-clip-text text-transparent">
            Awards & Recognitions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proudly recognized by leading developers and the Dubai Land Department
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-luxury-gold/50 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(212,175,55,0.15)] hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  {/* Icon with animated background */}
                  <div className="relative mx-auto w-20 h-20 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 to-brand-red/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                    <div className="relative w-full h-full bg-gradient-to-br from-luxury-gold/10 to-transparent rounded-full flex items-center justify-center border border-luxury-gold/30 group-hover:border-luxury-gold/50 transition-all duration-500">
                      <Icon className={`w-10 h-10 ${award.color} group-hover:scale-110 transition-transform duration-500`} />
                    </div>
                  </div>

                  {/* Award Name */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                    {award.award}
                  </h3>

                  {/* Developer Name */}
                  <p className="text-sm font-medium text-muted-foreground mb-3">
                    {award.developer}
                  </p>

                  {/* Year Badge */}
                  <Badge variant="secondary" className="bg-luxury-gold/10 text-luxury-gold border-luxury-gold/20">
                    {award.year}
                  </Badge>

                  {/* Decorative gradient line */}
                  <div className="mt-6 h-1 w-12 mx-auto bg-gradient-to-r from-transparent via-luxury-gold to-transparent opacity-50 group-hover:opacity-100 group-hover:w-20 transition-all duration-500" />
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 flex justify-center items-center gap-2 opacity-50">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-luxury-gold" />
          <Trophy className="w-5 h-5 text-luxury-gold" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-luxury-gold" />
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;