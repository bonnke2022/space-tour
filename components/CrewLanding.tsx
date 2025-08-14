"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { crewLink, CrewLinksProps } from "@/lib/crewLink";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";

const CrewLanding = () => {
  const [activeTab, setActiveTab] = useState(crewLink[0].title);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".img",
      { opacity: 0, xPercent: 100 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    ).fromTo(
      ".desc",
      { opacity: 0, duration: 1.4 },
      { xPercent: 0, opacity: 1, ease: "power1.inOut" }
    );
  }, [activeTab]);
  return (
    <Tabs
      defaultValue={activeTab}
      onValueChange={(val) => setActiveTab(val)}
      className="max-w-6xl flex flex-col lg:flex-row justify-between py-8 gap-16"
    >
      <div className="flex flex-col gap-8 lg:pt-32 text-center lg:text-left">
        {crewLink.map((link: CrewLinksProps) => {
          return (
            <TabsContent
              key={link.id}
              value={link.title}
              className="desc max-w-md lg:max-w-xl"
            >
              <h2 className="text-lg font-serif uppercase text-white/25">
                {link.title}
              </h2>
              <h1 className="text-xl text-white font-serif uppercase mb-4">
                {link.name}
              </h1>
              <p className="text-md text-lightning font-sans-normal">
                {link.description}
              </p>
            </TabsContent>
          );
        })}
        <TabsList className="bg-transparent flex items-center gap-6 self-center lg:self-start">
          {crewLink.map((link: CrewLinksProps) => {
            return (
              <TabsTrigger
                key={link.id}
                value={link.title}
                className={`bg-white/25 active:bg-white/75 cursor-pointer w-[10px] lg:w-[15px] h-[10px] lg:h-[15px] border-0 rounded-[50%] p-[.5em] hover:bg-white/50 focus:bg-white/50 aria-selected:bg-white/100`}
              >
                <span className="sr-only">{link.title}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>

      <div className="">
        {crewLink.map((link: CrewLinksProps) => {
          return (
            <TabsContent key={link.id} value={link.title}>
              <Image
                src={link.img}
                alt={link.title}
                width={10}
                height={10}
                className={`img w-[271.24px] h-[340px] md:w-[446.8px] md:h-[560px] lg:w-[539.35px] lg:h-[${link.height}px] object-contain`}
                loading="lazy"
                unoptimized
                priority={false}
              />
            </TabsContent>
          );
        })}
      </div>
    </Tabs>
  );
};

export default CrewLanding;
