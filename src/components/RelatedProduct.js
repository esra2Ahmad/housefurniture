import React from 'react'
import Image from 'next/image'
import Rating from './Rating'

const RelatedProduct = (props) => {
  return (
    <div className=''>
        <div className=' '>
        <Image src={props.image} width={270} height={340} sizes='100vw' alt="relatedproduct"/>
        </div>
        <div className='flex flex-row gap-4 justify-center items-center pt-4'>
            <p className='w-[187px] text-blue text-[16px]  font-josefin font-semibold leading-normal'>{props.name}</p>
            <div className='w-[60px]'>
            <Rating />
            </div>
        </div>
        <p className=' text-blue text-[13px]  font-josefin font-normal leading-normal pb-24'>{props.price}</p>
    </div>
  )
}

export default RelatedProduct