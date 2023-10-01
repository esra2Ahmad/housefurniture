"use client";
import AboveBar from "@/components/AboveBar";
import BottomNavBar from "@/components/BottomNavBar";
import List from "@/components/List";
import Abovefooter from "@/components/footter/AboveFooter";
import Bottomfooter from "@/components/footter/Bottomfooter";
import React from "react";
import BlogPage from "@/components/forpages/BlogPage";
import { blogpage } from "@/components/Data";
import Sale from "@/components/forpages/Sale";
import { sale } from "@/components/Data";
import Post from "@/components/Post";
import { post } from "@/components/Data";
import { offer } from "@/components/Data";
import Offer from "@/components/forpages/Offer";
const page = () => {
  return (
    <div>
      <div>
        <AboveBar />
        <BottomNavBar />
      </div>
      <div className="h-[286px]  w-full   bg-medviolet mt-10 mb-[124px]">
        <div className="max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 px-4 flex flex-col  gap-2 ">
          <h1 className=" text-dark  font-bold  text-[36px]  leading-normal mt-[75px]">
            Blogbag
          </h1>
          <div className="flex flex-row gap-2">
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Home .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Pages .
            </p>
            <p className=" text-black  font-medium  text-[16px] font-josefin hover:text-pink">
              Blogpage.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row max-w-[1140px] mx-auto md:px-10 xl:px-20 sm:px-2 ">
        <div className=" w-[720px] mt-11 mb-24 ">
          {blogpage.map((detail, index) => (
            <BlogPage
              key={index}
              image={detail.image}
              text={detail.text}
              date={detail.date}
              title={detail.title}
              discription={detail.discription}
            />
          ))}
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
              <svg  className="relative top-[4px] left-[3px]"width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.93201 13.9981V8.53411H11.7753L12.0493 6.39478H9.93201V5.03211C9.93201 4.41478 10.104 3.99211 10.99 3.99211H12.1127V2.08478C11.5664 2.02624 11.0174 1.99797 10.468 2.00011C8.83867 2.00011 7.72001 2.99478 7.72001 4.82078V6.39078H5.88867V8.53011H7.72401V13.9981H9.93201Z" fill="white"/>
</svg>
                
              </div>
              <div className="w-[25px] h-[25px] rounded-full bg-pink ml-[18px] mt-4">
              <svg className="relative top-[4px] left-[4px]"width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13.9647 5.53684C13.958 5.03192 13.8635 4.53202 13.6854 4.0595C13.5309 3.66094 13.2951 3.29897 12.9928 2.99672C12.6906 2.69448 12.3286 2.4586 11.93 2.30417C11.4636 2.12907 10.9708 2.0344 10.4727 2.02417C9.83138 1.9955 9.62805 1.9875 8.00005 1.9875C6.37205 1.9875 6.16338 1.9875 5.52671 2.02417C5.02882 2.03447 4.53628 2.12915 4.07005 2.30417C3.67142 2.4585 3.30939 2.69433 3.00714 2.99659C2.70488 3.29885 2.46904 3.66088 2.31471 4.0595C2.13927 4.52559 2.0448 5.01824 2.03538 5.51617C2.00671 6.15817 1.99805 6.3615 1.99805 7.9895C1.99805 9.6175 1.99805 9.8255 2.03538 10.4628C2.04538 10.9615 2.13938 11.4535 2.31471 11.9208C2.4693 12.3193 2.70531 12.6812 3.00767 12.9834C3.31003 13.2855 3.67209 13.5212 4.07071 13.6755C4.53567 13.8576 5.0283 13.9591 5.52738 13.9755C6.16938 14.0042 6.37271 14.0128 8.00071 14.0128C9.62871 14.0128 9.83738 14.0128 10.474 13.9755C10.9721 13.9657 11.465 13.8712 11.9314 13.6962C12.3298 13.5416 12.6917 13.3056 12.9939 13.0034C13.2962 12.7012 13.5321 12.3393 13.6867 11.9408C13.862 11.4742 13.956 10.9822 13.966 10.4828C13.9947 9.8415 14.0034 9.63817 14.0034 8.0095C14.002 6.3815 14.002 6.17484 13.9647 5.53684ZM7.99605 11.0682C6.29338 11.0682 4.91405 9.68884 4.91405 7.98617C4.91405 6.2835 6.29338 4.90417 7.99605 4.90417C8.81344 4.90417 9.59736 5.22888 10.1754 5.80687C10.7533 6.38485 11.078 7.16877 11.078 7.98617C11.078 8.80357 10.7533 9.58749 10.1754 10.1655C9.59736 10.7435 8.81344 11.0682 7.99605 11.0682ZM11.2007 5.50884C10.8027 5.50884 10.482 5.1875 10.482 4.79017C10.482 4.69584 10.5006 4.60243 10.5367 4.51528C10.5728 4.42812 10.6257 4.34893 10.6924 4.28223C10.7591 4.21553 10.8383 4.16262 10.9255 4.12652C11.0126 4.09042 11.106 4.07184 11.2004 4.07184C11.2947 4.07184 11.3881 4.09042 11.4753 4.12652C11.5624 4.16262 11.6416 4.21553 11.7083 4.28223C11.775 4.34893 11.8279 4.42812 11.864 4.51528C11.9001 4.60243 11.9187 4.69584 11.9187 4.79017C11.9187 5.1875 11.5974 5.50884 11.2007 5.50884Z" fill="white"/>
  <path d="M7.99614 9.98781C9.10182 9.98781 9.99814 9.09149 9.99814 7.98581C9.99814 6.88014 9.10182 5.98381 7.99614 5.98381C6.89047 5.98381 5.99414 6.88014 5.99414 7.98581C5.99414 9.09149 6.89047 9.98781 7.99614 9.98781Z" fill="white"/>
</svg>
                
              </div>
              <div className="w-[25px] h-[25px] rounded-full bg-cyan ml-[18px] mt-4">
              <svg  className="relative top-[4px] left-[4px]"width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15.7623 3.29115C15.2057 3.53781 14.6077 3.70448 13.979 3.77981C14.6277 3.39167 15.113 2.78079 15.3443 2.06115C14.7349 2.42314 14.0679 2.67794 13.3723 2.81448C12.9046 2.31506 12.285 1.98403 11.6099 1.87279C10.9347 1.76156 10.2417 1.87634 9.63849 2.19931C9.03525 2.52229 8.55552 3.03539 8.27377 3.65895C7.99202 4.28251 7.92402 4.98165 8.08033 5.64781C6.84546 5.58581 5.63742 5.26484 4.53462 4.70575C3.43181 4.14665 2.45889 3.36192 1.679 2.40248C1.41233 2.86248 1.259 3.39581 1.259 3.96381C1.2587 4.47514 1.38462 4.97864 1.62559 5.42963C1.86655 5.88063 2.21511 6.26517 2.64033 6.54915C2.14718 6.53345 1.66492 6.4002 1.23367 6.16048V6.20048C1.23362 6.91764 1.48169 7.61273 1.93579 8.16781C2.38989 8.72289 3.02205 9.10377 3.725 9.24581C3.26752 9.36962 2.78789 9.38786 2.32233 9.29915C2.52066 9.91622 2.907 10.4558 3.42724 10.8424C3.94749 11.229 4.57561 11.4433 5.22367 11.4551C4.12356 12.3188 2.76493 12.7872 1.36633 12.7851C1.11859 12.7852 0.871051 12.7707 0.625 12.7418C2.04465 13.6546 3.69723 14.139 5.385 14.1371C11.0983 14.1371 14.2217 9.40515 14.2217 5.30115C14.2217 5.16781 14.2183 5.03315 14.2123 4.89981C14.8199 4.46046 15.3443 3.91641 15.761 3.29315L15.7623 3.29115Z" fill="white"/>
</svg>
                
              </div>

            </div>
          
          </div>
          <div className=" ml-[18px]">
            <h1 className=" text-blue  font-bold  text-[22px]  leading-normal ml-5 mt-5">
              Tags
            </h1>
            <div className="  grid grid-cols-3 ml-[18px] mt-4">
              <p className=' text-[16px] font-josefin font-normal leading-[26x] underline text-blue hover:text-pink'>General</p>
              <p className=' text-[16px] font-josefin font-normal leading-[26x] underline text-blue hover:text-pink'>Atsanil</p>
              <p className=' text-[16px] font-josefin font-normal leading-[26x] underline text-blue hover:text-pink'>Insais</p>
              <p className=' text-[16px] font-josefin font-normal leading-[26x] underline text-blue hover:text-pink'>Bibsaas</p>
              <p className=' text-[16px] font-josefin font-normal leading-[26x] underline text-blue hover:text-pink'>Nulla</p>
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
