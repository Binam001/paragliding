import React from "react";
import HeroSection from "./components/HeroSection";
import GallerySection from "./components/GallerySection";
import VideoSection from "./components/VideoSection";

const page = () => {
  return (
    <div>
      <HeroSection />
      <GallerySection />
      <VideoSection />
    </div>
  );
};

export default page;
