"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";

const DiscountItem = () => {
  const [activeType, setActiveType] = useState(0);
  return (
    <div>
      <h1 className=" mt-20 text-[42px] font-bold font-josefin leading-normal text-blue text-center items-baseline ">
        Discount Item
      </h1>
      <ul className="flex justify-between items-center gap-5 mx-auto mb-[58px] w-[327px] mt-7">
        <button
          className={` hover:text-pink text-sm font-normal text-[16px]   ${
            activeType === 0 ? "underline text-pink" : "text-blue"
          }`}
          onClick={() => {
            setActiveType(0);
          }}
        >
          <li> Wood Chair</li>
        </button>
        <button
          className={` hover:text-pink text-sm font-normal text-[16px] ${
            activeType === 1 ? "text-pink underline" : "text-blue"
          }`}
          onClick={() => {
            setActiveType(1);
          }}
        >
          <li>Plastic Chair</li>
        </button>
        <button
          className={` hover:text-pink text-sm font-normal text-[16px] ${
            activeType === 2 ? "text-pink underline" : "text-blue"
          }`}
          onClick={() => {
            setActiveType(2);
          }}
        >
          <li>Sofa colection</li>
        </button>
      </ul>
      <div className="flex w-[1214px] h-[540px] mx-auto">
        <div className="w-[545px] h-[597px]  mt-5 space-y-7">
          <h1 className="font-bold font-josefin text-blue text-[35px] leading-[46.2px] ">20% Discount Of All Products</h1>
          <h3  className="font-normal  font-josefin text-pink text-[21px] leading-[27.72px] ">Eams Sofa Compact</h3>
          <p  className="font-normal font-josefin text-medgray text-[17px] leading-[30px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <div className="flex  gap-11 font-normal font-josefin text-medgray text-[16px] leading-[30px] ">
            <div className=" flex flex-col gap-4">
              <div className=" flex flex-row  gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#7569B2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Material expose like metals</p>
              </div>
              <div className=" flex flex-row  gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#7569B2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Simple neutral colours.</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className=" flex flex-row  gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#7569B2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Clear lines and geomatric figures</p>
              </div>
              <div className=" flex flex-row  gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#7569B2"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Material expose like metals</p>
              </div>
            </div>
          </div>
          <button className=" w-[200px] h-[57px] bg-pink text-white "> shop Now</button>
        </div>
         <Image src="/images/tortuga-01-b 1.png"  width={699}  height={440} alt="sofa" className=""/>
        
    
      </div> 

    </div>
  );
};

export default DiscountItem;
