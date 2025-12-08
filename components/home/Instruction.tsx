import { aboutUs } from "@/constants";
import { Icon } from "@iconify/react";
import React from "react";

const Instruction = () => {
  return (
    <div>
      <div className="w-full h-[50vh] px-4 md:px-8 lg:px-16 my-8">
        <div className="flex h-full">
          {aboutUs.map((about) => (
            <div
              key={about.id}
              className="relative text-center flex flex-col justify-center items-center"
            >
              <div className="">
                <Icon icon={about.icon} className="size-10" />
              </div>
              <div className="space-y-4">
                <p className="text-3xl uppercase font-semibold">
                  {about.title}
                </p>
                <p>{about.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instruction;
