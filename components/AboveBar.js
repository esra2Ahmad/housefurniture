import React from 'react';
import {CiHeart} from "react-icons/Ci";
import {CiMail} from "react-icons/Ci";
import {FiPhoneCall} from "react-icons/fi";
import {FiChevronDown} from "react-icons/fi";
import {CiUser} from "react-icons/Ci";
import {SlBasket} from "react-icons/sl";

const AboveBar = () => {
  return (
    <div className='w-full h-11 bg-violet'>
      <div className=" w-[1137px] 
    h-full 
    mx-auto 
    xl:px-20
    md:px-10
    sm:px-2
    px-4">
       <div className="flex justify-between  text-esra ">
       <div className="flex justify-start items-center gap-4 text-zinc-100 h-full">
       <div className="flex justify-start items-center gap-2.5 h-full">
        <CiMail color='white' className=" h-[16px] w-[16px]"/>
        <p>mhhasanul@gmail.com</p>
       </div>
       <div className="flex justify-start items-center gap-2.5 h-full">
        <FiPhoneCall color='white' className=" h-[16px] w-[16px]"/>
        <p>(12345)67890</p>
       </div>
       </div>
       <div className="flex justify-between items-center gap-4 h-full">
        <div className=" flex  items-center  justify-center">
        <p className="text-zinc-100 text-base">English</p>
        <FiChevronDown  color='white' className=" h-[16px] w-[16px]"/>
        </div>
        <div className=" flex  items-center  justify-center">
        <p className="text-zinc-100 text-base">USD</p>
        <FiChevronDown  color='white' className=" h-[16px] w-[16px]"/>
        </div>
        <div className=" flex  items-center  justify-center">
        <p className="text-zinc-100 text-base">Login</p>
        <CiUser  color='white' className=" h-[16px] w-[16px]"/>
        </div>
        <div className=" flex  items-center  justify-center">
        <p className="text-zinc-100 text-base">Whishist</p>
        <CiHeart  color='white' className=" h-[16px] w-[16px]"/>
        </div>
        <div className=" flex  items-center  justify-center">
        <SlBasket  color='white' className=" h-[16px] w-[16px]"/>
        </div>
       </div>
       </div>
    
     </div>
    </div>
  )
}

export default AboveBar;