"use client";
import { NavLink } from "@/lib/links";
import Image from "next/image";

const Landing = ({ desktopImg, label, tabletImg, mobileImg }: NavLink) => {
  return (
    <div className="">
      <Image
        src={desktopImg}
        alt={label}
        fill
        className="hidden lg:block lg:w-full lg:h-dvh absolute top-0 left-0 z-[-10] object-cover"
        unoptimized
        priority={false}
        loading="lazy"
      />
      <Image
        src={tabletImg}
        alt={label}
        fill
        className="md:w-full md:h-dvh hidden md:block lg:hidden object-cover absolute top-0 left-0 z-[-10]"
        unoptimized
        priority={false}
        loading="lazy"
      />
      <Image
        src={mobileImg}
        alt={label}
        fill
        className="w-full h-dvh object-cover block md:hidden absolute top-0 left-0 z-[-10]"
        unoptimized
        priority={false}
        loading="lazy"
      />
    </div>
  );
};

export default Landing;
