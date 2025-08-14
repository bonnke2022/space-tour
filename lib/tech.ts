import LaunchLandscape from "@/assets/technology/image-launch-vehicle-landscape.jpg";
import LaunchPortrait from "@/assets/technology/image-launch-vehicle-portrait.jpg";
import SpaceLandscape from "@/assets/technology/image-space-capsule-landscape.jpg";
import SpacePortrait from "@/assets/technology/image-space-capsule-portrait.jpg";
import PortPortrait from "@/assets/technology/image-spaceport-portrait.jpg";
import PortLandscape from "@/assets/technology/image-spaceport-landscape.jpg";
import { StaticImageData } from "next/image";

export type TechProps = {
  id: number;
  terminology: string;
  description: string;
  portrait: string | StaticImageData;
  landscape: string | StaticImageData;
};

export const techLinks: TechProps[] = [
  {
    id: 1,
    terminology: "launch vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    portrait: LaunchPortrait,
    landscape: LaunchLandscape,
  },
  {
    id: 2,
    terminology: "spaceport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    portrait: PortPortrait,
    landscape: PortLandscape,
  },
  {
    id: 3,
    terminology: "space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    portrait: SpacePortrait,
    landscape: SpaceLandscape,
  },
];
