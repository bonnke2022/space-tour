"use client";
import { NavLink } from "@/lib/links";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = ({ id, title }: NavLink) => {
  useGSAP(() => {
    gsap.from(".number-title", {
      opacity: 0,
      yPercent: 50,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div className="px-8 lg:px-24">
      {title === "" ? (
        <h1 className="hidden number-title whitespace-nowrap">
          <span className="font-bold mr-[.em] text-white/25">0{id}</span>{" "}
          {title}
        </h1>
      ) : (
        <h1 className="number-title uppercase whitespace-nowrap text-white text-lg tracking-tighter font-sans-cond">
          <span className="font-bold mr-[.em] text-white/25">0{id}</span>{" "}
          {title}
        </h1>
      )}
    </div>
  );
};

export default Hero;
