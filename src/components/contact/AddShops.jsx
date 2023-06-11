import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { updateShopItems } from "../utils/shopApiAction";
import { fetchShopsItems,saveShopItems,deleteShopItem } from "../utils/shopApiAction";


const AddShops=({items,setItems})=>{
 console.log(items)
    // const [items, setItems] = useState([]);
    const [isEdit,setisEdit]=useState(false);
    const [base64Image, setBase64Image] = useState("");

    const convertToBase64 = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        console.log("called: ", reader);
        setBase64Image(reader.result);
      };
    };
    const [values,setvalues]=useState({
        image:"",
        title:"",
        price:"",
        details:"",
    });
   

    const handleChange=(e)=>{
        const {name, value,type}= e.target;
        if(type==="file"){
          setvalues({...values,[name]: e.target.files[0]})
          convertToBase64(e.target.files[0]);
        }
      
        else{
          setvalues({
            ...values,
            [name]:value
        });
        };

       
    };
    const handleSubmit = async(e)=> {
      const id = uuidv4();
        e.preventDefault();
        console.log(values);
    
      setItems([{id,...values},...items]);
if(isEdit){
  // const index = items.findIndex((item) => item.id === values.id);
  // const newItem = [...items];
  // newItem.splice(index, 1, {...values, image:base64Image?base64Image: values.image});
  // setItems(newItem);

// instance.put(`/shop/${values.id}`,{...values})
// .then((res)=>console.log(res.data))
// .catch((error)=>console.log(error));
await updateShopItems({
 ...values, image:base64Image?base64Image: values.image
});
await fetchShopsItems(setItems);
setisEdit(false);
}
 else {
 
  // setItems([{ id, ...values,image: base64Image }, ...items]);

//    instance.post("/shop",{
//   id,
//   ...values, image: base64Image, ...items
// })
// .then((response)=>console.log(response.items))
//   .catch((error)=>console.log(error));

await saveShopItems({
  id,
  ...values,
  image: base64Image,
});
await fetchShopsItems(setItems);
}

      setvalues({
        image: null,
        title: "",
        price: "",
        details: ""
      });

    };
  
     const deleteTableRows = async(id)=>{
      
    await deleteShopItem(id);
    await fetchShopsItems(setItems);
      
      // instance.delete(`/shop/${id}`)
      // .then((response)=>console.log(response.item))
      // .catch((error)=>console.log(error));
      // setItems(items.filter((item) => item.id !== id));

 };
 const handleEdit = (item) => {
  setisEdit(true);
  setvalues(item);
};


   return( 
   <div className="flex container">
     <div className="grid grid-cols-3 gap-">
        <form action="">

            <div className="mb-2">
                <label className="text-xl">Select Image:</label>
                <input  type="file" name="image" onChange={handleChange} ></input>
            </div>
            <div>
                <label className="text-xl">Title:</label>
                <input type="text" name="title" value={values.title} onChange={handleChange}></input>
            </div>
            <div>
                <label className="text-xl">Price:</label>
                <input type="Number" name="price" value={values.price} onChange={handleChange}></input>
            </div>
            <div>
                <label className="text-xl">Details:</label>
                <textarea type="text" name="details" value={values.details} onChange={handleChange} rows={5} cols={30}/>
            </div>
            <div className="text-center">
            <button className="px-8 mt-3 py-2 bg-primary rounded-lg " onClick={handleSubmit}> {isEdit ? "Update" : "Submit"}</button>
            </div>
        </form>
        </div>
            <div className="mt-6">
              <table className="w-full">
                <thead>
                  <tr className="text-left bg-primary">
                    <th className="px-4 py-2">ID</th>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Title</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Details</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                {items.map((item,index)=>(
                  <tr className="border-b" key={index}>
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">  {item.image && (
                            <img
                              src={item.image}
                              alt=""
                              className="w-20 h-20 object-contain"
                            />)}
                            </td>
                    <td className="px-4 py-2">{item.title}</td>
                    <td className="px-4 py-2">{item.price}</td>
                    <td className="px-4 py-2">{item.details}</td>
                    <td className="px-4 py-2">
                        <div className="flex">
                      <button className="px-3 text-sm py-2 rounded bg-blue-100" onClick={() => handleEdit(item)}>
                        Edit
                      </button>
                      <button className="px-3 text-sm py-2 rounded bg-red-200 ml-2" onClick={() => deleteTableRows(item.id)}>
                        Delete
                      </button>
                      </div>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
   )
 }

export default AddShops; 