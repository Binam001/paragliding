import { FullScreenScrollFX } from "@/components/full-screen-scroll-fx";
import React from "react";

// What You’ll Experience
// Short points:
// Breathtaking views of Phewa Lake
// Clear panorama of Annapurna & Machhapuchhre
// Smooth takeoff from Sarangkot
// Peaceful gliding above Pokhara Valley
// Safe landing with a certified pilot
// 👉 This creates emotional connection before showing packages.

const sections = [
  {
    // leftLabel: "Silence",
    title: <></>,
    rightLabel: "Smooth takeoff from Sarangkot",
    background: "images/image1.jpg",
  },
  {
    // leftLabel: "Essence",
    title: <></>,
    rightLabel: "Clear panorama of Annapurna & Machhapuchhre",
    background:
      "https://images.pexels.com/photos/163790/at-night-under-a-lantern-guy-night-city-163790.jpeg",
    audioSrc: "/sfx/whoosh-02.mp3",
  },
  {
    // leftLabel: "Rebirth",
    title: <></>,
    rightLabel: "Breathtaking views of Phewa Lake",
    background: "https://images.pexels.com/photos/9817/pexels-photo-9817.jpeg",
    audioSrc: "/sfx/whoosh-02.mp3",
  },
  {
    // leftLabel: "Change",
    title: <></>,
    rightLabel: "Peaceful gliding above Pokhara Valley",
    background:
      "https://images.pexels.com/photos/939807/pexels-photo-939807.jpeg",
    audioSrc: "/sfx/whoosh-02.mp3",
  },
];
const WhatUWillExp = () => {
  return (
    // <div>
    //   <div className="w-full">
    //     <div className="text-center text-6xl font-bold mb-8">
    //       What You'll Experience
    //     </div>
    //     <div className="flex justify-end">
    //       <div className="w-[70%]">
    //         <div className="">
    //           <div className="ml-[40%]">Breathtaking views of Phewa Lake</div>
    //           <div className="ml-[30%]">
    //             Clear panorama of Annapurna & Machhapuchhre
    //           </div>
    //           <div className="ml-[20%]">Smooth takeoff from Sarangkot</div>
    //           <div className="ml-[10%]">
    //             Peaceful gliding above Pokhara Valley
    //           </div>
    //           <div className="">Safe landing with a certified pilot</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="">
      <FullScreenScrollFX
        sections={sections}
        header={
          <>
            <div>You Will Experience</div>
          </>
        }
        footer={<div></div>}
        showProgress
        durations={{ change: 0.7, snap: 800 }}
      />
      <div style={{ height: `${(sections.length + 1) * 100}vh` }} />
    </div>
  );
};

export default WhatUWillExp;
