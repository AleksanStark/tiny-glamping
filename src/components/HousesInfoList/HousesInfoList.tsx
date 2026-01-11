"use client";

import SvgMap from "@/icons/Map";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import DatePicker from "../DatePicker/DatePicker";
import BookingHouseBtn from "../BookingHouseBtn/BookingHouseBtn";

export default function HousesInfoList({
  guestsAmount,
  price,
}: {
  guestsAmount: number;
  price: number;
}) {
  const [houseInfoIndex, setHouseInfoIndex] = useState(0);

  return (
    <div>
      <ul className="flex-row-center  gap-3 mb-6">
        <li className="relative">
          <button
            onClick={() => {
              setHouseInfoIndex(0);
            }}
            className={clsx(
              "font-bold md:text-xl",
              houseInfoIndex === 0 ? "text-[#0B3A2C]" : "text-[#708a82]"
            )}
          >
            About this home
          </button>
          <hr
            className={clsx(
              houseInfoIndex === 0 ? "text-[#0f4d3a]" : "text-[#708a82]"
            )}
          />
        </li>
        <li>
          <button
            onClick={() => {
              setHouseInfoIndex(1);
            }}
            className={clsx(
              "font-bold md:text-xl",
              houseInfoIndex === 1 ? "text-[#0B3A2C]" : "text-[#708a82]"
            )}
          >
            Current location
          </button>
          <hr
            className={clsx(
              houseInfoIndex === 1 ? "text-[#0f4d3a]" : "text-[#708a82]"
            )}
          />
        </li>
        <li>
          <button
            onClick={() => {
              setHouseInfoIndex(2);
            }}
            className={clsx(
              "font-bold md:text-xl",
              houseInfoIndex === 2 ? "text-[#0B3A2C]" : "text-[#708a82]"
            )}
          >
            Available dates/prices
          </button>
          <hr
            className={clsx(
              houseInfoIndex === 2 ? "text-[#0f4d3a]" : "text-[#708a82]"
            )}
          />
        </li>
      </ul>

      {houseInfoIndex === 0 ? (
        <div>
          <p>
            Eden is more than a home; it&lsquo;s a personal space for connecting
            with nature. Here, you wake to the sound of the forest and fall
            asleep to the light of the stars, without sacrificing impeccable
            service or privacy. The project is designed for those who seek
            solitude without sacrifice and appreciate moments of silence imbued
            with meaning.
          </p>
          <p>
            <span className="text-[#0B3A2C] font-semibold font-[family-name:var(--font-poppins)]">
              Architecture:
            </span>
            Clean lines and panoramic glazing blur the line between interior and
            exterior.
          </p>
          <p>
            <span className="text-[#0B3A2C] font-semibold font-[family-name:var(--font-poppins)]">
              Materials:
            </span>
            Natural wood, blackened metal, and stone, chosen for their
            durability and aged aesthetics.
          </p>
          <p>
            <span className="text-[#0B3A2C] font-semibold font-[family-name:var(--font-poppins)]">
              Comfort:
            </span>
            King-size bed with orthopedic mattress, fully equipped kitchenette,
            and bathroom with shower and composting toilet.
          </p>
        </div>
      ) : houseInfoIndex === 1 ? (
        <>
          <div className="flex flex-col xl:flex-row items-center justify-center gap-6 mb-6">
            <h3 className="text-[#0b3a2c] font-bold md:text-xl">
              Current location
            </h3>
            <Image src={"/map.jpg"} alt="Map" width={353} height={350} />
          </div>
          <div className="bg-[var(--secondary-color)] shadow-[var(--house-log-shadow)] p-4 md:pl-9 rounded-[50px] md:w-[700px] mb-6 lg:w-full">
            <h3 className="text-[#0b3a2c] font-bold text-center text-xl mb-3">
              Journey log:
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <SvgMap />
                <p className="text-[#0b3a2c] font-[family-name:var(--font-jost)]">
                  Eden - Kvareli, Georgia - (21.01.2023 - 28.01.2023)
                </p>
              </li>
              <li className="flex gap-3">
                <SvgMap />
                <p className="text-[#0b3a2c] font-[family-name:var(--font-jost)]">
                  Eden - Tbilisi, Georgia - (17.01.2023 - 20.01.2023)
                </p>
              </li>
              <li className="flex gap-3">
                <SvgMap />
                <p className="text-[#0b3a2c] font-[family-name:var(--font-jost)]">
                  Eden - Kutaisi, Georgia - (10.01.2023 - 15.01.2023)
                </p>
              </li>
              <li className="flex gap-3">
                <SvgMap />
                <p className="text-[#0b3a2c] font-[family-name:var(--font-jost)]">
                  Eden - Batumi, Georgia - (6.01.2023 - 9.01.2023)
                </p>
              </li>
              <li className="flex gap-3">
                <SvgMap />
                <p className="text-[#0b3a2c] font-[family-name:var(--font-jost)]">
                  Eden - Tbilisi, Georgia - (1.01.2023 - 5.01.2023)
                </p>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <DatePicker guestsAmount={guestsAmount} price={price} />
          <div className="flex-row-center mb-6">
            <BookingHouseBtn href="" />
          </div>
        </>
      )}
    </div>
  );
}
