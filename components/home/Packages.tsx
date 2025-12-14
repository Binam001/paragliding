import { articleLists, packageLists } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useState } from "react";
import BookingModal from "../services/BookingModal";

type PackageItem = (typeof packageLists)[0];

const Packages = () => {
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
    // <div className="w-screen flex justify-end relative py-4 md:py-8">
    <div className="w-full flex relative py-4 md:py-8 px-4 md:px-8 lg:px-16">
      <div className="w-full z-10">
        <div id="packageSection">
          <div className="">
            <div className="mb-12 w-full">
              <p className="text-3xl md:text-5xl font-[Poppins-Light] text-center">
                Explore our{" "}
                <span className="text-primary font-bold">
                  tandem flight packages
                </span>{" "}
                to witness the{" "}
                <span className="text-primary font-bold">
                  breathtaking beauty
                </span>{" "}
                of the Himalayas.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {packageLists.map((packageItem) => (
                <div
                  key={packageItem.id}
                  className={`flex flex-col gap-4 border border-zinc-200 p-2 rounded-md`}
                >
                  <div className="">
                    <img
                      src={packageItem.image}
                      alt={packageItem.title}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="space-y-2">
                      <p className="text-xl font-semibold">
                        {packageItem.title}
                      </p>

                      <p
                        className={`text-zinc-600 ${
                          packageItem.id === 3 ? "line-clamp-5" : "line-clamp-2"
                        }`}
                      >
                        {packageItem.desc}
                      </p>
                      <div className="space-y-2">
                        {packageItem.time && (
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold">Time:</span>
                            {packageItem.time.map((t) => (
                              <span
                                key={t}
                                className="flex items-center gap-1 text-sm"
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
                    <div className="flex justify-between gap-4 mt-4">
                      <button
                        onClick={() => openModal(packageItem)}
                        className="w-fit px-6 py-2 rounded-full bg-(--color-primary) hover:bg-primary/80 duration-300 transition-colors text-white text-sm cursor-pointer"
                      >
                        Book Now
                      </button>

                      <Link
                        href={
                          packageItem.slug
                            ? `/services/${packageItem.slug}`
                            : "#"
                        }
                      >
                        <button className="w-fit border rounded-full px-6 py-2 cursor-pointer duration-300 transition-colors text-sm">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && selectedPackage && (
        <BookingModal packageItem={selectedPackage} onClose={closeModal} />
      )}
    </div>
  );
};

export default Packages;
