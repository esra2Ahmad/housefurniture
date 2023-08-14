import React from 'react'
import Image from 'next/image';

const Card = (props) => {
  return (
    <div className="w-[270px] h-[361px]  ">
        <div className='flex flex-col'>
            <div className="w-[220px] h-[200px] pt-[50px]">
        <Image src={props.image} width={150} height={140} alt=""/>
        </div>
        <div className=' w-[150px] text-center space-y-2  '>
        <p className=' text-pink text-[16px] font-bold leading-normal  '>{props.title}</p>
        <div className='flex gap-1  justify-center'>
        <div className=' w-3 h-1 border border-green bg-green  hover:red'>  </div>
        <div className=' w-3 h-1 border border-pink bg-pink '>  </div>
        <div className=' w-3 h-1 border border-dark bg-dark '>  </div>
      
        
        </div>
        <p className='text-blue text-[14px] font-normal leading-normal font-josefin'>{props.code}</p>
        <p className='text-blue text-[14px] font-normal leading-normal font-josefin'>{props.price}</p>
        </div>
        </div>
    </div>
  )
}

export default Card;