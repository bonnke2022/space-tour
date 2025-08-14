import { StaticImageData } from "next/image";
import HomeMobile from "@/assets/home/background-home-mobile.jpg";
import HomeTablet from "@/assets/home/background-home-tablet.jpg";
import HomeDesktop from "@/assets/home/background-home-desktop.jpg";

import DestinationMobile from "@/assets/destination/background-destination-mobile.jpg";
import DestinationTablet from "@/assets/destination/background-destination-tablet.jpg";
import DestinationDesktop from "@/assets/destination/background-destination-desktop.jpg";

import CrewMobile from "@/assets/crew/background-crew-mobile.jpg";
import CrewTablet from "@/assets/crew/background-crew-tablet.jpg";
import CrewDesktop from "@/assets/crew/background-crew-desktop.jpg";

import TechnologyMobile from "@/assets/technology/background-technology-mobile.jpg";
import TechnologyTablet from "@/assets/technology/background-technology-tablet.jpg";
import TechnologyDesktop from "@/assets/technology/background-technology-desktop.jpg";

export type NavLink = {
  id: number;
  href: string;
  label: string;
  mobileImg: string | StaticImageData;
  tabletImg: string | StaticImageData;
  desktopImg: string | StaticImageData;
  title: string;
};

export const navlinks: NavLink[] = [
  {
    id: 1,
    href: "/",
    label: "home",
    mobileImg: HomeMobile,
    tabletImg: HomeTablet,
    desktopImg: HomeDesktop,
    title: "",
  },
  {
    id: 2,
    href: "/destination",
    label: "destination",
    mobileImg: DestinationMobile,
    tabletImg: DestinationTablet,
    desktopImg: DestinationDesktop,
    title: "pick your destination",
  },
  {
    id: 3,
    href: "/crew",
    label: "crew",
    mobileImg: CrewMobile,
    tabletImg: CrewTablet,
    desktopImg: CrewDesktop,
    title: "meet the crew",
  },
  {
    id: 4,
    href: "/technology",
    label: "technology",
    mobileImg: TechnologyMobile,
    tabletImg: TechnologyTablet,
    desktopImg: TechnologyDesktop,
    title: "space launch 101",
  },
];
