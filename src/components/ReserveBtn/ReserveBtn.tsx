import clsx from "clsx";
import Link from "next/link";

export default function ReserveBtn({
  href,
  color,
  text_color,
  className,
}: {
  href: string;
  color: string;
  text_color: string;
  className?: string;
}) {
  return (
    <Link
      style={{
        backgroundColor: color,
        color: text_color,
        borderColor: text_color,
      }}
      href={href}
      className={clsx(
        "reserve-btn  xs:text-xs base:text-sm md:text-lg",
        className
      )}
    >
      Reserve now
    </Link>
  );
}
