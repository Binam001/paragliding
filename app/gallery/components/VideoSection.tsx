import React from "react";

const VideoSection = () => {
  return (
    <div className="">
      <div className="text-4xl font-bold text-center mb-8">Video</div>
      <video
        src="/videos/SUNRISE-PARAGLIDING-NEPAL.mp4"
        loop
        autoPlay
        controls
      />
    </div>
  );
};

export default VideoSection;
