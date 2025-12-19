import * as React from "react";
const SvgFooterArrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <rect
      width={14}
      height={1.5}
      x={2.298}
      y={12.198}
      fill="#fff"
      rx={0.75}
      transform="rotate(-45 2.298 12.198)"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.071 2.828h5.657v5.657"
    />
  </svg>
);
export default SvgFooterArrow;
