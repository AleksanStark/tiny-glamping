import Link from "next/link";
import { ReactNode } from "react";

export default function ChooseBtn({
  color,
  text_color,
  children,
}: {
  color: string;
  text_color: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={""}
      style={{
        backgroundColor: color,
        color: text_color,
        borderColor: text_color,
      }}
      className={"choose-btn"}
    >
      {children}
    </Link>
  );
}
