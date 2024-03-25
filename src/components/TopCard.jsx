import React from 'react'
import Image from 'next/image';

const TopCard = (props) => {
  return (
    <div className='w-[269px] h-[345px}    duration-500 hover:w-[260px]  hover:h-[340px] hover:translate-x-1 relative flex-col justify-start items-center flex gap-[27px] group'>
      <div className="hidden group-hover:block duration-500 w-[260px] group-hover:w-[270px] h-[260px] bg-violet rounded-full shadow absolute top-[0px] group-hover:left-[-10px] -z-10 opacity-0 group-hover:opacity-100"></div>
      
      
        <div className="w-[269px] h-[269px] bg-neutral_100 rounded-full  flex justify-center items-center relative">
        <Image src={props.image}width="0"
          height="0"
          sizes=" 40%"
          className="w-56  h-46 " alt="" />
          </div >
          <div className="flex flex-col gap-4">
          <p className="text-center text-[2opx] font-normal leading-normal text-blue">{props.title}</p>
          <p className="text-center text-[2opx] font-normal leading-normal text-blue">{props.price}</p>
          </div>


    </div>
  )
}

export default TopCard