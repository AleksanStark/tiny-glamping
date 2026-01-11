"use client";
import MenuBurgerIcon from "@/icons/MenuBurgerIcon";
import { useModalStore } from "@/providers/modal-store-provider";
import ReserveBtn from "../ReserveBtn/ReserveBtn";
import clsx from "clsx";
import Image from "next/image";
import NavLink from "../NavLink/NavLink";

export default function Header({
  burger_color,
  navlink_color,
  className,
}: {
  burger_color?: string;
  className?: string;
  navlink_color?: string;
}) {
  const { openModal } = useModalStore((state) => state);

  return (
    <header className={clsx("flex-row-between mb-4 pt-2", className)}>
      <button className="md:hidden" onClick={openModal}>
        <MenuBurgerIcon
          style={{
            color: burger_color,
          }}
          className="size-10"
        />
      </button>
      <Image
        className="xs:hidden md:block"
        src={"/logo.png"}
        alt="tiny glamping logo"
        width={70}
        height={70}
      />

      <nav className="xs:hidden md:block">
        <ul className="flex-row-center gap-4 lg:gap-8">
          <li>
            <NavLink text_color={navlink_color} href="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink text_color={navlink_color} href="/location_map">
              Location map
            </NavLink>
          </li>
          <li>
            <NavLink text_color={navlink_color} href="/house_catalog">
              House catalog
            </NavLink>
          </li>
          <li>
            <NavLink text_color={navlink_color} href="/to_partners">
              To partners
            </NavLink>
          </li>
          <li>
            <NavLink text_color={navlink_color} href="/about_us">
              About us
            </NavLink>
          </li>
        </ul>
      </nav>

      <div></div>
    </header>
  );
}
