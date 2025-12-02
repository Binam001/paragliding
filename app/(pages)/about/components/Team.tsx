import TeamSection from "@/components/team";
import React from "react";

const Team = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 mt-8 md:mt-16">
      <div className="space-y-2">
        <div className="text-center text-6xl font-bold">Our Team</div>
        <p className="text-center font-semibold text-lg">
          “Over 100 years of Flying experience combined”
        </p>
        <p>
          Sunrise Paragliding are the pioneers of paragliding in Nepal so it's
          no surprise that our team comprises of some of the most experienced
          and accomplished pilots in Nepal.
        </p>
      </div>

      <div className="">
        <TeamSection />
      </div>
    </div>
  );
};

export default Team;
