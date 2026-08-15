import type { SVGAttributes } from "react";

const Logo = (props: SVGAttributes<SVGElement>) => {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="146"
        height="40"
        viewBox="0 0 146 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <defs>
          <linearGradient id="wooblitzGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r="20" fill="url(#wooblitzGrad)" />
        <path
          d="M14 12L20 22L26 12M20 22V28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <text
          x="50"
          y="26"
          fontFamily="Inter, system-ui, sans-serif"
          fontSize="20"
          fontWeight="700"
          fill="currentColor"
          letterSpacing="-0.5"
        >
          Wooblitz
        </text>
      </svg>
    </div>
  );
};

export default Logo;
