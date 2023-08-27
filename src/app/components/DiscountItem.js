'use client'
import React from 'react';
import { useState } from 'react';

const DiscountItem = () => {
    const [activeType, setActiveType] = useState(0);
  return (
    <div>
        <h1 className=' mt-20 text-[42px] font-bold font-josefin leading-normal text-blue text-center items-baseline '>Discount Item</h1>
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
      <div className="flex w-[1214px] h-[597px] bg-red mx-auto">
        <div className='w-[545px] h-[597px]'>
            <h1>20% Discount Of All Products</h1>
            <h3>Eams Sofa Compact</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget <br/>feugiat habitasse nec, bibendum condimentum.</p>
        </div>
      </div>
    </div>
  )
}

export default DiscountItem