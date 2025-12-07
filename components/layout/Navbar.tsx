"use client";

import { navLists } from "@/constants";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      className="fixed top-0 left-0 w-full flex justify-center py-2 px-4 md:px-8 lg:px-16 z-50 transition-all duration-300 bg-white"
    >
      <div className="w-full flex items-center justify-between py-2 whitespace-nowrap">
        <div
          id="logo-container"
          className="w-24 flex justify-center items-center"
        >
          <Link href="/">
            <img
              src={"/images/light-logo.svg"}
              alt="logo"
              className={`object-contain transition-all duration-500 ease-in-out ${
                scrolled ? "w-16" : "w-24"
              }`}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex justify-between gap-8 items-center">
          {navLists.map((navItems) => (
            <li key={navItems.id}>
              <Link
                href={navItems.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[#991b1b] ${
                  pathname === navItems.href
                    ? "text-[#991b1b] border-b-2 border-[#991b1b]"
                    : "text-[#ef4444]"
                }`}
              >
                {navItems.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
