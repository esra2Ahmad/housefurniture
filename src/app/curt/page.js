"use client";
import AboveBar from "@/components/AboveBar";
import BottomNavBar from "@/components/BottomNavBar";
import Abovefooter from "@/components/footter/AboveFooter";
import Bottomfooter from "@/components/footter/Bottomfooter";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import CartItem from "@/components/CartItem";
import React from "react";
import { ShopContext } from "@/context/shop-context";
import { page1 } from "@/components/Data";

const page = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const router = useRouter();
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

      <div className="max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 px-4">
        <div className="w-full flex justify-between items-start gap-[81px]  ">
          <div className="max-w-[718px]">
            <div className="w-full flex justify-between items-baseline">
              <p className="text-blue text-xl font-bold">Product</p>
              <p className="text-blue text-xl font-bold ml-[226px]">Price</p>
              <p className="text-blue text-xl font-bold ml-[104px] mr-[122px]">
                Quantity
              </p>
              <p className="text-blue text-xl font-bold">Total</p>
            </div>
            
        <div className="w-full  /bg-red/  mt-[48px]" >
          {page1.map((product, index) => {
            if (cartItems[product.id] > 0)
            { console.log(cartItems)
              return <CartItem key={index} {...product} />;
            }
          })}
          
        </div>
          </div>
          <div className="max-w-[371px] flex flex-col justify-start items-center">
          <p className="text-blue text-xl font-bold mb-[42px]">
              Cart Totals
            </p>
            <div  className="w-[371px]  bg-lightviolet rounded-[3px] px-[30px] pb-[32px]">
              <div className="w-full mt-[34px]">
                <div className="flex justify-between items-center">
                <p className="text-blue text-lg font-semibold">
                    Subtotals:
                  </p>
                  <div className="text-blue text-base font-normal">
                    {
                    getTotalCartAmount()
}
                  </div>
                </div>
                <hr className="w-full h-[0px] border border-gray mt-[13px]" />
              </div>
              <div className="w-full mt-[34px]">
                <div className="flex justify-between items-center">
                <p className="text-blue text-lg font-semibold">Totals:</p>
                <div className="text-blue text-base font-normal">
                    {
                      getTotalCartAmount() 
                    }
                  </div>
                </div>
                <hr className="w-full h-[0px] border border-gray mt-[13px]" />
              </div>
              <label className="text-slate-400 text-xs font-normal flex justify-start items-center gap-[7px] mt-[31px]">
                <input
                  type="checkbox"
                  className="w-2 h-2 accent-gree"
                  defaultChecked={true}
                  
                />
                Shipping & taxes calculated at checkout
              </label>
              <button
                className="w-[312px] h-10 bg-green rounded-[3px] flex justify-center items-center text-white text-sm font-bold mt-[35px] hover:bg-green-600"
                onClick={() => {
                  checkout();
                  router.push("../shop/page.js");
                }}
              >
                Proceed To Checkout
              </button>
            </div>
            <p className="text-blue text-xl font-bold mb-[26px] mt-[32px]">
              Calculate Shopping
            </p>
            <div className="w-[371px]  bg-lighviolet rounded-[3px] px-[32px] pb-[21px] pt-[44px]">
              <form >
                <div className="mb-[38px] group">
                  <input
                    defaultValue=""
                
                    className="mb-0.5 bg-transparent w-full focus:outline-none "
                    placeholder="Bangladesh"
                  />
                  <hr className="w-full h-[0px] border border-gray group-focus-within:border-black group-focus-within:scale-105 duration-500" />
                </div>
                <div className="mb-[38px] group">
                  <input
                    
                    className="mb-0.5 bg-transparent w-full focus:outline-none"
                    placeholder="Mirpur Dhaka - 1200"
                  />
                  <hr className="w-full h-[0px] border border-gray group-focus-within:border-black group-focus-within:scale-105 duration-500" />
                </div>
                <div className="mb-[38px] group">
                  <input
                  
                    className="mb-0.5 bg-transparent w-full focus:outline-none "
                    placeholder="3331"
                  />
                  <hr className="w-full h-[0px] border border-gray group-focus-within:border-black group-focus-within:scale-105 duration-500" />
                </div>
                <button
                  className="w-[179px] h-[41px] bg-pink-500 rounded-sm text-white text-base font-semibold flex justify-center items-center hover:bg-pink-600"
                  type="submit"
                >
                  Calculate Shiping
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      

      
     

      <div className=" pt-96">
        <Abovefooter />
        <Bottomfooter />
      </div>
    </div>
  );
};

export default page;
