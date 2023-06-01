import React from "react";
const Footer=()=>{
    return(
        <div className="container">
            <div className="flex gap-24 py-24 border-b-2">
                <div>
                    <p className="text-light w-[285px] pt-52">400 University Drive Suite 200 Coral Gables, <br/>FL 33134 USA</p>
                </div>
                <div>
                    <p className="mb-12 text-light">Links</p>
                    <p className="mb-12">Home</p>
                    <p className="mb-12">Shop</p>
                    <p className="mb-12">About</p>
                    <p className="mb-12">Contact</p>
                </div>
                <div>
                    <p className="mb-12 text-light">Help</p>
                    <p className="mb-12">Payment Options</p>
                    <p className="mb-12">Returns</p>
                    <p className="mb-12">Privacy Policies</p>
                    
                </div>
                <div>
                    <p className="mb-12 text-light">Newsletter</p>
                    <div className="flex gap-3">
                    <input type="email" name="email" placeholder="Enter Youe Email Address" className="border-b-2 border-black"/>
                    <button className="border-b-2 border-black text-sm font-medium">SUBSCRIBE</button>
                    </div>
                    
                </div>
            </div>
            <footer className="text-base py-9 ">2022 Meubel House. All rights reverved</footer>
        </div>
    )
}
export default Footer;