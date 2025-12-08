import React from "react";
import ContactSection from "./components/ContactSection";
import HeroSection from "@/components/HeroSection";

const page = () => {
  return (
    <div className="space-y-8 md:space-y-16 mt-24">
      <div className="h-full">
        <ContactSection />
      </div>
    </div>
  );
};

export default page;
