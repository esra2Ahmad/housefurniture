"use client";
import React from "react";
import { VscSearch } from "react-icons/Vsc";
import { FiChevronDown } from "react-icons/fi";
import DropDownMenu from "../components/DropDownMenu";
import Link from "next/link";

const BottomNavBar = () => {
  const places = [
    {
      name: "syria",
      action: () => {},
    },
    {
      name: "USA",
      action: () => {},
    },
  ];
  return (
    <div className="w-full h-11 pt-5 ">
      <div
        className=" w-[1140px] 
    h-full 
    mx-auto 
    xl:px-20
    md:px-10
    sm:px-2
    "
      >
        <div className=" flex  justify-between">
          <div>
            <h1 className="text-darkblue  font-bold text-[34px]    text-center font-josefin">
              Hekto
            </h1>
          </div>
          <nav className="flex justify-between gap-[35px] text-[16px] text-darkblue  items-center">
            <div className="flex items-end ">
              <DropDownMenu
                label="Home"
                items={places}
                color="text-pink "
                bgColor="bg-white"
              />
            </div>
            <Link href="/#">Pages</Link>
            <Link href="/#">Products</Link>
            <Link href="/#">Blog</Link>
            <Link href="/#">Shop</Link>
            <Link href="/#">Contact</Link>
          </nav>
          <form className="flex  items-center">
            <input
              placeholder=""
              className="h-[35px] w-[200px]   border-[1px] border-gray"
            ></input>
            <button className="w-[40px] bg-pink h-[35px] border border-pink ">
              <VscSearch
                color="white"
                className=" relative left-[10px] h-[16px] w-[16px] text-[24px]"
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
