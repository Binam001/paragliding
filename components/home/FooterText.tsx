import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollFloat from "../WaveAnimation";

gsap.registerPlugin(ScrollTrigger);

const FooterText = () => {
  const container = React.useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      gsap.from("#seeYouSoonText", {
        xPercent: -400,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: 2,
          pin: true,
        },
      });
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="h-dvh flex items-center justify-center overflow-hidden"
    >
      <p id="seeYouSoonText" className="text-6xl font-semibold text-center">
        SEE YOU SOON...
      </p>
      {/* <div id="seeYouSoonText" className="text-center">
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=30%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          textClassName="text-7xl font-bold"
        >
          SEE YOU SOON...
        </ScrollFloat>
      </div> */}
    </div>
  );
};

export default FooterText;
