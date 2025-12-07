"use client";

import { Gallery4 } from "@/components/gallery4";

const Testimonials = () => {
  return (
    <section
      className="px-4 md:px-8 lg:px-16 relative h-full flex items-center"
      style={{
        clipPath:
          "polygon(0 4%, 14% 0, 26% 3%, 43% 0, 67% 3%, 74% 0, 79% 4%, 100% 0, 100% 96%, 86% 100%, 74% 97%, 57% 100%, 33% 97%, 26% 100%, 21% 96%, 0 100%)",
      }}
    >
      <img
        src="/images/home/image2.jpg"
        alt="pokhara"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 w-full h-full bg-black/60" />
      <div className="relative">
        <Gallery4 />
      </div>
    </section>
  );
};

export default Testimonials;
