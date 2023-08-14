import React from 'react'
import Image from 'next/image'

export const Promotional = () => {
  return (
    <div className=''>
      <div  className='flex mt-[60px]  justify-between '> 
   
        <div >
            <Image src="/../images/image 32.jpg" width={287} height={387} alt="lighr"/>
        </div>
        <div className=' h-[220px] mt-[110px]  w-[644px]'>
            <h3 className=" font-josefin font-bold text-[16px] text-pink ">Best Furniture For Your Castle....</h3>
            <h1 className="font-josefin font-bold text-[53px] text-black space-x-40">New Furniture Collection<br/>Trends in 2020</h1>
            <p className='leading-[28px] text-[14px] font-bold text-lightpurple'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing<br/>
in phasellus non in justo.</p>
        <button className="bg-pink text-esra w-[110px] h-[40px] text-[14px] font-semibold leading-normal mt-[10px]">shop Now</button>
        </div>
        <div>
            <Image src="/../images/sofa promotional header.jpg" width={529} height={689} alt='sofa'/>
        </div>
        </div>
    </div>
  )
}
