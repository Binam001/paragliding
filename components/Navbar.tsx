"use client";

import { navLists } from "@/constants";
import { Menu03Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { li } from "framer-motion/client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      id="navbarSection"
      className="fixed top-0 left-0 w-full py-4 px-16 flex justify-center rounded-full z-100"
    >
      <div className="flex gap-4 items-center bg-(--color-primary) w-max px-4">
        <div>
          <Link href="/">
            <img src="/images/logo.png" alt="logo" className="w-24" />
          </Link>
        </div>
        {/* <div>
        <button onClick={() => setOpen(!open)}>
          <HugeiconsIcon icon={Menu03Icon} />
        </button>
      </div> */}
        {/* {open && (
        <div className="bg-red-500 absolute top-15 left-0 w-full"> */}
        <ul className="flex justify-between gap-4">
          {navLists.map((navItems) => (
            <li key={navItems.id}>
              <Link href={navItems.href} className="uppercase text-white">
                {navItems.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* </div>
      )} */}
      </div>
    </nav>
  );
};

export default Navbar;
