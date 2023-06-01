import React from "react";
import { Shop } from "./Shop";
import { Categories } from "./Categories";
import { Services } from "./Services";
import { BtnBackground } from "./BtnBackground";
const ShopPage=()=>{
    return(
        <div>
            <Shop/>
            <Categories/>
            <BtnBackground/>
            <Services/>
        </div>
    )
}
export default ShopPage;