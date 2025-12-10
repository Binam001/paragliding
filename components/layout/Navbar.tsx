"use client";

import { navLists } from "@/constants";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      id="navbarSection"
      className={`fixed top-0 left-0 w-full flex justify-center py-2 px-4 md:px-8 lg:px-16 z-70 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between py-2 whitespace-nowrap">
        <div
          id="logo-container"
          className="w-24 flex justify-center items-center"
        >
          <Link href="/">
            <img
              // src={"/images/light-logo.svg"}
              src={`${
                pathname === "/"
                  ? "/images/light-logo.svg"
                  : scrolled
                  ? "/images/light-logo.svg"
                  : "/images/logo.png"
              }`}
              alt="logo"
              className={`object-contain transition-all duration-500 ease-in-out ${
                scrolled ? "w-16" : "w-24"
              }`}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex justify-between items-center">
          {navLists.map((navItems) => (
            <li key={navItems.id}>
              <Link
                href={navItems.href}
                className={`text-sm font-medium px-6 py-2 flex gap-1 items-center rounded-full transition-colors duration-300 hover:text-[#f7901e] ${
                  pathname === navItems.href
                    ? "text-white hover:text-white bg-[#f7901e]"
                    : ""
                }
                ${
                  pathname === "/"
                    ? "text-black"
                    : scrolled
                    ? "text-black"
                    : "text-white"
                }
                `}
              >
                {navItems.name}
                <Icon
                  icon="mynaui:arrow-up-right"
                  className={`size-3 ${
                    pathname === navItems.href ? "hidden" : ""
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
