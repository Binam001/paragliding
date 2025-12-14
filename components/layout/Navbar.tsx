"use client";

import { navLists } from "@/constants";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        id="navbarSection"
        className={`fixed top-0 left-0 w-full flex justify-center py-2 px-4 md:px-8 lg:px-16 z-70 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="w-full flex items-center justify-between py-2 whitespace-nowrap relative">
          <div id="logo-container">
            <Link href="/">
              <img
                // src={"/images/light-logo.svg"}
                src={`${
                  scrolled ? "/images/light-logo.svg" : "/images/logo.png"
                }`}
                alt="logo"
                className={`object-contain transition-all duration-500 ease-in-out ${
                  scrolled ? "w-16" : "w-16 md:w-24"
                }`}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex justify-between items-center">
            {navLists.map((navItems) => (
              <li key={navItems.id}>
                <Link
                  href={navItems.href}
                  className={`text-sm font-medium px-6 py-2 flex gap-1 items-center rounded-full transition-colors duration-300 hover:text-[#f7901e] ${
                    pathname === navItems.href
                      ? "text-white hover:text-white bg-[#f7901e]"
                      : ""
                  }
                ${scrolled ? "text-black" : "text-white"}
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

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)}>
              <Icon
                icon="ci:menu-alt-02"
                className={`size-8 transition-colors duration-300 ${
                  scrolled || pathname !== "/" ? "text-black" : "text-white"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-100 flex flex-col items-center justify-center md:hidden">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6"
          >
            <Icon icon="ci:close-big" className="size-8 text-black" />
          </button>
          <ul className="flex flex-col items-center gap-8">
            {navLists.map((navItem) => (
              <li key={navItem.id} onClick={() => setIsMenuOpen(false)}>
                <Link
                  href={navItem.href}
                  className={`text-2xl font-medium transition-colors duration-300 ${
                    pathname === navItem.href ? "text-[#f7901e]" : "text-black"
                  }`}
                >
                  {navItem.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
