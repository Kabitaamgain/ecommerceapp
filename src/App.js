import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Layouts from './components/layouts/Layouts'
import HomePage from './components/home';
import ShopPage from "./components/shop";
import ContactPage from "./components/contact";
import AboutPage from "./components/about";

function App() {
  return (
    <>
      <Routes>
        
      <Route path="/" element={<Layouts/>} >
        <Route path="/" element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
     </Route>

      </Routes>
    </>
  )
}

export default App;
