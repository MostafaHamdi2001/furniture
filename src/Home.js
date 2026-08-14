import React from "react";
import TestimonialSection from "./Home/TestimonialSection";
import BlogSection from "./Home/BlogSection";
import HeroSection from "./Home/HeroSection";
import ProductSection from "./Home/ProductSection";
import ChooseSection from "./Home/ChooseSection";
import HelpSection from "./Home/HelpSection";
import PopularSection from "./Home/PopularSection";
import Footer from "./Footer";

function Home() {
  return (
    <div className="Home">
      <HeroSection />
      <ProductSection />
      <ChooseSection />
      <HelpSection />
      <PopularSection />
      <TestimonialSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default Home;
