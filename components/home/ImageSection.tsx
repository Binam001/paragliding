import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageSection = () => {
  useGSAP(() => {
    gsap.to(
      "#cloud-fog",
      // {
      //   yPercent: 100,
      // },
      {
        yPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: ".image-section-container",
          start: "top 60%",
          scrub: true,
        },
      }
    );
  });
  return (
    <section className="relative w-full h-screen overflow-hidden image-section-container">
      <img
        src="/images/blog/blog10.jpg"
        alt="pokhara"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div id="cloud-fog" className="absolute inset-0 w-full h-full">
        <img
          src="/images/clouds/clouds14.webp"
          alt="cloud fog"
          className="w-full h-full object-cover rotate-180"
        />
      </div>
      <div className="absolute inset-0 w-full h-full bg-black/20"></div>
      <div className="absolute inset-0 w-full h-screen bg-linear-to-b from-white to-60% to-transparent z-60" />
    </section>
  );
};

export default ImageSection;
