import { Icon } from "@iconify/react";
import React from "react";
import CountUp from "../CountUp";

const Stats = () => {
  return (
    // <div className="relative px-4 md:px-8 lg:px-16">
    <div className="relative w-screen flex items-center justify-center px-4 md:px-8 lg:px-16 mt-8">
      <div
        className="w-full"
        // style={{
        //   background:
        //     "linear-gradient(to right, #991b1b 0%, #ef4444 40%, #fde047 100%)",
        // }}
      >
        <div className="flex justify-between">
          {[
            {
              id: 1,
              title: "Years",
              count: "30+",
              icon: "ant-design:global-outlined",
            },
            {
              id: 2,
              title: "Monthly Flights",
              count: "1500+",
              icon: "fluent-emoji-high-contrast:parachute",
            },

            {
              id: 3,
              title: "Pilot Experience",
              count: "20+",
              icon: "eos-icons:trusted-organization",
            },
            {
              id: 4,
              title: "Take-off Altitude",
              count: "1600",
              icon: "material-symbols:altitude-outline-rounded",
            },
          ].map((data) => (
            <div
              key={data.id}
              className={`flex flex-col items-center gap-4 rounded-md p-4 border-b-4 border-(--color-primary) min-w-64 bg-(--color-primary)/20`}
            >
              <Icon
                icon={data.icon}
                className="size-12 text-(--color-primary)"
              />
              <div className="flex flex-col items-center">
                <div className="flex items-center text-5xl font-light">
                  <CountUp
                    from={0}
                    to={parseInt(data.count)}
                    separator=","
                    direction="up"
                    duration={1.5}
                    className="count-up-text"
                  />
                  {data.id !== 4 && <span>+</span>}
                  {data.id === 4 && <span>M</span>}
                </div>
                <p className="font-light">{data.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
