"use client"
import AboveBar from "@/components/AboveBar";
import BottomNavBar from "@/components/BottomNavBar";
import Abovefooter from "@/components/footter/AboveFooter";
import Bottomfooter from "@/components/footter/Bottomfooter";
import React from "react";
import List from "@/components/List";
import { post } from "@/components/Data";
import Post from "@/components/Post";
import { sale } from "@/components/Data";
import Sale from "@/components/forpages/Sale";
import Offer from "@/components/forpages/Offer";
import { offer } from "@/components/Data";
import Image from "next/image";
import YouTube, { YouTubepops } from 'react-youtube';
import { singleProduct } from "@/components/Data";
import SingleProduct from "@/components/SingleProduct";
import { useState } from "react";


const page = () => {
  const opts={
    height:"488",
    width:"416",
    playerVars:{
      autoplay:1,
    },
  }
  const [formData, setFormData] = useState({ email: "", yourname: "",textarea: "",forcheckbox: true, });
  function handleSubmit(event){
    event.preventDefault()
    submitToApi(formData)
  }
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevformData) => {
      return {
        ...prevformData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  return (
    <div>
      <div>
        <AboveBar />
        <BottomNavBar />
      </div>
      <div className="h-[286px]  w-full   bg-medviolet mt-10 mb-[124px]">
        <div className="max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 px-4 flex flex-col  gap-2 ">
          <h1 className=" text-dark  font-bold  text-[36px]  leading-normal mt-[75px]">
            single Blog
          </h1>
          <div className="flex flex-row gap-2">
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Home .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Pages .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              SingleBlog.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 ">
        <div className=" w-[850px] mt-11 mb-24 /bg-red/ ">
          <Image
            src="/images/blog1.png"
            width={820}
            height={453}
            alt="imageblog"
          />
          <div className="flex flex-row gap-11 mt-8">
            <div className="flex flx-row gap-6 ml-3 justify-center items-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.36065 0.333008L11.6673 3.64634L10.714 4.58634L7.41398 1.28634L8.36065 0.333008ZM0.333984 11.1863L4.66732 6.87301C4.60065 6.66634 4.64732 6.40634 4.82065 6.23301C5.08065 5.97301 5.50732 5.97301 5.76732 6.23301C6.02732 6.49967 6.02732 6.91967 5.76732 7.17968C5.59398 7.35301 5.33398 7.39967 5.12732 7.33301L0.813984 11.6663L7.88732 9.29967L10.2407 5.05967L6.94732 1.75967L2.70065 4.11301L0.333984 11.1863Z"
                  fill="#FB2E86"
                />
              </svg>
              <p className="w-[160px] h-[25px] bg-lightpink text-center rounded-2px text-[14px] leading-normal font-blod text-blue">
                Surf Auxion
              </p>
            </div>
            <div className="flex flx-row gap-6 justify-center items-center">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.00065 12.6667C8.13251 12.6667 8.2614 12.6276 8.37103 12.5543C8.48066 12.4811 8.56611 12.3769 8.61657 12.2551C8.66703 12.1333 8.68023 11.9993 8.65451 11.8699C8.62878 11.7406 8.56529 11.6218 8.47206 11.5286C8.37882 11.4354 8.26003 11.3719 8.13071 11.3461C8.00139 11.3204 7.86735 11.3336 7.74553 11.3841C7.62371 11.4345 7.51959 11.52 7.44634 11.6296C7.37308 11.7393 7.33398 11.8681 7.33398 12C7.33398 12.1768 7.40422 12.3464 7.52925 12.4714C7.65427 12.5964 7.82384 12.6667 8.00065 12.6667ZM11.334 12.6667C11.4658 12.6667 11.5947 12.6276 11.7044 12.5543C11.814 12.4811 11.8994 12.3769 11.9499 12.2551C12.0004 12.1333 12.0136 11.9993 11.9878 11.8699C11.9621 11.7406 11.8986 11.6218 11.8054 11.5286C11.7122 11.4354 11.5934 11.3719 11.464 11.3461C11.3347 11.3204 11.2007 11.3336 11.0789 11.3841C10.957 11.4345 10.8529 11.52 10.7797 11.6296C10.7064 11.7393 10.6673 11.8681 10.6673 12C10.6673 12.1768 10.7376 12.3464 10.8626 12.4714C10.9876 12.5964 11.1572 12.6667 11.334 12.6667ZM11.334 10C11.4658 10 11.5947 9.9609 11.7044 9.88765C11.814 9.81439 11.8994 9.71027 11.9499 9.58846C12.0004 9.46664 12.0136 9.33259 11.9878 9.20327C11.9621 9.07395 11.8986 8.95516 11.8054 8.86193C11.7122 8.76869 11.5934 8.7052 11.464 8.67948C11.3347 8.65375 11.2007 8.66695 11.0789 8.71741C10.957 8.76787 10.8529 8.85332 10.7797 8.96295C10.7064 9.07259 10.6673 9.20148 10.6673 9.33333C10.6673 9.51014 10.7376 9.67971 10.8626 9.80474C10.9876 9.92976 11.1572 10 11.334 10ZM8.00065 10C8.13251 10 8.2614 9.9609 8.37103 9.88765C8.48066 9.81439 8.56611 9.71027 8.61657 9.58846C8.66703 9.46664 8.68023 9.33259 8.65451 9.20327C8.62878 9.07395 8.56529 8.95516 8.47206 8.86193C8.37882 8.76869 8.26003 8.7052 8.13071 8.67948C8.00139 8.65375 7.86735 8.66695 7.74553 8.71741C7.62371 8.76787 7.51959 8.85332 7.44634 8.96295C7.37308 9.07259 7.33398 9.20148 7.33398 9.33333C7.33398 9.51014 7.40422 9.67971 7.52925 9.80474C7.65427 9.92976 7.82384 10 8.00065 10ZM12.6673 2H12.0007V1.33333C12.0007 1.15652 11.9304 0.986953 11.8054 0.861929C11.6804 0.736905 11.5108 0.666667 11.334 0.666667C11.1572 0.666667 10.9876 0.736905 10.8626 0.861929C10.7376 0.986953 10.6673 1.15652 10.6673 1.33333V2H5.33398V1.33333C5.33398 1.15652 5.26375 0.986953 5.13872 0.861929C5.0137 0.736905 4.84413 0.666667 4.66732 0.666667C4.49051 0.666667 4.32094 0.736905 4.19591 0.861929C4.07089 0.986953 4.00065 1.15652 4.00065 1.33333V2H3.33398C2.80355 2 2.29484 2.21071 1.91977 2.58579C1.5447 2.96086 1.33398 3.46957 1.33398 4V13.3333C1.33398 13.8638 1.5447 14.3725 1.91977 14.7475C2.29484 15.1226 2.80355 15.3333 3.33398 15.3333H12.6673C13.1978 15.3333 13.7065 15.1226 14.0815 14.7475C14.4566 14.3725 14.6673 13.8638 14.6673 13.3333V4C14.6673 3.46957 14.4566 2.96086 14.0815 2.58579C13.7065 2.21071 13.1978 2 12.6673 2ZM13.334 13.3333C13.334 13.5101 13.2637 13.6797 13.1387 13.8047C13.0137 13.9298 12.8441 14 12.6673 14H3.33398C3.15717 14 2.9876 13.9298 2.86258 13.8047C2.73756 13.6797 2.66732 13.5101 2.66732 13.3333V7.33333H13.334V13.3333ZM13.334 6H2.66732V4C2.66732 3.82319 2.73756 3.65362 2.86258 3.5286C2.9876 3.40357 3.15717 3.33333 3.33398 3.33333H4.00065V4C4.00065 4.17681 4.07089 4.34638 4.19591 4.4714C4.32094 4.59643 4.49051 4.66667 4.66732 4.66667C4.84413 4.66667 5.0137 4.59643 5.13872 4.4714C5.26375 4.34638 5.33398 4.17681 5.33398 4V3.33333H10.6673V4C10.6673 4.17681 10.7376 4.34638 10.8626 4.4714C10.9876 4.59643 11.1572 4.66667 11.334 4.66667C11.5108 4.66667 11.6804 4.59643 11.8054 4.4714C11.9304 4.34638 12.0007 4.17681 12.0007 4V3.33333H12.6673C12.8441 3.33333 13.0137 3.40357 13.1387 3.5286C13.2637 3.65362 13.334 3.82319 13.334 4V6ZM4.66732 10C4.79917 10 4.92807 9.9609 5.0377 9.88765C5.14733 9.81439 5.23278 9.71027 5.28324 9.58846C5.3337 9.46664 5.3469 9.33259 5.32117 9.20327C5.29545 9.07395 5.23196 8.95516 5.13872 8.86193C5.04549 8.76869 4.9267 8.7052 4.79738 8.67948C4.66806 8.65375 4.53401 8.66695 4.4122 8.71741C4.29038 8.76787 4.18626 8.85332 4.113 8.96295C4.03975 9.07259 4.00065 9.20148 4.00065 9.33333C4.00065 9.51014 4.07089 9.67971 4.19591 9.80474C4.32094 9.92976 4.49051 10 4.66732 10ZM4.66732 12.6667C4.79917 12.6667 4.92807 12.6276 5.0377 12.5543C5.14733 12.4811 5.23278 12.3769 5.28324 12.2551C5.3337 12.1333 5.3469 11.9993 5.32117 11.8699C5.29545 11.7406 5.23196 11.6218 5.13872 11.5286C5.04549 11.4354 4.9267 11.3719 4.79738 11.3461C4.66806 11.3204 4.53401 11.3336 4.4122 11.3841C4.29038 11.4345 4.18626 11.52 4.113 11.6296C4.03975 11.7393 4.00065 11.8681 4.00065 12C4.00065 12.1768 4.07089 12.3464 4.19591 12.4714C4.32094 12.5964 4.49051 12.6667 4.66732 12.6667Z"
                  fill="#FFA454"
                />
              </svg>
              <p className="w-[160px] h-[25px] bg-lightorange rounded-[2px] text-center text-[14px] leading-normal font-blod text-blue">
                Aug 09 2020
              </p>
            </div>
          </div>
          <div className="ml-3 w-[870px]">
            <h1 className=" text-dark  font-normal  text-[28px]  leading-normal mt-[15px]">
              Mauris at orci non vulputate diam tincidunt nec.
            </h1>
            <p className="mt-[23px] text-[15px] font-normal font-josefin leading-[25.6px]  text-lightpurple">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu
              malesuada vitae ultrices in in neque, porta dignissim. Adipiscing
              purus, cursus vulputate id id dictum at..
            </p>
            <p className="mt-[68px] text-[15px] font-normal font-josefin leading-[25.6px]  text-lightpurple">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit<br/>
              morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur<br/>
              adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu<br/>
              platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
            </p>
            <div className="w-[850px] h-[111px] border border-pink border-r-0 border-b-0 border-t-0 mt-[43px]">
              <p className=" text-[18px] pb-[18px] pt-[25px] pl-[12px] pr-[23px] text-lightpurple font-normal font-josefin leading-[25.6px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                dictum sapien, amet, consequat.
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
                dictum sapien, amet, consequat
                <br />
                toamk risusu
              </p>
            </div>
          </div>
          <div className="ml-3 flex flex-row mt-[43px] gap-[32px]">
          <YouTube 
          videoId="zumJJUL_ruM"
          opts={{
            height:"245",
    width:"416",
    playerVars:{
      autoplay:1,
    },
          }}
          onReady={(event)=>{event.target.pauseVideo();}}/>
          <Image src='/images/m1.png' width={416} height={245}/>
          </div>
          <p className="mt-[68px] ml-3 text-[15px] font-normal font-josefin leading-[25.6px]  text-lightpurple">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, </p>
          <div className="flex flex-row gap-5 mt-6">
              {singleProduct.map((detail, index) => (
                <SingleProduct
                  key={index}
                  image={detail.image}
                  title={detail.title}
                  price={detail.price}
                  disacount={detail.disacount}
                />
              ))}
            </div>
            <p className="mt-[48px] text-[15px] ml-3 font-normal font-josefin leading-[25.6px]  text-lightpurple">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit<br/>
              morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur<br/>
              adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu<br/>
              platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
            </p>
            <p className="mt-[48px] ml-3 text-[15px] font-normal font-josefin leading-[25.6px]  text-lightpurple">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit<br/>
              morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur<br/>
              adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu<br/>
              platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,{" "}
            </p>
            <div className="flex flex-row gap-[2px] items-center justify-center mt-[48px]">
              <div className="w-[25px] h-[25px] rounded-full bg-blue5 ml-[18px] mt-4">
                <svg
                  className="relative top-[4px] left-[3px]"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.93201 13.9981V8.53411H11.7753L12.0493 6.39478H9.93201V5.03211C9.93201 4.41478 10.104 3.99211 10.99 3.99211H12.1127V2.08478C11.5664 2.02624 11.0174 1.99797 10.468 2.00011C8.83867 2.00011 7.72001 2.99478 7.72001 4.82078V6.39078H5.88867V8.53011H7.72401V13.9981H9.93201Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="w-[25px] h-[25px] rounded-full bg-pink ml-[18px] mt-4">
                <svg
                  className="relative top-[4px] left-[4px]"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9647 5.53684C13.958 5.03192 13.8635 4.53202 13.6854 4.0595C13.5309 3.66094 13.2951 3.29897 12.9928 2.99672C12.6906 2.69448 12.3286 2.4586 11.93 2.30417C11.4636 2.12907 10.9708 2.0344 10.4727 2.02417C9.83138 1.9955 9.62805 1.9875 8.00005 1.9875C6.37205 1.9875 6.16338 1.9875 5.52671 2.02417C5.02882 2.03447 4.53628 2.12915 4.07005 2.30417C3.67142 2.4585 3.30939 2.69433 3.00714 2.99659C2.70488 3.29885 2.46904 3.66088 2.31471 4.0595C2.13927 4.52559 2.0448 5.01824 2.03538 5.51617C2.00671 6.15817 1.99805 6.3615 1.99805 7.9895C1.99805 9.6175 1.99805 9.8255 2.03538 10.4628C2.04538 10.9615 2.13938 11.4535 2.31471 11.9208C2.4693 12.3193 2.70531 12.6812 3.00767 12.9834C3.31003 13.2855 3.67209 13.5212 4.07071 13.6755C4.53567 13.8576 5.0283 13.9591 5.52738 13.9755C6.16938 14.0042 6.37271 14.0128 8.00071 14.0128C9.62871 14.0128 9.83738 14.0128 10.474 13.9755C10.9721 13.9657 11.465 13.8712 11.9314 13.6962C12.3298 13.5416 12.6917 13.3056 12.9939 13.0034C13.2962 12.7012 13.5321 12.3393 13.6867 11.9408C13.862 11.4742 13.956 10.9822 13.966 10.4828C13.9947 9.8415 14.0034 9.63817 14.0034 8.0095C14.002 6.3815 14.002 6.17484 13.9647 5.53684ZM7.99605 11.0682C6.29338 11.0682 4.91405 9.68884 4.91405 7.98617C4.91405 6.2835 6.29338 4.90417 7.99605 4.90417C8.81344 4.90417 9.59736 5.22888 10.1754 5.80687C10.7533 6.38485 11.078 7.16877 11.078 7.98617C11.078 8.80357 10.7533 9.58749 10.1754 10.1655C9.59736 10.7435 8.81344 11.0682 7.99605 11.0682ZM11.2007 5.50884C10.8027 5.50884 10.482 5.1875 10.482 4.79017C10.482 4.69584 10.5006 4.60243 10.5367 4.51528C10.5728 4.42812 10.6257 4.34893 10.6924 4.28223C10.7591 4.21553 10.8383 4.16262 10.9255 4.12652C11.0126 4.09042 11.106 4.07184 11.2004 4.07184C11.2947 4.07184 11.3881 4.09042 11.4753 4.12652C11.5624 4.16262 11.6416 4.21553 11.7083 4.28223C11.775 4.34893 11.8279 4.42812 11.864 4.51528C11.9001 4.60243 11.9187 4.69584 11.9187 4.79017C11.9187 5.1875 11.5974 5.50884 11.2007 5.50884Z"
                    fill="white"
                  />
                  <path
                    d="M7.99614 9.98781C9.10182 9.98781 9.99814 9.09149 9.99814 7.98581C9.99814 6.88014 9.10182 5.98381 7.99614 5.98381C6.89047 5.98381 5.99414 6.88014 5.99414 7.98581C5.99414 9.09149 6.89047 9.98781 7.99614 9.98781Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="w-[25px] h-[25px] rounded-full bg-cyan ml-[18px] mt-4">
                <svg
                  className="relative top-[4px] left-[4px]"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7623 3.29115C15.2057 3.53781 14.6077 3.70448 13.979 3.77981C14.6277 3.39167 15.113 2.78079 15.3443 2.06115C14.7349 2.42314 14.0679 2.67794 13.3723 2.81448C12.9046 2.31506 12.285 1.98403 11.6099 1.87279C10.9347 1.76156 10.2417 1.87634 9.63849 2.19931C9.03525 2.52229 8.55552 3.03539 8.27377 3.65895C7.99202 4.28251 7.92402 4.98165 8.08033 5.64781C6.84546 5.58581 5.63742 5.26484 4.53462 4.70575C3.43181 4.14665 2.45889 3.36192 1.679 2.40248C1.41233 2.86248 1.259 3.39581 1.259 3.96381C1.2587 4.47514 1.38462 4.97864 1.62559 5.42963C1.86655 5.88063 2.21511 6.26517 2.64033 6.54915C2.14718 6.53345 1.66492 6.4002 1.23367 6.16048V6.20048C1.23362 6.91764 1.48169 7.61273 1.93579 8.16781C2.38989 8.72289 3.02205 9.10377 3.725 9.24581C3.26752 9.36962 2.78789 9.38786 2.32233 9.29915C2.52066 9.91622 2.907 10.4558 3.42724 10.8424C3.94749 11.229 4.57561 11.4433 5.22367 11.4551C4.12356 12.3188 2.76493 12.7872 1.36633 12.7851C1.11859 12.7852 0.871051 12.7707 0.625 12.7418C2.04465 13.6546 3.69723 14.139 5.385 14.1371C11.0983 14.1371 14.2217 9.40515 14.2217 5.30115C14.2217 5.16781 14.2183 5.03315 14.2123 4.89981C14.8199 4.46046 15.3443 3.91641 15.761 3.29315L15.7623 3.29115Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className=" flex flex-col gap-8" >
              <div className=" w-[670px] h-[137px] bg-white shadow-xl ml-3 mt-[48px] flex flex-row gap-4">
                <Image src='/images/sapine.png' width={103} height={90} alt="sapine" className="my-[14px] mx-[14px]"/>
                <div className="flex flex-col gap-2 justify-center ">
                  <div className="flex flex-row gap-4">
                    <p className=" text-[18px]  font-normal font-josefin leading-normal  text-dark2">Sapien ac</p>
                    <p className=" text-[18px]  font-normal font-josefin leading-normal  text-lightpurple">Jan 09 2020</p>
                  </div>
                  <p className="text-[15px]  font-normal font-josefin leading-[25.6px]  text-lightpurple">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                </div>
              </div>
              <div className=" w-[670px] h-[137px] bg-white shadow-xl ml-3  flex flex-row gap-4">
                <Image src='/images/augue.png' width={103} height={90} alt="sapine" className="my-[14px] mx-[14px]"/>
                <div className="flex flex-col gap-2 justify-center ">
                  <div className="flex flex-row gap-4">
                    <p className=" text-[18px]  font-normal font-josefin leading-normal  text-dark2">Sapien ac</p>
                    <p className=" text-[18px]  font-normal font-josefin leading-normal  text-lightpurple">Jan 09 2020</p>
                  </div>
                  <p className="text-[15px]  font-normal font-josefin leading-[25.6px]  text-lightpurple">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p>
                </div>
                
              </div>
              
        
            </div>
            <form onSubmit={handleSubmit} 
        className=" flex flex-col gap-4 items-start mt-8">
          <div  className="flex flex-row  gap-6 pt-6  ml-3">
            <input
            type="text"
            placeholder="    Your Name"
            onChange={handleChange}
            name=" yourname"
            value={formData.yourname}
            className=" w-[341px] h-[52px] border border-gray1 rounded-[2px]"
          />
          <input
            type="email"
            placeholder="    write Your Email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            className=" w-[341px] h-[52px] border border-gray1 rounded-[2px]"
          />
         </div>
         <input
            type=" textarea"
            placeholder="    write Your comment"
            onChange={handleChange}
            name=" textarea"
            value={formData.email}
            className=" w-[707px] h-[205px] border border-gray1 rounded-[2px] ml-3"
          />
          <div className="flex flex-row gap-2 justify-center items-center">
              <input
            type="checkbox"
            id="forcheckbox"
            onChange={handleChange}
            name="forcheckbox"
            checked={formData.forcheckbox}
            className=" ml-3"
            />
             <label htmlFor="forcheckbox" className="text-zinc2 ml-3 relative  font-medium  text-[16px]  leading-normal "> Keep me up to data on news and exclusive offers</label>
            </div>
          
          

           
           <button className="bg-pink w-[707px] h-[52px] text-white ml-3 font-semibold text-[16px] font-josefin mt-[48px]">Continue Shipping</button>
           
          
        </form>
          
        
        </div>
       








        <div className="w-[270px] mt-11">
          <div className=" ml-5">
            <h1 className=" text-blue  font-bold  text-[22px]  leading-norma">
              Search
            </h1>
            <form className="flex flex-row w-[270px]  items-center mt-4">
              <input
                type="search"
                placeholder="   Search For Posts"
                name="search"
                className=" h-[40px] placeholder-gray3"
              />
              <svg
                className="relative left-[-20px] "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                  stroke="#CBCBE0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.9996 14L11.0996 11.1"
                  stroke="#CBCBE0"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </form>
          </div>
          <div>
            <h1 className=" text-blue  font-bold  text-[22px]  leading-normal ml-5 mt-5">
              Categories
            </h1>
            <div className="flex flex-row gap-4 pt-4 ml-5">
              <div className="">
                <p className="w-[122px] h-[30px]  text-blue4  font-normal  text-[14px]  leading-normal hover:bg-pink">
                  Women (21)
                </p>
                <p className="w-[122px] h-[30px]  text-blue4  font-normal  text-[14px]  leading-normal hover:bg-pink">
                  Women (21)
                </p>
                <p className="w-[122px] h-[30px]  text-blue4  font-normal  text-[14px]  leading-normal hover:bg-pink">
                  Women (21)
                </p>
              </div>
              <div>
                <p className="w-[122px] h-[30px]  text-blue4  font-normal  text-[14px]  leading-normal hover:bg-pink">
                  Women (21)
                </p>
                <p className="w-[122px] h-[30px]  text-blue4  font-normal  text-[14px]  leading-normal hover:bg-pink">
                  Women (21)
                </p>
                <p className="w-[122px] h-[30px]  text-blue4  font-normal  text-[14px]  leading-normal hover:bg-pink">
                  Women (21)
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className=" text-blue  font-bold  text-[22px]  leading-normal ml-5 mt-5">
              Recent Post
            </h1>
            <div className="flex flex-col gap-5 mt-6">
              {post.map((detail, index) => (
                <Post
                  key={index}
                  image={detail.image}
                  title={detail.title}
                  date={detail.date}
                />
              ))}
            </div>
          </div>
          <div>
            <h1 className=" text-blue  font-bold  text-[22px]  leading-normal ml-5 mt-5">
              Sale Product
            </h1>
            <div className="flex flex-col gap-5 mt-6">
              {sale.map((detail, index) => (
                <Sale
                  key={index}
                  image={detail.image}
                  title={detail.title}
                  date={detail.date}
                />
              ))}
            </div>
          </div>
          <div>
            <h1 className=" text-blue  font-bold  text-[22px]  leading-normal ml-5 mt-5">
              Offer Product
            </h1>
            <div className="grid grid-cols-2  gap-x-px  gap-y-2 mt-6 ">
              {offer.map((detail, index) => (
                <Offer
                  key={index}
                  image={detail.image}
                  title={detail.title}
                  price={detail.price}
                />
              ))}
            </div>
          </div>
          <div className="ml-[18px]">
            <h1 className=" text-blue  font-bold  text-[22px]  leading-normal ml-5 mt-5">
              Follow
            </h1>
            <div className="flex flex-row gap-[2px]">
              <div className="w-[25px] h-[25px] rounded-full bg-blue5 ml-[18px] mt-4">
                <svg
                  className="relative top-[4px] left-[3px]"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.93201 13.9981V8.53411H11.7753L12.0493 6.39478H9.93201V5.03211C9.93201 4.41478 10.104 3.99211 10.99 3.99211H12.1127V2.08478C11.5664 2.02624 11.0174 1.99797 10.468 2.00011C8.83867 2.00011 7.72001 2.99478 7.72001 4.82078V6.39078H5.88867V8.53011H7.72401V13.9981H9.93201Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="w-[25px] h-[25px] rounded-full bg-pink ml-[18px] mt-4">
                <svg
                  className="relative top-[4px] left-[4px]"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9647 5.53684C13.958 5.03192 13.8635 4.53202 13.6854 4.0595C13.5309 3.66094 13.2951 3.29897 12.9928 2.99672C12.6906 2.69448 12.3286 2.4586 11.93 2.30417C11.4636 2.12907 10.9708 2.0344 10.4727 2.02417C9.83138 1.9955 9.62805 1.9875 8.00005 1.9875C6.37205 1.9875 6.16338 1.9875 5.52671 2.02417C5.02882 2.03447 4.53628 2.12915 4.07005 2.30417C3.67142 2.4585 3.30939 2.69433 3.00714 2.99659C2.70488 3.29885 2.46904 3.66088 2.31471 4.0595C2.13927 4.52559 2.0448 5.01824 2.03538 5.51617C2.00671 6.15817 1.99805 6.3615 1.99805 7.9895C1.99805 9.6175 1.99805 9.8255 2.03538 10.4628C2.04538 10.9615 2.13938 11.4535 2.31471 11.9208C2.4693 12.3193 2.70531 12.6812 3.00767 12.9834C3.31003 13.2855 3.67209 13.5212 4.07071 13.6755C4.53567 13.8576 5.0283 13.9591 5.52738 13.9755C6.16938 14.0042 6.37271 14.0128 8.00071 14.0128C9.62871 14.0128 9.83738 14.0128 10.474 13.9755C10.9721 13.9657 11.465 13.8712 11.9314 13.6962C12.3298 13.5416 12.6917 13.3056 12.9939 13.0034C13.2962 12.7012 13.5321 12.3393 13.6867 11.9408C13.862 11.4742 13.956 10.9822 13.966 10.4828C13.9947 9.8415 14.0034 9.63817 14.0034 8.0095C14.002 6.3815 14.002 6.17484 13.9647 5.53684ZM7.99605 11.0682C6.29338 11.0682 4.91405 9.68884 4.91405 7.98617C4.91405 6.2835 6.29338 4.90417 7.99605 4.90417C8.81344 4.90417 9.59736 5.22888 10.1754 5.80687C10.7533 6.38485 11.078 7.16877 11.078 7.98617C11.078 8.80357 10.7533 9.58749 10.1754 10.1655C9.59736 10.7435 8.81344 11.0682 7.99605 11.0682ZM11.2007 5.50884C10.8027 5.50884 10.482 5.1875 10.482 4.79017C10.482 4.69584 10.5006 4.60243 10.5367 4.51528C10.5728 4.42812 10.6257 4.34893 10.6924 4.28223C10.7591 4.21553 10.8383 4.16262 10.9255 4.12652C11.0126 4.09042 11.106 4.07184 11.2004 4.07184C11.2947 4.07184 11.3881 4.09042 11.4753 4.12652C11.5624 4.16262 11.6416 4.21553 11.7083 4.28223C11.775 4.34893 11.8279 4.42812 11.864 4.51528C11.9001 4.60243 11.9187 4.69584 11.9187 4.79017C11.9187 5.1875 11.5974 5.50884 11.2007 5.50884Z"
                    fill="white"
                  />
                  <path
                    d="M7.99614 9.98781C9.10182 9.98781 9.99814 9.09149 9.99814 7.98581C9.99814 6.88014 9.10182 5.98381 7.99614 5.98381C6.89047 5.98381 5.99414 6.88014 5.99414 7.98581C5.99414 9.09149 6.89047 9.98781 7.99614 9.98781Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="w-[25px] h-[25px] rounded-full bg-cyan ml-[18px] mt-4">
                <svg
                  className="relative top-[4px] left-[4px]"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.7623 3.29115C15.2057 3.53781 14.6077 3.70448 13.979 3.77981C14.6277 3.39167 15.113 2.78079 15.3443 2.06115C14.7349 2.42314 14.0679 2.67794 13.3723 2.81448C12.9046 2.31506 12.285 1.98403 11.6099 1.87279C10.9347 1.76156 10.2417 1.87634 9.63849 2.19931C9.03525 2.52229 8.55552 3.03539 8.27377 3.65895C7.99202 4.28251 7.92402 4.98165 8.08033 5.64781C6.84546 5.58581 5.63742 5.26484 4.53462 4.70575C3.43181 4.14665 2.45889 3.36192 1.679 2.40248C1.41233 2.86248 1.259 3.39581 1.259 3.96381C1.2587 4.47514 1.38462 4.97864 1.62559 5.42963C1.86655 5.88063 2.21511 6.26517 2.64033 6.54915C2.14718 6.53345 1.66492 6.4002 1.23367 6.16048V6.20048C1.23362 6.91764 1.48169 7.61273 1.93579 8.16781C2.38989 8.72289 3.02205 9.10377 3.725 9.24581C3.26752 9.36962 2.78789 9.38786 2.32233 9.29915C2.52066 9.91622 2.907 10.4558 3.42724 10.8424C3.94749 11.229 4.57561 11.4433 5.22367 11.4551C4.12356 12.3188 2.76493 12.7872 1.36633 12.7851C1.11859 12.7852 0.871051 12.7707 0.625 12.7418C2.04465 13.6546 3.69723 14.139 5.385 14.1371C11.0983 14.1371 14.2217 9.40515 14.2217 5.30115C14.2217 5.16781 14.2183 5.03315 14.2123 4.89981C14.8199 4.46046 15.3443 3.91641 15.761 3.29315L15.7623 3.29115Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className=" ml-[18px]">
            <h1 className=" text-blue  font-bold  text-[22px]  leading-normal ml-5 mt-5">
              Tags
            </h1>
            <div className="  grid grid-cols-3 ml-[18px] mt-4">
              <p className=" text-[16px] font-josefin font-normal leading-[26x] underline text-blue hover:text-pink">
                General
              </p>
              <p className=" text-[16px] font-josefin font-normal leading-[26x] underline text-blue hover:text-pink">
                Atsanil
              </p>
              <p className=" text-[16px] font-josefin font-normal leading-[26x] underline text-blue hover:text-pink">
                Insais
              </p>
              <p className=" text-[16px] font-josefin font-normal leading-[26x] underline text-blue hover:text-pink">
                Bibsaas
              </p>
              <p className=" text-[16px] font-josefin font-normal leading-[26x] underline text-blue hover:text-pink">
                Nulla
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-98">
        <List />
        <Abovefooter />
        <Bottomfooter />
      </div>
    </div>
  );
};

export default page;
