"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/home/HeroSection";
import Packages from "@/components/home/Packages";
import Testimonials from "@/components/home/Testimonials";
import AboutUsSection from "@/components/home/AboutUsSection";
import { TestimonialSections } from "@/components/home/TestimonialSection";
import Stats from "@/components/home/Stats";
import FooterText from "@/components/home/FooterText";
import Instruction from "@/components/home/Instruction";
import FAQs from "@/components/home/FAQs";
import VideoSection from "@/components/home/VideoSection";

// Lazy load the 3D Paraglider component to prevent blocking navigation
const Paraglider = dynamic(() => import("@/components/home/Paraglider"), {
  ssr: false,
  loading: () => null,
});

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [load3D, setLoad3D] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Delay loading the 3D component to allow navigation to work smoothly
    const timer = setTimeout(() => {
      setLoad3D(true);
    }, 1000); // Load after 1 second

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mainRef.current || !modelRef.current || !mounted || !load3D) {
      return;
    }
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 3,
            onUpdate: (self) => {
              setProgress(self.progress);
            },
          },
        })
        .to(modelRef.current, { x: "40vw", y: "20vh" })
        .to(modelRef.current, { x: "40vw" })
        .to(modelRef.current, { x: "-45vw", duration: 1.5 })
        .to(modelRef.current, { x: "-45vw" })
        .to(modelRef.current, { x: "40vw", duration: 1.5 })
        .to(modelRef.current, { x: "40vw" })
        .to(modelRef.current, { x: "-45vw", duration: 1.5 })
        .to(modelRef.current, { x: "40vw", duration: 1.5 })
        .to(modelRef.current, { x: "0vw", y: "-10vh", duration: 1.5 });
      // .to(modelRef.current, { x: "100vw", duration: 1.5 });
    }, mainRef);

    return () => ctx.revert();
  }, [mounted, load3D]);

  return (
    <div ref={mainRef} className="relative overflow-hidden">
      <div id="next-section" className="w-screen relative">
        <HeroSection />

        {mounted && load3D && (
          <div
            ref={modelRef}
            className="fixed top-1/2 right-0 transform translate-x-full -translate-y-1/2 w-screen h-screen z-100 pointer-events-none"
          >
            <Paraglider progress={progress} />
          </div>
        )}

        <Stats />

        <div className="relative overflow-hidden">
          <div className="w-full">
            <AboutUsSection />
          </div>

          <div className="relative w-full h-screen">
            <img
              src="/images/blog/blog10.jpg"
              alt="pokhara"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 w-full h-full bg-black/60" />
            <div className="absolute inset-0 w-full h-screen bg-linear-to-b from-white to-60% to-transparent z-60" />
          </div>

          <Instruction />

          <div className="w-full overflow-x-hidden mb-8">
            <Packages />
          </div>

          <VideoSection />
          <TestimonialSections />

          {/* <Testimonials /> */}
          {/* <div className="w-full h-screen"> */}
          <FAQs />
          {/* </div> */}

          <FooterText />

          {/* <div className="h-[50dvh]"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
