import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const Form=({datas,setDatas})=>{
    const [isEdit,setisEdit]=useState(false);
    const[values ,setvalues]=useState({
        image:"",
        name:"",
        phone:"",
        detail:""

    });

const handlechange=(e)=>{
    const{name,value,type} = e.target;
    if(type==="file"){
        setvalues({...values,[name]: e.target.files[0]})
    }
    else{
        setvalues({
            ...values,
            [name]:value
        });
    };
  
}
const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(values);
    setvalues({
      image:"",
      name: "",
      phone: "",
      detail: ""
    });
  
    setDatas([...datas,values]);
    if(isEdit){
      const index = datas.findIndex((item) => item.id === values.id);
      const newItem = [...datas];
      newItem.splice(index, 1, values);
      setDatas(newItem);
      
    setisEdit(false);
    }
     else {
      const id = uuidv4();
      setDatas([{ id, ...values }, ...datas]);
    }
   
}
const deleteTableRows = (index)=>{
    const rows = [...datas];
    rows.splice(index, 1);
    setDatas(rows);
}
const handleEdit = (item) => {
    setisEdit(true);
    setvalues(item);
  };
  



    return(
        <div className="flex gap-40 container mt-10">
            <div >
                <form >
                    <label>Select Image</label>
                    <input type="file" name="image" onChange={handlechange} className="block"/>
                    <label>Name</label>
                    <input type="text" name="name" value={values.name} onChange={handlechange} className="block"/>
                    <label>Phone</label>
                    <input type="Number" name="phone" value={values.phone} onChange={handlechange} className="block"/>
                    <label>Detail</label>
                    <textarea name="detail" value={values.detail} onChange={handlechange} className="block"/>
                    <button className="px-3 text-sm py-2 rounded bg-primary mt-6" onClick={handleSubmit}>{isEdit ? "Update" : "Submit"}</button>
                </form>
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                        <th className="px-4 py-2">Id</th>
                        <th className="px-4 py-2">image</th>
                        <th className="px-4 py-2">name</th>
                        <th className="px-4 py-2">phone</th>
                        <th className="px-4 py-2">detail</th>
                        </tr>
                    </thead>
                    <tbody>
                    {datas.map((item,index)=>(
                  <tr className="border-b" key={index}>
                    <td className="px-4 py-2">{item.id}</td>
                    <td className="px-4 py-2">  {item.image && (
                            <img
                              src={URL.createObjectURL(item.image)}
                              alt=""
                              className="w-20 h-20 object-contain"
                            />)}
                            </td>
                    <td className="px-4 py-2">{item.name}</td>
                    <td className="px-4 py-2">{item.phone}</td>
                    <td className="px-4 py-2">{item.detail}</td>
                    <td className="px-4 py-2">
                        <div className="flex">
                      <button className="px-3 text-sm py-2 rounded bg-blue-100" onClick={() => handleEdit(item)}>
                        Edit
                      </button>
                      <button className="px-3 text-sm py-2 rounded bg-red-200 ml-2" onClick={deleteTableRows}>
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