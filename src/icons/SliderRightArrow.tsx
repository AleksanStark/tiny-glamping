import * as React from "react";
const SvgSliderRightArrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={45}
    fill="none"
    {...props}
  >
    <rect width={44} height={44} x={0.5} y={0.5} stroke="#fff" rx={22} />
    <path
      fill="#fff"
      d="M19 17.144 20.19 16l6.48 6.236q.159.151.244.35a1.04 1.04 0 0 1-.244 1.175L20.19 30 19 28.856 25.084 23z"
    />
  </svg>
);
export default SvgSliderRightArrow;
