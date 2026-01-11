import * as React from "react";
const SvgMap = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#0b3a2c"
      fillRule="evenodd"
      d="m8 19 .708.706a1 1 0 0 1-1.417 0l-.006-.007-.017-.017-.062-.063q-.529-.545-1.04-1.106a50 50 0 0 1-2.456-2.908c-.892-1.15-1.804-2.45-2.497-3.734C.535 10.61 0 9.248 0 8c0-4.54 3.592-8 8-8s8 3.461 8 8c0 1.248-.535 2.612-1.213 3.87-.693 1.286-1.604 2.585-2.497 3.735a50 50 0 0 1-3.496 4.014l-.062.063-.017.017-.006.006zm0-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMap;
