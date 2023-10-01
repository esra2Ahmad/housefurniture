import React from 'react'
import Link from 'next/link'

const Abovefooter = () => {
  return (
    <div className=" 
   bg-medviolet">
        <div className="flex flex-row justify-start items-start  gap-16 w-[1186px] h-[497px]

        mx-auto
        md:px-0
        sm:px-2
        ">
            <div className='flex flex-col gap-10 mt-[95px] '>
                <h1 className='text-black  font-bold text-[34px] font-josefin'>Hekto</h1>
            <form  className='flex justify-start items-center'>
                <input  className='h-[44px] w-[200px] ' placeholder='   Enter Email Address'></input>
                <button className="bg-pink h-[44px] w-[135px] text-white  font-semibold text-[16px] font-josefin">Sing Up</button>
            </form>
            <div className='flex flex-col gap-2'>
            <p className=' text-gray2  font- normal text-[16px] font-josefin'>ContactInfo</p>
            <p className=' text-gray2  font- normal text-[16px] font-josefin'>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            </div>
            <div className=' mt-[95px] flex flex-col  gap-10'>
                <h1 className=' text-black  font-semibold leading-normal text-[22px] font-josefin'>Catogaries</h1>
                <div className='flex flex-col gap-6'>
                <p className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>Laptops & Computers</p>
                <p className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>Cameras & Photography</p>
                <p className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>Smart Phones & Tablets</p>
                <p className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>Video Games & Consoles</p>
                <p className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>Waterproof Headphones</p>
                </div>

            </div>
            <div className=' mt-[95px] flex flex-col  gap-10'>
                <h1 className=' text-black  font-semibold leading-normal text-[22px] font-josefin'>Customer Care</h1>
                <div className='flex flex-col gap-6'>
                <p className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>My Account</p>
                <p className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>Discount</p>
                <Link href='/error' className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>retuns</Link>
                <Link href="/order" className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>Orders History</Link>
                <p className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>Order Tracking</p>
                </div>

            </div>
            <div className=' mt-[95px] flex flex-col  gap-10'>
                <h1 className=' text-black  font-semibold leading-normal text-[22px] font-josefin'>Customer Care</h1>
                <div className='flex flex-col gap-6'>
                <Link  href='/singleblog'className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>Blog</Link>
                <p className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>Browse the Shop</p>
                <p className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>Category</p>
                <p className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>Pre-Built Pages</p>
                <Link href='/faq'className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>Visual Composer Elements</Link>
                <Link href='/aboutus' className=' text-gray2  font-norml leading-normal text-[16px] font-josefin'>WooCommerce Pages</Link>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Abovefooter