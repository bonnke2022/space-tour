"use client";
import Logo from "@/assets/shared/logo.svg";
import Image from "next/image";

const DesignSystem = () => {
  return (
    <main className="wrapper space-y-24 p-8">
      <section id="colors" className="space-y-4">
        <h1 className="numbered-title">
          <span>01</span> colors
        </h1>

        <div className="">
          <p className="blue-title">Blue</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            <div className="space-y-4">
              <div className="border-2 border-lightning pt-16 pl-8">
                <p className="text-white/50 font-serif text-lg uppercase">
                  #0B0D17
                </p>
                <p className="text-white font-serif text-lg uppercase">
                  blue-900
                </p>
              </div>
              <div className="text-md">
                <p className="font-sans-cond">
                  <span className="text-lightning font-sans-normal mr-4">
                    RGB
                  </span>{" "}
                  11, 13, 23
                </p>
                <p className="font-sans-cond">
                  <span className="text-lightning font-sans-normal mr-4">
                    HSL
                  </span>{" "}
                  230&deg;, 35%, 7%
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-lightning border-2 border-lightning pt-16 pl-8">
                <p className="text-blue-900/50 font-serif text-lg uppercase">
                  #D0D6F9
                </p>
                <p className="text-blue-900 font-serif text-lg uppercase">
                  blue-300
                </p>
              </div>
              <div className="text-md">
                <p className="font-sans-cond">
                  <span className="text-lightning font-normal text-md mr-4">
                    RGB
                  </span>{" "}
                  208, 214, 249
                </p>
                <p className="font-sans-cond">
                  <span className="text-lightning font-sans-normal text-md mr-4">
                    HSL
                  </span>{" "}
                  23&deg;, 77%, 90%
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="blue">
          <p className="blue-title">White</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            <div className="space-y-4">
              <div className="border-2 border-white bg-white pt-16 pl-8">
                <p className="text-blue-900/50 font-serif text-lg uppercase">
                  #FFFFFF
                </p>
                <p className="text-blue-900 font-serif text-lg uppercase">
                  white
                </p>
              </div>
              <div className="text-md">
                <p className="font-sans-cond">
                  <span className="text-lightning font-sans-normal mr-4">
                    RGB
                  </span>{" "}
                  255, 255, 255
                </p>
                <p className="font-sans-cond">
                  <span className="text-lightning font-sans-normal mr-4">
                    HSL
                  </span>{" "}
                  0&deg;, 0%, 100%
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="style-guide" className="flex items-center justify-between">
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
        <h1 className="font-sans-cond text-md text-lightning uppercase tracking-tight">
          style guide
        </h1>
      </section>

      <section id="typography">
        <h1 className="numbered-title">
          <span>02</span> typography
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="typo-title">
                <p className="font-bold">Text Preset 1 - Bellefair Regular</p>
                <p>144px - 171.9% Line Height(Normal) - 0px Letter Spacing</p>
              </div>
              <h1 className="text-4xl uppercase text-white font-serif">
                earth
              </h1>
            </div>

            <div className="space-y-4">
              <div className="typo-title">
                <p className="font-bold">Text Preset 2 - Bellefair Regular</p>
                <p>100px - 114.6% Line Height(Normal) - 0px Letter Spacing</p>
              </div>
              <h1 className="text-3xl uppercase text-white font-serif">
                venus
              </h1>
            </div>

            <div className="space-y-4">
              <div className="typo-title">
                <p className="font-bold">Text Preset 3 - Bellefair Regular</p>
                <p>56px - 64.2% Line Height(Normal) - 0px Letter Spacing</p>
              </div>
              <h1 className="text-2xl uppercase text-white font-serif">
                jupiter & saturn
              </h1>
            </div>

            <div className="space-y-4">
              <div className="typo-title">
                <p className="font-bold">Text Preset 4 - Bellefair Regular</p>
                <p>32px - 387% Line Height(Normal) - 0px Letter Spacing</p>
              </div>
              <h1 className="text-xl uppercase text-white font-serif">
                uranus, neptune & pluto
              </h1>
            </div>

            <div className="space-y-4">
              <div className="typo-title">
                <p className="font-bold">
                  Text Preset 5 - Barlow Condensed Regular
                </p>
                <p>28px - 33.6% Line Height(Normal) - 4px Letter Spacing</p>
              </div>
              <h1 className="text-lg uppercase text-white font-serif tracking-tight">
                haumea, sedna, eris & ceres
              </h1>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="typo-title">
                <p className="font-bold">Text Preset 6 - Bellefair Regular</p>
                <p>28px - 32.1% Line Height(Normal) - 0px Letter Spacing</p>
              </div>
              <h1 className="text-lg uppercase text-white font-serif">
                384, 400 km
              </h1>
            </div>

            <div className="space-y-4">
              <div className="typo-title">
                <p className="font-bold">
                  Text Preset 7 - Barlow Condensed Regular
                </p>
                <p>14px - 16.8% Line Height(Normal) - 2px Letter Spacing</p>
              </div>
              <h1 className="text-xs uppercase text-white font-sans-cond tracking-tightest">
                avg. distance
              </h1>
            </div>

            <div className="space-y-4">
              <div className="typo-title">
                <p className="font-bold">
                  Text Preset 8 - Barlow Condensed Regular
                </p>
                <p>16x - 19.2% Line Height(Normal) - 2px Letter Spacing</p>
              </div>
              <h1 className="text-sm uppercase text-white font-sans-cond tracking-tighter">
                europa
              </h1>
            </div>

            <div className="space-y-4">
              <div className="typo-title">
                <p className="font-bold">Text Preset 9 - Barlow Regular</p>
                <p>18px - 180% Line Height(Normal) - 2px Letter Spacing</p>
              </div>
              <h1 className="text-md text-white font-sans-normal tracking-tighter">
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
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section id="spacing" className="space-y-12">
        <h1 className="numbered-title">
          <span>03</span> spacing
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-24 md:gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-md text-lightning">
              <p className="font-bold">1600</p>
              <p>128px</p>
            </div>
            <div className="w-[128px] h-[42px] bg-lightning border-0 outline-0"></div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-md text-lightning">
              <p className="font-bold">1200</p>
              <p>96px</p>
            </div>
            <div className="w-[96px] h-[42px] bg-lightning border-0 outline-0"></div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-md text-lightning">
              <p className="font-bold">1000</p>
              <p>80px</p>
            </div>
            <div className="w-[80px] h-[42px] bg-lightning border-0 outline-0"></div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-md text-lightning">
              <p className="font-bold">800</p>
              <p>64px</p>
            </div>
            <div className="w-[64px] h-[42px] bg-lightning border-0 outline-0"></div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-md text-lightning">
              <p className="font-bold">600</p>
              <p>48px</p>
            </div>
            <div className="w-[48px] h-[42px] bg-lightning border-0 outline-0"></div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-md text-lightning">
              <p className="font-bold">500</p>
              <p>40px</p>
            </div>
            <div className="w-[40px] h-[42px] bg-lightning border-0 outline-0"></div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-md text-lightning">
              <p className="font-bold">400</p>
              <p>32px</p>
            </div>
            <div className="w-[32px] h-[42px] bg-lightning border-0 outline-0"></div>
          </div>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-7 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-md text-lightning">
              <p className="font-bold">300</p>
              <p>24px</p>
            </div>
            <div className="w-[24px] h-[42px] bg-lightning border-0 outline-0"></div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-md text-lightning">
              <p className="font-bold">200</p>
              <p>16px</p>
            </div>
            <div className="w-[16px] h-[42px] bg-lightning border-0 outline-0"></div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-md text-lightning">
              <p className="font-bold">150</p>
              <p>12px</p>
            </div>
            <div className="w-[12px] h-[42px] bg-lightning border-0 outline-0"></div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-md text-lightning">
              <p className="font-bold">100</p>
              <p>8px</p>
            </div>
            <div className="w-[8px] h-[42px] bg-lightning border-0 outline-0"></div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-md text-lightning">
              <p className="font-bold">50</p>
              <p>4px</p>
            </div>
            <div className="w-[4px] h-[42px] bg-lightning border-0 outline-0"></div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-md text-lightning">
              <p className="font-bold">25</p>
              <p>2px</p>
            </div>
            <div className="w-[2px] h-[42px] bg-lightning border-0 outline-0"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DesignSystem;
