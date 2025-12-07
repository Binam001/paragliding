import { articleLists, packageLists } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React from "react";

const Packages = () => {
  return (
    // <div className="w-screen flex justify-end relative py-4 md:py-8">
    <div className="w-full flex relative py-4 md:py-8 px-4 md:px-8 lg:px-16 md:mt-8">
      <div className="w-full z-10">
        <div id="packageSection">
          <div className="">
            <h2 className="text-4xl font-bold text-center mb-12">
              Tandem Flights
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {packageLists.map((packageItem) => (
                <Link
                  href="/services"
                  key={packageItem.id}
                  className={`group h-96 cursor-pointer relative overflow-hidden rounded-lg`}
                >
                  <div className="absolute inset-0 w-full h-full bg-linear-to-b from-black/70 via-transparent to-black/70 group-hover:bg-black/30 duration-300 transition-colors z-10" />
                  <div className="absolute right-3 top-3 z-10">
                    <Icon
                      icon="solar:arrow-right-up-outline"
                      className="size-8 text-black group-hover:size-9 transition-all duration-300 ease-in-out bg-gray-300 rounded-full p-1"
                    />
                  </div>
                  <img
                    src={packageItem.image}
                    alt={packageItem.title}
                    className="gallery-article w-full h-full object-cover group-hover:scale-[1.1] transition-transform duration-500 ease-in-out z-0"
                  />
                  <div className="absolute top-4 left-4 flex items-end text-white text-lg font-medium z-10">
                    NRs. {packageItem.cost}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-end text-white text-lg font-medium z-10">
                    {packageItem.title}
                  </div>
                  {/* <div className="absolute bottom-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                      {packageItem.title}
                    </p>
                  </div> */}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="w-full flex justify-center gap-4">
          {packageLists.map((packageItem) => (
            <div
              key={packageItem.id}
              className="w-80 rounded-xl border p-2 space-y-8 bg-white"
            >
              <div className="relative">
                <img
                  src={packageItem.image}
                  alt={packageItem.title}
                  className="rounded-lg"
                />
                <div className="w-max absolute -bottom-4 left-1/2 -translate-x-1/2 bg-(--color-accent) rounded-full flex items-center justify-center gap-1 py-1 px-3">
                  <p>NRs. {packageItem.cost}</p>
                  {packageItem.duration && (
                    <div className="flex items-center gap-1">
                      {" "}
                      <div>|</div> <Icon icon="mage:clock" />
                      <p>{packageItem.duration}min</p>{" "}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="">
                  <p className="text-2xl font-semibold">{packageItem.title}</p>
                  <p className="line-clamp-2">{packageItem.desc}</p>
                </div>

                <div className="flex w-full justify-between">
                  <Link
                    href="/services"
                    className="px-6 py-2 rounded-lg bg-(--color-secondary) flex items-center justify-between gap-2 w-fit cursor-pointer text-white"
                  >
                    View Details
                  </Link>
                  <Link
                    href="/services"
                    className="px-6 py-2 rounded-lg border flex items-center justify-between gap-2 w-fit cursor-pointer"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Packages;
