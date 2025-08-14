"use client";
import gsap from "gsap";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useGSAP(() => {
    const spaceSplit = new SplitText(".title", { type: "chars, words" });
    const paragraphSplit = new SplitText(".subtext", { type: "lines" });

    spaceSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(spaceSplit.chars, {
      opacity: 0,
      xPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
    });

    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.06,
      delay: 1,
    });
  }, []);
  return (
    <section className="landing gap-0 lg:gap-24">
      <div className="max-w-[34rem] space-y-4 lg:space-y-0">
        <h1 className="title uppercase font-sans-cond text-white text-lg">
          so, you want to travel to{" "}
          <span className="text-4xl font-serif block">space</span>
        </h1>
        <p className="subtext text-lightning text-md font-sans">
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>
      <Link
        href="/destination"
        className="large-btn uppercase font-serif text-blue-900/50 bg-white text-xl w-[144px] md:w-[272px] h-[144px] md:h-[272px] mt-16"
      >
        explore
      </Link>
    </section>
  );
};

export default Home;
