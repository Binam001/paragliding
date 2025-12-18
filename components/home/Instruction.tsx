import { aboutUs } from "@/constants";
import { Icon } from "@iconify/react";
import React from "react";

const Instruction = () => {
  return (
    <section className="py-16">
      <div className="w-full flex flex-col items-center justify-center gap-8 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {aboutUs.map((about) => (
            <div
              key={about.id}
              className={`md:h-40 relative p-4 rounded-md text-center flex gap-4 flex-col justify-center items-center border border-zinc-300`}
            >
              <div className="">
                <Icon icon={about.icon} className={`size-12 text-primary`} />
              </div>
              <div className="">
                <p className="lg:text-xl">{about.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instruction;
