import React from "react";
import * as Images from "../../assets/images"
import { Button } from "../shared/Button"
const Firstpage=()=>{
    return(
        <div>
            <section className="h-[959] bg-primary">
        <div className="flex container ">
            <div className="my-72"><h2 className="text-7xl w-[444px] font-[Poppins]">Rocket single seater</h2>
            <Button
            type="click"
            title="Shop Now"
            path="/"
            />
            </div>
       
        <div >
      <img src={Images.Image1} alt="" />
        </div>
        </div>
        </section> 
        </div>
    )
}
export default Firstpage;