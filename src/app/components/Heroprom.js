"use client";

import { useState } from "react";
import Image from "next/image";

import Promotional from "./Promotional";
import { heropromo } from "./Data";

const Heropromo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = heropromo;

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="w-full h-[764px] mt-4 relative overflow-hidden flex flex-col justify-center ">
      <div
        className="whitespace-nowrap duration-500"
        style={{ transform: `translate(-${activeIndex * 100}%)` }}
      >
        {items.map((item, index) => {
          return <Promotional key={index} />;
        })}
      </div>
      <div className="flex justify-between items-center gap-3 absolute bottom-[53px] left-1/2">
        {items.map((item, index) => {
          return (
            <button
              key={index}
              className={`cursor-pointer w-2.5 h-[9.89px] origin-top-left -rotate-45 mt-11 ${
                activeIndex === index ? "bg-pink" : "border border-pink"
              }`}
              onClick={() => {
                updateIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Heropromo;
