import * as React from "react";
const SvgClip = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 43 43"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <g clipPath="url(#clip_svg__a)">
      <path
        stroke="#151515"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m29.063 20.981-6.17 7.87a6.25 6.25 0 0 1-9.837-7.713l7.327-9.345a4.375 4.375 0 1 1 6.886 5.399l-6.556 8.361a2.5 2.5 0 1 1-3.935-3.085l5.4-6.886"
      />
    </g>
    <defs>
      <clipPath id="clip_svg__a">
        <path fill="#fff" d="M42.12 18.51 18.51 0 0 23.608 23.61 42.12z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClip;
