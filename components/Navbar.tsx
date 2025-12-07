"use client";

import { navLists } from "@/constants";
import { useEffect, useState } from "react";
import Link from "next/link";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

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

  // useGSAP(() => {
  //   // Animate logo from center to top-left
  //   gsap.from("#logo-container", {
  //     position: "fixed",
  //     top: "50%",
  //     left: "50%",
  //     xPercent: -50,
  //     yPercent: -50,
  //     scale: 4, // Optional: make it start larger
  //     scrollTrigger: {
  //       trigger: document.body,
  //       start: "top top",
  //       end: "+=300", // Animate over the first 300px of scroll
  //       scrub: 1.5,
  //     },
  //   });
  // }, []);

  return (
    <nav
      id="navbarSection"
      className={`fixed top-0 left-0 w-full flex justify-center py-2 px-4 md:px-8 lg:px-16 z-100 transition-all duration-300 
       
      `}
    >
      <div
        className={`w-full flex items-center justify-between py-2 whitespace-nowrap
        `}
      >
        {/* Logo */}
        <div id="logo-container">
          <Link href="/" className="">
            <img
              src={scrolled ? "/images/light-logo.svg" : "/images/logo.png"}
              // src="/images/logo.png"
              alt="logo"
              className={`w-24 object-contain transition-all duration-300`}
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex justify-between gap-8 items-center">
          {navLists.map((navItems) => {
            return (
              <li key={navItems.id}>
                <Link
                  href={navItems.href}
                  className={`text-sm font-medium transition-colors duration-300`}
                  // className={`text-sm font-medium transition-colors duration-300 ${
                  //   scrolled ? "text-black" : "text-white"
                  // }`}
                >
                  {navItems.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
