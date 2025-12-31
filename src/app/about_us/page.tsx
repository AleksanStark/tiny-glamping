import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <section className="mb-6 md:mb-8 lg:mb-14 bg-[#D8F3EA] pb-4 shadow-[var(--about-shadow)]">
        <div className="container">
          <Header />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-3.5 mb-6 md:mb-8 average:mb-[40px] average:gap-[30px]">
            <div className="flex flex-col gap-4 md:gap-4 average:gap-[30px] place-self-center">
              <div>
                <h2 className="xs:text-xl md:text-3xl lg:text-4xl xl:text-5xl average:text-[50px] font-bold">
                  TinyArc → TinyGlamp
                </h2>
                <h3 className="xs:text-lg md:text-2xl lg:text-3xl xl:text-4xl average:text-[40px] font-bold">
                  from concept to full cycle
                </h3>
              </div>

              <p className=" md:text-base  md:max-w-[35ch] lg:text-lg xl:text-xl  average:max-w-[46ch] average:text-xl font-[family-name:var(--font-poppins)]">
                TinyArc laid the foundation as an architectural firm, creating
                benchmark modular home designs. TinyGlamp is an evolution of
                this approach - we now offer a full service, from design to
                installation.We fully control the process: from the design with
                carefully considered lighting and space to production and
                installation on - site. TinyGlamp is architecture as a complete
                ecosystem, where every detail contributes to the overall
                experience.
              </p>
            </div>
            <Image
              className="w-full rounded-[30px]"
              src={"/about1.jpg"}
              alt=""
              width={550}
              height={550}
            />
          </div>
          <h4 className="text-center font-[family-name:var(--font-poppins)]">
            Architecture that travels
          </h4>
        </div>
      </section>

      <div className="container">
        <section className="mb-6 md:mb-8 lg:mb-14 text-center">
          <div className="flex-col-center gap-2 mb-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl average:text-[80px]  font-bold  ">
              Our <span className="text-[#258766]">team</span>
            </h1>
            <p className="md:max-w-[64ch] lg:max-w-[68ch] lg:text-lg">
              We are a full-service team that transforms your dream of seclusion
              with nature into a premium reality. From the initial concept to a
              move-in ready home under the stars.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3 lg:gap-[95px] md:grid-cols-3">
            <li className="bg-[#1F1C1C] py-5 px-4 lg:px-6 lg:py-8 rounded-[20px] flex-col-center gap-5">
              <Image
                className="w-full"
                src={"/yuri.png"}
                alt="CEO image"
                width={300}
                height={250}
              />
              <div>
                <h3 className="text-[#F9F9F9] text-xl lg:text-3xl font-semibold">
                  Yuri Korsakov
                </h3>
                <h4 className="text-[#F9F9F9] lg:text-sm">
                  Founder & CEO, TinyGlent
                </h4>
              </div>
            </li>
            <li className="bg-[#1F1C1C] py-5 px-4 lg:px-6 lg:py-8 rounded-[20px] flex-col-center gap-5">
              <Image
                className="w-full"
                src={"/sergei.png"}
                alt="CEO image"
                width={300}
                height={250}
              />
              <div>
                <h3 className="text-[#F9F9F9] text-xl lg:text-3xl font-semibold">
                  Sergei Rublev
                </h3>
                <h4 className="text-[#F9F9F9] lg:text-sm">L.V. Architect</h4>
              </div>
            </li>
            <li className="bg-[#1F1C1C] py-5 px-4 lg:px-6 lg:py-8 rounded-[20px] flex-col-center gap-5">
              <Image
                className="w-full"
                src={"/sergei2.png"}
                alt="CEO image"
                width={300}
                height={250}
              />
              <div>
                <h3 className="text-[#F9F9F9] text-xl lg:text-3xl font-semibold">
                  Sergei
                </h3>
                <h4 className="text-[#F9F9F9] lg:text-sm">Marketer</h4>
              </div>
            </li>
          </ul>
        </section>
        <section className="mb-6 md:mb-8 lg:mb-14 bg-[#D8F3EA] p-10  flex-col-center gap-4 shadow-[var(--image-shadow)] rounded-[50px]">
          <h5 className="text-[#258766] font-[family-name:var(--font-jost)] font-medium">
            Contact us
          </h5>
          <div className="flex-col-center gap-5 text-center">
            <h2 className="xs:text-2xl base:text-3xl md:text-4xl font-bold text-center average:text-[60px]">
              Want to reach us directly
            </h2>
            <p className="font-[family-name:var(--font-poppins)] font-light max-w-[30ch] lg:max-w-[52ch]  base:-text-base md:text-lg  xs:text-sm">
              Your perfect adventure starts with a conversation. Choose your
              preferred contact method below, and we&apos;ll help make it a
              reality
            </p>
          </div>

          <ul className="w-full flex xs:flex-col md:flex-row justify-between items-center gap-4">
            <li className="flex flex-col gap-2  xs:items-center md:items-start max-w-[204px]">
              <Image
                className="size-7 md:size-[30px]"
                src="/call.png"
                width={50}
                height={50}
                alt="icon"
              />

              <h3 className="text-xl font-bold text-center md:text-left">
                Give us a call
              </h3>

              <p className="mb-2 text-sm leading-relaxed text-center md:text-left font-[family-name:var(--font-poppins)] font-light max-w-[15ch]">
                Call us so we can discuss everything here and now
              </p>

              <a
                href="tel:+995-591-07-95-33"
                className="text-sm text-[#FFC634] font-bold text-center md:text-left"
              >
                + 995-591-07-95-33
              </a>
            </li>

            <li className="flex flex-col gap-2  xs:items-center md:items-start  max-w-[204px]">
              <Image
                className="size-7 md:size-[30px]"
                src="/email.png"
                width={50}
                height={50}
                alt="icon"
              />

              <h3 className="text-xl font-bold text-center md:text-left">
                Write us an email
              </h3>

              <p className="mb-2 text-sm leading-relaxed text-center md:text-left font-[family-name:var(--font-poppins)] font-light ">
                Write to us - we will carefully study your idea and give you a
                detailed answer
              </p>

              <a
                href="tel:+995-591-07-95-33"
                className="text-sm text-[#FFC634] font-bold text-center md:text-left"
              >
                tinyglampworld@gmail.com
              </a>
            </li>
            <li className="flex flex-col gap-2 xs:items-center md:items-start">
              <Image
                className="size-7 md:size-[30px]"
                src="/send.png"
                width={50}
                height={50}
                alt="icon"
              />

              <h3 className="text-xl font-bold text-center md:text-left">
                Give us a call
              </h3>

              <p className="mb-2 text-sm leading-relaxed text-center md:text-left font-[family-name:var(--font-poppins)] font-light  max-w-[15ch]">
                Call us so we can discuss everything here and now
              </p>

              <a
                href="tel:+995-591-07-95-33"
                className="text-sm text-[#FFC634] font-bold text-center md:text-left"
              >
                + 995-591-07-95-33
              </a>
            </li>
          </ul>
        </section>

        <Footer />
      </div>
      <BurgerMenu />
    </>
  );
}
