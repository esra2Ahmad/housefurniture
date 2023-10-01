'use client'
import AboveBar from '@/components/AboveBar'
import BottomNavBar from '@/components/BottomNavBar'
import List from '@/components/List'
import Abovefooter from '@/components/footter/AboveFooter'
import Bottomfooter from '@/components/footter/Bottomfooter'
import React, { useState } from 'react'
import FAQ from '@/components/FAQ'
import { faq } from '@/components/Data'


const page = () => {
  const [formData, setFormData] = useState({  yourname: "",textarea: "",subject: ""});
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
            <AboveBar/>
            <BottomNavBar/>
        </div>
        <div className="h-[286px]  w-full   bg-medviolet mt-10 mb-[124px]">
        <div className="max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 px-4 flex flex-col  gap-2 ">
          <h1 className=" text-dark  font-bold  text-[36px]  leading-normal mt-[75px]">
            FAQ
          </h1>
          <div className="flex flex-row gap-2">
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Home .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Pages .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              FAQ
            </p>
          </div>
        </div>
      </div>
       
      
        <div className='flex flex-row   gap-72'>
          
           
          <div className="w-[369px] h-[920px] flex flex-col gap-2  ml-60 ">
          <h1 className=" text-blue  font-bold  text-[36px]  leading-[30px]">Generel Information</h1>
           {faq.map((detail, index) => (
             <FAQ
               key={index}
               title={detail.title}
               discription={detail.discription}/>
           ))}
           </div>
           <div className='w-[500px]  /bg-red/'>
            <h1 className=" text-blue  font-bold  text-[36px]  leading-[30px] mt-8">FAQ</h1>
            <form onSubmit={handleSubmit} 
        className=" flex flex-col gap-4 items-start mt-8">
          <div  className="flex flex-row  gap-6 pt-2  ">
            <input
            type="text"
            placeholder="    Your Name"
            onChange={handleChange}
            name=" yourname"
            value={formData.yourname}
            className=" w-[445px] h-[52px] border border-zinc4 rounded-[2px]"
          />
       
          
         </div>
         <input
            type=" textarea"
            placeholder="    subject"
            onChange={handleChange}
            name=" subject"
            value={formData.email}
            className=" w-[445px] h-[50px] border border-zinc4 rounded-[2px] "
          />
         <input
            type=" textarea"
            placeholder="   Type Your Messege*"
            onChange={handleChange}
            name=" textarea"
            value={formData.email}
            className=" placeholder-top-[-20px] w-[445px] h-[255px] border border-zinc4 rounded-[2px]  "
          />
        
          
          

           
           <button className="bg-pink w-[157px] h-[40px] text-white font-semibold text-[16px] font-josefin mt-[18px]">Send Mail</button>
           
          
        </form>
           </div>
          </div>
         
        
        <div className='mt-[-200px]'>
            <List/>
            <Abovefooter/>
            <Bottomfooter/>
        </div>

    </div>
  )
}

export default page