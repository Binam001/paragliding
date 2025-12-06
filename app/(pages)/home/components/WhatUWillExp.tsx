import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";
import React from "react";

const cardItems: iCardItem[] = [
  {
    title: "Smooth takeoff from Sarangkot",
    src: "/images/home/image1.jpg",
  },
  {
    title: "Clear panorama of Annapurna & Machhapuchhre",
    src: "/images/blog/blog11.jpg",
  },
  {
    title: "Breathtaking views of Phewa Lake",
    src: "/images/blog/blog1.jpg",
  },
  {
    title: "Peaceful gliding above Pokhara Valley",
    src: "/images/home/image2.jpg",
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
      <CardsParallax items={cardItems} />
    </div>
  );
};

export default WhatUWillExp;
