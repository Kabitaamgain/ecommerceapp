import React from "react";
import * as Icons from "../../assets/icons"
import { BlogsCard } from "../shared/BlogsCard";
import { Button } from "../shared/Button";

// const BlogsArray=[
//     {
//         imgSrc:Images.Image9,
//         imgAlt:"Image9",
//         createdate: 1685102912
//     },
//     {
//         imgSrc:Images.Image10,
//         imgAlt:"Image10",
//     },
//     {
//         imgSrc:Images.Image11,
//         imgAlt:"Image11",
//     },
// ]


export const Blogs=({datas})=>{
    return(
        <div className="container py-14">
            <div className="text-center " >
           <h2 className="text-4xl pb-3">Our Blogs</h2>
           <p className="text-base text-light font-medium pb-16">Find a bright ideal to suit your taste with our great selection</p>
            </div>
        <div className="flex gap-8">
        {datas.map((blog,index)=>{
            const{image,imgAlt}=blog
            return(
                <BlogsCard key={index} src={image} imgAlt={imgAlt}/>  
            )
    
        })}
         </div>
         <div className="flex gap-5">
            <div>
            <Icons.ClockIcon/>
            </div>
            <div>
                <Icons.CalenderIcon/>
               
            </div>
         </div>
         <div className="text-center my-14">
            <Button
            title="View All Post"
            />
         </div>
         </div>
    )
   
}