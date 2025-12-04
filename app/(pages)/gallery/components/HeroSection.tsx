import { ArcGalleryHero } from "@/components/arc-gallery-hero-component";
import React from "react";

const HeroSection = () => {
  const memoryImages = [
    "/images/blog/blog1.jpg",
    "/images/blog/blog2.jpg",
    "/images/blog/blog3.jpg",
    "/images/blog/blog4.avif",
    "/images/blog/blog5.webp",
    "/images/blog/blog6.webp",
    "/images/blog/blog7.webp",
    "/images/blog/blog8.webp",
    "/images/blog/blog9.webp",
    "/images/blog/blog10.jpg",
    "/images/blog/blog11.jpg",
    "/images/blog/blog12.jpg",
  ];
  return (
    <div>
      <ArcGalleryHero images={memoryImages} />
    </div>
  );
};

export default HeroSection;
