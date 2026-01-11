import BookingHouseBtn from "@/components/BookingHouseBtn/BookingHouseBtn";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import Header from "@/components/Header/Header";
import HousesInfoList from "@/components/HousesInfoList/HousesInfoList";
import SvgDollar from "@/icons/DollarIcon";
import SvgGuests from "@/icons/Guests";
import SvgMap from "@/icons/Map";
import SvgSquareMeters from "@/icons/SquareMeters";
import Image from "next/image";

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
  ];
}

export default function HousePage({ params }: { params: { id: string } }) {
  type HouseContent = {
    title: string;
    text: string;
    image: string;
    price: number;
    guests: number;
  };
  const houseContent: Record<string, HouseContent> = {
    "1": {
      title: "Romantic",
      text: "An intimate retreat crafted for two. A luxurious king-size bed,a private outdoor bath for stargazing, and a cozy interior where every element whispers romance and serenity.",
      image: "/house1.jpg",
      price: 1500,
      guests: 3,
    },
    "2": {
      title: "For the company",
      text: "A spacious living room, a full kitchen, and separate bedrooms. Ideal for gatherings with friends or family vacations where no one feels cramped.",
      image: "/house2.jpg",
      price: 800,
      guests: 4,
    },
    "3": {
      title: "Modern",
      text: " Minimalism and thoughtful design. Panoramic glazing, clean lines, and intelligent lighting create an atmosphere of harmony with nature without compromising comfort.",
      image: "/house3.jpg",
      price: 1200,
      guests: 2,
    },
    "4": {
      title: "Adventure",
      text: "Built for the explorers at heart. Durable, weather-resistant materials, ample gear storage, and an energizing interior that serves as the perfect basecamp before a day of hiking and discovery.",
      image: "/house4.jpg",
      price: 600,
      guests: 2,
    },
    "5": {
      title: "Cosy",
      text: "Warm wood, a soft blanket, and the crackling fireplace. A home where every detail is designed for relaxation and leisurely evenings in the embrace of nature.",
      image: "/house5.jpg",
      price: 900,
      guests: 3,
    },
    "6": {
      title: "Family",
      text: " A safe and thoughtful space for making memories. Separate bedrooms for parents and children, a durable yet stylish interior, and a layout that brings everyone together for shared meals and games.",
      image: "/house6.jpg",
      price: 1400,
      guests: 5,
    },
  };

  return (
    <>
      <section className="pb-4">
        <div className="container">
          <Header />

          <div className="grid xl:grid-cols-[1fr_120px_500px] gap-x-12 ">
            <HousesInfoList
              guestsAmount={houseContent[params.id].guests}
              price={houseContent[params.id].price}
            />
            <div className="w-[2px] h-full mx-auto bg-[#708A82]"></div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[#0B3A2C] font-bold text-xl">
                {houseContent[params.id].title}
              </h1>
              <p>{houseContent[params.id].text}</p>

              <ul className="flex-row-center gap-3">
                <li className="bg-[#FBFAEB] shadow-[var(--house-shadow)] rounded-3xl px-2.5 py-1 flex-row-center gap-2">
                  <SvgDollar />
                  <h5 className="font-bold text-xs">
                    {houseContent[params.id].price}/night
                  </h5>
                </li>
                <li className="bg-[#FBFAEB] shadow-[var(--house-shadow)] rounded-3xl px-2.5 py-1 flex-row-center gap-2">
                  <SvgGuests />
                  <h5 className="font-bold text-xs">
                    {houseContent[params.id].guests} guests
                  </h5>
                </li>
                <li className="bg-[#FBFAEB] shadow-[var(--house-shadow)] rounded-3xl px-2.5 py-1 flex-row-center gap-2">
                  <SvgSquareMeters />
                  <h5 className="font-bold text-xs">150 sqft</h5>
                </li>
              </ul>
              <Image
                className="rounded-[15px] shadow-[var(--house-image-shadow)] place-self-center"
                src={houseContent[params.id].image}
                width={500}
                height={300}
                alt="House"
              />
              <div className="flex-row-center gap-2">
                <SvgMap />
                <h3 className="text-[#0b3a2c] font-bold">
                  Eden - Currently in Kvareli, Georgia
                </h3>
              </div>
              <BookingHouseBtn href="" className="place-self-center" />
            </div>
          </div>
        </div>
      </section>
      <BurgerMenu />
    </>
  );
}
