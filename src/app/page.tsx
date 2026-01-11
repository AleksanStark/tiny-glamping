import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import ChooseBtn from "@/components/ChooseBtn/ChooseBtn";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Header burger_color="black" />

      <section className="mb-6 md:mb-8 lg:mb-14">
        <div className="relative w-full grid md:aspect-[4/3] xs:aspect-[3/3] lg:aspect-[6/3] overflow-hidden   -z-0">
          <Image
            src="/hero_bg1.jpg"
            alt="Background"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover rounded-4xl"
            priority
          />
          <div className="absolute inset-0 bg-black/40 rounded-4xl shadow-[var(--hero-shadow)]" />

          <div className="absolute inset-0 z-10 grid grid-cols-1  text-white base:px-4  xs:px-3 lg:px-14">
            <div className="col-start-1 row-start-2">
              <div className="flex flex-col gap-5 lg:gap-7">
                <h1 className="text-2xl font-bold md:text-5xl">
                  Find your perfect  <br /> glamping destination
                </h1>
                <p className="text-[#F9F9F9] max-w-[40ch] text-lg">
                  TinyGlent offers unique glamping experiences on wheels. Live
                  in the wild without sacrificing luxury and design.
                </p>
                <div className="flex items-start justify-start  gap-3">
                  <ChooseBtn color="" text_color="#f9f9f9">
                    Choose a house
                  </ChooseBtn>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-6 md:mb-8 lg:mb-14">
        <div className="mb-6 flex xs:flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex gap-4">
            <div className="w-[3px] h-16 bg-black" />
            <div className="flex flex-col">
              <h2 className="xs:text-3xl md:text-4xl font-bold font-[family-name:var(--font-inter)]">
                Our advantages
              </h2>
              <h4 className="text-lg text-[#41c44a] font-[family-name:var(--font-jost)]">
                Why clients choose us
              </h4>
            </div>
          </div>
          <div className="flex md:justify-center md:items-center gap-3">
            <ChooseBtn color="" text_color="#193D1F">
              Choose a house
            </ChooseBtn>
          </div>
        </div>

        <ul className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-5  lg:h-[350px] xl:gap-28">
          <li className="advantages-card max-w-60 w-full max-h-60  justify-self-start">
            <Image
              className="size-11.4"
              src="/advantages1.png"
              alt="design symbol"
              width={50}
              height={50}
            />
            <h3 className="text-3xl md:text-4xl text-[var(--secondary-color)] font-[family-name:var(--font-inter)] font-bold">
              Design
            </h3>
            <p className="text-sm  leading-relaxed text-[var(--secondary-color)]">
              Unique architecture, thought out to the last detail. Not just a
              house, but a work of art.
            </p>
          </li>

          <li className="advantages-card max-w-60 max-h-60 w-full  justify-self-end self-end">
            <Image
              className="size-11.4"
              src="/advantages2.png"
              alt="Nature symbol"
              width={50}
              height={50}
            />
            <h3 className="text-3xl md:text-4xl text-[var(--secondary-color)] font-[family-name:var(--font-inter)] font-bold">
              Nature
            </h3>
            <p className=" text-sm  text-[var(--secondary-color)]">
              Complete immersion in nature. We select the most picturesque and
              secluded locations.
            </p>
          </li>
          <li className="advantages-card max-w-60 max-h-60 w-full justify-self-start">
            <Image
              className="size-11.4"
              src="/advantages3.png"
              alt="Mobility symbol"
              width={50}
              height={50}
            />
            <h3 className="text-3xl md:text-4xl text-[var(--secondary-color)] font-[family-name:var(--font-inter)] font-bold">
              Mobility
            </h3>
            <p className="text-sm  text-[var(--secondary-color)]">
              Your home travels with you. New landscapes and experiences every
              season.
            </p>
          </li>
          <li className="advantages-card max-w-60 max-h-60 w-full justify-self-end self-end">
            <Image
              className="size-11.4"
              src="/advantages4.png"
              alt="Comfort symbol"
              width={50}
              height={50}
            />
            <h3 className="text-3xl md:text-4xl text-[var(--secondary-color)] font-[family-name:var(--font-inter)] font-bold">
              Comfort
            </h3>
            <p className="text-sm text-[var(--secondary-color)]">
              Luxury is in the details. A bed, high-quality finishes, a full
              bathroom, and everything you need.
            </p>
          </li>
        </ul>
      </section>
      <section className="mb-6 md:mb-8 lg:mb-14">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex-col-center bg-[#D8F3EA] py-5 px-5 gap-3 rounded-4xl lg:gap-7">
            <h2 className="text-3xl font-bold text-center lg:text-4xl xl:text-5xl">
              Location of houses in real time
            </h2>
            <div className="flex justify-center">
              <p className="text-base font-[family-name:var(--font-jost)] max-w-[25ch] lg:text-2xl">
                Our homes are on the move. Track their progress in real time.
              </p>
            </div>
          </div>
          <Image
            className="w-full"
            src={"/map.jpg"}
            width={350}
            height={350}
            alt="image map"
          />
        </div>
      </section>
      <Footer />
      <BurgerMenu />
    </div>
  );
}
