'use client'
import AboveBar from "@/components/AboveBar";
import BottomNavBar from "@/components/BottomNavBar";
import OurOffers from "@/components/OurOffers";
import Abovefooter from "@/components/footter/AboveFooter";
import Bottomfooter from "@/components/footter/Bottomfooter";
import React from "react";
import Image from "next/image";
import { useState } from 'react';

const page = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex >= 4) {
        newIndex = 3;
      }
  
      setActiveIndex(newIndex);
    };
  return (
    <div>
      <div>
        <AboveBar />
        <BottomNavBar />
      </div>
      <div className="h-[286px]  w-full   bg-medviolet mt-10 mb-[124px]">
        <div className="max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 px-4 flex flex-col  gap-2 ">
          <h1 className=" text-dark  font-bold  text-[36px]  leading-normal mt-[75px]">
            About Us
          </h1>
          <div className="flex flex-row gap-2">
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Home .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Pages .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              About us.
            </p>
          </div>
        </div>
      </div>
      <div className="  ml-60  flex flex-row gap-11">
        <div className="w-[552px] h-[405px] bg-blue rounded-[4px] ">
          <Image
            src="/images/aboutus.png"
            width={555}
            height={400}
            className="ml-4"
          />
        </div>
        <div className="w-[522px] h-[405px] /bg-red/ flex flex-col justify-center  gap-4">
          <h1 className=" text-blue  font-bold  text-[36px]  leading-[48px] w-[522px]">
            Know About Our Ecomerce Business, History
          </h1>
          <p className=" text-lightpurple  font-semibold  flex-shrink-0 text-[14px]  leading-[25.6px] w-[522px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices mattis aliquam, malesuada diam est. Malesuada sem
            tristique amet erat vitae <br />
            eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum
            quam.
          </p>
          <button className="bg-pink rounded-[4px] mt-[48px] h-[44px] w-[135px] text-white  font-semibold text-[16px] font-josefin">
            contact Us
          </button>
        </div>
      </div>
      
      <OurOffers />
      <div className=" ml-22">
        <h1 className=" text-black  font-bold  text-[36px]  leading-normal mt-[75px] text-center">
          {" "}
          Our Client Say!
        </h1>
        <div className="flex flex-row gap-2 justify-center items-center mt-[48px] ">
            <Image src='/images/c2.png' width={55} height={55} alt="client"/>
            <Image src='/images/c1.png' width={55} height={59} alt="client" className=" relative top-[-10px]"/>
            <Image src='/images/c3.png' width={55} height={55} alt="client"/>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
        <h2 className=" text-black  font-semibold  text-[22px]  leading-[26px]  mt-8 text-center">Selina Gomez</h2>
        <h3 className=" text-lightpurple  font-semibold  text-[10px]  leading-[26px]  text-center">Ceo At Webecy Digital</h3>
        <p className=" w-[689px]  text-lightpurple  font-semibold  text-[10px]  leading-[26px]  text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
       </div>
       <div className="w-[91px] h-1  flex justify-start items-center gap-1 mx-auto  mt-5">
      <button
          className={` h-1 rounded-[10px] hover:w-5 hover:bg-pink  duration-300 ${
            activeIndex === 0 ? "w-6 bg-pink" : "w-4 bg-pink"
          }`}
          onClick={() => {
            updateIndex(0);
          }}
        />
         <button
          className={` h-1 rounded-[10px] hover:w-5 hover:bg-pink  duration-300 ${
            activeIndex === 0 ? "w-6 bg-pink" : "w-4 bg-pink"
          }`}
          onClick={() => {
            updateIndex(1);
          }}
        />
         <button
          className={` h-1 rounded-[10px] hover:w-5 hover:bg-pink  duration-300 ${
            activeIndex === 0 ? "w-6 bg-pink" : "w-4 bg-pink"
          }`}
          onClick={() => {
            updateIndex(2);
          }}
        />
         <button
          className={` h-1 rounded-[10px] hover:w-5 hover:bg-pink  duration-300 ${
            activeIndex === 0 ? "w-6 bg-pink" : "w-4 bg-pink"
          }`}
          onClick={() => {
            updateIndex(3);
          }}
        />
      </div>
       </div>
      <div className=" mt-80">
        <Abovefooter />
        <Bottomfooter />
      </div>
    </div>
  );
};

export default page;
