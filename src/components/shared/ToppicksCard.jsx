import React from "react";

export const ToppicksCard=(props)=>{
  const{title,src,imgAlt,price}=props
return(
 
    <div className="flex flex-col">
      <div className="h-64 w-64">
        {src && (
  <img src={URL.createObjectURL(src)} alt={imgAlt} className="h-64 w-64" />
  )}
  </div>
  <div>
  <h5 className="text-base">{title}</h5>
  <p className="text-2xl ">{price}</p>
  </div>
    </div>
)
}