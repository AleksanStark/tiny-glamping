import SvgDollar from "@/icons/DollarIcon";
import SvgGuests from "@/icons/Guests";
import SvgPlus from "@/icons/Plus";
import clsx from "clsx";
import Image from "next/image";

export default function HouseCard({
  price,
  guests,
  image_path,
  classNameImg,
  classNameBtns,
}: {
  price: number;
  guests: number;
  image_path: string;
  classNameImg?: string;
  classNameBtns?: string;
}) {
  return (
    <div className={clsx("size-78 relative rounded-2xl", classNameImg)}>
      <div className={clsx("absolute z-20 top-68 left-2", classNameBtns)}>
        <ul className="flex w-63 gap-3">
          <li className="bg-[#FBFAEB] rounded-3xl py-1 px-2 flex justify-center items-center gap-1">
            <SvgDollar />
            <h4 className="text-[#0B3A2C] font-[family-name:var(--font-jost)] font-semibold">
              {price}/night
            </h4>
          </li>
          <li className="bg-[#FBFAEB] rounded-3xl py-1 px-2 flex justify-center items-center gap-1">
            <SvgGuests />
            <h3 className="text-[#0B3A2C] font-[family-name:var(--font-jost)] font-semibold">
              {guests} guests
            </h3>
          </li>
        </ul>
      </div>

      <div className="absolute z-20 top-2 right-2">
        <div className="bg-[#FBFAEB] flex-row-center rounded-full">
          <SvgPlus />
        </div>
      </div>

      <Image
        src={image_path}
        alt=""
        fill
        className="object-cover rounded-2xl"
      />
    </div>
  );
}
