import React from "react";
import ContactSection from "../../components/contact/ContactSection";
import HeroSection from "@/components/HeroSection";

const page = () => {
  return (
    <div className="">
      <HeroSection
        text1="Get in touch for unforgettable sky adventures."
        text2="We're here to help you plan your paragliding experience."
        link="Contact"
      />
      <div className="h-full mt-8">
        <ContactSection />
      </div>
    </div>
  );
};

export default page;
