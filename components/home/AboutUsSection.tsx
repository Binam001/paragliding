import { aboutUs } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const AboutUsSection = () => {
  return (
    <div
      className="px-4 md:px-8 lg:px-16 w-full h-full relative"
      style={{
        clipPath:
          "polygon(67% 3%, 74% 0, 79% 4%, 100% 0, 100% 100%, 0 100%, 0 4%, 14% 0, 26% 3%, 43% 0)",
      }}
    >
      {/* <img
        src="/images/clouds/clouds13.png"
        alt="cloud"
        className="absolute z-20 -top-[75%] w-screen"
      /> */}
      {/* <img
        src="/images/clouds/clouds12.png"
        alt="cloud"
        className="absolute z-20 -top-[35%]"
      />
      <img
        src="/images/clouds/clouds12.png"
        alt="cloud"
        className="absolute z-20 -top-[35%] -left-[50%]"
      />
      <img
        src="/images/clouds/clouds12.png"
        alt="cloud"
        className="absolute z-20 -top-[35%] -right-[40%]"
      /> */}

      <img
        src="/images/blog/blog10.jpg"
        alt="pokhara"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 w-full h-full bg-black/60" />
      <div className="w-full h-full z-40 relative flex flex-col gap-4 md:gap-8 justify-center">
        {/* <div className="w-[40%] h-full flex flex-col justify-between"> */}
        {/* <p className="text-6xl font-bold">
          The <span className="text-[#ea6520]">Adventure</span> Awaits
        </p> */}
        {/* <div className=""> */}

        {/* <div className="bg-(--color-primary) rounded-lg py-4 px-8">
          <div className="flex justify-between">
            {[
              {
                id: 1,
                title: "Annual Flights",
                count: "16000+",
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
                title: "Pilot Exp",
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
        </div> */}
        <div className="text-3xl font-medium space-y-2 md:space-y-4 text-white">
          <p className="">
            Sunrise Paragliding is a family run company and has been offering
            tandem flights in the Annapurna region of Nepal{" "}
            <span className="text-orange-500">since 1996</span>. As the most
            experienced paragliding company in Nepal, we are unrivaled in our
            knowledge of paragliding conditions, sites and local cultures.
          </p>
          <p>
            We are the leading choice of professional tandem flights in Nepal.
            And we have been running tandem flights in the foothills of Nepal
            for the last <span className="text-orange-500">30 years</span>.
            Believe us when we say that paragliding here is amazing. But don't
            take our word for it - come and see for yourself.
          </p>
        </div>
        {/* </div> */}
        {/* <Link
          href="/about"
          className="px-4 py-2 rounded-full bg-(--color-secondary) flex items-center justify-between gap-2 w-fit cursor-pointer text-white"
        >
          <Icon
            icon="solar:round-arrow-right-up-bold"
            className="size-8 text-white"
          />
          About Us
        </Link> */}
        {/* </div> */}
        {/* <div className="w-[60%] h-full">
          <div className="grid grid-cols-2 gap-12 h-full">
            {aboutUs.map((about) => (
              <div
                key={about.id}
                className="bg-(--color-accent) rounded-lg p-4 relative text-center flex flex-col justify-center"
              >
                <div className="absolute -top-16 translate-y-1/2 left-1/2 -translate-x-1/2 bg-(--color-secondary) p-3 rounded-full">
                  <Icon icon={about.icon} className="size-10 text-white" />
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
        </div> */}
      </div>
    </div>
  );
};

export default AboutUsSection;
