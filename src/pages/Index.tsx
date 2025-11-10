import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AwardsSection from "@/components/AwardsSection";
import TeamSection from "@/components/TeamSection";
import BecomeAgentSection from "@/components/BecomeAgentSection";
import FeaturedPropertiesSection from "@/components/FeaturedPropertiesSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AwardsSection />
      <FeaturedPropertiesSection />
      <EventsSection />
      <TeamSection />
      <BecomeAgentSection />
      <Footer />
    </div>
  );
};

export default Index;
