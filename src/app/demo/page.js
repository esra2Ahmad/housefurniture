"use client";
import AboveBar from "@/components/AboveBar";
import BottomNavBar from "@/components/BottomNavBar";
import Abovefooter from "@/components/footter/AboveFooter";
import Bottomfooter from "@/components/footter/Bottomfooter";
import Link from "next/link";
import Demo from "@/components/Demo";
import { demo } from "@/components/Data";
import React, { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({
    email: "",
    forcheckbox: true,
    firstName:"",
    lastName:"",
    Address:"",
    Appaetnentment:"",
    city:"",
    Bangladesh:"",
    PostalCode:"",
  });
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevformData) => {
      return {
        ...prevformData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <div>
      <div>
        <AboveBar />
        <BottomNavBar />
        <div className="h-[286px]  w-full   bg-medviolet mt-10 mb-[124px]">
          <div className="max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 px-4 flex flex-col  gap-2 ">
            <h1 className=" text-dark  font-bold  text-[36px]  leading-normal mt-[75px]">
              Hekto Demo
            </h1>
          </div>
        </div>
      </div>
      <div className="h-[86px]  w-full  mt-1 mb-11">
        <div className="max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 px-4 flex flex-col  gap-2 ">
          <h1 className=" text-blue3  font-bold  text-[24px]  leading-normal ">
            Hekto Demo
          </h1>
          <p className=" text-blue3 normal  text-[12px] font-josefin ">
            Cart / Information / Shipping / Payment
          </p>
        </div>
      </div>
      <div className="max-w-[1140px]  mx-auto md:px-10 xl:px-2 sm:px-2 px-4 flex flex-row gap-2  pb-40">
        <div className="w-[770px] h-[920px]  ">
          <div className="flex gap-80 pt-8">
            <h1 className=" text-blue3  font-bold  text-[18px]  leading-normal ">
              Contact Information
            </h1>
            <div className="flex gap-1">
              <p className=" text-violet1  font-medium  text-[14px]  leading-normal ">
                Already have an account?
              </p>
              <Link
                href="/login"
                className=" text-violet1  font-medium  text-[14px]  leading-normal "
              >
                login
              </Link>
            </div>
          </div>
          <form className="pt-8">
            {" "}
            <input
              type="email"
              placeholder= " EmailAddress"
              onChange={handleChange}
              name="email"
              value={formData.email}
              className=" w-[710px] h-[52px]  border  border-zinc2  placeholder-violet1 border-t-0 border-l-0 border-r-0  mb-4"
            />
            <br/>
            <input
            type="checkbox"
            id="forcheckbox"
            onChange={handleChange}
            name="forcheckbox"
            checked={formData.forcheckbox}
            className=""
            />
            <label htmlFor="forcheckbox" className="text-zinc2  font-medium  text-[16px]  leading-normal "> Keep me up to data on news and exclusive offers</label>
            <br/>
            <h1  className=" text-blue3  font-bold  text-[18px]  leading-normal pt-20
            ">Shipping address</h1>
            <div className="flex flex-row gap-10 pt-11">
            <input
              type="text"
              placeholder="  First name (optional)"
              onChange={handleChange}
              name="firstName"
              value={formData.firstName}
              className=" w-[336px] h-[52px] border border-zinc2 border-t-0 border-l-0 border-r-0  placeholder-violet1"
            />
                <input
              type="text"
              placeholder="  lastName"
              onChange={handleChange}
              name="lastName"
              value={formData.lastName}
              className=" w-[336px] h-[52px] border border-zinc2 border-t-0 border-l-0 border-r-0  placeholder-violet1"
            />
            </div>
             
              <input
              type="text"
              placeholder="  Address"
              onChange={handleChange}
              name="Address"
              value={formData.Address}
              className="w-[710px] h-[52px]  border  border-zinc2  border-t-0 border-l-0 border-r-0  mt-6  placeholder-violet1"
            />
             <input
              type="text"
              placeholder="  Appaetnentment,suit,e.t.c (optinal)"
              onChange={handleChange}
              name="Appaetnentment"
              value={formData.Appaetnentment}
              className="w-[710px] h-[52px]  border  border-zinc2  border-t-0 border-l-0 border-r-0  mt-6  placeholder-violet1"
            />
            <input
              type="text"
              placeholder="  city"
              onChange={handleChange}
              name="Appaetnentment"
              value={formData.city}
              className=" w-[710px] h-[52px]  border  border-zinc2  border-t-0 border-l-0 border-r-0  mt-6  placeholder-violet1"
            />
            <div className="flex flex-row gap-10 mt-6">
             <input
              type="text"
              placeholder="  Bangladesh"
              onChange={handleChange}
              name="Appaetnentment"
              value={formData.Bangladesh}
              className=" w-[336px] h-[52px] border border-zinc2 border-t-0 border-l-0 border-r-0  placeholder-violet1"
            />
            <input
              type="text"
              placeholder=" Postal Code"
              onChange={handleChange}
              name="Appaetnentment"
              value={formData.PostalCode}
              className=" w-[336px] h-[52px] border border-zinc2 border-t-0 border-l-0 border-r-0  placeholder-violet1"
            />
            </div>
            <button className="bg-pink w-[182px] h-[44px] text-white  mt-28  font-semibold text-[16px] font-josefin">Continue Shipping</button>
          </form>
        </div>
        <div className="w-[369px] h-[920px] flex flex-col gap-2 ">
           
        {demo.map((detail, index) => (
          <Demo
            key={index}
            image={detail.image}
            name={detail.name}
            color={detail.color}
            size={detail.size}
            price={detail.price}
          />
        ))}
        
        <div className="w-[371px] h-[284px] mt-10 flex flex-col gap-8 justify-center items-center">
            <div className="flex flex-row gap-32 items-center w-[310px] h-[30px] border border-zinc2 border-t-0 border-l-0 border-r-0 ">
                <p className="w-[79px] text-blue3  font-bold  text-[18px]  leading-normal">Subtotals:</p>
                <p className="w-[79px] text-blue3  font-normal  text-[16px]  leading-normal">£325.00</p>
            </div>
            <div className="flex flex-row gap-32 w-[310px] item-center  h-[30px] border border-zinc2 border-t-0 border-l-0 border-r-0 ">
                <p className="w-[79px]  text-blue3  font-bold  text-[18px]  leading-normal">Totals:</p>
                <p className="w-[79px] text-blue3  font-normal  text-[16px]  leading-normal">£325.00</p>
            </div>
            <form className=" ml-8">
            <input
            type="checkbox"
            id="forcheckbox"
            onChange={handleChange}
            name="forcheckbox"
            checked={formData.forcheckbox}
            className="text-red ml-1"
            />
           
           
            <label htmlFor="forcheckbox" className="text-zinc2  font-medium  text-[16px]  leading-normal "> Shipping & taxes calculated at checkout</label> 
            
            <button className="bg-green w-[182px] h-[44px] text-white mt-11 font-semibold relative left-14 text-[16px] font-josefin">Proceed To Checkout</button>
</form>
        </div>
        

        </div>
        
      </div>
      <div>
        <Abovefooter />
        <Bottomfooter />
      </div>
    </div>
  );
};

export default page;
