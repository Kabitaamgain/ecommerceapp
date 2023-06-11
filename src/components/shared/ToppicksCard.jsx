import React from "react";
import { Link } from "react-router-dom";
export const ToppicksCard=(props)=>{
  const{id,title,src,imgAlt,price}=props
return(
 
    <div className="flex flex-col">
      <div className="h-64 w-64">

        {src && (
  <img src={(src)} alt={imgAlt} className="h-64 w-64" />
  )}
  </div>
  <div>
  <h5 className="text-base">{title}</h5>
  <p className="text-2xl ">{price}</p>
  <Link to={`/shop/${id}`} className="underline mt-2 mb-2">
              View Details
            </Link>
  </div>
    </div>
)
}