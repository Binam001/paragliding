import { navLists, packageLists, socialLinkLists } from "@/constants";
import { Icon } from "@iconify/react";
import Link from "next/link";

const FooterText = () => {
  return (
    <div
      className="h-[200dvh] flex flex-col justify-between overflow-hidden relative mt-8 px-4 md:px-8 lg:px-16"
      style={{
        // backgroundImage: `url(/images/mountains/phewa-lake.jpg)`,
        backgroundImage: `url(/images/mountains/pokhara-landscape3.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
      }}
    >
      <div className="md:w-1/2 mx-auto pt-48 flex flex-col items-center justify-center text-center gap-4 z-10">
        <p className="text-2xl">
          Experience the Pokhara skyline like never before
        </p>
        <p className="text-3xl lg:text-5xl font-bold leading-normal">
          Sit back in your harness, our pilots will do the rest.
        </p>
        <Link
          href="/services"
          className="bg-(--color-primary) text-white px-6 py-3 rounded-full cursor-pointer"
        >
          <button className="cursor-pointer">Book Now</button>
        </Link>
      </div>

      <div className="w-full h-[70dvh] p-4 rounded-md mb-4 text-white flex flex-col justify-between z-50 bg-black/30 backdrop-blur-xs border border-white/30">
        <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-center">
          <div className="md:w-1/2 h-full flex flex-col gap-4 md:gap-8">
            <p className="text-2xl md:text-4xl">Join us for an adventure</p>
            <div className="relative flex items-center w-full md:w-1/2">
              <input
                type="email"
                placeholder="Email"
                className="pr-12 pl-4 py-2 border border-white rounded-full bg-white/10 backdrop-blur-2xl placeholder:text-white focus:outline-none w-full"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer group">
                <Icon
                  icon="tabler:send"
                  className="size-6 text-white duration-150"
                />
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-between md:justify-evenly">
            <div className="">
              <p className="text-xl font-medium border-b-2 mb-2">
                Tandem Flights
              </p>
              <div className="flex flex-col gap-2">
                {packageLists.map((packageItem) => (
                  // <Link key={packageItem.id} href={packageItem}>
                  <Link
                    key={packageItem.id}
                    href={`/services/${packageItem.slug}`}
                    className="hover:text-(--color-primary) w-max"
                  >
                    {packageItem.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="">
              <p className="text-xl font-medium border-b-2 mb-2 w-fit">Links</p>
              <div className="flex flex-col gap-y-2">
                {navLists.map((navItem) => (
                  <Link
                    key={navItem.id}
                    href={navItem.href}
                    className={`hover:text-(--color-primary) w-max`}
                  >
                    {navItem.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 md:my-0">
          <div className="flex gap-2 w-fit mx-auto md:w-full">
            {socialLinkLists.map((socialLink) => (
              <Link key={socialLink.id} href={socialLink.link}>
                <img
                  src={socialLink.icon}
                  alt={socialLink.title}
                  className="size-8 bg-transparent invert rounded-full p-1.5 ring ring-black"
                  // className="size-8 bg-white rounded-full p-1.5"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center">
          <div className="">
            <div className="text-xs">© 2025 Sunrise Paragliding</div>
            {/* <Link href="">Privacy Policy</Link> */}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs whitespace-nowrap">
              Design & Developed by
            </span>
            <Link
              href="https://webxnepal.com"
              target="_blank"
              rel="noopener"
              className="flex items-center  text-white gap-1 hover:text-[#2E2B6F] transition-colors "
            >
              <svg
                width="60"
                viewBox="0 0 238 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66.7355 30.667L58.1754 52.5818L45.675 20.8291H36.0279L23.6633 52.5139L15.1032 30.5991C12.7933 24.6964 7.08655 20.7612 0.700439 20.7612L18.9076 67.1011H28.4868L40.9873 35.3485L53.3519 67.1011H62.999L81.2062 20.7612C74.8201 20.7612 69.1133 24.6964 66.8035 30.5991L66.7355 30.667Z"
                  className="fill-white"
                />
                <path
                  d="M104.304 20.8286C98.122 20.8286 92.3474 23.2033 87.9314 27.6134C83.5155 32.0235 81.1377 37.7905 81.1377 43.9646C81.1377 50.1388 83.5155 56.0415 87.9314 60.3837C92.3474 64.726 98.122 67.1685 104.304 67.1685C108.109 67.1685 111.845 66.2865 115.106 64.5903C118.231 62.962 121.017 60.5194 123.123 57.6698L123.802 56.72L115.854 50.9529L115.174 51.9028C113.951 53.5311 112.389 54.9559 110.555 55.9058C108.652 56.9235 106.478 57.3984 104.304 57.3984C98.8014 57.3984 93.9099 53.9382 91.9397 48.9175H127.539V44.0325C127.539 37.8583 125.161 32.0913 120.745 27.6812C116.329 23.2711 110.555 20.8964 104.304 20.8964V20.8286ZM104.304 30.5987C109.875 30.5987 114.767 33.991 116.805 39.0118H91.9397C93.9099 33.991 98.8014 30.5987 104.304 30.5987Z"
                  className="fill-white"
                />
                <path
                  d="M174.281 27.6138C169.933 23.2716 164.09 20.8291 157.84 20.8291C153.084 20.8291 148.397 22.3217 144.524 25.1035V10.1092C144.524 4.68135 140.108 0.339111 134.741 0.339111V67.169H157.908C164.158 67.169 170.001 64.7943 174.349 60.3842C178.697 55.9741 181.142 50.2071 181.142 43.9651C181.142 37.7231 178.697 32.0239 174.349 27.6138H174.281ZM171.02 46.6111C170.001 51.9033 165.789 56.1098 160.489 57.1275C159.606 57.3311 158.723 57.3989 157.908 57.3989H144.524V44.0329C144.524 43.4223 144.524 42.8795 144.66 42.2689C145.407 36.2983 150.231 31.4812 156.209 30.8027C165.245 29.6493 172.854 37.5874 171.088 46.679L171.02 46.6111Z"
                  className="fill-white"
                />
                <path
                  d="M225.437 6.92065H237.598L188.548 73.8183H176.387L225.437 6.92065Z"
                  fill="url(#paint0_linear_70_2)"
                />
                <path
                  d="M193.303 20.8286L202.95 33.991H190.721L193.303 20.8286Z"
                  fill="#5C53A3"
                />
                <path
                  d="M202.95 33.9915L196.836 42.3367L190.721 33.9915H202.95Z"
                  fill="#32C5F4"
                />
                <path
                  d="M181.074 20.8286H193.303L190.721 33.991L181.074 20.8286Z"
                  fill="#ED228B"
                />
                <path
                  d="M215.043 67.169L205.396 54.0066H217.624L215.043 67.169Z"
                  fill="#F57E20"
                />
                <path
                  d="M205.396 54.0061L211.51 45.6609L217.624 54.0061H205.396Z"
                  fill="#FECF0A"
                />
                <path
                  d="M227.272 67.169H215.043L217.625 54.0066L227.272 67.169Z"
                  fill="#EF3F23"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_70_2"
                    x1="227.476"
                    y1="4.95307"
                    x2="186.658"
                    y2="75.697"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0D85C8" />
                    <stop offset="0.51" stopColor="#652C8E" />
                    <stop offset="1" stopColor="#DF0D7B" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterText;
