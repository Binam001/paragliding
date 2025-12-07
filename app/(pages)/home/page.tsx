"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import IntroVideo from "../../../components/home/IntroVideo";
import IntroVideo1 from "../../../components/home/IntroVideo1";

import HeroSection from "../../../components/home/HeroSection";
import WhyUsSection from "../../../components/home/WhyUsSection";
import Paraglider from "../../../components/home/Paraglider";
import { Canvas } from "@react-three/fiber";
import Packages from "../../../components/home/Packages";
import WhatUWillExp from "../../../components/home/WhatUWillExp";
// import { FullScreenScrollFX } from "@/components/full-screen-scroll-fx";
import Testimonials from "../../../components/home/Testimonials";
import AboutUsSection from "../../../components/home/AboutUsSection";
import { TestimonialsSections } from "../../../components/home/GallerySection";

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
          // x: "70vw",
          x: "40vw",
          y: "20vh",
        })
        .to(modelRef.current, {
          // x: "0vw",
          x: "-45vw",
          // y: "20vh",
        })
        .to(modelRef.current, {
          x: "40vw",
          // y: "20vh",
        })
        .to(modelRef.current, {
          x: "-45vw",
          // y: "20vh",
        })
        .to(modelRef.current, {
          x: "40vw",
          // y: "20vh",
        })
        .to(modelRef.current, {
          x: "-40vw",
          // y: "20vh",
        })
        .to(modelRef.current, {
          x: "100vw",
          delay: 2,
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
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen z-999 pointer-events-none"
          // className="fixed -top-[10%] -left-[40%] w-screen h-screen z-999 pointer-events-none"
        >
          <Paraglider progress={progress} />
        </div>

        <div className="w-full h-dvh">
          {/* <WhyUsSection /> */}
          <AboutUsSection />
        </div>
        {/* <div className="w-full h-dvh">
          <WhatUWillExp />
        </div> */}
        {/* <div className="px-16 w-full h-dvh">
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
        <div style={{ height: `${sections.length * 100}vh` }} /> */}

        <div className="w-full overflow-x-hidden">
          {/* <p className="text-center text-6xl font-bold mb-8">
            Book a Paragliding Tandem Flight
          </p> */}
          <Packages />
        </div>

        <div className="w-full">
          <TestimonialsSections />
        </div>
        <div className="w-full h-screen">
          <Testimonials />
        </div>
        <div className="h-dvh">
          <p className="text-6xl font-semibold text-center">SEE YOU SOON...</p>
        </div>
      </div>
    </div>
  );
};

export default page;
