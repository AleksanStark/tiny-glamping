"use client";
import MenuBurgerIcon from "@/icons/MenuBurgerIcon";
import { useModalStore } from "@/providers/modal-store-provider";
import ReserveBtn from "../ReserveBtn/ReserveBtn";
import clsx from "clsx";

export default function Header({
  burger_color,
  className,
}: {
  burger_color?: string;
  className?: string;
}) {
  const { openModal } = useModalStore((state) => state);

  return (
    <header className={clsx("flex-row-between mb-4 pt-2", className)}>
      <button onClick={openModal}>
        <MenuBurgerIcon
          style={{
            color: burger_color,
          }}
          className="size-10 md:hidden"
        />
      </button>

      <ReserveBtn color="black" text_color="#F9F9F9" />
    </header>
  );
}
