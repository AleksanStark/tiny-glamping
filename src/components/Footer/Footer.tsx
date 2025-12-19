import SvgFooterArrow from "@/icons/FooterArrow";
import InstagramIcon from "@/icons/Instagram";
import TelegramIcon from "@/icons/Telegram";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="rounded-4xl bg-[#0B3A2C] py-8 px-6">
      <div className="flex-row-between mb-6">
        <Image src={"/logo.png"} alt="Tiny logo" width={40} height={40} />

        <div className="flex gap-3">
          <h4 className="text-white">Follow us</h4>
          <InstagramIcon />
          <TelegramIcon />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col gap-1">
          <h4 className="text-white text-sm font-bold">Location map</h4>
          <h4 className="text-[#B4B4B4] text-sm">Home</h4>
          <h4 className="text-[#B4B4B4] text-sm">Our advantages</h4>
          <h4 className="text-[#B4B4B4] text-sm">Location of houses</h4>
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="text-white text-sm font-bold">To partners</h4>
          <h4 className="text-[#B4B4B4] text-sm">Benefits of cooperation</h4>
          <h4 className="text-[#B4B4B4] text-sm">
            Application for cooperation
          </h4>
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="text-white text-sm font-bold">About us</h4>
          <h4 className="text-[#B4B4B4] text-sm">The History of TinyGlamp</h4>
          <h4 className="text-[#B4B4B4] text-sm">Our team</h4>
          <h4 className="text-[#B4B4B4] text-sm">Contacts for communication</h4>
        </div>
      </div>
      <div className="flex-row-between gap-2">
        <h4 className="text-white font-bold text-sm">+ 995-591-07-95-33</h4>
        <Link className="footer-btn flex-row-center" href={"/"}>
          Get advice
          <SvgFooterArrow />
        </Link>
      </div>
    </footer>
  );
}
