import React from 'react'
import Image from 'next/image'

const Sale = (props) => {
  return (
    <div  className='ml-[18px] flex flex-row gap-2 w-[250px]'>
        <Image src={props.image} width={70} height={51} alt="post"/>
        <div className=' flex justify-center items-center flex-col' >
            <p className=' w-[174px] text-[14px] font-josefin font-normal leading-normal text-blue4'>{props.title}</p>
            <p className=' w-[174px] text-[11px] font-josefin font-semibold leading-normal text-lightpurple'>{props.date}</p>
        </div>
    </div>
  )
}

export default Sale