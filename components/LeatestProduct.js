import React from "react";
import { details } from "../components/Data";
import Details from "./Details";

const LeatestProduct = () => {
  return (
    <div className="pt-[40px]">
      <h1 className=" text-dark text-center pt-[30px] font-bold  text-[42px]  leading-normal  font-Josefin">
        {" "}
        LeatesProducts
      </h1>
      <div className="w-full">
        <div className="flex justify-center items-center">
          <nav className="w-[550px]  h-[22px] gap-16 list-none flex pt-[40px]">
            <li className="text-[16px] font-normal font-josefin underline text-pink">
              New Arrival
            </li>
            <li className="text-[18px] font-normal font-josefin  text-blue">Best Seller</li>
            <li className="text-[18px] font-normal font-josefin  text-blue">Featured</li>
            <li className="text-[18px] font-normal font-josefin  text-blue">Special Offer</li>
          </nav>
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
