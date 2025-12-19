"use client";
import Image from "next/image";
import NavLink from "../NavLink/NavLink";
import CrossIcon from "@/icons/CrossIcon";
import { useModalStore } from "@/providers/modal-store-provider";
import clsx from "clsx";

export default function BurgerMenu() {
  const { isOpen, closeModal } = useModalStore((state) => state);
  return (
    <div
      className={clsx(
        "fixed w-full h-full top-0 left-1 bg-white md:hidden pt-8 z-50",
        isOpen ? "visible-safe" : "invisible-safe"
      )}
    >
      <button onClick={closeModal} className="absolute top-0 right-1">
        <CrossIcon />
      </button>
      <ul className="flex justify-center items-center flex-col gap-1">
        <li>
          <Image src={"/logo.png"} width={80} height={80} alt="our logo" />
        </li>
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/location_map"}>Location map</NavLink>
        </li>
        <li>
          <NavLink href="/house_catalog">House catalog</NavLink>
        </li>
        <li>
          <NavLink href="/to_partners">To partners</NavLink>
        </li>
        <li>
          <NavLink href="">About us</NavLink>
        </li>
      </ul>
    </div>
  );
}
