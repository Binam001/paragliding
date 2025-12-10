import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#fbc68a] z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#f7901e] mb-6"></div>
      <h2 className="text-2xl font-bold text-[#f7901e]">Loading...</h2>
      <p className="text-gray-700 mt-2">
        Please wait while we prepare your experience.
      </p>
    </div>
  );
};

export default Loading;
