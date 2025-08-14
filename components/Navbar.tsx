"use client";
import Logo from "@/assets/shared/logo.svg";
import { NavLink, navlinks } from "@/lib/links";
import Image from "next/image";
import Hamburger from "@/assets/shared/icon-hamburger.svg";
import Close from "@/assets/shared/icon-close.svg";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="navbar">
      <Image
        src={Logo}
        alt="logo"
        width={10}
        height={10}
        className="w-[40px] md:w-[48px] h-[40px] md:h-[48px] lg:mr-8"
        unoptimized
        priority={false}
        loading="lazy"
      />
      <div className="w-[50%] h-[1px] bg-white/50 hidden lg:block mr-[-2rem] z-10"></div>
      <ul className="primary-navigation under-indicators hidden md:flex gap-6 pr-[clamp(1.5rem,3vw,3rem)] pl-[clamp(8rem,8vw,16rem)] bg-white/5 backdrop-blur-[2rem]">
        {navlinks.map((link: NavLink, index: number) => {
          return (
            <li key={link.id}>
              <Link
                href={link.href}
                className={
                  pathname === link.href
                    ? "uppercase text-white tracking-tighter border-white"
                    : "uppercase text-white tracking-tighter"
                }
              >
                {" "}
                {index !== 0 && (
                  <span className="font-bold mr-[.5em] inline lg:hidden">
                    {String(link.id - 1).padStart(2, "0")}
                  </span>
                )}
                <span className="font-bold mr-[.5em] hidden lg:inline">
                  {String(link.id - 1).padStart(2, "0")}
                </span>
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <Sheet>
        <SheetTrigger
          className="cursor-pointer md:hidden"
          aria-describedby={undefined}
        >
          <Image
            src={Hamburger}
            alt="hamburger"
            width={10}
            height={10}
            className="w-[24px] h-[21px]"
            unoptimized
            priority={false}
            loading="lazy"
          />
        </SheetTrigger>
        <SheetContent
          className="bg-white/5 backdrop-blur-[2rem]"
          aria-describedby={undefined}
        >
          <SheetTitle>
            <SheetClose className="cursor-pointer">
              <Image
                src={Close}
                alt="close"
                width={10}
                height={10}
                className="w-[19.09px] h-[19.09px] md:hidden"
                unoptimized
                priority={false}
                loading="lazy"
              />
            </SheetClose>
          </SheetTitle>
          <ul className="primary-navigation right-indicators flex flex-col space-y-4">
            {navlinks.map((link: NavLink) => {
              return (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="uppercase text-white tracking-tighter text-sm"
                  >
                    <SheetClose>
                      <span>0{link.id - 1}</span> {link.label}
                    </SheetClose>
                  </Link>
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
