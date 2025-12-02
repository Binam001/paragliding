import { packageLists } from "@/constants";
import { BadgeCheck, Clock, Timer } from "lucide-react";
import React from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";

const Packages = () => {
  const isLargeDevice = useMediaQuery({ minWidth: 770 });

  useGSAP(() => {
    const packageCard = gsap.utils.toArray(".packageCard");
    const packageContainer = document.querySelector(".packageContainer");

    if (isLargeDevice) {
      if (packageContainer) {
        const containerElement = packageContainer as HTMLElement;
        const totalScroll =
          containerElement.scrollWidth - window.innerWidth + 150;

        gsap.to(packageContainer, {
          x: -totalScroll,
          duration: packageCard.length,
          scrollTrigger: {
            trigger: ".packageContainer",
            start: "top 10%",
            end: `+=${totalScroll}`,
            pin: true,
            scrub: true,
          },
        });
      }
    }
  });
  return (
    <div className="w-screen flex justify-end mt-32">
      <div className="">
        <p className="text-center text-6xl font-bold mb-8">Tandem Flight</p>
        <div className="flex w-screen gap-4 packageContainer">
          <div className="w-[300px] h-full shrink-0" />
          {packageLists.map((packages) => (
            <div
              key={packages.id}
              className="packageCard bg-(--color-accent) rounded-2xl border flex border-gray-400 shrink-0 overflow-hidden h-[500px]"
            >
              <div className="w-[400px] h-full bg-amber-500">
                <img
                  src={packages.image}
                  alt={packages.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[400px] flex flex-col justify-between gap-8 p-4">
                <div className="space-y-2">
                  <div className="">
                    <span className="text-3xl font-bold">{packages.title}</span>
                    {/* <span className="bg-(--color-primary-foreground) px-3 py-1 rounded-lg text-(--color-accent)">
                      NRs. {packages.cost}/-
                    </span> */}
                  </div>

                  <div className="">NRs.: {packages.cost}</div>
                  {packages.time && (
                    <div className="text-gray-600 text-sm flex items-center gap-2">
                      <Clock size={16} />
                      {packages.time}
                    </div>
                  )}
                  {packages.time && (
                    <div className="text-gray-600 text-sm flex items-center gap-2">
                      <Timer size={18} />
                      {packages.duration} min
                    </div>
                  )}
                  <hr className="w-full h-px text-gray-400 mt-4" />
                </div>
                <div className="">
                  <p className="">{packages.desc}</p>
                </div>
                <div className="">
                  <hr className="w-full h-px text-gray-400 mb-4" />
                  <div className="flex justify-end">
                    <button className="bg-(--color-primary-foreground) px-3 py-1 rounded-lg text-white text-xl">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
