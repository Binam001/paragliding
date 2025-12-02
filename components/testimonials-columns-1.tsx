// "use client";

import React from "react";
import { motion } from "motion/react";
import { testimonialLists } from "@/constants";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map((testimonial) => (
                <div
                  className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                  key={testimonial.id}
                >
                  <div className="line-clamp-4">{testimonial.content}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">
                        {testimonial.name}
                      </div>
                      <div className="leading-5 opacity-60 tracking-tight">
                        {testimonial.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
