import { StaticImageData } from "next/image";
import Moon from "@/assets/destination/image-moon.webp";
import Mars from "@/assets/destination/image-mars.webp";
import Europa from "@/assets/destination/image-europa.webp";
import Titan from "@/assets/destination/image-titan.webp";

export type DestinationLink = {
  id: number;
  img: string | StaticImageData;
  title: string;
  description: string;
  distance: string;
  time: string;
  href: string;
};

export const destinedLinks: DestinationLink[] = [
  {
    id: 1,
    img: Moon,
    title: "moon",
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384, 400",
    time: "3 days",
    href: "/moon",
  },
  {
    id: 2,
    img: Mars,
    title: "mars",
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mans, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 mil.",
    time: "9 months",
    href: "/mars",
  },
  {
    id: 3,
    img: Europa,
    title: "europa",
    description:
      "The smallest of the four Gailean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey or simple relaxation in your snug wintery cabin.",
    distance: "628 mil.",
    time: "3 years",
    href: "/europa",
  },
  {
    id: 4,
    img: Titan,
    title: "titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth. Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 Bil.",
    time: "7 years",
    href: "/titan",
  },
];
