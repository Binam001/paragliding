"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const paragliderImages = [
  "/images/paraglider/paraglider1.png",
  "/images/paraglider/paraglider2.png",
  "/images/paraglider/paraglider3.png",
];
const getRandom = (min: number, max: number) =>
  Math.random() * (max - min) + min;

const HeroSection = () => {
  const refs = useRef<HTMLImageElement[]>([]);
  const cloud2Ref = useRef<HTMLImageElement>(null);
  const cloud4Ref = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    refs.current.forEach((paraglider) => {
      if (paraglider) {
        const startX = getRandom(-20, 10); // starting from outside left screen
        const startY = getRandom(0, 20); // anywhere from top to 70vh

        gsap.set(paraglider, {
          x: `${startX}vw`,
          y: `${startY}vh`,
        });

        const timeline = gsap.timeline({ repeat: -1 });

        const x1 = getRandom(20, 30);
        const y1 = getRandom(20, 40);
        // const x2 = getRandom(30, 120);
        const y2 = getRandom(45, 80);

        const duration1 = getRandom(15, 20);
        const duration2 = getRandom(35, 50);

        // Move horizontally first
        timeline.to(paraglider, {
          x: `${x1}vw`,
          y: `${y1}vh`,
          duration: duration1,
          ease: "linear",
          // delay: 6,
        });

        // Then move diagonally down
        timeline.to(paraglider, {
          x: `120vw`,
          y: `${y2}vh`,
          duration: duration2,
          ease: "linear",
        });
      }
    });

    gsap.to(cloud2Ref.current, {
      x: "150vw",
      duration: 100,
      // delay: 6,
      ease: "linear",
    });
    gsap.to(cloud4Ref.current, {
      x: "150vw",
      duration: 180,
      delay: 1,
      ease: "linear",
    });
  }, []);
  return (
    <div>
      <div className="w-full relative">
        <img
          src="/images/mountains/mountains3.jpg"
          alt="mountain"
          className=""
        />
        {/* <img src="/images/clouds/clouds10.jpg" alt="clouds" className="" />
        <img
          src="/images/mountains/mountains-cropped.png"
          alt="cropped mountain"
          className="absolute bottom-0 w-full"
        /> */}
        <img
          ref={cloud2Ref}
          src="/images/clouds/clouds2.png"
          alt="clouds2"
          className="cloud2 absolute top-10 -left-50 w-40"
        />
        <img
          ref={cloud4Ref}
          src="/images/clouds/clouds4.png"
          alt="clouds4"
          className="cloud4 absolute top-20 -left-50 w-40"
        />

        <div className="absolute top-1/2 left-0 font-bold text-5xl text-center text-white text-shadow-lg text-shadow-black w-full">
          <p>Experience the Sky Above Pokhara</p>
        </div>

        {paragliderImages.map((src, idx) => (
          <img
            key={idx}
            //@ts-ignore
            ref={(el) => (refs.current[idx] = el!)}
            src={src}
            alt={`Paraglider ${idx}`}
            className="absolute top-10 -left-20 w-16"
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
