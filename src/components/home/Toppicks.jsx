import React from "react";
import * as Images from "../../assets/images";
import { ToppicksCard } from "../shared/ToppicksCard";
import { Button } from "../shared/Button";
// import { Link } from "react-router-dom";

const ToppickArray=[
    {
  imgSrc: Images.Image4,
  imgAlt:"image4",
  title:"Trenton modular sofa_3",
  price:"Rs. 25,000.00"
    },
{
    imgSrc: Images.Image5,
    imgAlt:"image5",
    title:"Granite dining table with dining chair",
    price:"Rs. 25,000.00"
      },
      {
        imgSrc: Images.Image7,
        imgAlt:"image6",
        title:"Outdoor bar table and stool",
        price:"Rs. 25,000.00"
          },
          {
            imgSrc: Images.Image6,
            imgAlt:"image7",
            title:"Plain console with teak mirror",
            price:"Rs. 25,000.00"
              },
];

export const Toppicks=()=>{
    return(
        <div className="pt-14 container">
            <div className="text-center">
                <h2 className="text-4xl">Top Picks For You</h2>
                <p>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            </div>

            <div className="flex gap-7">
                {ToppickArray.map((Toppick,index)=>{
         const {imgSrc,imgAlt,title,price}=Toppick;
         return(
            <ToppicksCard key={index} imgSrc={imgSrc} imgAlt={imgAlt} title={title} price={price}/>
         )
                })}
                </div>
<div className="text-center  py-16">
                <Button
            type="click"
            title="View more"
            path="/"
            />
            </div>
      
            </div>
    
    )

}
