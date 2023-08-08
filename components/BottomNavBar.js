import React from 'react';
import {VscSearch} from "react-icons/Vsc";
import { FiChevronDown } from 'react-icons/fi';

const BottomNavBar = () => {
  return (
    <div className="w-[1230px] h-[50px]  my-2  mx-[160px] flex justify-between">
      <div>
        <h1 className='text-darkblue  font-bold text-[34px]    text-center font-josefin'>Hekto</h1>
       </div>
       <div className="flex justify-between gap-6  items-center">
        <div className='flex items-end '>
        <p className="text-pink   text-[16px] ">Home</p>
        <FiChevronDown  color=' #FB2E86' />
        </div>
        <p className="text-[16px] text-darkblue">Pages</p>
        <p className="text-[16px] text-darkblue">Products</p>
        <p className="text-[16px] text-darkblue">Blog</p>
        <p className="text-[16px] text-darkblue">Shop</p>
        <p className="text-[16px] text-darkblue">Contact</p>
        </div>
        <div className="flex  items-center">
          <input placeholder='' className='h-[35px] w-[200px]   border-[1px] border-gray'></input>
          <button className="w-[40px] bg-pink h-[35px] border border-pink "><VscSearch color='white' className=' relative left-[10px] h-[16px] w-[16px] text-[24px]'/></button>
        </div>
       
      


    </div>
  )
}

export default BottomNavBar;