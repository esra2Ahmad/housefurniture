import React from "react";
import Image from "next/image";

const Demo = (props) => {
  return (
    <div className="">
      <div className="flex  gap-3 w-[336px] h-[102px] border-r-0 border-l-0 border-t-0 border border-zinc3">
        <div>
          <Image src={props.image} width={83} height={87} alt="Demo" />
        </div>

        <div className="w-[180px] flex flex-col gap-1">
          <h3 className=" text-black  font-normal  text-[14px]  leading-normal">
            {props.name}
          </h3>
          <p className=" text-zinc3  font-normal  text-[14px]  leading-normal">
            {props.color}
          </p>
          <p className=" text-zinc3  font-normal  text-[14px]  leading-normal">
            {props.size}
          </p>
        </div>
        <p className=" text-blue  font-normal  text-[14px]  leading-normal">
          {props.price}
        </p>
      </div>
     
    </div>
  );
};

export default Demo;
