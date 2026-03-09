import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedEvents } from "@/components/home/FeaturedEvents";
import { EventPackages } from "@/components/home/EventPackages";
import { VideoHighlight } from "@/components/home/VideoHighlight";
import { Testimonials } from "@/components/home/Testimonials";
import { InstagramShowcase } from "@/components/home/InstagramShowcase";
import { CallToAction } from "@/components/home/CallToAction";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <ServicesOverview />
      <FeaturedEvents />
      <EventPackages />
      <VideoHighlight />
      <Testimonials />
      <InstagramShowcase />
      <CallToAction />
    </div>
  );
}