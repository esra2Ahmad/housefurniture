"use client";

import React from "react";
import { CiHeart } from "react-icons/Ci";
import { CiMail } from "react-icons/Ci";
import { FiPhoneCall } from "react-icons/fi";
import { CiUser } from "react-icons/Ci";
import { SlBasket } from "react-icons/sl";
import DropDownMenu from "./DropDownMenu";

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
    <div className="w-full h-11 bg-violet">
      <div
        className=" w-[1137px] 
    h-full 
    mx-auto 
    xl:px-20
    md:px-10
    sm:px-2
    px-4  flex justify-center items-center"
      >
        <div className="flex justify-between  gap-80  text-white  ">
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
              />
            </div>
            <div className=" flex  items-center  justify-center">
              <DropDownMenu
                label="USD"
                items={currencies}
                color="text-white "
                bgColor="bg-violet"
              />
            </div>
            <div className=" flex  items-center  justify-center">
              <p className=" text-base">Login</p>
              <CiUser color="white" className=" h-4 w-4" />
            </div>
            <div className=" flex  items-center  justify-center">
              <p className=" text-base">Whishist</p>
              <CiHeart color="white" className=" h-4 w-4" />
            </div>
            <div className=" flex  items-center  justify-center">
              <SlBasket color="white" className=" h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboveBar;
