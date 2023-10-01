'use client'
import AboveBar from "@/components/AboveBar";
import BottomNavBar from "@/components/BottomNavBar";
import Abovefooter from "@/components/footter/AboveFooter";
import Bottomfooter from "@/components/footter/Bottomfooter";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const page = () => {
    const [formData, setFormData] = useState({ email: "", yourname: "",textarea: "",subject: ""});
    function handleSubmit(event){
      event.preventDefault()
      submitToApi(formData)
    }
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
      </div>
      <div className="h-[286px]  w-full   bg-medviolet mt-10 mb-[124px]">
        <div className="max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 px-4 flex flex-col  gap-2 ">
          <h1 className=" text-dark  font-bold  text-[36px]  leading-normal mt-[75px]">
            contact Us
          </h1>
          <div className="flex flex-row gap-2">
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Home .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Pages .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              contact us.
            </p>
          </div>
        </div>
      </div>
      <div className="ml-60 flex flex-row gap-24">
        <div className="w-[550px] /bg-red/ h-[209px] flex flex-col gap-4">
          <p className="w-[522px]  text-blue  font-bold text-[36px] font-josefin lesding-[48px]">
            Information About us
          </p>
          <p className="w-full  text-lightpurple  font-mediume text-[16px] font-josefin leading-[25.6px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
            neque ultrices <br />
            mattis aliquam, malesuada diam est. Malesuada sem tristique amet
            erat vitae
            <br /> eget dolor lobortis. Accumsan faucibus vitae lobortis quis
            bibendum quam.
          </p>
          <div className="flex flex-row gap-1 justify-start mt-4">
            <div className="w-4 h-4 bg-blue6 rounded-full"></div>
            <div className="w-4 h-4 bg-pink rounded-full"></div>
            <div className="w-4 h-4 bg-cyan rounded-full"></div>
          </div>
        </div>
        <div className="w-[550px] /bg-red/ h-[209px] flex flex-col gap-8">
          <p className="w-[522px]  text-blue  font-bold text-[36px] font-josefin lesding-[48px]">
            Contact Way
          </p>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row gap-2 justify-center items-center">
              <div className="w-[35px] h-[35px] bg-blue6 rounded-full"></div>
              <div className="w-[273px] h-[40px] ">
                <p className=" text-lightpurple  font-mediume text-[16px] font-josefin leading-[25.6px]">
                  Tel: 877-67-88-99
                </p>
                <p className=" text-lightpurple  font-mediume text-[16px] font-josefin leading-[25.6px]">
                  E-Mail: shop@store.com
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
              <div className="w-[35px] h-[35px] bg-pink rounded-full"></div>
              <div className="w-[273px] h-[40px] ">
                <p className=" text-lightpurple  font-mediume text-[16px] font-josefin leading-[25.6px]">
                  Support Forum
                </p>
                <p className=" text-lightpurple  font-mediume text-[16px] font-josefin leading-[25.6px]">
                  For over 24hr
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row gap-2 justify-center items-center">
              <div className="w-[35px] h-[35px] bg-orange rounded-full"></div>
              <div className="w-[273px] h-[40px] ">
                <p className=" text-lightpurple  font-mediume text-[16px] font-josefin leading-[25.6px]">
                  20 Margaret st, London
                </p>
                <p className=" text-lightpurple  font-mediume text-[16px] font-josefin leading-[25.6px]">
                  Great britain, 3NM98-LK
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
              <div className="w-[35px] h-[35px] bg-green rounded-full"></div>
              <div className="w-[273px] h-[40px] ">
                <p className=" text-lightpurple  font-mediume text-[16px] font-josefin leading-[25.6px]">
                  Free standard shipping
                </p>
                <p className=" text-lightpurple  font-mediume text-[16px] font-josefin leading-[25.6px]">
                  on all orders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-11 ml-60 mt-52">
        <div className="w-[522px] -[409px] /bg-red/">
            <h1 className=" text-blue font-bold  text-[36px]  leading-[48px] ">Get In Touch</h1>
            <p className="w-full mt-[20px] text-lightpurple  font-mediume text-[15px] font-josefin leading-[25.6px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br/>  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
            <form onSubmit={handleSubmit} 
        className=" flex flex-col gap-4 items-start mt-8">
          <div  className="flex flex-row  gap-6 pt-2  ">
            <input
            type="text"
            placeholder="    Your Name"
            onChange={handleChange}
            name=" yourname"
            value={formData.yourname}
            className=" w-[240px] h-[52px] border border-zinc4 rounded-[2px]"
          />
          <input
            type="email"
            placeholder="    write Your Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            className=" w-[240px] h-[52px] border border-zinc4 rounded-[2px]"
          />
          
         </div>
         <input
            type=" textarea"
            placeholder="    subject"
            onChange={handleChange}
            name=" subject"
            value={formData.email}
            className=" w-[502px] h-[50px] border border-zinc4 rounded-[2px] "
          />
         <input
            type=" textarea"
            placeholder="   Type Your Messege*"
            onChange={handleChange}
            name=" textarea"
            value={formData.email}
            className=" placeholder-top-[-20px] focus:outline-none w-[502px] h-[155px] border border-zinc4 rounded-[2px]  align-text-top"
          />
        
          
          

           
           <button className="bg-pink w-[157px] h-[40px] text-white ml-3 font-semibold text-[16px] font-josefin mt-[18px]">Send Mail</button>
           
          
        </form>
        </div>
        <div>
          <Image
            src="/images/Group 124.png"
            width={522}
            height={822}
            alt="group"
          />
        </div>
      </div>
      <div className="mt-24">
        <Abovefooter />
        <Bottomfooter />
      </div>
    </div>
  );
};

export default page;
