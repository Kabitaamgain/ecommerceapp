import React from "react";
import * as Icons from "../../assets/icons"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

    
    export const Navbar =()=>{
        const location = useLocation();
    return(
        <div>
            <div className={`${location.pathname==='/' ? "bg-primary" :""}`}>
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
                <Link to='/contact'>Contact
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