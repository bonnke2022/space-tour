"use client";
import Logo from "@/assets/shared/logo.svg";
import Image from "next/image";
import GemTitle from "./GemTitle";
import Link from "next/link";
import ButtonDot from "./ButtonDot";
import ButtonPagination from "./ButtonPagination";

const SingleComponents = () => {
  return (
    <main className="wrapper space-y-24 p-8">
      <section
        id="single-component"
        className="border-2 border-white p-8 space-y-8"
      >
        <h1 className="text-white text-2xl font-serif capitalize">
          single components
        </h1>
        <Image
          src={Logo}
          alt="logo"
          width={10}
          height={10}
          className="w-[48px] h-[48px]"
          unoptimized
          priority={false}
          loading="lazy"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="">
            <GemTitle detail="navigation states - desktop and tablet" />
            <div className="border-dashed border-2 border-[#9747ff] py-10">
              <ul className="primary-navigation under-indicators flex flex-col items-center md:flex-row md:space-x-8 justify-center">
                <li>
                  <Link
                    href="#"
                    className="uppercase text-white tracking-tighter"
                  >
                    <span className="font-bold mr-[.5em]">00</span> Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="uppercase text-white tracking-tighter"
                  >
                    <span>00</span> Menu
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="active uppercase text-white tracking-tighter"
                  >
                    <span>00</span> Menu
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <GemTitle detail="navigation states - mobile" />
            <div className="border-dashed border-2 border-[#9747ff] py-6">
              <ul className="primary-navigation right-indicators flex flex-col items-center space-y-4">
                <li>
                  <Link
                    href="#"
                    className="uppercase text-white tracking-tighter text-sm"
                  >
                    <span>00</span> Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="uppercase text-white tracking-tighter text-sm"
                  >
                    <span>00</span> Home
                  </Link>
                </li>
                <li className="active">
                  <Link
                    href="#"
                    className="active uppercase text-white tracking-tighter text-sm"
                  >
                    <span>00</span> Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="">
          <GemTitle detail="tabs menu" />
          <div className="border-dashed border-2 border-[#9747ff] p-8 text-sm">
            <ul className="primary-navigation tab-indicators flex flex-col items-center md:flex-row md:space-x-8 justify-center">
              <li>
                <Link
                  href="#"
                  className="uppercase text-white tracking-tighter"
                >
                  tabs Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="uppercase text-white tracking-tighter"
                >
                  tabs Menu
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="active uppercase text-white tracking-tighter"
                >
                  tabs Menu
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <GemTitle detail="display button states - desktop and tablet" />
          <div className="border-dashed border-2 border-[#9747ff] flex flex-col gap-12 md:flex-row items-center justify-around py-20">
            <Link
              href="#"
              className="large-btn uppercase font-serif text-blue-900/50 bg-white text-xl w-[150px] h-[150px] md:w-[272px] md:h-[272px]"
            >
              Explore
            </Link>
            <Link
              href="#"
              className="large-btn uppercase font-serif text-blue-900/50 bg-white text-xl w-[150px] h-[150px] md:w-[272px] md:h-[272px]"
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="">
          <GemTitle detail="display button states - mobile" />
          <div className="border-dashed border-2 border-[#9747ff] flex flex-col gap-12 md:flex-row items-center justify-around py-20">
            <Link
              href="#"
              className="large-btn uppercase font-serif text-blue-900/50 bg-white text-md w-[144px] h-[144px]"
            >
              Explore
            </Link>
            <Link
              href="#"
              className="large-btn uppercase font-serif text-blue-900/50 bg-white text-md w-[144px] h-[144px]"
            >
              Explore
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <GemTitle detail="small pagination - desktop" />
            <div className="border-dashed border-2 border-[#9747ff] flex items-center justify-center gap-12 py-12">
              <ButtonDot
                detail="Slide title"
                aria={true}
                width="w-[15px]"
                height="h-[15px]"
              />
              <ButtonDot
                detail="Slide title"
                aria={false}
                width="w-[15px]"
                height="h-[15px]"
              />
              <ButtonDot
                detail="Slide title"
                aria={false}
                width="w-[15px]"
                height="h-[15px]"
              />
            </div>
          </div>

          <div className="">
            <GemTitle detail="small pagination - tablet" />
            <div className="border-dashed border-2 border-[#9747ff] flex items-center justify-center gap-12 py-12">
              <ButtonDot
                detail="Slide title"
                aria={true}
                width="w-[10px]"
                height="h-[10px]"
              />
              <ButtonDot
                detail="Slide title"
                aria={false}
                width="w-[10px]"
                height="h-[10px]"
              />
              <ButtonDot
                detail="Slide title"
                aria={false}
                width="w-[10px]"
                height="h-[10px]"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
            <GemTitle detail="large pagination" />
            <div className="border-dashed border-2 border-[#9747ff] flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 py-12">
              <ButtonPagination
                aria={true}
                detail="0"
                width="w-[80px]"
                height="h-[80px]"
              />
              <ButtonPagination
                aria={false}
                detail="0"
                width="w-[80px]"
                height="h-[80px]"
              />
              <ButtonPagination
                aria={false}
                detail="0"
                width="w-[80px]"
                height="h-[80px]"
              />
            </div>
          </div>
          <div className="">
            <div className="">
              <GemTitle detail="large pagination tablet" />
              <div className="border-dashed border-2 border-[#9747ff] flex flex-col lg:flex-row items-center justify-center gap-12 py-15">
                <ButtonPagination
                  aria={true}
                  detail="0"
                  width="w-[56px]"
                  height="h-[56px]"
                />
                <ButtonPagination
                  aria={false}
                  detail="0"
                  width="w-[56px]"
                  height="h-[56px]"
                />
                <ButtonPagination
                  aria={false}
                  detail="0"
                  width="w-[56px]"
                  height="h-[56px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SingleComponents;
