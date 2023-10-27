import axios from 'axios';
import React, { useState } from 'react'
//axios post
const Root12 = () => {
    const data = {fname :"", lastname :""}
    const [inputData, setInputData] = useState(data)
  
    const handleData = (e)=>{
setInputData({...inputData, [e.target.name]:e.target.value})
    }
  
    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
        .then((response)=>{
            console.log(response)
        })
    }
 const handleUpdate=(e)=>{
    e.preventDefault();
    axios.put("https://jsonplaceholder.typicode.com/users", inputData)
    .then((response)=>{
        console.log(response)
    })
 }
const  handleDelete=(e)=>{
    e.preventDefault();
    axios.delete("https://jsonplaceholder.typicode.com/users", inputData)
    .then((response)=>{
        console.log(response)
    })
 }

    return (
    <>
    <label>First Name</label>
    <input type="text" name='fname' value={inputData.fname} onChange={handleData}/><br/>
    <label>Last Name</label>
    <input type="text" name='lastname' value={inputData.lastname} onChange={handleData}/>

    <button onClick={handleSubmit}>Submit</button>
    <button onClick={handleUpdate}>Update</button>
    <button onClick={handleDelete}>Delete</button>
    </>
  )
}

export default Root12