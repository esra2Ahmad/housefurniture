
'use client'
import {trendingFeature} from "./Data";
import TrendingCard from"./TrendigCard";
import Image from "next/image";

const TrendingProducts = () => {
  return (
    <div className="
    max-w-[1168px] 
    mx-auto
    md:px-0
    sm:px-2">
          <h1 className="text-bold text-[42px] leading-[49.2px] text-darkblue text-center">Trending Products</h1>
    <div className=" inline-flex items-center justify-center gap-[29px] w-full h-[365px] px-2">
        {trendingFeature.map((product,index)=>(
          <TrendingCard
          key= {index}
          image={product.image}
          title={product.title}
          price={product.price}
          disacount={product.disacount}/>
        ))}
      </div>
      <div className="flex  justify-center items-center gap-11 mx-10">
        <div className=" w-[420px] h-[270px] bg-white  hover:bg-neutral_100 pt-5  ">
            <h1 className="text-[26px] leading-[26px] font-josefin text-blue font-bold  ml-5">23% off in all products</h1>
            <div className="flex flex-row mt-5">
                <buttun className=" text-blue font-semibold  text-[16px] leading-[19.2px] ml-5  hover:text-pink hover:underline">shopeNow</buttun>
                <Image src="/images/oclock.png" width={213} height={207} alt="oclock"/>
            </div>
        </div>
        <div  className=" w-[420px] h-[270px] bg-white hover:bg-neutral_100 pt-5">
            <h1 className="text-[26px] leading-[26px] font-josefin text-blue font-bold ml-5">23% off in all products</h1>
            <div className="flex flex-row  mt-5">
                <buttun  className=" text-blue font-semibold ml-5 text-[16px] leading-[19.2px]  text-center hover:text-pink hover:underline w-[200px]">View collection</buttun>
                <Image src="/images/desk.png" width={312} height={171} alt="oclock" className="mt-7 b"/>
            </div>
        </div>
        <div className=" w-[420px] h-[270px]  bg-white  hover:bg-neutral_100 flex flex-col gap-7 pt-5">
            <div className="flex flex-row gap-11 w-[267px] h-[74px] ">
                <Image src="/images/image 30.png"  width={64} height={61} alt="chair"/>
                <div>
                    <h3 className=" font-semibold font-josefin text-[16px] leading-normal text-blue text-center">Executive Seat chair</h3>
                    <p className="eont-normal text-[12px]  font-josefin  text-blue line-through ">$32.00</p>
                </div>
            </div>
            <div className="flex flex-row gap-11 w-[267px] h-[74px] ">
                <Image src="/images/image 19.png"  width={64} height={61} alt="chair"/>
                <div>
                    <h3 className=" font-semibold font-josefin text-[16px] leading-normal text-blue text-center">Executive Seat chair</h3>
                    <p className="eont-normal text-[12px]  font-josefin  text-blue line-through ">$32.00</p>
                </div>
            </div>
            <div className="flex flex-row gap-11 w-[267px] h-[74px] ">
                <Image src="/images/image 28.png"  width={64} height={61} alt="chair"/>
                <div>
                    <h3 className=" font-semibold font-josefin text-[16px] leading-normal text-blue text-center">Executive Seat chair</h3>
                    <p className="eont-normal text-[12px]  font-josefin  text-blue line-through ">$32.00</p>
                </div>
            </div>
        </div>
      </div>
      </div>
  )
}

export default TrendingProducts