"use client";

import React from "react";
import { Testimonial } from "@/components/ui/testimonial";
import { motion } from "motion/react";
import Testimonials from "./Testimonials";

const TestimonialSections = () => {
  return (
    <section className="h-full mt-8 md:mt-16">
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
              className="w-full h-full object-cover object-center rounded-md"
            />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center items-center lg:-translate-y-36">
        <p className="md:w-[45%] px-4 xl:px-0 text-xl md:text-3xl font-[Poppins-Light] text-center">
          Read the unfiltered{" "}
          <span className="text-[#f7901e] font-bold">
            reviews from thousands of flyers
          </span>{" "}
          who have trusted us to deliver the{" "}
          <span className="text-[#f7901e] font-bold">world-class thrill</span>{" "}
          of soaring over{" "}
          <span className="text-[#f7901e] font-bold">
            Pokhara and the Himalayas.
          </span>
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

      <div className="lg:-translate-y-24">
        <Testimonials />
      </div>
    </section>
  );
};
// export default TestimonialsSections;
export { TestimonialSections, type Testimonial };
