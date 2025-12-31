import clsx from "clsx";
import Link from "next/link";
import { ReactNode } from "react";

export default function ChooseBtn({
  color,
  text_color,
  className,
  children,
}: {
  color: string;
  text_color: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={""}
      style={{
        backgroundColor: color,
        color: text_color,
        borderColor: text_color,
      }}
      className={clsx(
        "choose-btn xs:text-xs  base:text-sm md:text-lg",
        className
      )}
    >
      {children}
    </Link>
  );
}
