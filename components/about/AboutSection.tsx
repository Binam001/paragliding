import React from "react";
import ScrollFloat from "../WaveAnimation";

const AboutSection = () => {
  return (
    <div>
      <div className="">
        <div className="text-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="center bottom+=30%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            About Us
          </ScrollFloat>
        </div>
        <div>
          <p>
            Sunrise Paragliding is a family run company and has been offering
            tandem flights in the Annapurna region of Nepal since 1996. As the
            most experienced paragliding company in Nepal, we are unrivaled in
            our knowledge of paragliding conditions, sites and local cultures.
            The main area for paragliding is Sarangkot in the Pokhara valley, a
            site which offers spectacular views of three 8,000m peaks and
            friendly and constant conditions for paragliding throughout the
            year.
          </p>
          <p>
            We are the leading choice of professional tandem flights in Nepal.
            And we have been running tandem flights in the foothills of Nepal
            for the last 30 years. Believe us when we say that paragliding here
            is amazing. But don't take our word for it - come and see for
            yourself.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
