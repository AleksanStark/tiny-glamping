import * as React from "react";
const SvgArrowDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#151515"
      d="M6.657 16.707a1 1 0 0 0 1.414 0l6.364-6.364A1 1 0 1 0 13.02 8.93l-5.657 5.657-5.657-5.657a1 1 0 0 0-1.414 1.414zM7.364 0h-1v16h2V0z"
    />
  </svg>
);
export default SvgArrowDown;
