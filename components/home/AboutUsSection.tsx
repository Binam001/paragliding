import { aboutUs } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const AboutUsSection = () => {
  return (
    <div
      className="px-4 md:px-8 lg:px-16 w-full h-screen relative flex items-center justify-center"
      style={{
        clipPath:
          "polygon(67% 3%, 74% 0, 79% 4%, 100% 0, 100% 100%, 0 100%, 0 4%, 14% 0, 26% 3%, 43% 0)",
        willChange: "transform", // Helps browser render edges cleaner
        transform: "translateZ(0)", // Triggers GPU acceleration
      }}
    >
      {/* <img
        src="/images/clouds/clouds13.png"
        alt="cloud"
        className="absolute z-20 -top-[75%] w-screen"
      /> */}
      {/* <img
        src="/images/clouds/clouds12.png"
        alt="cloud"
        className="absolute z-20 -top-[35%]"
      />
      <img
        src="/images/clouds/clouds12.png"
        alt="cloud"
        className="absolute z-20 -top-[35%] -left-[50%]"
      />
      <img
        src="/images/clouds/clouds12.png"
        alt="cloud"
        className="absolute z-20 -top-[35%] -right-[40%]"
      /> */}

      {/* <div className="absolute inset-0 w-full h-screen bg-linear-to-b from-white to-transparent z-60" /> */}

      {/* <img
        src="/images/blog/blog10.jpg"
        // src="/images/blog/phewa-lake.jpg"
        alt="pokhara"
        className="absolute inset-0 w-full h-full object-cover"
      /> */}
      {/* <div className="absolute inset-0 w-full h-full bg-black/60" /> */}
      <div className="w-full h-full relative flex gap-4 md:gap-8 py-16">
        <div
          className="w-[25%] h-[70vh] relative flex flex-col items-center justify-center"
          // style={{ clipPath: "polygon(0 25%, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <img src="/images/only-logo.png" alt="" className="" />
          <p className="text-9xl font-[800] absolute bottom-12 right-0 text-[#f7901e]">
            30<span className="text-lg text-black font-medium">years+</span>
          </p>
        </div>
        <div className="text-5xl text-black h-full w-[75%] z-30 flex items-center">
          <p className="font-light">
            Over{" "}
            <span className="text-[#f7901e] font-medium">three decades</span> of
            unrivaled expertise. Sunrise is the leading choice for{" "}
            <span className="text-[#f7901e] font-medium">
              professional tandem flights
            </span>{" "}
            in the Annapurna region.{" "}
            <span className="text-[#f7901e] font-medium">Experience</span> the
            amazing glide.
          </p>
          {/* <div className="font-light">
            <p>
              Over{" "}
              <span className="text-[#f7901e] font-medium">three decades</span>{" "}
              of unrivaled expertise.
            </p>
            <p>Sunrise is the leading choice for</p>
            <p></p>
            <p>
              <span className="text-[#f7901e] font-medium">
                professional tandem flights
              </span>
            </p>
            <p>
              in the Annapurna region.{" "}
              <span className="text-[#f7901e] font-medium">Experience</span>
            </p>
            <p> the amazing glide.</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
