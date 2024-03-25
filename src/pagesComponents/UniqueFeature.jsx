import React from "react";
import Image from "next/image";

const UniqueFeature = () => {
  return (
    <div className=" w-full h-[579px] bg-babypurple mt-[135px] mb-[132px] flex justify-center gap-12 items-center">
      <div className="w-[1050px] h-[550px]  absolute left-54">
        <svg
          className=" absolute left-[-9px] top-[21px] z-0"
          xmlns="http://www.w3.org/2000/svg"
          width="481"
          height="450"
          viewBox="0 0 481 450"
          fill="none"
        >
          <path
            d="M481 232C481 362.339 412.339 450 282 450C151.661 450 0 376.339 0 246C0 115.661 142 -23.9999 251.5 4.00004C361 32 481 101.661 481 232Z"
            fill="#F5E1FC"
          />
        </svg>
        

        <Image
          src="/../images/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png"
          width={509}
          height={550}
          alt="sofa"
          className="z-50 absolute left-10"
        />
</div>
        <div className="w-[600px] relative  left-[370px]  top-[-100px]">
          <h1 className="text-[35px] font-josefin leading-[46.2px] text-blue">Unique Features Of leatest &<br/> Trending Poducts</h1>
        <div className=" flex flex-col gap-[13px] justify-start items-star relative top-[50px]">
            <div className="flex justify-start items-baseline gap-[17px]">
                <div  className="w-[11px] h-[11px] bg-pink rounded-full"></div>
                <p className="text-darkgray text-base font-medium leading-[21.12px] tracking-tight"> All frames constructed with hardwood solids and laminates</p>
            </div>
            <div className="flex justify-start items-baseline gap-[17px]">
            <div className="w-[11px] h-[11px] bg-blue1 rounded-full"></div>
                <p className="text-darkgray text-base font-medium leading-[21.12px] tracking-tight">  Reinforced with double wood dowels, glue, screw - nails corner<br/>
                blocks and machine nails</p>
            </div>
            <div className="flex justify-start items-baseline gap-[17px]">
            <div className="w-[11px] h-[11px] bg-green rounded-full"></div>
                <p className="text-darkgray text-base font-medium leading-[21.12px] tracking-tight"> Arms, backs and seats are structurally reinforced</p>
            </div>
        </div>
        <div className=" flex flex-row gap-5 item-center">
            <button className="w-[157px] h-[45px] bg-pink text-white font-[17px] font-josefin leading-[19.92px] relative top-[80px]"> Add To Card</button>
            <div className="flex flex-col relative top-[83px] ">
                <p className="text-[14px] font-normal leading-[16.41px] font-josefin text-blue" >B&B Italian Sofa </p>
                <p className="text-[14px] leading-[16.8px] font-josefin text-blue  opacity-80 fontnormal">$32.00</p>
            </div>
        </div>
      
          </div>
        </div>
      
    
  );
};

export default UniqueFeature;
