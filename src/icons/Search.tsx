import * as React from "react";
const SvgSearch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    width={18}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill="#F9F9F9"
      d="m15.755 14.394-3.627-3.627a6.7 6.7 0 0 0 1.343-4.032A6.743 6.743 0 0 0 6.735 0 6.743 6.743 0 0 0 0 6.735a6.743 6.743 0 0 0 6.735 6.736 6.7 6.7 0 0 0 4.032-1.343l3.627 3.627a.964.964 0 0 0 1.36-1.361M1.925 6.735a4.811 4.811 0 1 1 9.621 0 4.811 4.811 0 0 1-9.622 0"
    />
  </svg>
);
export default SvgSearch;
