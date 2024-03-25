"use client";

import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const DropDownMenu = ({ label, items, color, bgColor }) => {
  const [isOpne, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div
        onClick={toggleOpen}
        className={`
        transition
        flex
        items-center
        justify-center
        text-base
        cursor-pointer
        ${color ? color : ""}
     
        `}
      >
        {label}
        <span className="ml-0.5">
          <BsChevronDown
            className={` duration-300 ${isOpne ? "rotate-180" : "rotate-0"}`}
          />
        </span>
      </div>
      <div
        className={`
        ${isOpne ? "z-50 " : " opacity-0 -z-50"} 
        ${bgColor ? bgColor : ""}
        absolute  rounded   duration-300  border  shadow`}
      >
        <ul>
          {items.map((item) => (
            <div
              key={item.name}
              className=" p-1 cursor-pointer border-b"
              onClick={() => {}}
            >
              <li className={`p-2 text-sm ${color}}`}>
                {item.name}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDownMenu;
