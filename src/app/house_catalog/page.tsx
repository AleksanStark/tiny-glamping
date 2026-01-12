import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import HouseCard from "@/components/HouseCard/HouseCard";

import SvgSearch from "@/icons/Search";
export default function HouseCatalog() {
  // const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  // const [isBeginning, setIsBeginning] = useState(false);
  // const [isEnd, setIsEnd] = useState(false);
  return (
    <>
      <section className="bg-[#0B3A2C] rounded-bl-4xl rounded-br-4xl px-3 py-2  mb-6 md:mb-8 lg:mb-14  text-center xl:mb-11 xl:px-[50px]">
        <Header burger_color="white" navlink_color="#F9F9F9" />

        <div>
          <h1 className="text-3xl text-[#F9F9F9] font-bold mb-4 lg:text-5xl">
            Choose the house that suits you best
          </h1>

          <p className="text-[#F9F9F9] mb-4 lg:text-sm">
            Each TinyGlent home has a unique character and story. Explore our
            collection of mobile glamping units to find your next adventure
          </p>
        </div>
        {/* <div className="xs:hidden lg:block mb-3">
          <SliderBtns swiper={swiper} isBeginning={isBeginning} isEnd={isEnd} />
        </div> */}

        {/* <Slider
          onStateChange={(isBeginning, isEnd) => {
            setIsBeginning(isBeginning);
            setIsEnd(isEnd);
          }}
          onSwiperReady={setSwiper}
        />
        <div className="lg:hidden xs:block mb-4">
          <SliderBtns swiper={swiper} isBeginning={isBeginning} isEnd={isEnd} />
        </div> */}

        {/* <div className="flex-row-center gap-4">
          <ChooseBtn color="" text_color="#F9F9F9">
            Find out more
          </ChooseBtn>
        </div> */}
        <section className="mb-6 md:mb-8 lg:mb-14 bg-[#09261D] rounded-4xl  px-5 py-4">
          <form
            className="flex xs:flex-col xl:flex-row justify-center items-center  gap-3"
            action=""
          >
            <div
              className="bg-[#F9F9F9] rounded-4xl base:py-2 base:px-3 w-full xs:px-2 xs:py-1 flex-row-between gap-2 xs:gap-2 xs:justify-around border border-transparent
    focus-within:border-blue-500
    focus-within:ring-2
    focus-within:ring-blue-200
    transition"
            >
              <input
                className=" placeholder:text-lg  placeholder:text-[#b4b4b4] outline-none xs:min-w-48"
                placeholder="Search a house"
                type="text"
              />
              <button className="bg-black rounded-full flex-col-center p-2">
                <SvgSearch />
              </button>
            </div>

            <select
              className="form-field lg:text-lg lg:px-5 lg:py-2.5"
              name=""
              id=""
            >
              <option value="Date">Date</option>
            </select>
            <select
              className="form-field xl:w-60 lg:text-lg lg:px-5 lg:py-2.5"
              name=""
              id=""
            >
              <option value="Number of guests">Number of guests</option>
            </select>
            <select
              className="form-field lg:text-lg lg:px-5 lg:py-2.5"
              name=""
              id=""
            >
              <option value="Style">Style</option>
            </select>
            <select className="form-field lg:text-lg lg:px-5 lg:py-2.5" id="">
              <option value="Location">Location</option>
            </select>
            <select
              className="form-field lg:text-lg lg:px-5 lg:py-2.5"
              name=""
              id=""
            >
              <option value="Location">Autonomy</option>
            </select>
          </form>
        </section>
      </section>
      <div
        className="container
      "
      >
        <section className="mb-6 md:mb-8 lg:mb-14">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <li className="flex flex-col gap-1 xl:gap-4">
              <HouseCard
                href="/houses/1"
                price={1500}
                guests={3}
                image_path="/house1.jpg"
                classNameImg="size-85"
                classNameBtns="top-75"
              />

              <h3 className="font-semibold text-2xl">Romantic</h3>
              <p className="text-sm text-[#09261D] font-[family-name:var(--font-poppins)]">
                An intimate retreat crafted for two. A luxurious king-size bed,
                a private outdoor bath for stargazing, and a cozy interior where
                every element whispers romance and serenity.
              </p>
            </li>
            <li className="flex flex-col gap-1 xl:gap-4">
              <HouseCard
                href="/houses/2"
                price={800}
                guests={4}
                image_path="/house2.jpg"
                classNameImg="size-85"
                classNameBtns="top-75"
              />
              <h3 className="font-semibold text-2xl">For the company</h3>
              <p className="text-sm text-[#09261D] font-[family-name:var(--font-poppins)]">
                A spacious living room, a full kitchen, and separate bedrooms.
                Ideal for gatherings with friends or family vacations where no
                one feels cramped.
              </p>
            </li>
            <li className="flex flex-col gap-1 xl:gap-4">
              <HouseCard
                href="/houses/3"
                price={1200}
                guests={2}
                image_path="/house3.jpg"
                classNameImg="size-85"
                classNameBtns="top-75"
              />
              <h3 className="font-semibold text-2xl">Modern</h3>
              <p className="text-sm text-[#09261D] font-[family-name:var(--font-poppins)]">
                Minimalism and thoughtful design. Panoramic glazing, clean
                lines, and intelligent lighting create an atmosphere of harmony
                with nature without compromising comfort.
              </p>
            </li>
            <li className="flex flex-col gap-1 xl:gap-4">
              <HouseCard
                href="/houses/4"
                price={600}
                guests={3}
                image_path="/house4.jpg"
                classNameImg="size-85"
                classNameBtns="top-75"
              />
              <h3 className="font-semibold text-2xl">Adventure</h3>
              <p className="text-sm text-[#09261D] font-[family-name:var(--font-poppins)]">
                Built for the explorers at heart. Durable, weather-resistant
                materials, ample gear storage, and an energizing interior that
                serves as the perfect basecamp before a day of hiking and
                discovery.
              </p>
            </li>
            <li className="flex flex-col gap-1 xl:gap-4">
              <HouseCard
                href="/houses/5"
                price={900}
                guests={3}
                image_path="/house5.jpg"
                classNameImg="size-85"
                classNameBtns="top-75"
              />
              <h3 className="font-semibold text-2xl">Cosy</h3>
              <p className="text-sm text-[#09261D] font-[family-name:var(--font-poppins)]">
                Warm wood, a soft blanket, and the crackling fireplace. A home
                where every detail is designed for relaxation and leisurely
                evenings in the embrace of nature.
              </p>
            </li>
            <li className="flex flex-col gap-1 xl:gap-4">
              <HouseCard
                href="/houses/6"
                price={1400}
                guests={5}
                image_path="/house6.jpg"
                classNameImg="size-85"
                classNameBtns="top-75"
              />
              <h3 className="font-semibold text-2xl">Family</h3>
              <p className="text-sm text-[#09261D] font-[family-name:var(--font-poppins)]">
                A safe and thoughtful space for making memories. Separate
                bedrooms for parents and children, a durable yet stylish
                interior, and a layout that brings everyone together for shared
                meals and games.
              </p>
            </li>
          </ul>
        </section>

        <Footer />

        <BurgerMenu />
      </div>
    </>
  );
}
