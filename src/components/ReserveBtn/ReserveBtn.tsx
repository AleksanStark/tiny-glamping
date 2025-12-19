import Link from "next/link";

export default function ReserveBtn({
  color,
  text_color,
  width,
}: {
  color: string;
  text_color: string;
  width?: number;
}) {
  return (
    <Link
      style={{
        backgroundColor: color,
        color: text_color,
        borderColor: text_color,
        width,
      }}
      href={""}
      className={"reserve-btn"}
    >
      Reserve now
    </Link>
  );
}
