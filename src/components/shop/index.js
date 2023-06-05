import React from "react";
import { Shop } from "./Shop";
import { Categories } from "./Categories";
import { Services } from "./Services";
import { BtnBackground } from "./BtnBackground";
const ShopPage=({items})=>{
    return(
        <div>
            <Shop/>
            <Categories items={items}/>
            <BtnBackground/>
            <Services/>
        </div>
    )
}
export default ShopPage;