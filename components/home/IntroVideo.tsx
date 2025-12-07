"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const IntroVideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    video.onloadedmetadata = () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: video,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
        },
      });

      tl.to(video, {
        currentTime: video.duration,
        ease: "none",
      });
    };
  }, [isMobile]);

  return (
    <div className="video absolute inset-0">
      <video
        ref={videoRef}
        src="/videos/introVideoHD.mp4"
        muted
        playsInline
        preload="auto"
        className="w-screen h-screen absolute top-0 left-0 object-cover"
      />
    </div>
  );
};

export default IntroVideo;
