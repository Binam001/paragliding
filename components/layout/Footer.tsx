"use client";

import { navLists, packageLists, socialLinkLists } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Footer = () => {
  return (
    <div
      className="pt-20 pb-4 px-4 md:px-8 lg:px-16 mt-8 md:mt-16 relative h-[70vh] text-white"
      style={{
        clipPath:
          "polygon(67% 3%, 74% 0, 79% 4%, 100% 0, 100% 100%, 0 100%, 0 4%, 14% 0, 26% 3%, 43% 0)",
      }}
    >
      <div className="absolute inset-0 w-full h-full -z-10">
        <video
          src="/videos/SUNRISE-PARAGLIDING-NEPAL.mp4"
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        />
      </div>
      <div className="absolute inset-0 w-full h-full bg-black/50 -z-10" />

      <div className="w-full flex flex-col justify-between h-full z-50">
        <div className="flex items-center">
          <div className="w-1/2 h-full flex flex-col justify-between">
            <p className="text-4xl text-(--color-primary)">
              Join us for an adventure
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-1 border-b-2 placeholder:text-white focus:border-b focus:outline-none w-full md:w-1/2"
              />
              <button className="cursor-pointer">
                <Icon
                  icon="tabler:send"
                  className="size-10 bg-white rounded-full p-2 text-black"
                />
              </button>
            </div>
          </div>

          <div className="w-1/2 flex justify-evenly">
            <div className="">
              <p className="text-xl font-medium border-b-2 mb-2 text-(--color-primary)">
                Tandem Flights
              </p>
              <div className="flex flex-col gap-2">
                {packageLists.map((packageItem) => (
                  // <Link key={packageItem.id} href={packageItem}>
                  <Link
                    key={packageItem.id}
                    href={`/services/${packageItem.slug}`}
                    className="hover:text-(--color-primary)"
                  >
                    {packageItem.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="">
              <p className="text-xl font-medium border-b-2 mb-2 w-max text-(--color-primary)">
                Links
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {navLists.map((navItem) => (
                  <Link
                    key={navItem.id}
                    href={navItem.href}
                    className="hover:text-(--color-primary)"
                  >
                    {navItem.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex gap-2">
            {socialLinkLists.map((socialLink) => (
              <Link key={socialLink.id} href={socialLink.link}>
                <img
                  src={socialLink.icon}
                  alt={socialLink.title}
                  className="size-8 bg-white rounded-full p-1.5"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="">
            <p>General Inquiry</p>
            <Link
              href="mailto:info@sunrise-paragliding.com"
              className="hover:underline"
            >
              info@sunrise-paragliding.com
            </Link>
          </div>
          <div className="text-right">
            <div className="">© 2025 Sunrise Paragliding</div>
            <Link href="">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
