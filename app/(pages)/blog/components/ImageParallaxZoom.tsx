import { ZoomParallax } from "@/components/zoom-parallax";
import React from "react";

const images = [
  {
    src: "/images/blog/blog1.jpg",
    alt: "blog 1 image",
  },
  {
    src: "/images/blog/blog3.jpg",
    alt: "blog 3 image",
  },
  {
    src: "/images/blog/blog4.avif",
    alt: "blog 4 image",
  },
  {
    src: "/images/blog/blog7.webp",
    alt: "blog 7 image",
  },
  {
    src: "/images/blog/blog11.jpg",
    alt: "blog 11 image",
  },
  {
    src: "/images/blog/blog13.jpg",
    alt: "blog 13 image",
  },
  {
    src: "/images/blog/blog15.jpg",
    alt: "blog 15 image",
  },
];

const ImageParallaxZoom = () => {
  return (
    <div className="mt-16 w-screen -mx-16">
      <p className="text-center text-6xl font-bold mb-8">Our Gallery</p>
      <ZoomParallax images={images} />
    </div>
  );
};

export default ImageParallaxZoom;
