import HeroSection from "../components/HeroSection";
import BenefitsSection from "../components/BenefitsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsletterSection from "../components/NewsletterSection";

const Home = () => {
  return (
    <div>
      {/* Hero Section - Main CTA */}
      <HeroSection />
      
      {/* Benefits/USP Section - Build Trust */}
      <BenefitsSection />
      
      {/* Testimonials - Social Proof */}
      <TestimonialsSection />
      
      {/* Newsletter Signup - Email Capture */}
      <NewsletterSection />
    </div>
  );
};

export default Home;
