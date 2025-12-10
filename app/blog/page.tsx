import HeroSection from "@/components/HeroSection";
import SecondSection from "../../components/blog/SecondSection";

const page = () => {
  return (
    <div className="">
      <HeroSection
        text1="The ultimate guide to flying in Nepal."
        text2="Explore local tips, seasonal guides, and Pokhara's adventure culture."
        link="Blog"
      />
      {/* <div className="h-screen"></div> */}
      <div className="mt-8">
        <SecondSection />
      </div>
    </div>
  );
};

export default page;
