import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import FeaturedPropertiesSection from "@/components/FeaturedPropertiesSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturedPropertiesSection />
      <EventsSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
