import React from "react";
import { Button } from "./Button";

export const BlogsCard=({imgSrc,imgAlt,title, createdate})=>{

    return(
        <div>
            <img src={imgSrc}  alt={imgAlt} />
            <div className="text-center">
                <h5 className="text-xl pt-8 pb-2.5">Going all-in with millennial design</h5>

              <Button
              title="Read More"
              />
        
              </div>
            
        </div>
    )

}