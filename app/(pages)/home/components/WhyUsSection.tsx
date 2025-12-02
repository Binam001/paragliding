import { whyUs } from "@/constants";

const WhyUsSection = () => {
  return (
    <div className="h-full relative">
      <img
        src="/images/clouds/clouds12.png"
        alt="cloud"
        className="absolute z-20 -top-[35%]"
      />
      <img
        src="/images/clouds/clouds12.png"
        alt="cloud"
        className="absolute z-20 -top-[40%] -left-[50%]"
      />
      <img
        src="/images/clouds/clouds12.png"
        alt="cloud"
        className="absolute z-20 -top-[40%] -right-[40%]"
      />

      <div className="w-1/2 flex relative flex-col justify-center h-full z-50">
        <p className="text-center text-6xl font-bold">Why Us?</p>
        <div className="flex gap-8 mt-8">
          {whyUs.map((item) => (
            <div
              key={item.id}
              className="bg-gray-200 text-center rounded-2xl border border-gray-400 p-8 space-y-4 leading-5"
            >
              <div className="text-xl font-semibold whitespace-nowrap">
                {item.title}
              </div>
              <div className="text-gray-600">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
