import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import ChooseBtn from "@/components/ChooseBtn/ChooseBtn";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SvgArrowDown from "@/icons/ArrowDown";
import Image from "next/image";

export default function ToPartners() {
  return (
    <>
      <Header />
      <section className="mb-6">
        <div className="flex-col-center gap-4">
          <h1 className="text-3xl font-bold">Uncover the magic of glamping</h1>
          <p className="text-lg font-medium text-[#464646]">
            For landowners, winemakers, and farmers: Elevate your property into
            a place of power by partnering with TinyGlent and hosting our
            architectural houses.
          </p>

          <ChooseBtn color="" text_color="#151515">
            Present your land
          </ChooseBtn>

          <Image
            className="rounded-4xl  shadow-[var(--image-shadow)]"
            src={"/hero_bg2.jpg"}
            width={350}
            height={350}
            alt="Houses"
          />

          <h4 className="text-sm text-center text-[#464646]">
            Curated by Nature. Chosen by TinyGlent
          </h4>
        </div>
      </section>
      <section className="mb-6">
        <div className="flex-col-center gap-4 text-center">
          <h2 className="text-2xl font-bold">Benefits of cooperation</h2>
          <p className="font-[family-name:var(--font-poppins)] text-[#151515]">
            You have a unique location - we have unique architecture. Let&apos;s
            create a place of power together. We handle everything: delivery,
            installation, and marketing of the home. You provide the land and
            become part of an exclusive community.
          </p>
          <ChooseBtn color="" text_color="#151515">
            Benefits
          </ChooseBtn>

          <ul className="flex-col-center gap-4">
            <li className="border-2 border-[#151515] px-4 py-4 rounded-2xl flex-col-center gap-3">
              <Image src={"/revenue.png"} width={80} height={80} alt="" />
              <h3 className="text-2xl font-semibold">Passive income</h3>
              <p>
                Stable rental payments from houses on your territory without
                your involvement in operational activities
              </p>
            </li>
            <li className="border-2 border-[#151515] px-4 py-4 rounded-2xl flex-col-center gap-3">
              <Image src={"/company.png"} width={80} height={80} alt="" />
              <h3 className="text-2xl font-semibold">
                Ready-made infrastructure
              </h3>
              <p>
                Fully equipped turnkey homes:we take care of installation,
                maintenance, and connection of all utilities
              </p>
            </li>
            <li className="border-2 border-[#151515] px-4 py-4 rounded-2xl flex-col-center gap-3">
              <Image src={"/group.png"} width={80} height={80} alt="" />
              <h3 className="text-2xl font-semibold">Attracting guests</h3>
              <p>
                Additional customer flow for your core business (wineries,
                restaurants, farms) through our marketing system
              </p>
            </li>
            <li className="border-2 border-[#151515] px-4 py-4 rounded-2xl flex-col-center gap-3">
              <Image src={"/status.png"} width={80} height={80} alt="" />
              <h3 className="text-2xl font-semibold">Status upgrade</h3>
              <p>
                Strengthening the positioning as a modern premium location
                through architectural features on the premises
              </p>
            </li>
          </ul>
          <h4>Leave a request below</h4>
          <SvgArrowDown />
        </div>
      </section>
      <Footer />
      <BurgerMenu />
    </>
  );
}
