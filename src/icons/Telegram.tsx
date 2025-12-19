import * as React from "react";
const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <g clipPath="url(#telegram_svg__a)">
      <path
        fill="#F9F9F9"
        d="M15 0C6.716 0 0 6.716 0 15s6.716 15 15 15 15-6.716 15-15S23.284 0 15 0m7.368 10.276-2.463 11.6c-.181.823-.671 1.023-1.355.635L14.8 19.75l-1.808 1.742a.95.95 0 0 1-.75.369h-.006l.266-3.817 6.95-6.278c.3-.266-.067-.418-.466-.151L10.4 17.02l-3.7-1.155c-.8-.253-.822-.8.169-1.192L21.326 9.1c.673-.245 1.258.16 1.04 1.176z"
      />
    </g>
    <defs>
      <clipPath id="telegram_svg__a">
        <path fill="#fff" d="M0 0h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default TelegramIcon;
