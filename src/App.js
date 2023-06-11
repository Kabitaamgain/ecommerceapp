import React, { useState ,useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Layouts from './components/layouts/Layouts'
import HomePage from './components/home';
import ShopPage from "./components/shop";
import ContactPage from "./components/contact";
import AboutPage from "./components/about";
import { fetchShopsItems } from "./components/utils/shopApiAction";
import ShopDetails from "./components/shop/ShopDetails";

function App() {
  const [items,setItems] = useState([])
  const [datas,setDatas] = useState([])

  useEffect(() => {
    fetchShopsItems(setItems);
  }, [])

  return (
    <>
      <Routes>
        
      <Route path="/" element={<Layouts/>} >
        <Route path="/" element={<HomePage items={items} datas={datas}/>} />
        <Route path="/shop">
          <Route index element={<ShopPage items={items } setItems={setItems }/>} />
          <Route path=":shopId" element={<ShopDetails />}/>
          </Route>
        <Route path="/contact" element={<ContactPage items={items} setItems={setItems }/>}/>
        <Route path="/about" element={<AboutPage datas={datas} setDatas={setDatas}/>}/>
        <Route path="/*" element={<>Page Not Found</>}/>

     </Route>

      </Routes>
    </>
  )
}

export default App;
