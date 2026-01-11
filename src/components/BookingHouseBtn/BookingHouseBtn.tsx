import clsx from "clsx";
import Link from "next/link";

export default function BookingHouseBtn({
  color,
  text_color,
  className,
  href,
}: {
  color?: string;
  text_color?: string;
  className?: string;
  href: string;
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
        "booking-btn xs:w-45 md:w-60 xs:text-sm base:text-base md:text-xl",
        className
      )}
    >
      Booking this home
    </Link>
  );
}
