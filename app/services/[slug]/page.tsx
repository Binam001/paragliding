import React from "react";
import { notFound } from "next/navigation";
import { packageLists } from "@/constants";
import HeroSection from "@/components/HeroSection";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

const tableOfContentLists = [
  {
    id: 1,
    title: "Overview",
    link: "#overview",
    icon: "fluent:apps-list-detail-32-regular",
  },
  { id: 2, title: "Cost", link: "#cost", icon: "ph:money-wavy" },
  {
    id: 3,
    title: "Essential Info",
    link: "#essential-info",
    icon: "material-symbols:info-outline-rounded",
  },
];

const essentialInfo = [
  {
    id: 1,
    icon: "uil:calender",
    title: "Best Seasons & Weather",
    content:
      "Peak flying is June - August(Summer) and March - May (Spring). These months offer the clearest skies, stable thermals, and best mountain views. Flights are canceled in heavy rain or high winds.",
  },
  {
    id: 2,
    icon: "material-symbols:altitude-outline-rounded",
    title: "Altitude & Takeoff Point",
    content:
      "Flights typically launch from Sarangkot Hill at an altitude of approximately 1,600 meters (5,250 ft). The flight itself often gains altitude by using thermals.",
  },
  {
    id: 3,
    icon: "uil:clock",
    title: "Flight Duration",
    content:
      "A standard tandem flight lasts 20 to 30 minutes, depending on the wind/thermal conditions. Specialized thermal or cross-country flights can extend up to 40-60 minutes.",
  },
  {
    id: 4,
    icon: "ion:fitness-outline",
    title: "Fitness Requirements",
    content:
      "Passengers need basic physical mobility and the ability to run a few steps briskly during takeoff and landing. Not recommended for those with severe heart conditions or high blood pressure.",
  },
  {
    id: 5,
    icon: "mingcute:safety-certificate-line",
    title: "Safety & Pilots",
    content:
      "All flights are tandem with internationally certified, highly experienced pilots. We use regularly inspected, top-quality equipment and adhere to strict safety protocols.",
  },
  {
    id: 6,
    icon: "streamline-ultimate:adventure-car-truck-1",
    title: "Full Experience Time",
    content:
      "The entire experience from hotel pick-up in Lakeside, drive to Sarangkot, briefing, flight, and drop-off takes around 2 to 3 hours.",
  },
];
const PackageDetailsPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const packageItem = packageLists.find((p) => p.slug === slug);
  if (!packageItem) return notFound();

  return (
    <div className="space-y-8 md:space-y-16 bg-[#fbc68a] min-h-screen">
      <HeroSection
        text1={packageItem.title}
        text2="Package Details"
        link2="Services"
        link2Href="/services"
        link={`${packageItem.title}`}
      />

      <div className="px-4 md:px-8 lg:px-16 w-full flex relative gap-2">
        <div className="w-[20%] sticky top-24 h-fit">
          <p className="text-xl font-bold mb-4 text-(--color-primary)">
            Table of Contents
          </p>
          <div className="flex flex-col gap-4 mt-4">
            {tableOfContentLists.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="flex items-center gap-2"
              >
                <Icon icon={item.icon} className="size-6" />
                <p className="text-sm">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-[80%] space-y-16 pl-4 border-l-2 border-[#fcd3a5]">
          <h2
            id="overview"
            className="text-3xl font-bold mb-4 text-(--color-primary) scroll-mt-24"
          >
            {packageItem.title}
          </h2>

          <div className="grid grid-cols-4 gap-4">
            {packageItem.time && (
              <div className="bg-[#fcd3a5] p-4 rounded-md flex justify-evenly">
                <Image
                  src="/images/icons/clock.png"
                  alt="time"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div className="flex flex-col items-center justify-center">
                  <p className="text-gray-600">Time</p>
                  <div className="text-center font-semibold">
                    {packageItem.time.map((t) => (
                      <div key={t}>{t}</div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {packageItem.duration && (
              <div className="bg-[#fcd3a5] p-4 rounded-md flex justify-evenly">
                <Image
                  src="/images/icons/hourglass.png"
                  alt="time"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <div className="flex flex-col items-center justify-center">
                  <p className="text-gray-600">Duration</p>
                  <p className="text-center font-semibold">
                    {packageItem.duration} min
                  </p>
                </div>
              </div>
            )}

            <div className="bg-[#fcd3a5] p-4 rounded-md flex justify-evenly">
              <Image
                src="/images/icons/money.png"
                alt="time"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="text-gray-600">Cost</p>
                <p className="text-center font-semibold">
                  NRs. {packageItem.cost}
                </p>
              </div>
            </div>

            <div className="bg-[#fcd3a5] p-4 rounded-md flex justify-evenly">
              <Image
                src="/images/icons/mountain.png"
                alt="time"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="text-gray-600 text-center">Take-off altitude</p>
                <p className="text-center font-semibold">
                  {packageItem.altitude}
                </p>
              </div>
            </div>

            <div className="bg-[#fcd3a5] p-4 rounded-md flex justify-evenly">
              <Image
                src="/images/icons/placeholder.png"
                alt="time"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="text-gray-600 text-center">Take-off place</p>
                <p className="text-center font-semibold">Sarangkot</p>
              </div>
            </div>

            <div className="bg-[#fcd3a5] p-4 rounded-md flex justify-evenly">
              <Image
                src="/images/icons/destination.png"
                alt="time"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="text-gray-600 text-center">Landing place</p>
                <p className="text-center font-semibold">Pokhara</p>
              </div>
            </div>

            <div className="bg-[#fcd3a5] p-4 rounded-md flex justify-evenly col-span-2">
              <Image
                src="/images/icons/summer.png"
                alt="time"
                width={50}
                height={50}
                className="object-contain"
              />
              <div className="flex flex-col items-center justify-center">
                <p className="text-gray-600 text-center">Best Seasons</p>
                <p className="text-center font-semibold">Summer, Spring</p>
              </div>
            </div>
          </div>

          <div className="">
            <p className="text-3xl font-bold mb-4 text-(--color-primary)">
              Overview
            </p>
            <p className="text-lg text-gray-700 whitespace-pre-line">
              {packageItem.desc}
            </p>
          </div>

          <div id="cost" className="space-y-4 scroll-mt-24">
            <p className="text-3xl font-bold mb-4 text-(--color-primary)">
              Pricing Details
            </p>
            <div className="flex gap-4 items-center">
              <Image
                src="/images/icons/money.png"
                alt="time"
                width={50}
                height={50}
                className="object-contain"
              />
              <p className="">
                NRs. {packageItem.cost}
                {packageItem.optional &&
                  ` (+ ${packageItem.optional} for photos & videos)`}
              </p>
            </div>
            {packageItem.optional && (
              <div className="bg-[#fcd3a5] p-4 rounded-md">
                <p>
                  <span>Note:</span>You can bring your own camera or, just ask
                  for our in-flight photo and video option for great shots of
                  you while in the air.
                </p>
              </div>
            )}
          </div>

          <div id="essential-info" className="space-y-4 scroll-mt-24">
            <p className="text-3xl font-bold mb-4 text-(--color-primary)">
              Essential Info
            </p>
            <div className="">
              {essentialInfo.map((info) => (
                <div
                  key={info.id}
                  className="flex gap-4 mb-4 bg-[#fcd3a5] p-4 rounded-md"
                >
                  <Icon icon={info.icon} className="size-8 shrink-0" />
                  <div>
                    <p className="font-semibold text-lg mb-2">{info.title}</p>
                    <p className="text-gray-700">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsPage;
