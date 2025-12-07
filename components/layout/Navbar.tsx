"use client";

import { navLists } from "@/constants";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
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
      className="fixed top-0 left-0 w-full flex justify-center py-2 px-4 md:px-8 lg:px-16 z-50 transition-all duration-300 bg-white/80 backdrop-blur-sm"
    >
      <div className="w-full flex items-center justify-between py-2 whitespace-nowrap">
        {/* Logo */}
        <div id="logo-container">
          <Link href="/">
            <img
              src={scrolled ? "/images/light-logo.svg" : "/images/logo.png"}
              alt="logo"
              className="w-24 object-contain transition-all duration-300"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex justify-between gap-8 items-center">
          {navLists.map((navItems) => (
            <li key={navItems.id}>
              <Link
                href={navItems.href}
                className="text-sm font-medium transition-colors duration-300 text-black hover:text-blue-600"
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
