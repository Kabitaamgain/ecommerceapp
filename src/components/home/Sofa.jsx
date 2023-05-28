import React from "react";
import * as Images from "../../assets/images";
export const Sofa=()=>{
    return(
        <div className="bg-tertiory h-[639px]">
        <div className="flex container gap-3">
            <div>
<img src={Images.Image8} alt="image8" />
</div>
<div className="py-[217px] text-center">
    <p className="text-2xl">New Arrivals</p>
    <h3 className="text-6xl font-bold w-[331px] pb-8">Asgaard sofa</h3>
    <button className="border border-black py-2 px-10">Order Now</button>
</div>


        </div>
        </div>
    )

}