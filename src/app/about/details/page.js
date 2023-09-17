'use client'
import AboveBar from "@/components/AboveBar";
import BottomNavBar from "@/components/BottomNavBar";
import Abovefooter from "@/components/footter/AboveFooter";
import Bottomfooter from "@/components/footter/Bottomfooter";
import List from "@/components/List";
import React from "react";
import Image from "next/image";
import Rating from "@/components/Rating";
import { relatedproduct } from "@/components/Data";
import RelatedProduct from "@/components/RelatedProduct";

const page = () => {
  return (
    <div >
      <div>
        <AboveBar />
        <BottomNavBar />
      </div>
      <div className="h-[286px]  w-full   bg-medviolet mt-10 mb-[124px]">
        <div className="max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 px-4 flex flex-col  gap-2 ">
          <h1 className=" text-dark  font-bold  text-[36px]  leading-normal mt-[75px]">
            Product Details
          </h1>
          <div className="flex flex-row gap-2">
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Home .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Pages .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              products details.
            </p>
          </div>
        </div>
      </div>

      <div className=" max-w-[1140px]  mx-auto md:px-10 xl:px-2 sm:px-2 px-4 flex flex-row gap-2">
        <div className="flex flex-col gap-2 justify-center items-center ">
          <div className="">
            <Image src="/images/b1.png" width={151} height={155} />
          </div>
          <div>
            <Image src="/images/b2.png" width={151} height={155} />
          </div>
          <div>
            <Image src="/images/b3.png" width={151} height={155} />
          </div>
        </div>
        <div className="">
          <Image src="/images/b4.png" width={375} height={487}/>
        </div>
        <div className=" py-5 flex flex-col gap-3 px-5 ">
          <h1 className="text-dark text-[36px]  font-semibold leading-normal">
            Playwood arm chair
          </h1>
          <div className="flex flex-row gap-4 justify-start items-center">
            <Rating />
            <p className="text-blue text-[14px]  font-normal leading-[29px]">(28)</p>
          </div>
          <div className="flex flex-row gap-20">
            <p className="text-blue text-[14px]  font-normal leading-[29px]">$32.00</p>
            <p className="text-pink text-[14px]  font-normal leading-[29px]  line-through">$32.00</p>
          </div>
          <p className="text-dark text-[16px]  font-semibold leading-[29px]">Color</p>
          <p className="text-gray3 text-[16px]  font-semibold leading-[29px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus<br/>
             porttitor purus, et volutpat sit.
          </p>
          <div className="flex flex-row gap-10 justify-center items-center" >
            <p className="text-gray3 text-[16px]  font-normal leading-[29px]">Add To Cart</p>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.1202 3.45748C14.3239 2.66099 13.2682 2.17673 12.1451 2.09277C11.022 2.00881 9.90605 2.33073 9.00021 2.99998C8.04595 2.29021 6.8582 1.96837 5.67615 2.09926C4.49409 2.23016 3.40554 2.80407 2.62969 3.70542C1.85384 4.60678 1.44832 5.76862 1.49481 6.95699C1.54129 8.14536 2.03632 9.27198 2.88021 10.11L8.46771 15.6975C8.53743 15.7678 8.62038 15.8236 8.71177 15.8617C8.80317 15.8997 8.9012 15.9193 9.00021 15.9193C9.09922 15.9193 9.19725 15.8997 9.28864 15.8617C9.38003 15.8236 9.46299 15.7678 9.53271 15.6975L15.1202 10.11C15.5572 9.67327 15.9039 9.15474 16.1404 8.58401C16.3769 8.01327 16.4986 7.40153 16.4986 6.78373C16.4986 6.16593 16.3769 5.55419 16.1404 4.98346C15.9039 4.41272 15.5572 3.89419 15.1202 3.45748ZM14.0627 9.05248L9.00021 14.1075L3.93771 9.05248C3.49159 8.60451 3.18769 8.03477 3.06413 7.41474C2.94057 6.79471 3.00285 6.152 3.24317 5.56723C3.48349 4.98246 3.89113 4.48168 4.41497 4.1277C4.9388 3.77372 5.5555 3.58231 6.18771 3.57748C7.03229 3.57955 7.84153 3.91673 8.43771 4.51498C8.50743 4.58528 8.59038 4.64107 8.68177 4.67915C8.77317 4.71723 8.8712 4.73683 8.97021 4.73683C9.06922 4.73683 9.16725 4.71723 9.25864 4.67915C9.35003 4.64107 9.43299 4.58528 9.50271 4.51498C10.1165 3.98314 10.9093 3.70434 11.7209 3.735C12.5324 3.76566 13.302 4.10349 13.8738 4.68012C14.4457 5.25675 14.7771 6.02911 14.8011 6.84087C14.825 7.65264 14.5396 8.44317 14.0027 9.05248H14.0627Z"
                fill="#535399"
              />
            </svg>
          </div>
          <p className="text-blue text-[16px]  font-semibold leading-[29px]"> Categries:</p>
          <p className="text-blue text-[16px]  font-semibold leading-[29px]"> Tags</p>
          <div className="flex flex-row gap-4 justify-start items-center">
            <p className="text-blue text-[16px]  font-semibold leading-[29px]">Share</p>
            <div className="flex flex-row gap-3">
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.68689 7.6391V5.01638H6.57169L6.70321 3.9895H5.68689V3.33542C5.68689 3.0391 5.76945 2.83622 6.19473 2.83622H6.73361V1.9207C6.47142 1.8926 6.20787 1.87903 5.94417 1.88006C5.16209 1.88006 4.62513 2.3575 4.62513 3.23398V3.98758H3.74609V5.01446H4.62705V7.6391H5.68689Z"
                  fill="white"
                />
              </svg>
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.62291 3.57764C7.61968 3.33528 7.57431 3.09533 7.48883 2.86852C7.4147 2.67721 7.30148 2.50347 7.1564 2.35839C7.01132 2.21331 6.83758 2.10009 6.64627 2.02596C6.42237 1.94192 6.18584 1.89647 5.94675 1.89156C5.63891 1.8778 5.54131 1.87396 4.75987 1.87396C3.97843 1.87396 3.87827 1.87396 3.57267 1.89156C3.33368 1.89651 3.09726 1.94195 2.87347 2.02596C2.68212 2.10004 2.50835 2.21324 2.36327 2.35832C2.21818 2.50341 2.10498 2.67718 2.03091 2.86852C1.94669 3.09224 1.90135 3.32872 1.89683 3.56772C1.88307 3.87588 1.87891 3.97348 1.87891 4.75492C1.87891 5.53636 1.87891 5.6362 1.89683 5.94212C1.90163 6.18148 1.94675 6.41764 2.03091 6.64196C2.10511 6.83325 2.21839 7.00695 2.36353 7.15197C2.50866 7.29699 2.68245 7.41015 2.87379 7.4842C3.09696 7.57163 3.33343 7.62032 3.57299 7.6282C3.88115 7.64196 3.97875 7.64612 4.76019 7.64612C5.54163 7.64612 5.64179 7.64612 5.94739 7.6282C6.18647 7.62349 6.42302 7.57815 6.6469 7.49412C6.83817 7.41991 7.01187 7.30666 7.15693 7.16159C7.302 7.01652 7.41525 6.84282 7.48947 6.65156C7.57363 6.42756 7.61874 6.1914 7.62355 5.95172C7.6373 5.64388 7.64146 5.54628 7.64146 4.76452C7.64082 3.98308 7.64083 3.88388 7.62291 3.57764ZM4.75795 6.23268C3.94067 6.23268 3.27859 5.5706 3.27859 4.75332C3.27859 3.93604 3.94067 3.27396 4.75795 3.27396C5.1503 3.27396 5.52658 3.42982 5.80401 3.70726C6.08144 3.98469 6.23731 4.36097 6.23731 4.75332C6.23731 5.14567 6.08144 5.52195 5.80401 5.79939C5.52658 6.07682 5.1503 6.23268 4.75795 6.23268ZM6.29619 3.5642C6.10515 3.5642 5.95123 3.40996 5.95123 3.21924C5.95123 3.17396 5.96014 3.12913 5.97747 3.08729C5.9948 3.04546 6.0202 3.00745 6.05222 2.97543C6.08423 2.94341 6.12224 2.91802 6.16408 2.90069C6.20591 2.88336 6.25075 2.87444 6.29603 2.87444C6.34131 2.87444 6.38614 2.88336 6.42797 2.90069C6.46981 2.91802 6.50782 2.94341 6.53984 2.97543C6.57185 3.00745 6.59725 3.04546 6.61458 3.08729C6.63191 3.12913 6.64083 3.17396 6.64083 3.21924C6.64083 3.40996 6.48659 3.5642 6.29619 3.5642Z"
                  fill="white"
                />
                <path
                  d="M4.75784 5.71416C5.28856 5.71416 5.7188 5.28392 5.7188 4.7532C5.7188 4.22247 5.28856 3.79224 4.75784 3.79224C4.22711 3.79224 3.79688 4.22247 3.79688 4.7532C3.79688 5.28392 4.22711 5.71416 4.75784 5.71416Z"
                  fill="white"
                />
              </svg>
              <svg
                width="9"
                height="9"
                viewBox="0 0 9 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_108_8636)">
                  <path
                    d="M8.48565 2.49972C8.21845 2.61812 7.93141 2.69812 7.62965 2.73428C7.94101 2.54797 8.17395 2.25475 8.28501 1.90932C7.99248 2.08307 7.67232 2.20538 7.33845 2.27092C7.11393 2.03119 6.81655 1.8723 6.49247 1.81891C6.1684 1.76552 5.83576 1.82061 5.5462 1.97564C5.25665 2.13067 5.02637 2.37695 4.89114 2.67626C4.7559 2.97557 4.72326 3.31116 4.79829 3.63092C4.20555 3.60116 3.62569 3.44709 3.09634 3.17873C2.567 2.91036 2.1 2.53369 1.72565 2.07316C1.59765 2.29396 1.52405 2.54996 1.52405 2.8226C1.5239 3.06804 1.58435 3.30972 1.70001 3.52619C1.81567 3.74267 1.98298 3.92725 2.18709 4.06356C1.95037 4.05603 1.71889 3.99206 1.51189 3.877V3.8962C1.51186 4.24043 1.63094 4.57408 1.84891 4.84052C2.06687 5.10695 2.37031 5.28977 2.70773 5.35796C2.48814 5.41739 2.25791 5.42614 2.03445 5.38356C2.12965 5.67975 2.31509 5.93877 2.5648 6.12433C2.81452 6.3099 3.11602 6.41273 3.42709 6.41844C2.89903 6.83297 2.24689 7.05783 1.57557 7.05684C1.45665 7.05687 1.33783 7.04992 1.21973 7.03604C1.90116 7.47417 2.6944 7.7067 3.50453 7.7058C6.24693 7.7058 7.74613 5.43444 7.74613 3.46452C7.74613 3.40052 7.74453 3.33588 7.74165 3.27188C8.03326 3.06099 8.28498 2.79984 8.48501 2.50068L8.48565 2.49972Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_108_8636">
                    <rect
                      width="7.68"
                      height="7.68"
                      fill="white"
                      transform="translate(0.919922 0.919983)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          
        </div>
        
      </div>
      <div className="flex flex-row gap-6 py-32 max-w-[1140px] mx-auto md:px-10 xl:px-2 sm:px-2 px-4 ">
        <p className="text-blue text-[24px]  font-semibold leading-normal hover:underline">Discreption</p>
        <p className="text-blue text-[24px]  font-semibold leading-normal hover:underline">Additional Info</p>
        <p className="text-blue text-[24px]  font-semibold leading-normal hover:underline">Reviews</p>
        <p className="text-blue text-[24px]  font-semibold leading-normal hover:underline">Video</p>
      </div>
      <div className="max-w-[1140px] mx-auto md:px-10 xl:px-2 sm:px-2 px-4  flex flex-col gap-4  ">
        <h1 className="text-blue text-[22px]  font-josefin font-semibold leading-normal">Varius tempor.</h1>
        <p className="text-gray3 text-[14px]   font-semibold leading-[29px]">Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum.
         <br/>
         Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus
        <br/>
        cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
      </div>
      <div className="max-w-[1140px] mx-auto md:px-10 xl:px-2 sm:px-2 px-4  flex flex-col gap-4  py-10">
        <h1 className="text-blue text-[22px]  font-josefin font-semibold leading-normal">More Details</h1>
        <div className="flex gap-2 justify-start items-center">
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 8L17 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 1L17 8L10 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p className="text-gray3 text-[14px]   font-semibold leading-[29px]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
        </div>
        <div className="flex gap-2 justify-start items-center">
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 8L17 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 1L17 8L10 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p className="text-gray3 text-[14px]   font-semibold leading-[29px]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
        </div>
        <div className="flex gap-2 justify-start items-center">
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 8L17 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 1L17 8L10 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p className="text-gray3 text-[14px]   font-semibold leading-[29px]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
        </div>
        <div className="flex gap-2 justify-start items-center">
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 8L17 8" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 1L17 8L10 15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<p className="text-gray3 text-[14px]   font-semibold leading-[29px]">Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto md:px-10 xl:px-2 sm:px-2 gap-11 pt-10">
      <h1 >Related Product</h1>
      </div>
  
      <div className="max-w-[1140px] mx-auto md:px-10 xl:px-2 sm:px-2 gap-11 pt-10 flex">
          {relatedproduct.map((detail, index) => (
            <RelatedProduct
              key={index}
              image={detail.image}
              name={detail.name}
              price={detail.price}
              
            />
          ))}
        </div>
     
      <div>
        <List />
        <Abovefooter />
        <Bottomfooter />
      </div>
    </div>
  );
};

export default page;
