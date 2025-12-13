import Link from "next/link";

const FooterText = () => {
  return (
    <div className="h-dvh flex items-center justify-center overflow-hidden relative mt-8">
      <div className="absolute inset-0 w-full h-screen bg-linear-to-b from-blue-500 to-white" />
      <div className="absolute bottom-0 w-full h-screen">
        <img
          src="/images/mountains/vectorMountain.png"
          alt="mountain"
          className="invert"
        />
      </div>
      <div
      // className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: `url("/images/mountains/mountains3.jpg")` }}
      />
      {/* <div className="absolute inset-0 w-full h-screen bg-black/30 z-10" /> */}
      <div className="w-1/2 mx-auto flex flex-col items-center justify-center text-center gap-4 z-10">
        <p className="text-2xl">
          Experience the Pokhara skyline like never before
        </p>
        <p className="text-5xl font-bold leading-normal">
          Sit back in your harness, our pilots will do the rest.
        </p>
        <Link
          href="/services"
          className="bg-(--color-primary) text-white px-6 py-3 rounded-full cursor-pointer"
        >
          <button className="cursor-pointer">Book Now</button>
        </Link>
      </div>
    </div>
  );
};

export default FooterText;
