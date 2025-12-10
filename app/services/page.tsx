import React from "react";
import Package from "../../components/services/Package";
import HikeFlyProcess from "@/components/services/HikeFlyProcess";
import HeroSection from "@/components/HeroSection";

const page = () => {
  return (
    <div className="space-y-8 md:space-y-16">
      <HeroSection
        text1="Unforgettable Pokhara sky adventures."
        text2="Browse our complete packages."
        link="Services"
      />
      <Package />
      {/* <HikeFlyProcess /> */}
    </div>
  );
};

export default page;
