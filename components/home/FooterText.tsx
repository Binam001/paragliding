import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollFloat from "../WaveAnimation";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const FooterText = () => {
  // const container = React.useRef<HTMLDivElement>(null);
  // useGSAP(
  //   () => {
  //     gsap.from("#seeYouSoonText", {
  //       xPercent: -400,
  //       scrollTrigger: {
  //         trigger: container.current,
  //         start: "top top",
  //         end: "bottom top",
  //         scrub: 2,
  //         pin: true,
  //       },
  //     });
  //   },
  //   { scope: container }
  // );
  return (
    <div
      // ref={container}
      className="h-dvh flex items-center justify-center overflow-hidden relative mt-8"
    >
      {/* <p id="seeYouSoonText" className="text-6xl font-semibold text-center">
        SEE YOU SOON...
      </p> */}
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
      <div className="absolute inset-0 w-full h-screen bg-linear-to-b from-blue-500 to-transparent" />
      <div className="w-1/2 mx-auto flex flex-col items-center justify-center text-center gap-4 z-10">
        <p className="text-2xl">
          Experience the Pokhara skyline like never before
        </p>
        <p className="text-5xl font-bold leading-normal">
          Sit back in your harness, our pilots will do the rest.
        </p>
        <Link
          href="/services"
          className="bg-(--color-primary) text-white px-6 py-3 rounded-full cursor-pointer"
        >
          <button className="cursor-pointer">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default FooterText;
