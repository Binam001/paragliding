import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FooterText = () => {
  useGSAP(() => {
    gsap.from("#seeYouSoonText", {
      xPercent: -400,
      scrollTrigger: {
        trigger: "#seeYouSoonContainer",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  });
  return (
    <div
      id="seeYouSoonContainer"
      className="h-dvh flex items-center justify-center"
    >
      <p id="seeYouSoonText" className="text-6xl font-semibold text-center">
        SEE YOU SOON...
      </p>
    </div>
  );
};

export default FooterText;
