"use client";
import ButtonDot from "@/components/ButtonDot";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="wrapper grid gap-4">
      <h1 className="font-serif">Design System</h1>
      <section id="colors" className="my-16 mx-0">
        <h2 className="numbered-title">
          <span>01</span> colors
        </h2>

        <div className="flex items-center gap-4">
          <div className="grow">
            <div className="px-4 py-8 border-[1px] border-white bg-dark text-lg">
              #0B0D17
            </div>
            <p>
              <span className="text-lightning">RGB</span> 11, 12, 23
            </p>
            <p>
              <span className="text-lightning">HSL</span> 230&deg;, 35%, 7%
            </p>
          </div>
          <div className="grow">
            <div className="px-4 py-8 border-[1px] border-white bg-lightning text-dark text-lg">
              #D0D6F9
            </div>
            <p>
              <span className="text-lightning">RGB</span> 208, 214, 249
            </p>
            <p>
              <span className="text-lightning">HSL</span> 231&deg;, 77%, 90%
            </p>
          </div>
          <div className="grow">
            <div className="px-4 py-8 border-[1px] border-white bg-white text-dark text-lg">
              #FFFFFF
            </div>
            <p>
              <span className="text-lightning">RGB</span> 255, 255, 255
            </p>
            <p>
              <span className="text-lightning">HSL</span> 0&deg;, 0%, 100%
            </p>
          </div>
        </div>
      </section>

      <section id="typography" className="my-16 mx-0">
        <h2 className="numbered-title">
          <span>02</span> Typography
        </h2>
        <div className="flex">
          <div className="flower basis-full">
            <div>
              <p className="text-lightning">
                Heading 1 - Bellefair Regular - 150px
              </p>
              <p className="text-3xl uppercase font-serif">Earth</p>
            </div>
            <div>
              <p className="text-lightning">
                Heading 2 - Bellefair Regular - 100px
              </p>
              <p className="text-2xl uppercase font-serif">Venus</p>
            </div>
            <div>
              <p className="text-lightning">
                Heading 3 - Bellefair Regular - 56px
              </p>
              <p className="text-xl uppercase font-serif">Jupiter & Saturn</p>
            </div>
            <div>
              <p className="text-lightning">
                Heading 4 - Bellefair Regular - 32px
              </p>
              <p className="text-lg uppercase font-serif">
                Uranus, Neptune & Pluto
              </p>
            </div>
            <div>
              <p className="text-lightning">
                Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                space
              </p>
              <p className="text-md uppercase font-sans-cond tracking-tighter">
                So, you want to travel to space
              </p>
            </div>
          </div>
          <div className="basis-full">
            <div>
              <p className="text-lightning">
                Subheading 1 - Bellefair Regular - 28px
              </p>
              <p className="text-md uppercase font-serif">384, 400 KM</p>
            </div>
            <div>
              <p className="text-lightning">
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p className="text-sm uppercase font-serif">Avg. Distance</p>
            </div>
            <div>
              <p className="text-lightning">
                Nav Text - Barlow Condensed Regular - 15px - 2.7 Character Space
              </p>
              <p className="text-xs uppercase font-serif">Europa</p>
            </div>
            <div>
              <p className="text-lightning">Body Text</p>
              <p className="text-xs font-serif">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                consequuntur, iure sunt deleniti voluptas dolorum expedita
                consequatur, fuga dicta corporis atque omnis nesciunt, repellat
                rem facilis non tempora est aliquam! Impedit repudiandae itaque,
                necessitatibus nam, sed laboriosam cumque rem cupiditate
                corrupti nihil aperiam, molestiae dolore quam deserunt quia
                animi ipsam quae reiciendis dolores nostrum rerum consectetur!
                Incidunt, suscipit delectus hic eaque magnam minima. Cumque
                minus dolorem aspernatur exercitationem quisquam praesentium,
                natus tenetur. Veritatis, iusto asperiores quaerat facere
                impedit dignissimos esse sequi, quam, porro fuga eveniet
                doloribus soluta labore dolores aut dolore. Deleniti quas
                nesciunt, vitae sit, aut ea iste cupiditate reiciendis tempore
                iusto ex, enim odit. Minus assumenda autem suscipit repellendus
                commodi praesentium tenetur cupiditate, magni perferendis porro,
                rerum architecto voluptatem quam quo corrupti unde fugit
                obcaecati.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="interactive-">
        <h2 className="numbered-title">
          <span>03</span> Interactive elements
        </h2>

        <div className="">
          <nav>
            <ul className="primary-navigation under-indicators flex gap-24">
              <li>
                <Link
                  href="#"
                  className="uppercase text-white tracking-tighter"
                >
                  <span className="font-bold mr-[.5em]">01</span> Active
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="uppercase text-white tracking-tighter"
                >
                  <span>02</span> Hovered
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="uppercase text-white tracking-tighter"
                >
                  <span>03</span> Idle
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex">
          <div>
            <Link
              href="#"
              className="large-btn uppercase font-serif text-dark bg-white text-xl mt-20"
            >
              Explore
            </Link>
          </div>

          <div className="mb-[50vh] space-y-16">
            <div className="tab-list under-indicators flex">
              <Button
                aria-selected="true"
                className="uppercase rounded-none text-lightning tracking-tighter bg-dark font-sans-cond hover:bg-transparent hover:outline-none"
              >
                Moon
              </Button>
              <Button
                aria-selected="false"
                className="uppercase rounded-none text-lightning tracking-tighter bg-dark font-sans-cond hover:bg-transparent hover:outline-none"
              >
                Mars
              </Button>
              <Button
                aria-selected="false"
                className="uppercase rounded-none text-lightning tracking-tighter bg-dark font-sans-cond hover:bg-transparent hover:outline-none"
              >
                Europa
              </Button>
            </div>

            <div className="flex">
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
        </div>
      </section>
    </div>
  );
};

export default Home;
