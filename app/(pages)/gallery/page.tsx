import React from "react";
import HeroSection from "./components/HeroSection";
import GallerySection from "./components/GallerySection";
import VideoSection from "./components/VideoSection";

const page = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <HeroSection />
      <GallerySection />
      <VideoSection />
    </div>
  );
};

export default page;
