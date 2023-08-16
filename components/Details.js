import React from 'react';
import Image from 'next/image';

const Details = (props) => {
  return (
    <div className='w-[380px] h-[330px] pt-[30px] gap-12'>
        <div className='w-[370px] h-[313px]  
        flex justify-center items-center'>
            <Image src={props.image} width={250}  height={250} alt="chairs"  />
        </div>
        <div className='flex gap-11 justify-center items-center'>
            <p className="font-josefin text-[16px] font-normal text-blue">
            Comfort Handy Craft
            </p>
            <div className='flex gap-5'>
                <p className="font-josefin text-[14px] font-normal text-blue">$42.00</p>
                <p className="font-josefin text-[14px] font-normal text-medred line-through">$65.00</p>
            </div>
        </div>
    </div>
  )
}

export default Details