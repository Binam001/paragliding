"use client";

import React from "react";
import { Testimonial, TestimonialCarousel } from "@/components/ui/testimonial";
import { Play } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { testimonialLists } from "@/constants";

const TestimonialsSections = () => {
  const testimonialData: Testimonial[] = testimonialLists.map((t) => ({
    id: t.id,
    name: t.name,
    description: t.content,
    // Generating a placeholder avatar from the name
    avatar: `https://api.dicebear.com/8.x/initials/svg?seed=${t.name}`,
  }));

  return (
    <section className=" h-full mt-8 md:mt-16">
      <div className="grid grid-cols-2 lg:grid-cols-8 gap-1 md:gap-2 px-4 md:px-8 lg:px-16 py-8 pt-8">
        {[
          "/images/blog/blog10.jpg",
          "/images/home/image2.jpg",
          "/images/about/machapuchre_mountain.jpg",
          "/images/blog/blog2.jpg",
          "/images/blog/blog6.webp",
          "/images/blog/blog7.webp",
          "/images/blog/blog11.jpg",
          "/images/blog/blog14.jpg",
          "/images/blog/blog15.jpg",
          "/images/blog/blog3.jpg",
          "/images/blog/blog4.avif",
          "/images/blog/blog12.jpg",
        ].map((src, index) => (
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "easeInOut",
            }}
            key={index}
            className={`col-span-1 rounded-xl w-full h-[180px] relative ${
              index % 2 == 0 ? " lg:translate-y-14" : ""
            }
          ${index > 1 && index < 6 ? "md:row-span-2" : ""}
          `}
          >
            <img
              src={src}
              alt={`Testimonial ${index + 1}`}
              className="w-full h-full object-cover object-center rounded-xs"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex flex-col gap-6 justify-center lg:-translate-y-44 items-center">
        {/* <span className="bg-zinc-100 px-4 text-zinc-800 rounded-full">
          Testimonials
        </span> */}
        <h2 className="text-2xl md:text-4xl text-center font-semibold  sm:max-w-xl uppercase">
          <span className="bg-orange-500 text-white px-2">
            Globally Ranked,
          </span>{" "}
          Loved by Thousands of
          <span className="bg-orange-500 text-white px-2 ml-2">Flyers</span>
        </h2>
        <p className="w-[45%] text-center px-4 xl:px-0">
          Pokhara is recognized as one of the Top 5 Paragliding Destinations in
          the World. Our experienced pilots have safely flown thousands of
          passengers from every corner of the globe. We combine rigorous safety
          standards with the sheer thrill of soaring over Phewa Lake,
          guaranteeing an unmatched, world-class flying experience you will
          never forget.
        </p>
        {/* <Link
          href={
            "https://www.tripadvisor.com/Attraction_Review-g293890-d10100922-Reviews-Real_Himalaya_Private_Day_Tour-Kathmandu_Kathmandu_Valley_Bagmati_Zone_Central_R.html"
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex w-fit h-fit gap-2 items-center">
            <span className="bg-amber-600 flex justify-center items-center text-white size-10 md:size-12 rounded-full">
              <Play className="fill-white " />
            </span>
            <span className="text-left  leading-4 uppercase font-semibold">
              View <br /> More
            </span>
          </button>
        </Link> */}
      </div>
    </section>
  );
};
// export default TestimonialsSections;
export { TestimonialsSections, type Testimonial };
