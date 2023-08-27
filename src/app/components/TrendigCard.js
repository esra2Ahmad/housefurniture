import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
       
    <div className=" group w-[247px] h-[244px] shadow flex flex-col items-center justify-start gap-3 ">
       
      <div className="w-[247px] h-[244px] flex justify-center items-center relative bg-white  ">
        <Image
          src={props.image}
          width="0"
          height="0"
          sizes=" 100%"
          className=" w-[171px]  h-[171px]"
          alt=""
        />
      </div>
      <div className="flex flex-col h-[100px]">
        <p className="text-bold text-[16px] leading-[25.5px] text-blue">{props.title}</p>
        <div className="flex flex-row gap-5">
          <p className="text-bold text-[16px] leading-[25.5px] text-blue">{props.price}</p>
          <p className="text-bold text-[16px] leading-[25.5px] text-blue opacity-70">{props.disacount}</p>
        </div>
      </div>
    </div>
    
  );
};

export default Card;
