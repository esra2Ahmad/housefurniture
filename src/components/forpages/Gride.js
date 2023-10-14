"use client";
import React from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import { useState,useContext } from "react";
import { ShopContext } from "@/context/shop-context";

const Gride = ({
  id,
  image,
  title,
  price,
  disc,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };
  const { cartItem, addToCart, removeFromCart, updateCartItemCount } =
   useContext(ShopContext);
  const toggleAddedToCart = () => {
    if (cartItem[id] > 0) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };
  return (
    <div className="w-[290px] h-[363px] relative flex flex-col justify-between items-center group bg-neutral_100">
      <div className="w-[290px] h-[280px]  bg-white flex justify-center items-center px-10 group-hover:bg-lightgreen">
        <Image
          src={image}
          width="0"
          height="0"
          sizes="100vw"
          className="w-auto h-auto max-w-full"
          alt=""
        />
      
      <div className=" absolute left-[18px] bottom-[106px] hidden group-hover:flex flex-col justify-end items-center gap-[10px]">
        <button
        onClick={() => toggleAddedToCart()}
        className={`${
          cartItem[id] > 0 ? "bg-green" : "bg-white"
        } hover:scale-125 duration-300 w-[30px] h-[30px] rounded-full shadow flex justify-center items-center`}>
          {" "}
          <BsCart2 />{" "}
        </button>

        <button className=" hover:scale-125 duration-300  w-4 h-4 justify-center items-center flex">
          <AiOutlineZoomIn />
        </button>
        
        {!isFavorite && (
            <button
              className=" hover:scale-125 duration-300 w-4 h-4  justify-center items-center flex"
              onClick={toggleFavorite}
            >
              <AiOutlineHeart />
            </button>
          )}
          {isFavorite && (
            <button
              className=" hover:scale-125 duration-300 w-4 h-4  justify-center items-center flex"
              onClick={toggleFavorite}
            >
              <AiFillHeart />
            </button>
          )}
          </div>
      </div>
      <p className="text-center text-violet-950 text-lg font-bold mt-[18px]">{title} </p>
      <div className="w-[42px] h-2.5 flex justify-between items-center pt-2">
        <div className="w-2.5 h-2.5  bg-orange rounded-full" />
        <div className="w-2.5 h-2.5  bg-pink rounded-full" />
        <div className="w-2.5 h-2.5  bg-violet rounded-full" />
      </div>
      <div className="flex justify-center gap-[10px] items-center mt-[15px]">
        <p className="text-center text-lightpurple text-sm font-normal">
          {price}
        </p>
        <p className="text-center text-pink text-sm font-normal line-through">
          {disc}
        </p>
      </div>
    </div>
  );
};

export default Gride;
