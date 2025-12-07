import { Icon } from "@iconify/react";
import React from "react";

const Stats = () => {
  return (
    <div className="relative px-4 md:px-8 lg:px-16">
      <div
        className="rounded-lg py-4"
        style={{
          background:
            "linear-gradient(to right, #991b1b 0%, #ef4444 40%, #fde047 100%)",
        }}
      >
        <div className="flex justify-evenly">
          {[
            {
              id: 1,
              title: "Monthly Flights",
              count: "1500+",
              icon: "fluent-emoji-high-contrast:parachute",
            },
            {
              id: 2,
              title: "Global Ranking",
              count: "5",
              icon: "ant-design:global-outlined",
            },
            {
              id: 3,
              title: "Pilot Experience",
              count: "20+",
              icon: "eos-icons:trusted-organization",
            },
          ].map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center text-white"
            >
              <Icon icon={data.icon} className="size-12" />
              <p>{data.count}</p>
              <p className="text-xl font-medium">{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
