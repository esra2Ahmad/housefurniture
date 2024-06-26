"use client";

import React from "react";
import { CiHeart } from "react-icons/Ci";
import { CiMail } from "react-icons/Ci";
import { FiPhoneCall } from "react-icons/fi";
import { CiUser } from "react-icons/Ci";
import { SlBasket } from "react-icons/sl";
import DropDownMenu from "../components/DropDownMenu";
import Link from "next/link";

const AboveBar = () => {
  const languages = [
    {
      name: "Arabic",
      action: () => {},
    },
    {
      name: "English",
      action: () => {},
    },
  ];
  const currencies = [
    {
      name: "USD",
      action: () => {},
    },
    {
      name: "EUR",
      action: () => {},
    },
  ];

  return (
    <div
      className="w-full h-11 bg-violet  mx-auto 
    xl:px-2
    md:px-10
    sm:px-2
    px-4  flex justify-center items-center"
    >
      <nav className="flex justify-between  gap-80  text-white  ">
        <div className="flex  gap-4  ">
          <div className="flex justify-center  items-center gap-2.5 ">
            <CiMail color="white" className="  w-4 h-4" />
            <p>mhhasanul@gmail.com</p>
          </div>
          <div className="flex justify-start items-center gap-2.5 h-full">
            <FiPhoneCall color="white" className=" h-4 w-4 " />
            <p>(12345)67890</p>
          </div>
        </div>

        <div className=" flex  items-center  justify-between h-full gap-5">
          <div className="flex justify-between items-center  h-full">
            <DropDownMenu
              label="English"
              items={languages}
              color="text-white "
              bgColor="bg-violet"
              hoverColor="text-black"
            />
          </div>
          <div className=" flex  items-center  justify-center gap-[3px]">
            <DropDownMenu
              label="USD"
              items={currencies}
              color="text-white "
              bgColor="bg-violet"
            />
          </div>
          <div className=" flex  items-center  justify-center gap-[3px]">
            <Link href="/#" className=" text-base">
              Login
            </Link>
            <CiUser color="white" className=" h-4 w-4 " />
          </div>
          <div className=" flex  items-center  justify-center gap-[3px]">
            <Link href="/#" className=" text-base">
              Whishist
            </Link>
            <CiHeart color="white" className=" h-4 w-4" />
          </div>
          <Link
            href="/#"
            className=" flex  items-center  justify-center gap-[3px]"
          >
            <SlBasket color="white" className=" h-4 w-4" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default AboveBar;
