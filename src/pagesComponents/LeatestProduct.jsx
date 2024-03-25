"use client";
import { details } from "@/components/Data";
import Details from "@/components/Details";
import { useState } from "react";

const LeatestProduct = () => {
  const [activeType, setActiveType] = useState(0);
  return (
    <div className="pt-[40px]">
      <h1 className=" text-dark text-center pt-[30px] font-bold  text-[42px]  leading-normal  font-Josefin">
        {" "}
        LeatesProducts
      </h1>
      <ul className="flex justify-between items-center gap-[60px] mx-auto mb-[58px] w-[527px] mt-10">
        <button
          className={` hover:text-pink text-sm font-normal text-[16px] ${
            activeType === 0 ? "underline text-pink" : "text-blue"
          }`}
          onClick={() => {
            setActiveType(0);
          }}
        >
          <li>New Arrival</li>
        </button>
        <button
          className={` hover:text-pink text-sm font-normal text-[16px] ${
            activeType === 1 ? "text-pink underline" : "text-blue"
          }`}
          onClick={() => {
            setActiveType(1);
          }}
        >
          <li>Best Seller</li>
        </button>
        <button
          className={` hover:text-pink text-sm font-normal text-[16px] ${
            activeType === 2 ? "text-pink underline" : "text-blue"
          }`}
          onClick={() => {
            setActiveType(2);
          }}
        >
          <li>Featured</li>
        </button>
        <button
          className={` hover:text-pink text-sm font-normal text-[16px] ${
            activeType === 3 ? "text-pink underline" : "text-blue"
          }`}
          onClick={() => {
            setActiveType(3);
          }}
        >
          <li>Special Offer</li>
        </button>
      </ul>
      <div
        className=" w-[1186px] 
    h-full 
    mx-auto
    md:px-0
    sm:px-2 
    grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[37px] " 
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
  );
};

export default LeatestProduct;
