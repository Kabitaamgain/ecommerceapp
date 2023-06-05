import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Layouts from './components/layouts/Layouts'
import HomePage from './components/home';
import ShopPage from "./components/shop";
import ContactPage from "./components/contact";
import AboutPage from "./components/about";

function App() {
  const[items,setItems] = useState([])
  const[datas,setDatas] = useState([])
  

  return (
    <>
      <Routes>
        
      <Route path="/" element={<Layouts/>} >
        <Route path="/" element={<HomePage datas={datas}/>} />
        <Route path="/shop" element={<ShopPage items={items}/>} />
        <Route path="/contact" element={<ContactPage items={items} setItems={setItems }/>}/>
        <Route path="/about" element={<AboutPage datas={datas} setDatas={setDatas}/>}/>
     </Route>

      </Routes>
    </>
  )
}

export default App;
