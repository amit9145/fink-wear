import Header from "../components/Header";
import FooterWithNewsletter from "../components/FooterWithNewsletter";
import HeroSection from "../components/HeroSection";
import CategoryHighlights from "../components/categoryhighlights";
import OurCollection from "../components/ourcollection";
import ClothAndFootwearCollection from "../components/clothandfootwear";
import BenefitsSection from "../components/BenefitsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import AnnouncementBar from "../components/AnnouncementBar";



const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Header />
      <HeroSection />
      <CategoryHighlights/>
      <OurCollection/>
      <TestimonialsSection />
      <ClothAndFootwearCollection/>
      <BenefitsSection />
      
      <FooterWithNewsletter />
    </div>
  );
};

export default MainLayout;
