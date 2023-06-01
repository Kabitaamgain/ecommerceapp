import React from "react";
import * as Images from "../../assets/images";
import * as Icons from "../../assets/icons";
export const Shop=()=>{
    return(
        <div className="my-10">
            <div className="relative ">
      <img src={Images.Image12} alt="" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-y-[70%]">
        <Icons.ShopIcon/>
        <h2 className="text-6xl font-medium">Shop</h2>
        <div className="flex gap-3">
        <p className=" text-base gap-3">Home </p>
        <Icons.ArrowIcon className="mt-1.5"/> 
        <p className="text-base gap-3 font-light">Shop</p>
        </div>
      </div>
        </div>
    )
}