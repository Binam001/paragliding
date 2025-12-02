"use client";

import { socialLinkLists } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
// import Select from "react-select";
import Select from "@/components/ReactSelectNoSSR";
import { Datepicker } from "flowbite-react";

const packageOptions = [
  { value: "Cloud Buster", label: "Cloud Buster" },
  { value: "Cross Country", label: "Cross Country" },
  { value: "Hike & Fly", label: "Hike & Fly" },
];
const noOfPeopleOptions = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10+", label: "10+" },
];

const ContactSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return (
    <div className="h-full px-4 md:px-8 lg:px-16">
      <p className="text-center text-6xl font-bold mb-8">Get in touch</p>
      <div className="w-full h-full flex gap-4">
        <div className="w-2/3">
          <form
            action=""
            className="p-4 rounded-2xl border border-(--color-accent) space-y-4"
          >
            <p className="text-center text-2xl font-semibold">Booking Form</p>

            <div className="flex justify-between gap-2 w-full">
              <div className="flex flex-col w-full">
                <label htmlFor="name">
                  Name<span className="text-red-500 text-lg">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="p-2 rounded-lg border border-(--color-accent)"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="contact">
                  Contact<span className="text-red-500 text-lg">*</span>
                </label>
                <input
                  type="text"
                  id="contact"
                  className="p-2 rounded-lg border border-(--color-accent)"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="p-2 rounded-lg border border-(--color-accent)"
              />
            </div>

            <div className="flex justify-between gap-2 w-full">
              <div className="flex flex-col w-full">
                <label htmlFor="package">
                  Package<span className="text-red-500 text-lg">*</span>
                </label>
                <Select
                  id="package"
                  options={packageOptions}
                  styles={{
                    control: (provided, state) => ({
                      ...provided,
                      // 1. Remove the box-shadow (blue glow) when focused
                      boxShadow: state.isFocused ? "none" : provided.boxShadow,

                      // 2. Set the border color when focused (e.g., to match your accent border)
                      borderColor: state.isFocused
                        ? "var(--color-accent)"
                        : provided.borderColor,

                      // Optional: Ensure the border radius and padding match your other inputs
                      borderRadius: "0.5rem",
                      minHeight: "42px",
                      padding: "0 8px",

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
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="people">No. of people</label>
                <Select
                  id="people"
                  options={noOfPeopleOptions}
                  styles={{
                    control: (provided, state) => ({
                      ...provided,
                      // 1. Remove the box-shadow (blue glow) when focused
                      boxShadow: state.isFocused ? "none" : provided.boxShadow,

                      // 2. Set the border color when focused (e.g., to match your accent border)
                      borderColor: state.isFocused
                        ? "var(--color-accent)"
                        : provided.borderColor,

                      // Optional: Ensure the border radius and padding match your other inputs
                      borderRadius: "0.5rem",
                      minHeight: "42px",
                      padding: "0 8px",

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
              </div>
            </div>

            <div className="light">
              <label htmlFor="date">
                Select Date<span className="text-red-500 text-lg">*</span>
              </label>
              <Datepicker id="date" />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                className="p-2 rounded-lg border border-(--color-accent)"
              />
            </div>

            <div className="">
              <button className="rounded-lg px-5 py-2 bg-(--color-accent) cursor-pointer">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/3 h-full space-y-4">
          <div className="bg-(--color-accent) p-4 rounded-2xl space-y-4">
            <div className="">
              <div className="font-semibold text-lg">Address</div>
              <p className="text-(--color-muted)">Baidam Rd, Pokhara</p>
            </div>

            <div className="">
              <div className="mt-4 font-semibold text-lg">Contact</div>
              <div className="flex gap-2 items-center">
                <img
                  src="/images/social/phone.svg"
                  alt="contact icon"
                  className="size-4"
                />
                <span className="text-(--color-muted)">
                  +977 61 453174, +977 98171 98617
                </span>
              </div>
            </div>

            <div className="">
              <div className="mb-2 font-semibold text-lg">Stay Connected</div>
              <div className="flex gap-8">
                {socialLinkLists.map((socialItem) => (
                  <Link
                    key={socialItem.id}
                    href={socialItem.link}
                    onMouseEnter={() => setHoveredId(socialItem.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <img
                      src={
                        hoveredId === socialItem.id
                          ? socialItem.fillIcon
                          : socialItem.icon
                      }
                      alt={socialItem.title}
                      className="size-6 hover:scale-[1.3] transition-all"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="h-full flex-1 relative min-h-[300px]">
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
      </div>
    </div>
  );
};

export default ContactSection;
