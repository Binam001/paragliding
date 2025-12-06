"use client";

import { navLists } from "@/constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      id="navbarSection"
      // Added pointer-events-none to outer nav so clicks pass through on the sides when centered
      className="fixed top-0 left-0 w-full flex justify-center py-2 px-4 md:px-8 lg:px-16 z-100"
    >
      <div
        className={`w-full flex items-center justify-between py-2 whitespace-nowrap overflow-hidden
        `}
      >
        {/* Logo */}
        <div>
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-16 object-contain"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex justify-between gap-8 items-center">
          {navLists.map((navItems) => {
            return (
              <li key={navItems.id}>
                <Link href={navItems.href} className={`text-sm font-medium`}>
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
