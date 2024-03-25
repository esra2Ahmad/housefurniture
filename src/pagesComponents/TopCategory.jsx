"use client";
import React, { useState } from "react";
import TopCard from "@/components/TopCard";
import { topCategory } from "@/components/Data";

const TopCategory = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= 4) {
      newIndex = 3;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div
      className="
    max-w-[1168px] 
    mx-auto
    md:px-0
    sm:px-2
    pt-[100px]
    "
    >
      <h1 className="text-center text-[42px] font-bold leading-normal text-blue">Top Category</h1>
      <div className="w-full h-full overflow-hidden flex flex-col justify-center mb-[53px] relative">
        <div
          className="whitespace-nowrap  duration-1000"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          <div className=" inline-flex items-center justify-center gap-[29px]  px-2">
            {topCategory.map((product, index) => (
              <TopCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
          <div className=" inline-flex items-center justify-center gap-[29px] w-[1168px] h-[365px] px-2">
            {topCategory.map((product, index) => (
              <TopCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
          <div className=" inline-flex items-center justify-center gap-[29px] w-[1168px] h-[365px] px-2">
            {topCategory.map((product, index) => (
              <TopCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        
        </div>
        <div className="w-[91px] h-5  flex justify-start items-center gap-5 mx-auto  mt-5">
      <button
          className={`h-2 w-2 rounded-xl bg-white border-pink border-[0.5px]   hover:bg-pink    duration-300${
            activeIndex === 0 ? "bg-white" : "bg-pink"
          }`}
          onClick={() => {
            updateIndex(0);
          }}
        />
         <button
          className={`h-2 w-2 rounded-xl bg-white border-pink border-[0.5px]   hover:bg-pink    duration-300${
            activeIndex === 0 ? "bg-white" : "bg-pink"
          }`}
          onClick={() => {
            updateIndex(1);
          }}
        />
         <button
       className={`h-2 w-2 rounded-xl bg-white border-pink border-[0.5px]   hover:bg-pink    duration-300${
        activeIndex === 0 ? "bg-white" : "bg-pink"
      }`}
          onClick={() => {
            updateIndex(2);
          }}
        />
        </div>
      </div>
    </div>
  );
};

export default TopCategory;
