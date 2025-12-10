import AboutHeroSection from "@/components/about/HeroSection";
import Team from "@/components/about/Team";
import HeroSection from "@/components/HeroSection";
import React from "react";

const page = () => {
  return (
    <div className="">
      <HeroSection
        text1="We live to fly."
        text2="Find out our history, safety standards & passion for flying here."
        link="About"
      />
      <div className="mt-8">
        <AboutHeroSection />
        <Team />
      </div>
    </div>
  );
};

export default page;
