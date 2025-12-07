"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";

const IntroVideo1: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const lockedRef = useRef(false);
  const [showText, setShowText] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);
  const textRef = useRef<HTMLHeadingElement>(null);

  // Helper to lock/unlock scroll on html, body and #__next
  const lockScroll = () => {
    const html = document.documentElement;
    const body = document.body;
    const next = document.getElementById("__next");

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    html.style.height = "100%";
    body.style.height = "100%";

    if (next) {
      next.style.overflow = "hidden";
      next.style.height = "100%";
    }

    lockedRef.current = true;
  };

  const unlockScroll = () => {
    const html = document.documentElement;
    const body = document.body;
    const next = document.getElementById("__next");

    html.style.overflow = "";
    body.style.overflow = "";

    html.style.height = "";
    body.style.height = "";

    if (next) {
      next.style.overflow = "";
      next.style.height = "";
    }

    lockedRef.current = false;
  };

  // LOCK SCROLL AT START
  useEffect(() => {
    lockScroll();

    return () => {
      unlockScroll();
    };
  }, []);

  // FINAL single handler for video end
  const handleVideoEnd = () => {
    setShowText(true);
    unlockScroll();

    // Auto scroll after text appears
    setTimeout(() => {
      // const nextSection = document.querySelector("#next-section");
      // nextSection?.scrollIntoView({ behavior: "smooth" });

      setHideIntro(true);
    }, 1500);
  };

  useEffect(() => {
    if (showText && textRef.current) {
      gsap.from(textRef.current, {
        filter: "blur(100px)",
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      });
    }
  }, [showText]);

  return (
    <div
      className={`relative w-screen -mx-4 md:-mx-16 overflow-hidden transition-[height] duration-700 ${
        hideIntro ? "h-0" : "h-screen"
      }`}
    >
      <video
        ref={videoRef}
        src="/videos/introVideo1.mp4"
        muted
        playsInline
        preload="auto"
        autoPlay
        onEnded={handleVideoEnd}
        className="w-screen h-screen absolute top-0 left-0 object-cover brightness-75"
      />
      <div className="absolute w-full h-full flex items-center justify-center text-center bg-black/50 text-white text-5xl font-bold">
        <div className="">
          <p className="">Some journeys start on the ground.</p>
          <p>Ours begin in the sky.</p>
        </div>
      </div>

      {showText && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <h1
            ref={textRef}
            id="enterVirtualWorldText"
            className="text-white text-4xl md:text-6xl font-bold animate-fadeIn"
          >
            Entering a virtual world
          </h1>
        </div>
      )}
    </div>
  );
};

export default IntroVideo1;
