import axios from 'axios';
import React, { useState, useEffect } from 'react'

const AxiosTutoorial = () => {
    const [userData, setData] = useState([]);
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setData(response.data)
        })
        .catch((error)=>{
            console.error("Error fetching data:", error);
        })
    }, [])
    return (
        <>
        <h1> Axios </h1>
           {userData.map((data)=>(
            <div>{data.name}</div>
           ))}
           
        </>
    )
}


export default AxiosTutoorial