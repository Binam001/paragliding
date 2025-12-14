"use client";

import { packageLists } from "@/constants";
// import React, from "react";

type PackageItem = (typeof packageLists)[0];

interface BookingModalProps {
  packageItem: PackageItem;
  onClose: () => void;
}

const BookingModal = ({ packageItem, onClose }: BookingModalProps) => {
  // Prevent clicks inside the modal from closing it
  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
      onClick={onClose} // Close modal on overlay click
    >
      <div
        className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md"
        onClick={handleModalContentClick}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Book: {packageItem.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl"
          >
            &times;
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div>
            <label
              htmlFor="date"
              className="block text-sm font-medium text-gray-700"
            >
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            />
          </div>
          <div className="flex justify-end w-full">
            <button
              type="submit"
              className="w-full md:w-max px-4 py-2 bg-(--color-primary) text-white rounded-full hover:bg-opacity-90 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
