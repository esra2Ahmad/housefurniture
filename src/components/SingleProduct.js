'use client'
import React from 'react'
import Rating from './Rating'
import Image from 'next/image'

const SingleProduct = (props) => {
  return (
    <div className='flex flex-col gap-2 ml-3'>
        <Image src={props.image} width={210} height={255} alt="singleproduct"/>
        <p className='text-center text-[19px] font-normal font-josefin text-black '>{props.title}</p>
        <div className='flex flex-row gap-2  items-center'>
            <p className='text-center text-[14px] font-normal font-josefin text-blue' >{props.price}</p>
            <p className='text-center text-[14px] font-normal font-josefin text-pink line-through' >{props.disacount}</p>
            <Rating/>
        </div>
    </div>
  )
}

export default SingleProduct