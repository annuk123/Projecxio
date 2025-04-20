// "use client";
// import { ReactNode } from "react";

// interface WaveDividerProps {
//   flip?: boolean;

//   fillColor?: string; // Accepts a HEX, RGB, or Tailwind-compatible color
// }

// const FootDivider = ({ flip = true,   fillColor = "#000000", }: WaveDividerProps) => (
//   <div className="relative overflow-hidden leading-none">
//     <svg
//       viewBox="0 0 1440 100"
//       className={`w-full h-[120px] ${flip ? "" : "rotate-180"}`}
//       preserveAspectRatio="none"
//     >
//       <path
//        fill={fillColor}
//         d="M0 50 Q 180 0 360 50 T 720 50 T 1080 50 T 1440 50 L1440 100 L0 100 Z"
//         className="fill-current text-violet-100 dark:text-zinc-900"
//       />
//     </svg>


    
    
//   </div>
// );

// export default FootDivider;


"use client";

interface FootDividerProps {
  flip?: boolean;
  fillColor?: string; // Accepts a HEX, RGB, or Tailwind-compatible color
}

const FootDivider = ({
  flip = true,
  fillColor = "#000000", // Solid black
}: FootDividerProps) => (
  <div className="relative overflow-hidden leading-none">
    <svg
      viewBox="0 0 1440 100"
      className={`w-full h-[120px] ${flip ? "" : "rotate-180"}`}
      preserveAspectRatio="none"
    >
      <path
        fill={fillColor}
        d="M0 50 Q 180 0 360 50 T 720 50 T 1080 50 T 1440 50 L1440 100 L0 100 Z"
      />
    </svg>
  </div>
);

export default FootDivider;
