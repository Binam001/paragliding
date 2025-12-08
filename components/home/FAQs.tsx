import React from "react";
import { Feature197 } from "../accordion-feature-section";
const demoData = {
  features: [
    {
      id: 1,
      title: "What is paragliding?",
      image: "/images/faqs/faq1.png",
      description:
        "Paragliding is the recreational and competitive adventure sport of flying paragliders: lightweight, free-flying, foot-launched glider aircraft with no rigid primary structure. The pilot sits in a harness suspended below a fabric wing.",
    },
    {
      id: 2,
      title: "Is paragliding safe?",
      image: "/images/faqs/faq2.png",
      description:
        "Yes, paragliding is very safe when conducted with certified and experienced pilots. We use modern, certified equipment that undergoes daily checks. Our pilots are internationally licensed and have thousands of hours of flight experience, making your safety our top priority.",
    },
    {
      id: 3,
      title: "Do I need experience to paraglide?",
      image: "/images/faqs/faq3.png",
      description:
        "No prior experience is necessary for a tandem flight! You will be flying with a professional pilot who will handle all aspects of the flight. You just need to relax and enjoy the breathtaking views. A short briefing is provided before takeoff.",
    },
    {
      id: 4,
      title: "What should I wear for paragliding?",
      image: "/images/faqs/faq4.png",
      description:
        "We recommend wearing comfortable, sturdy, closed-toe shoes (like sneakers or hiking boots), long trousers, and a windproof jacket. The temperature can be cooler at higher altitudes, so dressing in layers is a good idea. Sunglasses are also highly recommended.",
    },
  ],
};
const FAQs = () => {
  return (
    <div>
      <Feature197 {...demoData} />
    </div>
  );
};

export default FAQs;
