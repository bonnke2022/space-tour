"use client";
import { NavLink, navlinks } from "@/lib/links";
import { usePathname } from "next/navigation";
import Hero from "./Hero";

const HeroWrapper = () => {
  const pathname = usePathname();
  return (
    <div className="md:self-start lg:pl-10">
      {navlinks.map((link: NavLink) => {
        return (
          <div key={link.id}>
            {pathname === link.href && <Hero {...link} />}
          </div>
        );
      })}
    </div>
  );
};

export default HeroWrapper;
