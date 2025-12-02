"use client";

import { socialLinkLists } from "@/constants";
import { CircleArrowUp } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  // const [hoveredId, setHoveredId] = useState<number | null>(null);
  return (
    <div className="py-4 mt-16">
      {/* <div className="flex justify-end pr-4 md:pr-8 lg:pr-16">
        <Link href="#navbarSection">
          <CircleArrowUp className="text-(--color-secondary) size-8" />
        </Link>
      </div> */}
      <div className="flex flex-col justify-between items-center gap-4 px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center w-full">
          <img src="/images/logo.png" alt="logo" className="w-24" />
          <Link href="#navbarSection">
            <CircleArrowUp className="text-(--color-secondary) size-6" />
          </Link>
        </div>

        <hr className="h-2px text-(--color-secondary) w-full" />
        <div className="flex items-center justify-between w-full">
          <div className="">Copyright © 2025 Sunrise Paragliding</div>
          <div className="flex gap-4">
            {socialLinkLists.map((socialLinkItem) => (
              <div key={socialLinkItem.id} className="">
                <Link key={socialLinkItem.id} href={socialLinkItem.link}>
                  <img
                    src={socialLinkItem.fillIcon}
                    alt={socialLinkItem.title}
                    className="size-4 hover:scale-[1.3] transition-all"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
