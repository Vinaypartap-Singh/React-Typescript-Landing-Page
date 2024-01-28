import AboutSection from "../components/About/AboutSection";
import HeroSection from "../components/HeroSection/HeroSection";
import MenuSection from "../components/MenuSection/MenuSection";
import OfferSection from "../components/OffersSection/OfferSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OfferSection />
      <AboutSection />
      <MenuSection />
    </>
  );
}
