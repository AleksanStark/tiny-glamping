import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import ChooseBtn from "@/components/ChooseBtn/ChooseBtn";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ReserveBtn from "@/components/ReserveBtn/ReserveBtn";
import Image from "next/image";

export default function LocationMap() {
  return (
    <div className="container">
      <Header burger_color="black" className="mb-6" />
      <section className="mb-6 md:mb-8 lg:mb-14">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Image
            className="place-self-center lg:place-self-start"
            src={"/map.jpg"}
            width={600}
            height={600}
            alt="image map"
          />
          <div className="flex flex-col justify-between items-center gap-4">
            <h1 className="text-3xl font-bold md:text-5xl lg:text-3xl xl:text-[44px]">
              Interactive map with pins
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-2">
              <li className="bg-[#D8F3EA] p-3 rounded-3xl flex-col-center gap-4">
                <h4 className="text-2xl font-bold">House Romantic</h4>
                <Image
                  className="w-full h-[180px] rounded-3xl"
                  src={"/house1.jpg"}
                  width={440}
                  height={379}
                  alt=" cozy house"
                />

                <ReserveBtn
                  color="#054E37"
                  text_color="#F9F9F9"
                  className="w-full"
                />
              </li>
              <li className="bg-[#D8F3EA] p-3 rounded-3xl flex-col-center gap-4">
                <h4 className="text-2xl font-bold">House Company </h4>
                <Image
                  className="w-full h-[180px] rounded-3xl"
                  src={"/house2.jpg"}
                  width={440}
                  height={379}
                  alt=" cozy house"
                />

                <ReserveBtn
                  color="#054E37"
                  text_color="#F9F9F9"
                  className="w-full"
                />
              </li>
              <li className="bg-[#D8F3EA] p-3 rounded-3xl flex-col-center gap-4">
                <h4 className="text-2xl font-bold">House Modern</h4>
                <Image
                  className="w-full h-[180px] rounded-3xl"
                  src={"/house3.jpg"}
                  width={440}
                  height={379}
                  alt=" cozy house"
                />

                <ReserveBtn
                  color="#054E37"
                  text_color="#F9F9F9"
                  className="w-full"
                />
              </li>
              <li className="bg-[#D8F3EA] p-3 rounded-3xl flex-col-center gap-4">
                <h4 className="text-2xl font-bold">House Adventure</h4>
                <Image
                  className="w-full h-[180px] rounded-3xl"
                  src={"/house4.jpg"}
                  width={440}
                  height={379}
                  alt=" cozy house"
                />

                <ReserveBtn
                  color="#054E37"
                  text_color="#F9F9F9"
                  className="w-full"
                />
              </li>
              <li className="bg-[#D8F3EA] p-3 rounded-3xl flex-col-center gap-4">
                <h4 className="text-2xl font-bold">House Cosy</h4>
                <Image
                  className="w-full h-[180px] rounded-3xl"
                  src={"/house5.jpg"}
                  width={440}
                  height={379}
                  alt=" cozy house"
                />

                <ReserveBtn
                  color="#054E37"
                  text_color="#F9F9F9"
                  className="w-full"
                />
              </li>
              <li className="bg-[#D8F3EA] p-3 rounded-3xl flex-col-center gap-4">
                <h4 className="text-2xl font-bold">House Family</h4>
                <Image
                  className="w-full h-[180px] rounded-3xl"
                  src={"/house6.jpg"}
                  width={440}
                  height={379}
                  alt=" cozy house"
                />

                <ReserveBtn
                  color="#054E37"
                  text_color="#F9F9F9"
                  className="w-full"
                />
              </li>
            </ul>
            <ChooseBtn color="" text_color="#000000">
              Show list of houses
            </ChooseBtn>
          </div>
        </div>
      </section>

      <Footer />
      <BurgerMenu />
    </div>
  );
}
