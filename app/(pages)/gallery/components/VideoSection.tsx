"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface VideoScrollHeroProps {
  videoSrc?: string;
  enableAnimations?: boolean;
  className?: string;
  startScale?: number;
}

export function VideoSection({
  videoSrc = "/videos/SUNRISE-PARAGLIDING-NEPAL.mp4",
  enableAnimations = true,
  className = "",
  startScale = 0.25,
}: VideoScrollHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [scrollScale, setScrollScale] = useState(startScale);

  useEffect(() => {
    if (!enableAnimations || shouldReduceMotion) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate scroll progress based on container position
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = containerHeight - windowHeight;
      const progress = Math.min(scrolled / maxScroll, 1);

      // Scale from startScale to 1
      const newScale = startScale + progress * (1 - startScale);
      setScrollScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [enableAnimations, shouldReduceMotion, startScale]);

  const shouldAnimate = enableAnimations && !shouldReduceMotion;

  return (
    <div className={`relative ${className}`}>
      {/* Hero Section with Video */}
      <div ref={containerRef} className="relative h-[200vh] bg-background">
        {/* Fixed Video Container */}
        <div className="sticky top-0 w-full h-screen flex items-center justify-center z-10">
          <div
            className="relative flex items-center justify-center will-change-transform"
            style={{
              transform: shouldAnimate ? `scale(${scrollScale})` : "scale(1)",
              transformOrigin: "center center",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-[80vw] max-w-4xl h-[60vh] object-cover shadow-2xl rounded-2xl"
            >
              <source src={videoSrc} type="video/mp4" />
              {/* Your browser does not support the video tag. */}
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
