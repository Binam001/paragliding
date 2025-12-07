"use client";

import { useEffect, useRef, useState, Suspense } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/home/HeroSection";
import Packages from "@/components/home/Packages";
import Testimonials from "@/components/home/Testimonials";
import AboutUsSection from "@/components/home/AboutUsSection";
import { TestimonialsSections } from "@/components/home/GallerySection";

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
            scrub: 2,
            onUpdate: (self) => {
              setProgress(self.progress);
            },
          },
        })
        .to(modelRef.current, { x: "40vw", y: "20vh" })
        .to(modelRef.current, { x: "-45vw" })
        .to(modelRef.current, { x: "40vw" })
        .to(modelRef.current, { x: "-45vw" })
        .to(modelRef.current, { x: "40vw" })
        .to(modelRef.current, { x: "-40vw" })
        .to(modelRef.current, { x: "100vw", delay: 2 });
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
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen z-40"
            style={{ pointerEvents: "none" }}
          >
            <Suspense fallback={null}>
              <Paraglider progress={progress} />
            </Suspense>
          </div>
        )}

        <div className="w-full h-dvh">
          <AboutUsSection />
        </div>

        <div className="w-full overflow-x-hidden">
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

export default Page;
