import { packageLists } from "@/constants";
import React from "react";

const Package = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 mt-16">
      <div className="text-center space-y-2">
        <p className="text-4xl font-bold">Tandem Flights</p>
        <p className="text-xl font-medium">The ultimate flying adventure</p>
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
        {/* {packageLists.map((packageItem) => (
          <div
            key={packageItem.id}
            id={packageItem.href}
            className={`flex gap-4 ${
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
            <div className="w-1/2 flex flex-col justify-between">
              <div className="space-y-2">
                <p className="text-xl font-semibold">{packageItem.title}</p>
                <div className="">
                  {packageItem.time && (
                    <p className="">Time: {packageItem.time}</p>
                  )}
                  {packageItem.time && (
                    <p className="">Duration: {packageItem.duration}min</p>
                  )}
                  <p>
                    NRs. {packageItem.cost}
                    {packageItem.optional &&
                      ` (+ ${packageItem.optional} for photos & videos)`}
                  </p>
                </div>
                <p className="">{packageItem.desc}</p>
              </div>
              <button className="w-full border rounded-md py-2 cursor-pointer">
                Book Now
              </button>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Package;
