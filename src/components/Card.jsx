import React from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";

const Card = (props) => {
  return (
    <div className=" group w-[270px] h-[361px]  hover:bg-blue1 shadow flex flex-col items-center justify-start gap-3 ">
      <div className="w-[270px] h-[236px] flex justify-center items-center relative bg-white  ">
        <Image src={props.image} width="189" height="251" alt="" />
        <div className="absolute left-[15px]  top-1 hidden group-hover:flex flex-row justify-start items-center gap-[16px]">
          <button className=" hover:scale-125 duration-300 text-[#2F1AC4]  ">
            <AiOutlineHeart />
          </button>

          <button className=" hover:scale-125 duration-300 text-[#2F1AC4]  ">
            <AiFillHeart />
          </button>

          <button className=" hover:scale-125 duration-300 text-[#2F1AC4] ">
            <AiOutlineZoomIn />
          </button>
        </div>
      </div>
      <div className="">
        <div className=" w-[150px] text-center space-y-2">
          <p className=" text-pink text-[16px] font-bold leading-normal ">
            {props.title}
          </p>
          <div className="flex gap-1  justify-center">
            <div className=" w-3 h-1 border border-green bg-green"></div>
            <div className=" w-3 h-1 border border-pink bg-pink "></div>
            <div className=" w-3 h-1 border border-dark bg-dark "></div>
          </div>
          <p className="text-blue text-[14px] font-normal leading-normal font-josefin">
            {props.code}
          </p>
          <p className="text-blue text-[14px] font-normal leading-normal font-josefin">
            {props.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
