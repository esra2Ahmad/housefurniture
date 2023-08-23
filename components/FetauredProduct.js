'use client'
import {products} from "../components/Data";
import Card from './Card';
import { useState } from 'react';

const FetauredProduct = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= 4) {
      newIndex = 3;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="
    max-w-[1168px] 
    mx-auto
    md:px-0
    sm:px-2
    ">
      <h1 className=' text-dark text-center mt-[129px]  mb-[48px] font-bold  text-[42px]  leading-normal  font-Josefin'> Fetuared Products</h1>
      <div className="w-full h-full overflow-hidden flex flex-col justify-center mb-[53px] relative">
         <div
          className="whitespace-nowrap  duration-1000"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
        <div className=" inline-flex items-center justify-center gap-[29px] w-[1168px] h-[365px] px-2">
        {products.map((product,index)=>(
          <Card
          key= {index}
          image={product.image}
          title={product.title}
          code={product.code}
          price={product.price}/>
        ))}
      </div>
      <div className=" inline-flex items-center justify-center gap-[29px] w-[1168px] h-[365px] px-2">
        {products.map((product,index)=>(
          <Card
          key= {index}
          image={product.image}
          title={product.title}
          code={product.code}
          price={product.price}/>
        ))}
      </div>
      <div className=" inline-flex items-center justify-center gap-[29px] w-[1168px] h-[365px] px-2">
        {products.map((product,index)=>(
          <Card
          key= {index}
          image={product.image}
          title={product.title}
          code={product.code}
          price={product.price}/>
        ))}
      </div>
      <div className=" inline-flex items-center justify-center gap-[29px] w-[1168px] h-[365px] px-2">
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
      <div className="w-[91px] h-1  flex justify-start items-center gap-1 mx-auto">
      <button
          className={` h-1 rounded-[10px] hover:w-5 hover:bg-pink  duration-300 ${
            activeIndex === 0 ? "w-6 bg-pink" : "w-4 bg-pink"
          }`}
          onClick={() => {
            updateIndex(0);
          }}
        />
         <button
          className={` h-1 rounded-[10px] hover:w-5 hover:bg-pink  duration-300 ${
            activeIndex === 0 ? "w-6 bg-pink" : "w-4 bg-pink"
          }`}
          onClick={() => {
            updateIndex(1);
          }}
        />
         <button
          className={` h-1 rounded-[10px] hover:w-5 hover:bg-pink  duration-300 ${
            activeIndex === 0 ? "w-6 bg-pink" : "w-4 bg-pink"
          }`}
          onClick={() => {
            updateIndex(2);
          }}
        />
         <button
          className={` h-1 rounded-[10px] hover:w-5 hover:bg-pink  duration-300 ${
            activeIndex === 0 ? "w-6 bg-pink" : "w-4 bg-pink"
          }`}
          onClick={() => {
            updateIndex(3);
          }}
        />
      </div>
      </div>
      </div>
    
  )
}

export default FetauredProduct