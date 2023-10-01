'use client'
import React from 'react'

const FAQ = (props) => {
  return (
    <div className=' flex flex-col gap-2 mt-[32px] '>
        <div className=''>
    <h1 className=" text-blue3 w-[400px]  font-bold  text-[17px]  leading-[30px]">{props.title}</h1>
    <p className=" text-lightpurple w-[500px]  font-normal  text-[16px]  leading-[30px]">{props.discription}</p>
    </div>
    </div>
  )
}

export default FAQ