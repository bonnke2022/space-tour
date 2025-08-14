"use client";
import DesignSystem from "@/components/DesignSystem";
import Image from "next/image";
import HomeMobile from "@/assets/home/background-home-mobile.jpg";
import HomeTablet from "@/assets/home/background-home-tablet.jpg";

const DesignPage = () => {
  return (
    <main>
      <DesignSystem />
      <Image
        src={HomeMobile}
        alt="mobile"
        width={10}
        height={10}
        className="w-full h-full md:hidden object-contain"
        unoptimized
        priority={false}
        loading="lazy"
      />
      <Image
        src={HomeTablet}
        alt="tablet"
        width={10}
        height={10}
        className="w-full h-full hidden md:block object-contain"
        unoptimized
        priority={false}
        loading="lazy"
      />
    </main>
  );
};

export default DesignPage;
