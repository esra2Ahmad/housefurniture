import React from 'react'
import Image from 'next/image'

const Offer = (props) => {
  return (
        
        <div className=' ml-[18px]  '>
            <div className=' gap-[8px] flex flex-col justify-center items-center '>
                <Image src={props.image} width={110} height={80} alt="post"/>
                <p className=' w-[174px] text-[14px] font-josefin font-semibold text-center leading-normal text-blue'>{props.title}</p>
                <p className=' w-[174px] text-[12px] font-josefin font-semibold text-center leading-normal text-lightpurple'>{props.price}</p>
            </div>
          
        </div>

    
  )
}

export default Offer