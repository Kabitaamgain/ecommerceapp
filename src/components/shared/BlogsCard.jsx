import React from "react";
import { Button } from "./Button";
// const createDate=()=>{
//     const date=new Date(create*1000);
//     return date.toLocaleString("en-US",{
//         year:"numeric",
//         month:"long",
//         day:"2-digit"
//     });
// };

export const BlogsCard=({imgSrc,imgAlt,title, createdate})=>{

    return(
        <div>
            <img src={imgSrc}  alt={imgAlt} />
            <div className="text-center">
                <h5 className="text-xl pt-8 pb-2.5">Going all-in with millennial design</h5>
             <p></p>
              <Button
              title="Read More"
              />
              </div>
            
        </div>
    )

}