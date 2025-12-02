import HeroScrollVideo from "@/components/scroll-animated-video";
import React from "react";

const SecondSection = () => {
  return (
    <div>
      <HeroScrollVideo
        title="Blog"
        subtitle="Discover guides, stories, travel tips, safety advice, and real experiences from the skies of Pokhara. Whether you're preparing for your first flight or returning for another adventure, our blog brings you expert insights and breathtaking perspectives from Nepal's paragliding capital."
        media="/videos/SUNRISE-PARAGLIDING-NEPAL.mp4"
        overlay={
          {
            // caption: "PROJECT • 07",
            // heading:
            // "New to paragliding? Start here with easy, informative guides designed for first-time flyers.",
            // paragraphs: [
            //   "A focused reel highlighting interaction, craft, and intent.",
            // ],
          }
        }
      />
    </div>
  );
};

export default SecondSection;
