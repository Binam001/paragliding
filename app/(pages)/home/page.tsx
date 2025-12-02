"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntroVideo from "./components/IntroVideo";
import IntroVideo1 from "./components/IntroVideo1";

import HeroSection from "./components/HeroSection";
import WhyUsSection from "./components/WhyUsSection";
import Paraglider from "./components/Paraglider";
import { Canvas } from "@react-three/fiber";
import Packages from "./components/Packages";
import WhatUWillExp from "./components/WhatUWillExp";
import { FullScreenScrollFX } from "@/components/full-screen-scroll-fx";
import Testimonials from "./components/Testimonials";

const sections = [
  {
    // leftLabel: "Silence",
    title: <></>,
    rightLabel: "Smooth takeoff from Sarangkot",
    background: "images/home/image1.jpg",
  },
  {
    // leftLabel: "Essence",
    title: <></>,
    rightLabel: "Clear panorama of Annapurna & Machhapuchhre",
    background: "/images/mountains/mountains.jpg",
  },
  {
    // leftLabel: "Rebirth",
    title: <></>,
    rightLabel: "Breathtaking views of Phewa Lake",
    background: "images/blog/blog12.jpg",
  },
  {
    // leftLabel: "Change",
    title: <></>,
    rightLabel: "Peaceful gliding above Pokhara Valley",
    background: "images/home/image2.jpg",
  },
];

gsap.registerPlugin(ScrollTrigger);
const page = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!mainRef.current || !modelRef.current) {
      return;
    }
    let ctx = gsap.context(() => {
      // gsap.from(modelRef.current, {
      //   xPercent: -100,
      //   duration: 5,
      // });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 2,
            onUpdate: (self) => {
              setProgress(self.progress);
            },
          },
        })

        .to(modelRef.current, {
          x: "70vw",
          y: "20vh",
        })
        .to(modelRef.current, {
          x: "0vw",
          // y: "20vh",
        })
        .to(modelRef.current, {
          x: "10vw",
          // y: "20vh",
        })
        .to(modelRef.current, {
          x: "10vw",
          // y: "20vh",
        })
        .to(modelRef.current, {
          x: "10vw",
          // y: "20vh",
        })
        .to(modelRef.current, {
          x: "10vw",
          // y: "20vh",
        });
    }, mainRef);

    return () => ctx.revert();
  });
  return (
    <div ref={mainRef} className="relative overflow-hidden">
      {/* <IntroVideo1 /> */}
      <div id="next-section" className="w-screen relative">
        <HeroSection />
        <div
          ref={modelRef}
          className="fixed -top-[10%] -left-[40%] w-screen h-screen z-999 pointer-events-none"
        >
          <Paraglider progress={progress} />
        </div>

        <div className="w-full h-dvh">
          {/* <WhyUsSection /> */}
          <Testimonials />
        </div>
        <div className="px-16 w-full h-dvh">
          <FullScreenScrollFX
            sections={sections}
            header={
              <>
                <div>You Will</div>
                <div>Experience</div>
              </>
            }
            footer={<div></div>}
            showProgress
            durations={{ change: 0.4, snap: 800 }}
          />
        </div>
        <div style={{ height: `${sections.length * 100}vh` }} />

        <div className="px-16 w-full h-dv overflow-x-hidden">
          {/* <p className="text-center text-6xl font-bold mb-8">
            Book a Paragliding Tandem Flight
          </p> */}
          <Packages />
        </div>

        {/* <div className="h-dvh"></div> */}
      </div>
    </div>
  );
};

export default page;
