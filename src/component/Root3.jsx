import React, { useCallback, useState } from 'react'
import ChildA from './ChildA'

function Root3 (){
    const [ add, setAdd] = useState(0)
    const [count, setCount] = useState(0)
    const Learning = useCallback(()=>{
        //som operation
    },[count])
  return (
    <>
    <h1>Learning useCallback</h1>
    <ChildA Learning={Learning} count={count}/>
    <h1>{add}</h1><br/>
    <button onClick={()=>setAdd(add+1)}>Additon</button>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+2)}>count</button>
    </>
  )
}

export default (Root3)