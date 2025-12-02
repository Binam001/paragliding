"use client";

import { Gallery4 } from "@/components/gallery4";

const Testimonials = () => {
  return (
    <section className="my-20 relative">
      <img
        src="/images/clouds/clouds13.png"
        alt="cloud"
        className="absolute z-20 -top-[90%] w-screen"
      />
      <img
        src="/images/clouds/clouds12.png"
        alt="cloud"
        className="absolute z-20 -top-[45%]"
      />
      <img
        src="/images/clouds/clouds12.png"
        alt="cloud"
        className="absolute z-20 -top-[50%] -left-[50%]"
      />
      <img
        src="/images/clouds/clouds12.png"
        alt="cloud"
        className="absolute z-20 -top-[50%] -right-[40%]"
      />
      <div className="relative z-50">
        <Gallery4 />
      </div>
    </section>
  );
};

export default Testimonials;
