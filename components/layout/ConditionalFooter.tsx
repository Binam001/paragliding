"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/layout/Footer";

const ConditionalFooter = () => {
  const pathname = usePathname();

  // Don't render the footer on the homepage
  if (pathname === "/") {
    return null;
  }

  return <Footer />;
};

export default ConditionalFooter;
