import React from "react";
import Toptable from "./Toptable";
import { Toppicks } from "./Toppicks";
import { Sofa } from "./Sofa";
import { Blogs } from "./Blogs";
import { OurInstagram } from "./OurInstagram";
import Firstpage from "./Firstpage";


const HomePage = (props) => {
  return (
    <>
      <Firstpage/>
      <Toptable />
      <Toppicks {...props}/>
      <Sofa/>
      <Blogs {...props}/>
      <OurInstagram/>
    </>
  );
};

export default HomePage;