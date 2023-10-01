"use client";
import React, { useState } from "react";
import AboveBar from "@/components/AboveBar";
import BottomNavBar from "@/components/BottomNavBar";
import List from "@/components/List";
import Abovefooter from "@/components/footter/AboveFooter";
import Bottomfooter from "@/components/footter/Bottomfooter";

const page = () => {
  const [formData, setFormDate] = useState({ email: "", password: "" });
  function handleSubmit(event){
    event.preventDefault()
    submitToApi(formData)
  }
  function handleChange(event) {
    setFormDate((prevformData) => {
      return {
        ...prevformData,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <div>
      <div>
        <AboveBar />
        <BottomNavBar />
      </div>
      <div className="h-[286px]  w-full   bg-medviolet mt-10 mb-[124px]">
        <div className="max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 flex flex-col  gap-2 ">
          <h1 className=" text-dark  font-bold  text-[36px]  leading-normal mt-[75px]">
            My Account
          </h1>
          <div className="flex flex-row gap-2">
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Home .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Pages .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              My Account
            </p>
          </div>
        </div>
      </div>
      <div className="w-[544px] h-[474px]  flex flex-col gap-4 justify-start   pt-11  relative left-[444px]">
        <h1 className=" text-black  font-bold  text-[36px]  leading-normal text-center ">
          Login
        </h1>
        <p className=" h-[20px]  text-gray4 font-normal  text-[17px]  leading-normal text-center">
          Please login using account detail bellow.
        </p>
        <form onSubmit={handleSubmit} 
        className="flex flex-col  gap-6 pt-6 justify-center items-center">
          <input
            type="email"
            placeholder="    Email Address"
            onChange={handleChange}
            name="email"
            value={formData.email}
            className=" w-[432px] h-[52px] border border-zinc2 rounded-[2px]"
          />
          <input
            type="password"
            placeholder="    Password"
            onChange={handleChange}
            name="password"
            value={formData.password}
            className=" w-[432px] h-[52px] border border-zinc2 rounded-[2px]"
          />
          <p className=" h-[20px]  text-gray4 font-normal  text-[17px]  leading-normal relative right-[133px]">
          Forgot your password?
        </p>
          <button className="bg-pink w-[432px] h-[52px] text-white  font-semibold text-[16px] font-josefin">submit</button>
        </form>
        

        <p className=" h-[20px]  text-gray4 font-normal  text-[17px]  leading-normal relative text-center">
          Don’t have an Account?Create account
        </p>
      </div>
      <div className="pt-[109px]">
        <List />
        <Abovefooter />
        <Bottomfooter />
      </div>
    </div>
  );
};

export default page;
