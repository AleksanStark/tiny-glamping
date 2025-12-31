import SvgFooterArrow from "@/icons/FooterArrow";
import InstagramIcon from "@/icons/Instagram";
import TelegramIcon from "@/icons/Telegram";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="rounded-4xl bg-[#0B3A2C] py-4 px-4 md:px-14 md:py-12">
      <div className="flex  mb-6">
        <Image
          className="mr-auto size-13.5"
          src={"/logo.png"}
          alt="Tiny logo"
          width={50}
          height={50}
        />
        <div className="flex justify-between items-center gap-24">
          <div className="flex-row-center gap-4">
            <h4 className="text-[#F9F9F9] font-semibold lg:text-lg">
              Follow us
            </h4>
            <InstagramIcon />
            <TelegramIcon />
          </div>

          <h4 className="text-white font-bold text-lg xs:hidden lg:block ">
            +995-591-07-95-33
          </h4>
          <Link
            className="footer-btn  text-sm xs:px-4 xs:py-4 base:px-4 base:py-5 gap-3 xs:hidden lg:flex"
            href={"/"}
          >
            Get advice
            <SvgFooterArrow />
          </Link>
        </div>
      </div>
      <div className="flex-row-center">
        <div className="grid grid-cols-2 gap-3 mb-6 md:grid-cols-4  lg:items-start">
          <div className="flex flex-col gap-2 justify-self-start">
            <h4 className="text-[#F9F9F9] text-xs md:text-sm lg:text-xl font-medium">
              Location map
            </h4>
            <h4 className="text-[#F9F9F9] text-xs md:text-sm lg:text-xl font-medium">
              Home
            </h4>
            <h4 className="text-[#B4B4B4] text-xs lg:text-lg ">
              Our advantages
            </h4>
            <h4 className="text-[#B4B4B4] text-xs lg:text-lg lg:max-w-[8ch]">
              Location of houses
            </h4>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-[#F9F9F9] text-xs md:text-sm lg:text-xl font-medium">
              House catalog
            </h4>
            <h4 className="text-[#B4B4B4] text-xs lg:text-lg">Our houses</h4>
            <h4 className="text-[#B4B4B4] text-xs lg:text-lg">Choose house</h4>
            <h4 className="text-[#B4B4B4] text-xs lg:text-lg">See the house</h4>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-[#F9F9F9] text-xs md:text-sm lg:text-xl font-medium">
              To partners
            </h4>
            <h4 className="text-[#B4B4B4] text-xs lg:text-lg lg:max-w-[15ch]">
              Benefits of cooperation
            </h4>
            <h4 className="text-[#B4B4B4] text-xs lg:text-lg lg:max-w-[15ch]">
              Application for cooperation
            </h4>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-[#F9F9F9] text-xs md:text-sm  lg:text-xl font-medium">
              About us
            </h4>
            <h4 className="text-[#B4B4B4] text-xs lg:text-lg">
              The History of TinyGlamp
            </h4>
            <h4 className="text-[#B4B4B4] text-xs lg:text-lg">Our team</h4>
            <h4 className="text-[#B4B4B4] text-xs lg:text-lg">
              Contacts for communication
            </h4>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center lg:hidden gap-3 ">
        <h4 className="text-white font-bold text-sm ">+995-591-07-95-33</h4>
        <Link
          className="footer-btn flex-row-center   text-sm xs:px-4 xs:py-4 base:px-4 base:py-5 gap-3"
          href={"/"}
        >
          Get advice
          <SvgFooterArrow />
        </Link>
      </div>

      <hr className="text-[#F9F9F9] mb-4" />

      <h5 className=" text-sm text-[#B4B4B4] text-center">
        © {new Date().getFullYear()} TinyGlamp All rights reserved.
      </h5>
    </footer>
  );
}
