import * as React from "react";
const SvgSliderLeftArrow = (props: React.SVGProps<SVGSVGElement>) => (
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
      d="M27 28.774 25.81 30l-6.48-6.681a1.16 1.16 0 0 1-.33-.817 1.18 1.18 0 0 1 .33-.817L25.81 15 27 16.226 20.916 22.5z"
    />
  </svg>
);
export default SvgSliderLeftArrow;
