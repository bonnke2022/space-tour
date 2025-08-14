"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { techLinks, TechProps } from "@/lib/tech";
import Image from "next/image";

const TechnologyLanding = () => {
  return (
    <Tabs defaultValue="launch vehicle" className="flex flex-col lg:flex-row ">
      <div className="lg:order-2">
        {techLinks.map((link: TechProps) => {
          return (
            <TabsContent key={link.id} value={link.terminology}>
              <Image
                src={link.landscape}
                alt={link.terminology}
                unoptimized
                priority={false}
                loading="lazy"
                width={10}
                height={10}
                className="w-full h-auto object-cover lg:hidden"
              />
              <Image
                src={link.portrait}
                alt={link.terminology}
                unoptimized
                priority={false}
                loading="lazy"
                width={10}
                height={10}
                className="w-[608px] h-[600px] object-contain hidden lg:block"
              />
            </TabsContent>
          );
        })}
      </div>

      <div className="flex flex-col lg:flex-row items-center px-8 py-10 gap-12">
        <div className="flex flex-row lg:flex-col items-center">
          <TabsList className="bg-transparent flex flex-row lg:flex-col items-center gap-6 self-center lg:self-start">
            {techLinks.map((link: TechProps) => {
              return (
                <TabsTrigger
                  key={link.id}
                  value={link.terminology}
                  className={`text-xl bg-dark border-2 border-white/25 w-[56px] h-[56px] lg:w-[80px] lg:h-[80px] rounded-[50%] p-[.5em] hover:bg-white hover:text-dark focus:bg-white focus:text-dark aria-[selected="true"]:bg-white active:border-white`}
                >
                  {link.id}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </div>
        <div className="text-center lg:text-left">
          {techLinks.map((link: TechProps) => {
            return (
              <TabsContent key={link.id} value={link.terminology} className="">
                <h3 className="text-white/50 text-lg uppercase font-serif ">
                  the terminology...
                </h3>
                <h2 className="text-white text-xl uppercase font-serif mb-8">
                  {link.terminology}
                </h2>
                <p className="text-md text-lightning font-sans-normal max-w-md">
                  {link.description}
                </p>
              </TabsContent>
            );
          })}
        </div>
      </div>
    </Tabs>
  );
};

export default TechnologyLanding;
