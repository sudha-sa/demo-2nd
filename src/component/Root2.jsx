import React, { useMemo, useState } from 'react'

const Root2 = () => {

    const [add,setAdd] = useState(0)
const [minus, setMinus] = useState(100)

const multiplication = useMemo(function multiply(){
    console.log("*****")
    return add*10;
},[add])

  return (
    <>
    <h1>learning useMemo</h1>
    {multiplication}<br/>
    <button onClick={()=>setAdd(add+1)}>Addition</button>
    <span>{add}</span><br/>
    <button onClick={()=>setMinus(minus-1)}>Substration</button>
<span>{minus}</span>

    </>
  )
}

export default Root2