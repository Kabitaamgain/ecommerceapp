import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
export const ToptableCard=({title,imgSrc,path,imgAlt})=>{
    return(
        <div>
        <img src={imgSrc} alt={imgAlt} />
         <h2 className="text-4xl font-medium font-[Poppins] pl-20">{title}</h2> 
         <Link to={path} className="pl-20 "><Button
         title="View more " className="pb-20"
    /></Link>
        </div>
    )

}
