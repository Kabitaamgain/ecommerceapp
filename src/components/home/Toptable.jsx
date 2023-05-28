import React from "react";
import {ToptableCard } from "../shared/ToptableCard";
import * as Images from "../../assets/images"

const toptableArray=[
  {
    imgSrc:Images.Image2,
    imgAlt:"Image2",
    title:"Side table",
    path:"/"
  },
  {
    imgSrc:Images.Image3,
    imgAlt:"Image3",
    title:"Side table",
     path:"/"
  }
];
export const Toptable=()=>{
  return(
    <div className="bg-secondary">
    <div className="flex gap-44 pt-5 container pb-20">
      {toptableArray.map((table,index)=>{
      const { imgSrc,imgAlt, title, path}= table;
      return(
        <ToptableCard key={index} imgSrc={imgSrc} alt={imgAlt} title={title} path={path}/>
        
      );
    })}
    </div>
    </div>
  )
}



//     return(
//         <div className="bg-secondary flex container pb-28">
//       <Cart
//       imgSrc={Images.Image2}
//       imgAlt="Image2"
//       title="Side table"
//       link="https://www.houseandgarden.co.uk/topic/decoration"
//       />

// <Cart
//       imgSrc={Images.Image3}
//       imgAlt="Image2"
//       title="Side table"
//       link="https://www.houseandgarden.co.uk/topic/decoration"
//       />

    
export default Toptable;