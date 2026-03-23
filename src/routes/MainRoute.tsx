import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/Profile";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Boys from "../pages/Boys";
import Girls from "../pages/Girls";
import Accessories from "../pages/Accessories";
import SearchResults from "../pages/SearchResults";
import ClothFootwear from "../pages/ClothFootwear";
import Hero from "../pages/Hero";
import CategoryHighlightsPage from "../pages/CategoryHighlightsPage";
import OurCollectionPage from "../pages/OurCollectionPage";
import BenefitsSection from "../components/BenefitsSection";
import SupportSection from "../components/SupportSection";
import ContactSection from "../components/ContactSection";
import TermsAndConditions from "../pages/TermsAndConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Disclosures from "../pages/Disclosures";

const MainRoute = () => {
  return (
    <Routes>
      {/* Routes with MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      
      {/* Routes without MainLayout - standalone sections */}
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/boys" element={<Boys />} />
      <Route path="/girls" element={<Girls />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path="/clothfootwear" element={<ClothFootwear />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/categoryhighlights" element={<CategoryHighlightsPage />} />
      <Route path="/ourcollection" element={<OurCollectionPage />} />
      <Route path="/benefits" element={<BenefitsSection />} />
      <Route path="/support" element={<SupportSection />} />
      <Route path="/contact" element={<ContactSection />} />
      <Route path="/terms" element={<TermsAndConditions />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/disclosures" element={<Disclosures />} />
    </Routes>
  );
};

export default MainRoute;
