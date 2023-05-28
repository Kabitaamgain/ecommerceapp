import React from "react";
import * as Icons from "../../assets/icons"
import { Link } from "react-router-dom";

export const Navbar =()=>{
    return(
        <div >
            <div className="bg-primary">
        <nav className="flex justify-between container py-[38px]">
            <ul></ul>
        <ul className="flex gap-[75px]" >
            <li>
                <Link to='/'>
                Home
                </Link> 
                </li>
            <li>
            <Link to='/shop'>
            Shop
                </Link> </li>
            <li><Link to='/about'>
           About
                </Link> </li>
            <li>
                <Link to='/shop'>Contact
                </Link></li>
        </ul>

        <ul className="flex gap-[50px]">
       <Icons.UserIcon/>
       <Icons.SearchIcon/>
       <Icons.LikeIcon/>
       <Icons.CartIcon/>
        </ul>
        </nav>
       
        </div>
        </div>
    )
}