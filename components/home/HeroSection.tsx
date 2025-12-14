import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative w-screen h-screen flex items-center">
      <div
        id="video-container"
        className="w-screen h-screen absolute inset-0 z-0"
      >
        <img
          src="/images/mountains/hero-sunrise.jpg"
          alt="sunrise"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="z-50 relative pb-16 md:pb-0 flex flex-col justify-end md:justify-center gap-40 md:gap-12 h-full px-4 md:px-8 lg:px-16">
        <p className="text-white text-4xl md:text-6xl font-bold">
          Experience Pokhara
          <br /> Above the Sky
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link
            href="/services"
            className="w-full md:w-max h-fit flex gap-2 items-center text-white rounded-full px-5 py-3 bg-primary cursor-pointer hover:scale-[0.95] duration-300 transition-transform"
          >
            <Icon icon="solar:arrow-right-up-linear" />
            Explore More
          </Link>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full md:w-max flex gap-2 items-center text-white border rounded-full px-5 py-3 bg-white/10 backdrop-blur-2xl cursor-pointer hover:bg-white/20  hover:scale-[0.95] duration-300 transition-transform"
          >
            <Icon icon="mingcute:play-fill" />
            Watch experience
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-100"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-4 -right-4 text-white text-4xl hover:text-gray-300"
            >
              &times;
            </button>
            <video
              src="/videos/video1.mp4"
              className="w-full h-full"
              controls
              autoPlay
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
