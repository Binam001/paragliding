import React from "react";

const VideoSection = () => {
  return (
    <div
      className=""
      style={{
        clipPath:
          "polygon(0 4%, 14% 0, 26% 3%, 43% 0, 67% 3%, 74% 0, 79% 4%, 100% 0, 100% 96%, 86% 100%, 74% 97%, 57% 100%, 33% 97%, 26% 100%, 21% 96%, 0 100%)",
      }}
    >
      <video
        className="w-full h-[90vh] object-cover"
        src="/videos/video2.mp4"
        muted
        autoPlay
        loop
        playsInline
        // poster="/images/home/image1.jpg"
      />
    </div>
  );
};

export default VideoSection;
