import React from 'react'
import Image from 'next/image'

export const Promotional = () => {
  return (
    <div className='flex mt-[60px] px-[40px]'>
        <div >
            <Image src="/../images/image 32.jpg" width={387} height={387} alt="lighr"/>
        </div>
        <div className=' w-[644px] h-[248px] mt-[180px] space-y-4 '>
            <h3 className=" font-josefin font-bold text-[16px] text-pink ">Best Furniture For Your Castle....</h3>
            <h1 className="font-josefin font-bold text-[33px] text-black">New Furniture Collection<br/>Trends in 2020</h1>
            <p className='leading-[28px] text-[14px] font-bold text-lightpurple'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing<br/>
in phasellus non in justo.</p>
        <button className="bg-pink text-esra w-[110px] h-[40px] text-[14px] font-semibold leading-normal">shop Now</button>
        </div>
        <div>
            <Image src="/../images/sofa promotional header.jpg" width={706} height={689} alt='sofa'/>
        </div>
    </div>
  )
}
