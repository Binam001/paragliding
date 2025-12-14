"use client";

import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import { articleLists, FAQsLists, packageLists } from "@/constants";
import HeroSection from "@/components/HeroSection";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import GallerySection from "./GallerySection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const baseTableOfContentLists = [
  {
    id: 1,
    title: "Quick Info",
    link: "#quickInfo",
    icon: "uil:file-info-alt",
  },
  {
    id: 2,
    title: "Overview",
    link: "#overview",
    icon: "fluent:apps-list-detail-32-regular",
  },
  { id: 3, title: "Time", link: "#time", icon: "mingcute:time-line" },
  { id: 4, title: "Cost", link: "#cost", icon: "ph:money-wavy" },
  {
    id: 5,
    title: "Activity",
    link: "#activity",
    icon: "solar:gallery-outline",
  },
  {
    id: 6,
    title: "Essential Info",
    link: "#essential-info",
    icon: "material-symbols:info-outline-rounded",
  },
  {
    id: 7,
    title: "Safety Guidelines",
    link: "#safety-guide",
    icon: "ant-design:safety-outlined",
  },
  {
    id: 8,
    title: "FAQs",
    link: "#faqs",
    icon: "streamline-ultimate:contact-us-faq",
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

const safetyGuidelines = [
  {
    id: 1,
    icon: "mdi:whistle-outline",
    title: "Listen to Your Pilot",
    content:
      "Your pilot is an experienced professional. Follow all instructions given during the briefing, takeoff, flight, and landing. Your cooperation is crucial for a safe and enjoyable experience.",
  },
  {
    id: 2,
    icon: "ion:shirt-outline",
    title: "Wear Appropriate Clothing",
    content:
      "Wear sturdy, closed-toe shoes (like trainers or hiking boots), long trousers, and a windproof jacket, even on a warm day, as it can be cooler at altitude.",
  },
  {
    id: 3,
    icon: "tabler:run",
    title: "Commit to the Takeoff Run",
    content:
      "When your pilot says 'run,' you must run forward without stopping or sitting down until your feet have left the ground. This is essential for a smooth and safe launch.",
  },
  {
    id: 4,
    icon: "material-symbols:weight-outline",
    title: "Respect Weight Limits",
    content:
      "Adhere to the specified weight limits (typically 35kg to 95kg). These limits are in place to ensure the paraglider performs correctly and safely within its certified range.",
  },
  {
    id: 5,
    icon: "solar:chat-round-like-linear",
    title: "Communicate with Your Pilot",
    content:
      "If you feel unwell, scared, or uncomfortable at any point during the flight, inform your pilot immediately. They can adjust the flight to make it more comfortable for you.",
  },
  {
    id: 6,
    icon: "ph:camera-slash",
    title: "Secure Personal Belongings",
    content:
      "Ensure your phone, camera, and any other personal items are securely attached. It's best to use a wrist strap or secure pockets. Anything dropped during the flight will be lost forever.",
  },
];

type PackageItem = (typeof packageLists)[0];

interface PackageDetailsClientProps {
  packageItem: PackageItem;
}

const PackageDetailsClient = ({ packageItem }: PackageDetailsClientProps) => {
  const tableOfContentLists =
    packageItem.slug === "hike-fly"
      ? baseTableOfContentLists.filter((item) => item.title !== "Time")
      : baseTableOfContentLists;

  const [activeLink, setActiveLink] = useState(tableOfContentLists[0]?.link);
  const [activeTabId, setActiveTabId] = useState<number | null>(1);

  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      for (const item of tableOfContentLists) {
        const section = document.querySelector(item.link);
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          // 150px offset to trigger the active state a bit earlier
          if (sectionTop <= 150) {
            current = item.link;
          }
        }
      }

      if (current && activeLink !== current) {
        setActiveLink(current);
      } else if (!current && tableOfContentLists.length > 0) {
        // Fallback to the first item if no section is active (e.g., at the very top)
        setActiveLink(tableOfContentLists[0].link);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink, tableOfContentLists]);

  return (
    <div className="space-y-8 md:space-y-16 min-h-screen">
      <HeroSection
        text1={packageItem.title}
        text2="Package Details"
        link2="Services"
        link2Href="/services"
        link={`${packageItem.title}`}
      />

      <div className="px-4 md:px-8 lg:px-16 w-full flex flex-col md:flex-row relative md:gap-2">
        {/* left section*/}
        <div className="md:w-[20%] sticky top-17 md:top-24 h-fit bg-white py-4 md:py-0 shadow-md md:shadow-none overflow-x-scroll z-50">
          <p className="text-xl font-bold mb-4 text-(--color-primary) border-b border-zinc-200">
            Table of Contents
          </p>
          <div className="flex md:flex-col gap-4 mt-4">
            {tableOfContentLists.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={`flex items-center gap-2 transition-all duration-300 p-2 rounded-md hover:bg-primary/20 hover:text-primary ${
                  activeLink === item.link
                    ? "bg-primary/20 text-primary font-semibold"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                <Icon icon={item.icon} className="size-6" />
                <p
                  className={`text-sm whitespace-nowrap ${
                    activeLink === item.link ? "block" : "hidden md:block"
                  }`}
                >
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* middle content */}
        <div className="md:w-[60%] space-y-16 mt-4 md:mt-0 px-4 border-x border-zinc-200">
          <h2
            id="quickInfo"
            className="text-3xl font-bold mb-4 text-(--color-primary) scroll-mt-24"
          >
            Quick Info
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {packageItem.duration && (
              <div className="border border-zinc-200 p-4 rounded-md flex justify-evenly">
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

            <div className="border border-zinc-200 p-4 rounded-md flex justify-evenly">
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

            <div className="border border-zinc-200 p-4 rounded-md flex justify-evenly">
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
          </div>

          {/* overview */}
          <div id="overview" className="">
            <p className="text-3xl font-bold mb-4 text-(--color-primary)">
              Overview
            </p>
            <p className="text-lg text-gray-700 whitespace-pre-line">
              {packageItem.desc}
            </p>
          </div>

          {/* time */}
          {packageItem.time && (
            <div id="time" className="scroll-mt-24">
              <h2 className="text-3xl font-bold mb-4 text-(--color-primary)">
                Opening Hours
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  We offer flights at three convenient times during the day.
                  Morning flights typically offer calmer conditions, while
                  midday flights often have stronger thermals, ideal for longer
                  soaring.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {packageItem.time.map((t) => (
                    <div
                      key={t}
                      className="border border-zinc-200 p-4 rounded-lg text-center"
                    >
                      <p className="font-semibold text-lg">{t}</p>
                      <p className="text-sm text-gray-600">Daily Slot</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* cost */}
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
              <div className="border border-zinc-200 p-4 rounded-md">
                <p>
                  <span>Note:</span>You can bring your own camera or, just ask
                  for our in-flight photo and video option for great shots of
                  you while in the air.
                </p>
              </div>
            )}
          </div>

          {/* activity */}
          <GallerySection />

          {/* essential-info section */}
          <div id="essential-info" className="space-y-4 scroll-mt-24">
            <p className="text-3xl font-bold mb-4 text-(--color-primary)">
              Essential Info
            </p>
            <div className="">
              {essentialInfo.map((info) => (
                <div
                  key={info.id}
                  className="flex gap-4 mb-4 border border-zinc-200 p-4 rounded-md"
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

          {/* safety guidelines */}
          <div id="safety-guide" className="space-y-4 scroll-mt-24">
            <p className="text-3xl font-bold mb-4 text-(--color-primary)">
              Safety Guidelines
            </p>
            <div className="">
              {safetyGuidelines.map((info) => (
                <div
                  key={info.id}
                  className="flex gap-4 mb-4 border border-zinc-200 p-4 rounded-md"
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

          {/* FAQs */}
          <div id="faqs" className="space-y-4 scroll-mt-24">
            <p className="text-3xl font-bold mb-4 text-(--color-primary)">
              FAQs
            </p>
            <Accordion type="single" className="w-full">
              {FAQsLists.map((tab) => (
                <AccordionItem key={tab.id} value={`item-${tab.id}`}>
                  <AccordionTrigger
                    onClick={() => {
                      setActiveTabId(tab.id);
                    }}
                    className="cursor-pointer py-5 no-underline! transition"
                  >
                    <h6
                      className={`text-xl font-semibold ${
                        tab.id === activeTabId
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="mt-3 text-muted-foreground">
                      {tab.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* right section */}
        <div className="md:w-[20%] mt-16 md:sticky top-24 h-fit">
          <div className="">
            <div className="border border-zinc-200 rounded-sm p-2">
              <div className=" text-center font-semibold">
                <p className="text-xs opacity-50 uppercase">cost</p>
                <p className="text-primary text-2xl">
                  NRs. {packageItem.cost}/
                  <span className="text-black text-xs opacity-50">
                    per person
                  </span>
                </p>
              </div>

              <hr className="h-px my-2 text-zinc-300" />

              <div className="flex flex-col gap-3">
                <Link
                  href="#"
                  className="rounded-lg px-5 py-2 text-center bg-(--color-primary) text-white cursor-pointer"
                >
                  Book Now
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg px-5 py-2 text-center border border-zinc-200 cursor-pointer"
                >
                  Enquire Now
                </Link>
              </div>
            </div>

            <div className="mt-8 border border-zinc-200 rounded-sm p-2 flex gap-2 items-center justify-center md:justify-start">
              <div className="">
                <img
                  src="/images/team/Biru-Bomjan.jpg"
                  alt="Biru Bomjan"
                  className="size-16 rounded-full ring ring-zinc-200 ring-offset-1"
                />
              </div>
              <div className="">
                <p className="flex flex-col">
                  <span>Biru</span> <span>Bomjan</span>
                </p>
                <div className="flex w-full justify-between gap-4 mt-2">
                  <Link href="https://www.facebook.com/sunriseparaglidingpokhara#">
                    <Icon icon="logos:facebook" className="size-6" />
                  </Link>

                  <Link href="https://www.instagram.com/sunriseparaglidingnepal/">
                    <Icon icon="skill-icons:instagram" className="size-6" />
                  </Link>

                  <Link href="#">
                    {" "}
                    <Icon icon="logos:whatsapp-icon" className="size-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsClient;
