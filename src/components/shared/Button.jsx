import React from "react";
import { Link } from "react-router-dom";

export const Button=({type,path,title})=>{
 return(
    <>
   
<button 
    type={type}
     className="border-b-2 border-black pb-[13px] text-2xl font-medium font-[Poppins]"
    >
    {title}
    <Link to={path}></Link>
</button>
    </>
 );
}