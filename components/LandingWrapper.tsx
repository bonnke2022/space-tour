"use client";

import { NavLink, navlinks } from "@/lib/links";
import { usePathname } from "next/navigation";
import Landing from "./Landing";

const LandingWrapper = () => {
  const pathname = usePathname();

  return (
    <div>
      {navlinks.map((link: NavLink) => {
        return (
          <div key={link.id}>
            {pathname === link.href && <Landing {...link} />}
          </div>
        );
      })}
    </div>
  );
};

export default LandingWrapper;
