import React from "react";

export const ToppicksCard=({title,imgSrc,imgAlt,path,price})=>{
return(
 
    <div className="flex flex-col">
      <div className="h-64 w-64">
  <img src={imgSrc} alt={imgAlt} className="h-64 w-64" />
  </div>
  <div>
  <h5 className="text-base">{title}</h5>
  <p className="text-2xl ">{price}</p>
  </div>
    </div>
)
}