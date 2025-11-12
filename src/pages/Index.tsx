import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import ProductTypes from "@/components/home/ProductTypes";
import WhyGlobalParts from "@/components/home/WhyGlobalParts";
import Stats from "@/components/home/Stats";
import CTASection from "@/components/home/CTASection";
import backgroundGradient from "@/assets/background-gradient.jpg";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundGradient})` }}
    >
      <Navbar />
      <Hero />
      <ProductTypes />
      <WhyGlobalParts />
      <Stats />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
