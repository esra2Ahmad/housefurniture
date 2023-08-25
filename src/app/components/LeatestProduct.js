"use client"
import { details } from "./Data";
import Details from "./Details";
import { useState } from "react";

const LeatestProduct = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="pt-[40px]">
      <h1 className=" text-dark text-center pt-[30px] font-bold  text-[42px]  leading-normal  font-Josefin">
        {" "}
        LeatesProducts
      </h1>
      <div className="w-full">
        <div className="flex justify-center items-center">
          <ul className="w-[550px]  h-[22px] gap-16 list-none flex pt-[40px]">
            
              
              <li  className="  text-pink  font-normal text-[16px]  ">New Arrival</li>
            
            <button
              className={` hover:text-pink  font-normal text-[16px]  ${
                active === 1 ? " text-pink underline": "text-blue"
              }`}
              onClick={() => {
                setActive(1);
              }}
            >
              <li>Best Seller</li>
            </button>
            <li className="text-[18px] font-normal font-josefin  text-blue">
              Featured
            </li>
            <li className="text-[18px] font-normal font-josefin  text-blue">
              Special Offer
            </li>
          </ul>
        </div>
        <div
          className=" w-[1177px] 
    h-full 
    mx-auto 
    xl:px-20
    md:px-10
    sm:px-2
    px-4 grid grid-cols-3   gap-14  "
        >
          {details.map((detail, index) => (
            <Details
              key={index}
              image={detail.image}
              title={detail.title}
              disacount={detail.disacount}
              price={detail.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeatestProduct;
