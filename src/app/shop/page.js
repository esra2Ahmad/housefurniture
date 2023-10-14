import AboveBar from "@/components/AboveBar";
import BottomNavBar from "@/components/BottomNavBar";
import React, { useContext } from "react";
import Link from "next/link";
import Abovefooter from "@/components/footter/AboveFooter";
import Bottomfooter from "@/components/footter/Bottomfooter";
import { product } from "@/components/Data";
import CartItems from "@/components/CartItems";
import { ShopContextProvider } from "@/context/shop-context";

const page = () => {
  return (
    <div>
      <AboveBar />
      <BottomNavBar />
      <div className="h-[286px]  w-full   bg-medviolet mt-10 mb-[124px]">
        <div className="max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 px-4 flex flex-col  gap-2 ">
          <h1 className=" text-dark  font-bold  text-[36px]  leading-normal mt-[75px]">
            Shopping curt
          </h1>
          <div className="flex flex-row gap-2">
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Home .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Pages .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Shoppingcurt.
            </p>
          </div>
        </div>
      </div>

      <div className=" flex flex-row gap-4">
        <h1 className="w-[200px] bg-orange">Product</h1>
        <h1>Price</h1>
        <h1>Quantity</h1>
        <h1>Total</h1>
        <h1>Total Curt</h1>
      </div>

      <div>
        <Abovefooter />
        <Bottomfooter />
      </div>
    </div>
  );
};

export default page;
