import { aboutUs } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const AboutUsSection = () => {
  return (
    <div
      className="px-4 md:px-8 lg:px-16 w-full h-full relative"
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

      <div className="absolute inset-0 w-full h-screen bg-linear-to-b from-white to-40% to-transparent z-60" />

      <img
        src="/images/blog/blog10.jpg"
        alt="pokhara"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 w-full h-full bg-black/60" />
      <div className="w-full h-full z-40 relative flex flex-col gap-4 md:gap-8 pt-24">
        <div className="text-3xl font-medium space-y-2 md:space-y-4 text-white w-[70%] mx-auto">
          <p className="">
            Sunrise Paragliding is a family run company and has been offering
            tandem flights in the Annapurna region of Nepal{" "}
            <span className="text-orange-500">since 1996</span>. As the most
            experienced paragliding company in Nepal, we are unrivaled in our
            knowledge of paragliding conditions, sites and local cultures.
          </p>
          <p>
            We are the leading choice of professional tandem flights in Nepal.
            And we have been running tandem flights in the foothills of Nepal
            for the last <span className="text-orange-500">30 years</span>.
            Believe us when we say that paragliding here is amazing. But don't
            take our word for it - come and see for yourself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
