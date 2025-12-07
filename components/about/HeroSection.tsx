"use client";

import ScrollExpandMedia from "@/components/scroll-expansion-hero";
import { useState, useEffect } from "react";

interface MediaAbout {
  overview: string;
  conclusion: string;
}

interface MediaContent {
  src: string;
  poster?: string;
  background: string;
  title: string;
  date: string;
  scrollToExpand: string;
  about: MediaAbout;
}

interface MediaContentCollection {
  [key: string]: MediaContent;
}

const sampleMediaContent: MediaContentCollection = {
  video: {
    src: "/videos/SUNRISE-PARAGLIDING-NEPAL.mp4",
    // src: "/videos/about/hero_video.mp4",
    poster:
      "https://images.pexels.com/videos/5752729/space-earth-universe-cosmos-5752729.jpeg",
    background: "/images/about/Pokhara-valley-nepal.webp",
    title: "25 Years of Flying in the Himalayas",
    date: "The Pioneers of",
    scrollToExpand: "Paragliding in Nepal",
    about: {
      overview:
        "Sunrise Paragliding is a family run company and has been offering tandem flights in the Annapurna region of Nepal since 1996. As the most experienced paragliding company in Nepal, we are unrivaled in our knowledge of paragliding conditions, sites and local cultures. The main area for paragliding is Sarangkot in the Pokhara valley, a site which offers spectacular views of three 8,000m peaks and friendly and constant conditions for paragliding throughout the year.",
      conclusion:
        "We are the leading choice of professional tandem flights in Nepal. And we have been running tandem flights in the foothills of Nepal for the last 25 years. Believe us when we say that paragliding here is amazing. But don’t take our word for it - come and see for yourself.",
    },
  },
  // image: {
  //   src: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?q=80&w=1280&auto=format&fit=crop",
  //   background:
  //     "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1920&auto=format&fit=crop",
  //   title: "Dynamic Image Showcase",
  //   date: "Underwater Adventure",
  //   scrollToExpand: "The Pioneers of Paragliding in Nepal",
  //   about: {
  //     overview:
  //       "Sunrise Paragliding is a family run company and has been offering tandem flights in the Annapurna region of Nepal since 1996. As the most experienced paragliding company in Nepal, we are unrivaled in our knowledge of paragliding conditions, sites and local cultures. The main area for paragliding is Sarangkot in the Pokhara valley, a site which offers spectacular views of three 8,000m peaks and friendly and constant conditions for paragliding throughout the year.",
  //     conclusion:
  //       "We are the leading choice of professional tandem flights in Nepal. And we have been running tandem flights in the foothills of Nepal for the last 25 years. Believe us when we say that paragliding here is amazing. But don’t take our word for it - come and see for yourself.",
  //   },
  // },
};

const MediaContent = ({ mediaType }: { mediaType: "video" | "image" }) => {
  const currentMedia = sampleMediaContent[mediaType];

  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-6 text-black">About Us</h2>
      <p className="text-lg mb-8 text-black">{currentMedia.about.overview}</p>

      <p className="text-lg mb-8 text-black">{currentMedia.about.conclusion}</p>
    </div>
  );
};

export const VideoExpansionTextBlend = () => {
  const mediaType = "video";
  const currentMedia = sampleMediaContent[mediaType];

  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   const resetEvent = new Event("resetSection");
  //   window.dispatchEvent(resetEvent);
  // }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansionTextBlend = () => {
  const mediaType = "image";
  const currentMedia = sampleMediaContent[mediaType];

  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   const resetEvent = new Event("resetSection");
  //   window.dispatchEvent(resetEvent);
  // }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
        textBlend
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const VideoExpansion = () => {
  const mediaType = "video";
  const currentMedia = sampleMediaContent[mediaType];

  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   const resetEvent = new Event("resetSection");
  //   window.dispatchEvent(resetEvent);
  // }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        posterSrc={currentMedia.poster}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

export const ImageExpansion = () => {
  const mediaType = "image";
  const currentMedia = sampleMediaContent[mediaType];

  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   const resetEvent = new Event("resetSection");
  //   window.dispatchEvent(resetEvent);
  // }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={currentMedia.src}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType} />
      </ScrollExpandMedia>
    </div>
  );
};

const HeroSection = () => {
  const [mediaType, setMediaType] = useState("video");
  const currentMedia = sampleMediaContent[mediaType];

  // useEffect(() => {
  //   window.scrollTo(0, 0);

  //   const resetEvent = new Event("resetSection");
  //   window.dispatchEvent(resetEvent);
  // }, [mediaType]);

  return (
    <div className="min-h-screen w-screen">
      {/* <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => setMediaType("video")}
          className={`px-4 py-2 rounded-lg ${
            mediaType === "video"
              ? "bg-white text-black"
              : "bg-black/50 text-white border border-white/30"
          }`}
        >
          Video
        </button>

        <button
          onClick={() => setMediaType("image")}
          className={`px-4 py-2 rounded-lg ${
            mediaType === "image"
              ? "bg-white text-black"
              : "bg-black/50 text-white border border-white/30"
          }`}
        >
          Image
        </button>
      </div> */}

      <ScrollExpandMedia
        mediaType={mediaType as "video" | "image"}
        mediaSrc={currentMedia.src}
        posterSrc={mediaType === "video" ? currentMedia.poster : undefined}
        bgImageSrc={currentMedia.background}
        title={currentMedia.title}
        date={currentMedia.date}
        scrollToExpand={currentMedia.scrollToExpand}
      >
        <MediaContent mediaType={mediaType as "video" | "image"} />
      </ScrollExpandMedia>
    </div>
  );
};

export default HeroSection;
