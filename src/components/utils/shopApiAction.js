import { instance } from "../api/api";

export const fetchShopsItems = async (setItems) => {
    try {
      const response = await instance.get(`/shop`);
      // console.log(response.data);
      setItems(response.data);
    } catch (error) {
    console.log(error);
    }
}

export const fetchShopsItemsById = async (id) => {
    try {
      const response = await instance.get(`/shop/${id}`);
      console.log(response.data); 
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  
  export const saveShopItems=async(item)=>{
    try{
        const response=await instance.post("/shop",item);
        console.log(response); 
    } catch (error) {
        console.log(error);
    }
  }

  export const updateShopItems = async(item)=>{
    try {
      const response = await instance.put(`/shop/${item.id}`, item);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteShopItem = async (id)=>{
    try {
      const response = await instance.delete(`/shop/${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };