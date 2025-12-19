import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import ChooseBtn from "@/components/ChooseBtn/ChooseBtn";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function LocationMap() {
  return (
    <>
      <Header burger_color="black" className="mb-4" />
      <section className="mb-6">
        <div className="flex-col-center gap-4">
          <Image src={"/map.jpg"} width={350} height={350} alt="image map" />
          <h1 className="text-3xl font-bold">Interactive map with pins</h1>
          <ChooseBtn color="" text_color="#000000">
            Show list of houses
          </ChooseBtn>
        </div>
      </section>

      <Footer />
      <BurgerMenu />
    </>
  );
}
