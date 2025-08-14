import { StaticImageData } from "next/image";
import Douglas from "@/assets/crew/image-douglas-hurley.webp";
import Mark from "@/assets/crew/image-mark-shuttleworth.webp";
import Victor from "@/assets/crew/image-victor-glover.webp";
import Ansari from "@/assets/crew/image-anousheh-ansari.webp";

export type CrewLinksProps = {
  id: number;
  title: string;
  name: string;
  description: string;
  img: string | StaticImageData;
  height: number;
};

export const crewLink: CrewLinksProps[] = [
  {
    id: 1,
    title: "commander",
    name: "douglas hurley",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: Douglas,
    height: 676,
  },
  {
    id: 2,
    title: "mission specialist",
    name: "mark shuttleworth",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: Mark,
    height: 676,
  },
  {
    id: 3,
    title: "pilot",
    name: "victor glover",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    img: Victor,
    height: 662,
  },
  {
    id: 4,
    title: "flight engineer",
    name: "anousheh ansari",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    img: Ansari,
    height: 662,
  },
];
