import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  // useGSAP(() => {
  //   gsap.from("#video", {
  //     scale: 0.4,
  //     scrollTrigger: {
  //       trigger: "#video-container",
  //       start: "top top",
  //       end: "+=600",
  //       scrub: true,
  //       pin: true,
  //     },
  //   });
  // });
  return (
    <div>
      <div
        id="video-container"
        className="w-screen h-screen relative"
        // style={{
        //   backgroundImage:
        //     "radial-gradient(circle at top center,#fde047 0%,#ef4444 50%,#991b1b 80%, #ffffff 100%)",
        // }}
      >
        <video
          id="video"
          src="/videos/video1.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
};

export default HeroSection;
