import React from "react";
import { Btn } from "../shared/Btn";
const BtnArray=[
    {
        title:"1",
    },
    {
        title:"2",
    }, 
     {
        title:"3",
    },  {
        title:"Name",
    },
]
export const BtnBackground=()=>{
    return(
        <div className="flex gap-9 container justify-center mt-20">
   {BtnArray.map((btn,index)=>{
        const{title}=btn;
        return(
            <Btn key={index} title={title}/>
)

    })}
    </div>
    )
}