import HeroSection from "./HeroSection";
import HierarchySection from "./HierarchySection";
import FeatureHighlights from "./FeatureHighlights";
import CommunityFeed from "./CommunityFeed";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HierarchySection />
      <FeatureHighlights />
      <CommunityFeed />
      <FinalCTA />
      <Footer />
    </main>
  );
}
