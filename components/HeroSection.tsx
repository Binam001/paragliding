import Link from "next/link";
import React from "react";

interface HeroSectionProps {
  text1: string;
  text2: string;
  link: string;
  link2?: string;
  link2Href?: string;
}

const HeroSection = ({
  text1,
  text2,
  link,
  link2,
  link2Href,
}: HeroSectionProps) => {
  return (
    <div
      className="w-full h-[70vh] relative flex items-center justify-center"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% 96%, 86% 100%, 74% 97%, 57% 100%, 33% 97%, 26% 100%, 21% 96%, 0 100%)",
      }}
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/images/blog/blog11.jpg"
          alt="blog 11 image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 w-full h-full bg-black/60" />
      <div className="z-10 space-y-8 px-4 md:px-8 lg:px-16">
        <div className="text-white text-center text-3xl font-bold">
          <p>{text1}</p>
          <p>{text2}</p>
        </div>

        <div className="text-center text-white text-2xl font-semibold">
          <Link href="/">Home</Link>
          {link2 && link2Href && (
            <>
              <span className="mx-2">/</span>
              <Link href={link2Href}>{link2}</Link>
            </>
          )}
          <span className="mx-2">/</span>
          <span className="text-(--color-primary)">{link}</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
