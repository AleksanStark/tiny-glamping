import * as React from "react";
const SvgPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30 30"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M15  6v18 M6 15h18"
    />
  </svg>
);
export default SvgPlus;
