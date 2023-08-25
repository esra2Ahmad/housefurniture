import React from 'react';
import Image from 'next/image';

const UniqueFeature = () => {
  return (
    <div className='w-full h-[580px] bg-babypurple  mt-44'>
        <div className='w-[1177px] 
    h-full 
    mx-auto 
    xl:px-20
    md:px-10
    sm:px-2 pt-28 flex justify-center items-center gap-32'>
        <div>
            <Image src="/../images/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png" width={509} height={550} alt="sofa"/>
        </div>
        <div className='w-[600px]' >
            <h1>Unique Features Of leatest &
Trending Poducts</h1>
<ul>
    <li>All frames constructed with hardwood solids and laminates</li>
    <li>Reinforced with double wood dowels, glue, screw - nails corner 
blocks and machine nails</li>
    <li>Arms, backs and seats are structurally reinforced</li>
</ul>
        </div>
        </div>
    </div>
  )
}

export default UniqueFeature;