"use client";

import { socialLinkLists } from "@/constants";
import { Icon } from "@iconify/react";
import { CircleArrowUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="py-4 mt-16 relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#9898983a_1px,transparent_1px),linear-gradient(to_bottom,#9898983a_1px,transparent_1px)] bg-size-[14px_24px]" />
      <div className="flex flex-col justify-between items-center gap-4 px-4 md:px-8 lg:px-16">
        <div className="flex justify-center items-center w-full">
          <img src="/images/logo.png" alt="logo" className="w-1/6" />
          {/* <Link href="#navbarSection">
            <CircleArrowUp className="text-(--color-secondary) size-6" />
          </Link> */}
        </div>

        <div className="flex gap-4">
          {socialLinkLists.map((socialLinkItem) => (
            <div key={socialLinkItem.id} className="">
              <Link
                key={socialLinkItem.id}
                href={socialLinkItem.link}
                className="group flex items-center gap-2 border border-transparent hover:border-black px-3 py-1 rounded-full duration-500 transition-all"
              >
                <img
                  src={socialLinkItem.fillIcon}
                  alt={socialLinkItem.title}
                  className="size-4 group-hover:size-5"
                />
                <div className="max-w-0 group-hover:max-w-40 transition-all duration-500 overflow-hidden">
                  <span className="whitespace-nowrap pl-1">
                    {socialLinkItem.username}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <hr className="h-2px text-(--color-secondary) w-full" />
        <div className="flex items-center justify-between w-full text-gray-500">
          <div className="text-xs">Copyright © 2025 Sunrise Paragliding</div>

          <Link href="#navbarSection">
            <Icon icon="ei:arrow-up" className="size-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
