import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import ChooseBtn from "@/components/ChooseBtn/ChooseBtn";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import SvgArrowDown from "@/icons/ArrowDown";
import SvgClip from "@/icons/Clip";
import Image from "next/image";

export default function ToPartners() {
  return (
    <>
      <div className="container">
        <Header />
        <section className="mb-6 md:mb-8 lg:mb-14 text-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
            <div className="flex flex-col gap-3 place-self-end">
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-left lg:max-w-[16ch] average:text-[80px] average:absolute average:top-49">
                Uncover the ma
                <span className="text-[#FFC634] average:inline">gic</span> of
                glamping
              </h1>
              <p className="text-lg font-medium text-[#464646] text-left">
                For landowners, winemakers, and farmers: Elevate your property
                into a place of power by partnering with TinyGlent and hosting
                our architectural houses.
              </p>

              <ChooseBtn color="" text_color="#151515" className="lg:w-72">
                Present your land
              </ChooseBtn>
            </div>

            <Image
              className=" w-full  rounded-4xl  shadow-[var(--image-shadow)]"
              src={"/hero_bg2.jpg"}
              width={350}
              height={350}
              alt="Houses"
            />
          </div>
          <h4 className="text-sm text-center text-[#464646]">
            Curated by Nature. Chosen by TinyGlent
          </h4>
        </section>
        <section className="mb-6 md:mb-8 lg:mb-14">
          <div className="flex-col-center gap-5 text-center">
            <div className=" xs:hidden lg:grid  lg:grid-cols-3 row-start-1 items-center w-full gap-4">
              <ChooseBtn
                color=""
                text_color="#151515"
                className="justify-self-start xs:hidden lg:block px-[30px] py-2.5"
              >
                Benefits
              </ChooseBtn>

              <h2 className="text-2xl md:text-3xl font-extrabold average:text-[50px] lg:justify-self-center w-[20ch] ">
                Benefits of cooperation
              </h2>
              <p className="font-[family-name:var(--font-poppins)] text-[#151515] xs:w-[73ch] lg:w-[73ch] row-start-2 place-self-center col-start-2 col-span-1">
                You have a unique location - we have unique architecture.
                Let&apos;s create a place of power together. We handle
                everything: delivery, installation, and marketing of the home.
                You provide the land and become part of an exclusive community.
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold lg:hidden">
              Benefits of cooperation
            </h2>
            <p className="font-[family-name:var(--font-poppins)] text-[#151515] lg:hidden">
              You have a unique location - we have unique architecture.
              Let&apos;s create a place of power together. We handle everything:
              delivery, installation, and marketing of the home. You provide the
              land and become part of an exclusive community.
            </p>

            <ChooseBtn color="" text_color="#151515" className="lg:hidden">
              Benefits
            </ChooseBtn>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8">
              <li className="border-2 border-[#151515] px-4 py-4 rounded-3xl flex flex-col  gap-3">
                <Image src={"/revenue.png"} width={80} height={80} alt="" />
                <h3 className="text-2xl text-left font-semibold">
                  Passive income
                </h3>
                <p className="text-left">
                  Stable rental payments from houses on your territory without
                  your involvement in operational activities
                </p>
              </li>
              <li className="border-2 border-[#151515] px-4 py-4 rounded-3xl flex flex-col  gap-3">
                <Image src={"/company.png"} width={80} height={80} alt="" />
                <h3 className="text-2xl text-left font-semibold">
                  Ready-made infrastructure
                </h3>
                <p className="text-left">
                  Fully equipped turnkey homes:we take care of installation,
                  maintenance, and connection of all utilities
                </p>
              </li>
              <li className="border-2 border-[#151515] px-4 py-4 rounded-3xl flex flex-col  gap-3">
                <Image src={"/group.png"} width={80} height={80} alt="" />
                <h3 className="text-2xl text-left font-semibold">
                  Attracting guests
                </h3>
                <p className="text-left">
                  Additional customer flow for your core business (wineries,
                  restaurants, farms) through our marketing system
                </p>
              </li>
              <li className="border-2 border-[#151515] px-4 py-4 rounded-3xl flex flex-col  gap-3">
                <Image src={"/status.png"} width={80} height={80} alt="" />
                <h3 className="text-2xl text-left font-semibold">
                  Status upgrade
                </h3>
                <p className="text-left">
                  Strengthening the positioning as a modern premium location
                  through architectural features on the premises
                </p>
              </li>
            </ul>
            <h4>Leave a request below</h4>
            <SvgArrowDown />
          </div>
        </section>
        <section
          className="
           mb-6 md:mb-8 lg:mb-14
    relative
    bg-[url('/partners_section.jpg')]
    average:bg-[1300px_700px]
    xs:bg-cover
    xs:bg-center
    rounded-3xl
    overflow-hidden
   
  "
        >
          <div className="absolute inset-0 bg-black/30" />

          <div className="relative flex-col-center average:w-[1300px] average:h-[700px] max-w-[1440px] px-4 py-16 md:py-24 average:px-[50px] average:py-[85px]">
            <div
              className="
        grid
        grid-cols-1
        lg:grid-cols-2
        items-center
        gap-8
        average:gap-16
      "
            >
              {/* LEFT CONTENT */}
              <div className="text-white max-w-xl">
                <h2
                  className="
            text-3xl
            sm:text-4xl
            average:text-[56px]
            average:w-[100ch]
            font-semibold
            leading-tight
            mb-6
          "
                >
                  Submit your request <br /> for consideration
                </h2>

                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  Fill out the plot description: name, region, cadastral number,
                  description of utilities on the plot, contact information and
                  photographs of the plot.
                </p>
              </div>

              {/* FORM CARD */}
              <div
                className="
          backdrop-blur-xl
          bg-white/30
          rounded-3xl
          p-6
          sm:p-8
          space-y-4
        "
              >
                <form
                  action="
                "
                  className="flex flex-col gap-3"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      className="form-field lg:text-xl lg:py-[15px]"
                      placeholder="Name"
                    />
                    <input
                      className="form-field lg:text-xl lg:py-[15px]"
                      placeholder="Phone number"
                    />
                  </div>
                  <input
                    className="form-field lg:text-xl lg:py-[15px]"
                    placeholder="Region"
                  />
                  <input
                    className="form-field lg:text-xl lg:py-[15px]"
                    placeholder="Cadastral number of the plot"
                  />
                  <input
                    className="form-field lg:text-xl lg:py-[15px]"
                    placeholder="Description of communications"
                  />

                  <label
                    htmlFor="file"
                    className="flex-row-center bg-[#F9F9F9] border-1 border-[#464646] border-dashed rounded-[50px] p-2 w-full "
                  >
                    <SvgClip />
                    Attach photos of the site
                  </label>
                  <input
                    className="sr-only"
                    id="file"
                    type="file"
                    name="file"
                    accept="image/*"
                  />

                  <button className="form-field bg-[#F9F9F9] text-[#41C44A] text-lg font-[family-name:var(--font-inter)] font-bold p-2 lg:text-[28px] lg:py-[18px] rounded-[50px] ">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="mb-6 md:mb-8 lg:mb-14 relative bg-[url('/partners_bg.jpg')] average:bg-[1440px_576px] xs:bg-cover xs:bg-center rounded-3xl overflow-hidden">
        <div className="flex-col-center average:w-[1440px] average:h-[578px]">
          <div className="z-10 grid grid-cols-1 grid-rows-1 p-4 md:max-w-[536px] lg:max-w-[1000px]  average:max-w-[1040px]">
            <div className="rounded-[20px] bg-[rgba(249,249,249,0.2)] p-4 backdrop-blur-[20px] flex-col-center gap-3 text-center lg:p-[40px]">
              <h2 className="text-2xl md:text-3xl font-bold">
                Get a consultation
              </h2>
              <p className="font-[family-name:var(--font-poppins)] font-light lg:text-left lg:max-w-[68ch]">
                Our team will contact you for a detailed consultation.
                We&apos;ll answer all your questions,help you find the perfect
                option, and offer the best terms for collaboration.
              </p>

              <form
                className="flex xs:flex-col lg:flex-row xs:gap-4 lg:gap-0"
                action=""
              >
                <input
                  placeholder="your@email.com"
                  className="form-field lg:w-[309px] bg-[#7b8d87]/20 placeholder:text-[#464646] text-[#464646]"
                />
                <button className="rounded-[50px] bg-[#7B8D87] text-[#F4EFEF] p-2 font-semibold w-full">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <Footer />
      </div>

      <BurgerMenu />
    </>
  );
}
