import Image from "next/image";
import { redirect } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
// import { useEffect } from "react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);
  redirect("/home");
}
