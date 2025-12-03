"use client";

import { navLists } from "@/constants";
import { motion } from "framer-motion"; // Corrected import
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Using 50px gives a bit more breathing room before the animation triggers
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbarSection"
      // Added pointer-events-none to outer nav so clicks pass through on the sides when centered
      className="fixed top-0 left-0 w-full flex justify-center py-4 px-4 z-100 pointer-events-none"
    >
      <motion.div
        layout // This is the magic prop that makes width animate smoothly
        transition={{ type: "tween", stiffness: 300, damping: 30 }}
        initial={{ width: "100%", y: 0 }}
        animate={{
          width: scrolled ? "fit-content" : "100%", // Smoothly shrinks width
          // borderRadius: scrolled ? "9999px" : "12px", // Morphs corners
          y: scrolled ? 10 : 0, // Adds a slight float effect when scrolled
          // padding: scrolled ? "0.75rem 2rem" : "1rem 3rem", // Shrinks padding slightly
        }}
        className={`
          pointer-events-auto flex items-center justify-between gap-12 py-2 px-8 
          border border-(--color-primary)/20 rounded-full
          bg-white/10 backdrop-blur-md shadow-lg
          whitespace-nowrap overflow-hidden
        `}
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-24 object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <motion.ul
          layout="position"
          className="flex justify-between gap-8 items-center"
        >
          {navLists.map((navItems) => {
            const isActive = pathname === navItems.href;
            return (
              <li key={navItems.id}>
                <Link
                  href={navItems.href}
                  className={`uppercase text-sm font-medium tracking-wide hover:text-blue-500 transition-colors ${
                    isActive ? "text-blue-500" : ""
                  }`}
                >
                  {navItems.name}
                </Link>
              </li>
            );
          })}
        </motion.ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
