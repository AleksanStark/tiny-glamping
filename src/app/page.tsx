import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import ChooseBtn from "@/components/ChooseBtn/ChooseBtn";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ReserveBtn from "@/components/ReserveBtn/ReserveBtn";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header burger_color="black" />

      <section className="mb-6">
        <div className="relative w-full h-[320px] -z-0">
          <Image
            src="/hero_bg1.jpg"
            alt="Background"
            fill
            className="object-cover rounded-4xl"
            priority
          />
          <div className="absolute inset-0 bg-black/40 rounded-4xl shadow-[var(--hero-shadow)]" />

          <div className="absolute inset-0 z-10 flex-col-center text-white px-4 gap-4 ">
            <h1 className="text-2xl font-bold">
              Find your perfect  glamping destination
            </h1>
            <p className="text-[#F9F9F9]">
              TinyGlent offers unique glamping experiences on wheels. Live in
              the wild without sacrificing luxury and design.
            </p>
            <div className="flex-row-center gap-3">
              <ReserveBtn color="#000000" text_color="" />
              <ChooseBtn color="" text_color="#f9f9f9">
                Choose a house
              </ChooseBtn>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-6">
        <div className="flex items-start gap-2 mb-4">
          <div className="w-[3px] h-16 bg-black shrink-0" />

          <div>
            <h2 className="text-3xl font-bold font-[family-name:var(--font-inter)]">
              Our advantages
            </h2>
            <span className="text-lg text-[#41c44a] font-[family-name:var(--font-jost)]">
              Why clients choose us
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <ReserveBtn color="#193d1f" text_color="#f9f9f9" />
          <ChooseBtn color="" text_color="#193D1F">
            Choose a house
          </ChooseBtn>
        </div>

        <ul className="advantages-list ">
          <li className="advantages-card">
            <Image
              src="/advantages1.png"
              alt="design symbol"
              width={35}
              height={35}
            />
            <h3 className="text-2xl text-[var(--secondary-color)] font-[family-name:var(--font-inter)] font-bold">
              Design
            </h3>
            <p className="w-44 text-[var(--secondary-color)]">
              Unique architecture, thought out to the last detail. Not just a
              house, but a work of art.
            </p>
          </li>
          <li className="advantages-card">
            <Image
              src="/advantages2.png"
              alt="Nature symbol"
              width={35}
              height={35}
            />
            <h3 className="text-2xl text-[var(--secondary-color)] font-[family-name:var(--font-inter)] font-bold">
              Nature
            </h3>
            <p className="w-44 text-[var(--secondary-color)]">
              Complete immersion in nature. We select the most picturesque and
              secluded locations.
            </p>
          </li>
          <li className="advantages-card">
            <Image
              src="/advantages3.png"
              alt="Mobility symbol"
              width={35}
              height={35}
            />
            <h3 className="text-2xl text-[var(--secondary-color)] font-[family-name:var(--font-inter)] font-bold">
              Mobility
            </h3>
            <p className="w-44 text-[var(--secondary-color)]">
              Your home travels with you. New landscapes and experiences every
              season.
            </p>
          </li>
          <li className="advantages-card">
            <Image
              src="/advantages4.png"
              alt="Comfort symbol"
              width={35}
              height={35}
            />
            <h3 className="text-2xl text-[var(--secondary-color)] font-[family-name:var(--font-inter)] font-bold">
              Comfort
            </h3>
            <p className="w-44 text-[var(--secondary-color)]">
              Luxury is in the details. A bed, high-quality finishes, a full
              bathroom, and everything you need.
            </p>
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <div className="flex-col-center bg-[#D8F3EA] py-8 px-5 gap-3 rounded-4xl mb-4">
          <h2 className="text-3xl font-[family-name:var(--font-inter)] font-bold text-center">
            Location of houses in real time
          </h2>
          <div className="flex justify-center">
            <p className="text-base font-[family-name:var(--font-jost)] max-w-[220px]">
              Our homes are on the move. Track their progress in real time.
            </p>
          </div>

          <ReserveBtn color="#193D1F" text_color="#F9F9F9" width={200} />
        </div>
        <div>
          <Image src={"/map.jpg"} width={350} height={350} alt="image map" />
        </div>
      </section>
      <Footer />
      <BurgerMenu />
    </>
  );
}
