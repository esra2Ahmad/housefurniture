import React from 'react';
import {products} from "../components/Data";
import Card from './Card';

const FetauredProduct = () => {
  return (
    <div className="pt-[40px]">
      <h1 className=' text-dark text-center pt-[30px] font-bold  text-[42px]  leading-normal  font-Josefin'> Fetuared Products</h1>
      <div className='w-full'>
        <div className=" w-[1137px] flex justify-between
    h-full 
    mx-auto 
    xl:px-20
    md:px-10
    sm:px-2
    px-4">
        {products.map((product,index)=>(
          <Card
          key= {index}
          image={product.image}
          title={product.title}
          code={product.code}
          price={product.price}/>
        ))}
      </div>
      </div>
      <div className='w-ful  flex justify-center'>
      <div className='w-[91px] h-[4px] flex  gap-1  '>
        <div className=' w-8 h-1 border border-pink bg-pink  hover:red'>  </div>
        <div className=' w-8 h-1 border border-pink bg-pink '>  </div>
        <div className=' w-8 h-1 border border-pink bg-pink '>  </div>
        <div className=' w-8 h-1 border border-pink bg-pink '>  </div>
        
      </div>
      </div>
    </div>
  )
}

export default FetauredProduct