"use client";

import { packageLists, socialLinkLists } from "@/constants";
import { Icon } from "@iconify/react";
import { CircleArrowUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-4 mt-8 md:mt-16 relative h-[50vh]">
      <div className="h-full flex items-end">
        {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#9898983a_1px,transparent_1px),linear-gradient(to_bottom,#9898983a_1px,transparent_1px)] bg-size-[14px_24px]" /> */}

        <div className="h-full flex flex-col justify-between gap-4 px-4 md:px-8 lg:px-16">
          <div className="w-full flex justify-between">
            <div className="w-1/3 space-y-2">
              <div className="flex w-full">
                <img src="/images/logo.png" alt="logo" className="w-24" />
              </div>
              <p className="text-xs text-(--color-muted) w-[80%]">
                Sunrise Paragliding is a family run company and has been
                offering tandem flights in the Annapurna region of Nepal since
                1996. As the most experienced paragliding company in Nepal, we
                are unrivaled in our knowledge of paragliding conditions, sites
                and local cultures.
              </p>
            </div>
            <div className="w-1/3 space-y-2">
              <div className="flex flex-col items-center">
                <div className="text-xl font-semibold">Tandam Flights</div>
                <div className="flex flex-col gap-2">
                  {packageLists.map((packageItem) => (
                    <Link
                      href={`/services`}
                      // href={`#${packageItem.href}`}
                      key={packageItem.id}
                      className="text-sm"
                    >
                      {packageItem.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-1/3 space-y-2">
              <div className="flex flex-col items-end gap-2">
                <div className="text-xl font-semibold">Contact Us</div>
                <div className="flex gap-4">
                  {socialLinkLists.map((socialLinkItem) => (
                    <div key={socialLinkItem.id} className="">
                      <Link
                        key={socialLinkItem.id}
                        href={socialLinkItem.link}
                        className="group flex items-center"
                      >
                        <img
                          src={socialLinkItem.fillIcon}
                          alt={socialLinkItem.title}
                          className="size-4"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-(--color-muted)">
                  Baidam Rd, Pokhara
                </div>
                <div className="text-sm text-(--color-muted)">
                  +977 61 453174, +977 98171 98617
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-2 flex-col items-center justify-between w-full text-gray-500">
            <hr className="h-2px text-(--color-secondary) w-full" />
            <div className="flex justify-between w-full">
              <div className="text-xs">
                Copyright © 2025 Sunrise Paragliding
              </div>

              <Link href="#navbarSection">
                <Icon icon="ei:arrow-up" className="size-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
