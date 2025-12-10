import React from "react";
import { Mountain, Sunrise, Plane, Tent } from "lucide-react"; // Example icons from lucide-react

interface Step {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  tailwindColor: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: Mountain,
    title: "The Hike: Ascent to 2000m",
    description:
      "Start the scenic 2.5-hour trek through lush villages and beautiful natural ruins. This is your getaway from the city hustle.",
    tailwindColor: "text-green-500",
  },
  {
    id: 2,
    icon: Tent,
    title: "High Camp & Sunset View",
    description:
      "Arrive at the high-altitude site (~2000m). Settle into your tented accommodation and enjoy a magnificent sunset over the Annapurnas.",
    tailwindColor: "text-indigo-500",
  },
  {
    id: 3,
    icon: Sunrise,
    title: "Morning: Annapurna Sunrise",
    description:
      "Wake up early for a breathtaking, unobstructed sunrise view over the entire majestic Annapurna mountain range.",
    tailwindColor: "text-yellow-500",
  },
  {
    id: 4,
    icon: Plane,
    title: "The Fly: Soar to Pokhara",
    description:
      "After a final briefing, launch from the high take-off point. Experience a longer, stunning paragliding flight back down to the Pokhara valley and Phewa Lake.",
    tailwindColor: "text-blue-500",
  },
];

const HikeFlyProcess: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            🌄 Hike & Fly: The 4-Step Adventure
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of trekking and aerial thrill,
            overlooking the Pokhara Valley and the Annapurnas.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Vertical Divider Line */}
          <div
            className="absolute left-1/2 -ml-0.5 w-1 bg-gray-200"
            style={{ height: `calc(100% - 100px)`, top: "50px" }} // Adjust height to fit the items
          />

          <ul className="space-y-16">
            {steps.map((step, index) => (
              <li
                key={step.id}
                className="relative flex justify-between items-center w-full"
              >
                {/* Step Content (Left Side - for odd index) */}
                {index % 2 === 0 ? (
                  <>
                    {/* Left Content */}
                    <div className="w-5/12 text-right pr-12 hidden md:block">
                      <h3
                        className={`text-2xl font-semibold ${step.tailwindColor}`}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Timeline Marker */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div
                        className={`p-4 rounded-full border-4 bg-white border-gray-100 shadow-xl ${step.tailwindColor} flex items-center justify-center`}
                      >
                        {/* <step.icon className="h-6 w-6" /> */}
                      </div>
                    </div>

                    {/* Right Spacer */}
                    <div className="w-5/12 hidden md:block" />
                  </>
                ) : (
                  <>
                    {/* Left Spacer */}
                    <div className="w-5/12 hidden md:block" />

                    {/* Timeline Marker */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div
                        className={`p-4 rounded-full border-4 bg-white border-gray-100 shadow-xl ${step.tailwindColor} flex items-center justify-center`}
                      >
                        {/* <step.icon className="h-6 w-6" /> */}
                      </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-5/12 text-left pl-12 hidden md:block">
                      <h3
                        className={`text-2xl font-semibold ${step.tailwindColor}`}
                      >
                        {step.title}
                      </h3>
                      <p className="mt-2 text-gray-700 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </>
                )}

                {/* Mobile View Content (Full Width) */}
                <div className="md:hidden w-full text-center">
                  <div
                    className={`mx-auto mb-4 p-4 rounded-full border-4 bg-white border-gray-100 shadow-xl ${step.tailwindColor} flex items-center justify-center w-fit`}
                  >
                    {/* <step.icon className="h-6 w-6" /> */}
                  </div>
                  <h3 className={`text-xl font-semibold ${step.tailwindColor}`}>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-700 leading-relaxed px-4">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HikeFlyProcess;
