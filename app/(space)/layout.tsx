import HeroWrapper from "@/components/HeroWrapper";
import LandingWrapper from "@/components/LandingWrapper";
import Navbar from "@/components/Navbar";
import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className="min-h-dvh space-y-[clamp(1rem,2vh,2rem)]">
      <Navbar />
      <div className="wrapper flex flex-col items-center space-y-8 max-w-6xl">
        <HeroWrapper />
        <div className="">{children}</div>
      </div>
      <LandingWrapper />
    </main>
  );
};

export default Layout;
