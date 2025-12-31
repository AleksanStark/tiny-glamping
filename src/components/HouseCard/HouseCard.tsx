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
    <div className="relative grid aspect-[4/3] w-full overflow-hidden rounded-2xl">
      {/* Image */}
      <Image
        src={image_path}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className={clsx("object-cover", classNameImg)}
      />

      {/* Overlay */}
      <div
        className={clsx("z-10 grid grid-cols-2 grid-rows-2 p-2", classNameBtns)}
      >
        {/* Plus button – top right */}
        <div className="col-start-2 row-start-1 flex justify-end">
          <button className="bg-[#FBFAEB] flex h-8 w-8 items-center justify-center rounded-full sm:h-9 sm:w-9">
            <SvgPlus className="h-5 w-5 sm:h-5 sm:w-5" />
          </button>
        </div>

        {/* Price + guests – bottom left */}
        <div className="col-start-1 row-start-2 flex  items-end">
          <ul className="flex gap-2 min-w-[90%]">
            <li className="bg-[#FBFAEB] rounded-3xl py-1 px-2 flex items-center gap-1 text-xs sm:text-sm">
              <SvgDollar className="h-4 w-4" />
              <span className="text-[#0B3A2C] font-[family-name:var(--font-jost)] font-semibold whitespace-nowrap">
                {price}/night
              </span>
            </li>

            <li className="bg-[#FBFAEB] rounded-3xl py-1 px-2 flex items-center gap-1 text-xs sm:text-sm">
              <SvgGuests className="h-4 w-4" />
              <span className="text-[#0B3A2C] font-[family-name:var(--font-jost)] font-semibold whitespace-nowrap">
                {guests} guests
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
