import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Layouts from './components/layouts/Layouts'
import HomePage from './components/home';
import ShopPage from "./components/shop";

function App() {
  return (
    <>
      <Routes>
        
      <Route path="/" element={<Layouts/>} >
        <Route path="/" element={<HomePage/>} />
        <Route path="/shop" element={<ShopPage/>} />
     </Route>

      </Routes>
    </>
  )
}

export default App;
