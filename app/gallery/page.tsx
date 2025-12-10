import React from "react";
// import HeroSection from "../../components/gallery/HeroSection";
import GallerySection from "../../components/gallery/GallerySection";
import VideoSection from "../../components/gallery/VideoSection";
import HeroSection from "@/components/HeroSection";

const page = () => {
  return (
    <div className="">
      <HeroSection
        text1="Pokhara's beauty, captured from above."
        text2="See stunning aerial views of the lake and the peaks."
        link="Gallery"
      />
      <div className="px-4 md:px-8 lg:px-16">
        <GallerySection />
        <VideoSection />
      </div>
    </div>
  );
};

export default page;
