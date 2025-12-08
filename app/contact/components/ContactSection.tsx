"use client";

import { socialLinkLists } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { SingleValue } from "react-select";
import Select from "@/components/ReactSelectNoSSR";
import { Datepicker } from "flowbite-react";

type OptionType = { value: string; label: string };

const packageOptions = [
  { value: "Cloud Buster", label: "Cloud Buster" },
  { value: "Cross Country", label: "Cross Country" },
  { value: "Hike & Fly", label: "Hike & Fly" },
  { value: "Other", label: "Other" },
];

const ContactSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // State for the floating label on the "No. of people" Select component
  const [isPackageFocused, setIsPackageFocused] = useState(false);
  const [packageValue, setPackageValue] =
    useState<SingleValue<OptionType>>(null);
  const [isPeopleFocused, setIsPeopleFocused] = useState(false);
  const [peopleValue, setPeopleValue] = useState<SingleValue<OptionType>>(null);
  return (
    <div className="h-full px-4 md:px-8 lg:px-16">
      <div className="w-full flex items-center">
        <div className="w-2/3">
          <p className="text-6xl font-bold mb-8">
            Make a <span className="text-(--color-primary)">Booking</span>
          </p>
          <div className="">
            <form action="" className="p-4 rounded-2xl space-y-4">
              <p className="text-2xl font-semibold border-b-2 border-(--color-primary) w-max">
                Inquiry
              </p>

              <div className="flex justify-between gap-2 w-full">
                <div className="relative w-full flex justify-center">
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 text-sm text-gray-900 bg-transparent rounded-lg border border-(--color-primary) appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                  >
                    Name<span className="text-red-500">*</span>
                  </label>
                </div>

                <div className="relative w-full flex flex-col justify-center">
                  <input
                    type="text"
                    id="phone"
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-(--color-accent) appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                  >
                    Phone<span className="text-red-500 text-lg">*</span>
                  </label>
                </div>
              </div>

              <div className="relative w-full flex flex-col justify-center">
                <input
                  type="email"
                  id="email"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-(--color-accent) appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-left bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                >
                  Email
                </label>
              </div>

              <div className="flex justify-between gap-2 w-full">
                <div className="relative w-full flex flex-col justify-center">
                  <Select<{ value: string; label: string }>
                    id="package"
                    placeholder=" " // The space is important for styling
                    onFocus={() => setIsPackageFocused(true)}
                    onBlur={() => setIsPackageFocused(false)}
                    onChange={(
                      value: SingleValue<{ value: string; label: string }>
                    ) => setPackageValue(value)}
                    classNamePrefix="react-select" // Used for more specific styling if needed
                    options={packageOptions}
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        // 1. Remove the box-shadow (blue glow) when focused
                        boxShadow: state.isFocused
                          ? "none"
                          : provided.boxShadow,

                        // 2. Set the border color
                        borderColor: state.isFocused
                          ? "var(--color-blue-600)" // Match focus color of other inputs
                          : "var(--color-accent)",

                        // Optional: Ensure the border radius and padding match your other inputs
                        borderRadius: "0.5rem",
                        minHeight: "40px", // Adjusted height for floating label
                        backgroundColor: "transparent",

                        // Match hover behavior
                        "&:hover": {
                          borderColor: state.isFocused
                            ? "var(--color-accent)"
                            : provided.borderColor,
                        },
                      }),
                      // Optional: hide the separator line between the value and the arrow
                      // indicatorSeparator: () => ({ display: "none" }),

                      option: (provided, state) => ({
                        ...provided,
                        borderRadius: "4px",
                        // 1. Unified Background Color Logic
                        backgroundColor: state.isSelected
                          ? "#b4b4fd" // Active/Selected Color
                          : state.isFocused
                          ? "#E6E6FF" // Hover/Focus Color
                          : provided.backgroundColor, // Default/Unfocused/Unselected color (usually transparent)

                        // 2. Unified Text Color Logic
                        color: state.isSelected
                          ? "#FFFFFF" // Text color when Active/Selected
                          : "#333", // Default text color (for all other states)

                        // 3. Define the Hover pseudo-selector only if needed for specific overrides
                        "&:hover": {
                          // You generally don't need to define backgroundColor here if you handled
                          // the state.isFocused logic above, but you can if you have an exception:
                          // backgroundColor: state.isSelected ? '#5D5DFF' : '#E6E6FF',

                          // Use the hover pseudo-selector to ensure cursor is correct
                          cursor: "pointer",
                        },

                        // Optional: Padding and general appearance
                        padding: "10px 12px",
                      }),

                      menu: (provided) => ({
                        ...provided,
                        // Match the border radius of your input field
                        borderRadius: "0.5rem",
                        // Optional: Add a subtle shadow
                        // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        // Remove default border if any
                        border: "1px solid var(--color-accent)",
                        padding: "0 4px",
                      }),
                    }}
                  />
                  <label
                    htmlFor="package"
                    className={`absolute text-sm text-gray-500 duration-300 transform origin-left bg-white px-2 start-2.5 z-10
                    ${
                      isPackageFocused || packageValue
                        ? "top-2 scale-75 -translate-y-5 text-blue-600"
                        : "top-1/2 scale-100 -translate-y-1/2"
                    }
                  `}
                  >
                    Package<span className="text-red-500 text-lg">*</span>
                  </label>
                </div>
              </div>

              <div className="relative w-full flex flex-col justify-center">
                <textarea
                  id="message"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-(--color-accent) appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 origin-left bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1"
                >
                  Message
                </label>
              </div>

              <div className="">
                <button className="rounded-lg px-5 py-2 bg-(--color-primary) text-white cursor-pointer">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/3 h-full space-y-4">
          <div className="bg-(--color-primary) p-2 rounded-2xl space-y-2">
            <div className="bg-white rounded-xl flex flex-col items-center justify-center py-4 font-medium">
              <p>Get in touch with us!</p>
              <p>Lets talk!</p>
            </div>

            <div className="p-2">
              <div className="flex gap-2 items-center">
                <img
                  src="/images/social/phone.svg"
                  alt="contact icon"
                  className="size-8 p-1.5 bg-white rounded-full"
                />
                <span className="text-sm">
                  +977 61 453174, +977 98171 98617
                </span>
              </div>

              <div className="mt-4">
                <div className="flex flex-col gap-4">
                  {socialLinkLists.map((socialItem) => (
                    <Link
                      key={socialItem.id}
                      href={socialItem.link}
                      onMouseEnter={() => setHoveredId(socialItem.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className="flex items-center gap-2 w-max"
                    >
                      <img
                        src={
                          hoveredId === socialItem.id
                            ? socialItem.fillIcon
                            : socialItem.icon
                        }
                        alt={socialItem.title}
                        className="size-8 p-1.5 bg-white rounded-full duration-200 transition-all"
                      />
                      <span className="text-sm">{socialItem.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex-1 relative min-h-[500px] mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.0135214614056!2d83.95600477427296!3d28.206901775899837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995951e3d520047%3A0x8731ef408affb9c0!2sSunrise%20Paragliding!5e0!3m2!1sen!2snp!4v1764331279344!5m2!1sen!2snp"
          // width={400}
          // height={300}
          className="w-full h-full rounded-2xl absolute inset-0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactSection;
