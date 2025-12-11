"use client";

import { packageLists } from "@/constants";
import React, { useState } from "react";
import BookingModal from "./BookingModal";
import Link from "next/link";
import { Icon } from "@iconify/react";

type PackageItem = (typeof packageLists)[0];

const Package = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(
    null
  );

  const openModal = (packageItem: PackageItem) => {
    setSelectedPackage(packageItem);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 mt-16">
      <div className="text-center space-y-2">
        <p className="text-4xl font-bold">Tandem Flights</p>
        <p className="mb-4">The ultimate flying adventure</p>
        <p>
          Tandem flight involves flying along with an instructor as a passenger.
          Both the pilot and passenger have separate harnesses, which feels like
          an armchair. Once after take off the passenger sits back and enjoys
          the magic of being airborne. Nothing can beat the thrill of flying
          alongside eagles and vultures to guide us all the while enjoying
          stunning views of the Annapurna range, pristine lakes and verdant
          valleys like nowhere else on earth.
        </p>
      </div>

      <div className="mt-8 md:mt-16 space-y-4">
        {packageLists.map((packageItem) => (
          <div
            key={packageItem.id}
            className={`flex gap-8 ${
              packageItem.id % 2 === 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="w-1/2">
              <img
                src={packageItem.image}
                alt={packageItem.title}
                className="object-cover"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-center">
              <div className="space-y-2">
                <p className="text-xl text-primary font-semibold">
                  {packageItem.title}
                </p>

                <p className="text-zinc-600">{packageItem.desc}</p>
                <div className="space-y-2">
                  {packageItem.time && (
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold">Time:</span>
                      {packageItem.time.map((t) => (
                        <span
                          key={t}
                          className="flex items-center gap-1 px-3 py-1 rounded-full text-sm"
                        >
                          <Icon
                            icon="ion:time-outline"
                            className="size-5 text-primary"
                          />
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  {packageItem.time && (
                    <p className="flex items-center gap-2 ">
                      <span className="font-bold">Duration:</span>{" "}
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm w-max">
                        <Icon
                          icon="game-icons:duration"
                          className="size-5 text-primary"
                        />
                        {packageItem.duration}min
                      </span>
                    </p>
                  )}
                  <p className="flex items-center gap-2 ">
                    <span className="font-bold">Price:</span>{" "}
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full text-sm w-max">
                      <Icon
                        icon="ph:money-wavy-light"
                        className="size-6 text-primary"
                      />
                      NPR. {packageItem.cost}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <Link
                  href={
                    packageItem.slug ? `/services/${packageItem.slug}` : "#"
                  }
                >
                  <button className="w-fit px-6 py-2 rounded-full bg-(--color-primary) hover:bg-primary/80 duration-300 transition-colors text-white cursor-pointer">
                    View Details
                  </button>
                </Link>
                <button
                  onClick={() => openModal(packageItem)}
                  className="w-fit border rounded-full px-6 py-2 cursor-pointer duration-300 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedPackage && (
        <BookingModal packageItem={selectedPackage} onClose={closeModal} />
      )}
    </div>
  );
};

export default Package;
