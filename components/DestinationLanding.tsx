"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DestinationLink, destinedLinks } from "@/lib/destined";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useState } from "react";

gsap.registerPlugin();

const DestinationLanding = () => {
  const [activeTab, setActiveTab] = useState(destinedLinks[0].title);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".img",
      { opacity: 0, xPercent: -100 },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" }
    )
      .fromTo(
        ".planet-title",
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, ease: "power1.inOut" }
      )
      .fromTo(
        ".desc",
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, ease: "power1.inOut" }
      )
      .fromTo(
        ".planet-facts",
        { xPercent: 100, opacity: 0 },
        { xPercent: 0, opacity: 1, ease: "power1.inOut" }
      );
  }, [activeTab]);
  return (
    <Tabs
      defaultValue={activeTab}
      onValueChange={(val) => setActiveTab(val)}
      className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-16 place-items-center max-w-6xl"
    >
      <div className="">
        {destinedLinks.map((link: DestinationLink) => {
          return (
            <TabsContent key={link.id} value={link.title}>
              <Image
                src={link.img}
                alt={link.title}
                width={10}
                height={10}
                className="img w-[150px] md:w-[300px] lg:w-[480px] h-[150px] md:h-[300px] lg:h-[480px] object-contain"
                loading="lazy"
                unoptimized
                priority={false}
              />
            </TabsContent>
          );
        })}
      </div>

      <div className="flex flex-col items-center lg:items-start">
        <TabsList className="primary-navigation tab-indicators bg-transparent flex items-center gap-6">
          {destinedLinks.map((tabLink: DestinationLink) => {
            return (
              <TabsTrigger
                key={tabLink.id}
                value={tabLink.title}
                className="uppercase text-white tracking-tighter "
              >
                {tabLink.title}
              </TabsTrigger>
            );
          })}
        </TabsList>

        <div className="max-w-[28rem]">
          {destinedLinks.map((link: DestinationLink) => {
            return (
              <TabsContent
                key={link.id}
                value={link.title}
                className="flex flex-col items-center gap-8"
              >
                <div className="">
                  <h1 className="planet-title text-3xl font-serif text-white uppercase py-8 text-center lg:text-left">
                    {link.title}
                  </h1>
                  <p className="desc text-lightning font-sans-normal text-md text-center lg:text-left">
                    {link.description}
                  </p>
                </div>

                <div className="planet-facts flex flex-col lg:flex-row w-full justify-start items-center gap-8 lg:gap-16 py-6 border-t-[0.3px] border-lightning text-center lg:text-left">
                  <div className="">
                    <h1 className="text-xs uppercase text-lightning font-sans-cond tracking-tightest">
                      avg. distance
                    </h1>
                    <h1 className="text-lg uppercase text-white font-serif tracking-tight">
                      {link.distance} km
                    </h1>
                  </div>
                  <div className="">
                    <h1 className="text-xs uppercase text-lightning font-sans-cond tracking-tightest">
                      est. travel time
                    </h1>
                    <h1 className="text-lg uppercase text-white font-serif tracking-tight">
                      {link.time}
                    </h1>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </div>
      </div>
    </Tabs>
  );
};

export default DestinationLanding;
