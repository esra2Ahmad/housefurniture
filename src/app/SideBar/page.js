'use client'
import AboveBar from "@/components/AboveBar";
import BottomNavBar from "@/components/BottomNavBar";
import List from "@/components/List";
import Abovefooter from "@/components/footter/AboveFooter";
import Bottomfooter from "@/components/footter/Bottomfooter";
import React from "react";
import SideBar from "@/components/forpages/SideBar";
import { sidebar } from "@/components/Data";
import Checkbox from "@/components/Checkbox";
import Rating from "@/components/Rating";

const page = () => {
  return (
    <div>
      <div className="">
        <AboveBar />
        <BottomNavBar />
      </div>
      <div className="h-[286px]  w-full   bg-medviolet mt-10 mb-[124px]">
        <div className="max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 px-4 flex flex-col  gap-2 ">
          <h1 className=" text-dark  font-bold  text-[36px]  leading-normal mt-[75px]">
            Shop Left Sidebar
          </h1>
          <div className="flex flex-row gap-2">
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Home .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Pages .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              shop left sidebar .
            </p>
          </div>
        </div>
      </div>
      <div className=" h-[55px] w-full bg-red  ">
        <div className="max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 px-4 flex flex-row gap-[180px]">
          <div>
            <h1 className=" text-blue  font-bold  text-[22px] font-josefin">
              Ecommerce Acceories & Fashion item{" "}
            </h1>
            <p className=" text-gray2  font-normal  text-[12px] font-josefin">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="flex gap-14 max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 px-4 ">
        <div className="w-[283px]   mt-11 flex flex-col gap-7">
          <div className="flex flex-col gap-[4px]">
            <h1 className=" text-blue font-bold  underline text-[20px]  leading-[30px] font-josefin">
              Product Prand
            </h1>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
              <Checkbox/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">
                Coaster Furniture
              </p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">
                Fusion Dot High Fashion
              </p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">
                Unique Furnitture Restor
              </p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">
                Dream Furnitture Flipping
              </p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">
                Young Repurposed
              </p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">
                Green DIY furniture
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <h1 className=" text-blue font-bold  underline text-[20px]  leading-[30px] font-josefin">
              Discount Offer
            </h1>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">20% Cashback</p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">5% Cashback Offer</p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">25% Discount Offer</p>
            </div>
        
          </div>
          <div className="flex flex-col gap-[4px]">
            <h1 className=" text-blue font-bold  underline text-[20px]  leading-[30px] font-josefin">
              Rating Item
            </h1>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
            <Rating/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">(2341)</p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
            <Rating/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">(1726)</p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
            <Rating/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">(258)</p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
            <Rating/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">(25)</p>
            </div>
        
          </div>
          <div className="flex flex-col gap-[4px]">
            <h1 className=" text-blue font-bold  underline text-[20px]  leading-[30px] font-josefin">
              Categories
            </h1>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
            
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">Prestashop</p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
            
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">Magneto</p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
            
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">Bigcommerce</p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
          
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">osCommerce</p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
          
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">3dcard</p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
          
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">Bags</p>
              
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
                <Checkbox/>
                <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">Accessories</p>
                </div>
                <div className="flex flex-row gap-2  items-baseline justify-normal">
                  <Checkbox/>
                <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">Jellwery</p>
              </div>
          </div>
          <div className="flex flex-col gap-[4px]">
            <h1 className=" text-blue font-bold  underline text-[20px]  leading-[30px] font-josefin">
              Discount Offer
            </h1>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">$0.00 - $150.00</p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">$150.00 - $350.00</p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">$150.00 - $504.00</p>
            </div>
            <div className="flex flex-row gap-2  items-baseline justify-normal">
            <Checkbox/>
              <p className=" text-zinc  font-normal font-josfine   text-[16px]  leading-normal">$450.00 +</p>
            </div>
            <form >
              <input  className="w-[280px] h-[35px] border border-gray2 shadow-xl mt-5 " placeholder="$10.00 - 20000$" type="text"></input>
              <svg className="relative top-[-25px] left-[240px]" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.4733 12.5266L10.9999 10.0733C11.96 8.87621 12.4249 7.3568 12.2991 5.82747C12.1733 4.29814 11.4664 2.87512 10.3236 1.85103C9.18085 0.82694 7.68914 0.27961 6.15522 0.321583C4.6213 0.363557 3.16175 0.991644 2.0767 2.0767C0.991644 3.16175 0.363557 4.6213 0.321583 6.15522C0.27961 7.68914 0.82694 9.18085 1.85103 10.3236C2.87512 11.4664 4.29814 12.1733 5.82747 12.2991C7.3568 12.4249 8.87621 11.96 10.0733 10.9999L12.5266 13.4533C12.5886 13.5158 12.6623 13.5654 12.7436 13.5992C12.8248 13.633 12.9119 13.6505 12.9999 13.6505C13.0879 13.6505 13.1751 13.633 13.2563 13.5992C13.3376 13.5654 13.4113 13.5158 13.4733 13.4533C13.5934 13.329 13.6606 13.1628 13.6606 12.9899C13.6606 12.817 13.5934 12.6509 13.4733 12.5266V12.5266ZM6.33327 10.9999C5.41029 10.9999 4.50804 10.7262 3.74061 10.2135C2.97318 9.70068 2.37504 8.97185 2.02183 8.11913C1.66862 7.2664 1.57621 6.32809 1.75627 5.42285C1.93634 4.5176 2.38079 3.68608 3.03344 3.03344C3.68608 2.38079 4.5176 1.93634 5.42285 1.75627C6.32809 1.57621 7.2664 1.66862 8.11913 2.02183C8.97185 2.37504 9.70068 2.97318 10.2135 3.74061C10.7262 4.50804 10.9999 5.41029 10.9999 6.33327C10.9999 7.57095 10.5083 8.75793 9.6331 9.6331C8.75793 10.5083 7.57095 10.9999 6.33327 10.9999V10.9999Z" fill="#BCBDDB"/>
</svg>
            </form>
            
          </div>
          
          <div className="flex flex-col gap-[4px]">
          <h1 className=" text-blue font-bold  underline text-[20px]  leading-[30px] font-josefin">
              Filter By Color
            </h1>
            <div className="flex flex-row gap-8">
              <div className="flex flex-row gap-1 justify-center items-center  ">
                <p className="w-3 h-3 bg-blue1 rounded-full"></p>
                <p className="text-zinc font-normal leading-[30px] text-[18px]  w-[30px] text-center">Blue</p>
              </div>
              <div className="flex flex-row gap-1 justify-center items-center " >
                <p className="w-3 h-3 bg-orange rounded-full"></p>
                <p className="text-zinc font-normal leading-[30px] text-[18px] text-center w-[30px]">Orang</p>
              </div>
              <div className="flex flex-row gap-1 justify-center items-center" >
                <p className="w-3 h-3 bg-brown rounded-full"></p>
                <p className="text-zinc font-normal leading-[30px] text-[18px] text-center w-[30px]">Blue</p>
              </div>
              
            </div>
            <div className="flex flex-row gap-8">
              <div className="flex flex-row gap-1 justify-center items-center" >
                <p className="w-3 h-3 bg-green1 rounded-full"></p>
                <p className="text-zinc font-normal leading-[30px] text-[18px]  w-[30px] text-center">Green</p>
              </div>
              <div className="flex flex-row gap-1 justify-center items-center" >
                <p className="w-3 h-3 bg-purple1 rounded-full"></p>
                <p className="text-zinc font-normal leading-[30px] text-[18px] w-[30px] text-center">purple</p>
              </div>
              <div className="flex flex-row gap-1 justify-center  items-center" >
                <p className="w-3 h-3 bg-sky rounded-full"></p>
                <p className="text-zinc font-nrmal leading-[30px] w-[30px] text-[18px] text-center">Sky</p>
              </div>
              
            </div>
          </div>
        </div>
        <div className=" ">
          {sidebar.map((detail, index) => (
            <SideBar
              key={index}
              image={detail.image}
              title={detail.title}
              price={detail.price}
              disc={detail.disc}
              discription={detail.discription}
            />
          ))}
        </div>
      </div>
      <div className="pt-20">
        <List />

        <Abovefooter />
        <Bottomfooter />
      </div>
    </div>
  );
};

export default page;
