import { aboutUs } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const AboutUsSection = () => {
  return (
    <section
      className="px-4 md:px-8 lg:px-16 w-full h-screen relative flex items-center justify-center"
      // style={{
      //   clipPath:
      //     "polygon(67% 3%, 74% 0, 79% 4%, 100% 0, 100% 100%, 0 100%, 0 4%, 14% 0, 26% 3%, 43% 0)",
      //   willChange: "transform",
      //   transform: "translateZ(0)",
      // }}
    >
      <div className="w-full h-full relative flex flex-col lg:flex-row gap-4 lg:gap-8 py-16">
        <div
          className="lg:w-[25%] h-[70vh] relative flex flex-col items-center justify-center"
          // style={{ clipPath: "polygon(0 25%, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <img src="/images/only-logo.png" alt="" className="" />
          <p className="text-9xl font-extrabold absolute -bottom-6 right-6 md:right-1/2 md:translate-x-[65%] lg:translate-x-0 md:bottom-6 lg:bottom-12 lg:right-0 text-(--color-primary)">
            30<span className="text-lg text-black font-medium">years+</span>
          </p>
        </div>
        <div className="text-3xl md:text-5xl text-black h-full lg:w-[75%] z-30 flex items-center">
          <p className="font-[Poppins-Light]">
            Over <span className="text-primary font-bold">three decades</span>{" "}
            of unrivaled expertise. Sunrise is the leading choice for{" "}
            <span className="text-primary font-bold">
              professional tandem flights
            </span>{" "}
            in the Annapurna region.{" "}
            <span className="text-primary font-bold">Experience</span> the
            amazing glide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
