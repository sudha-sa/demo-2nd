import React from 'react'
import { useState } from 'react'

const Root8 = () => {
/*with object*/
//     const [allvalues, setValues] = useState({firstName:"siya", lastName:"son"})
//     function Update(){
// setValues({...allvalues, firstName:"yasi"})
//     }

const [items, setItems] = useState([])
console.log(items)
function addItems(){
    setItems([...items, {
      id: items.length,
      value: Math.random()  
    }])
}
  return (
    <>
    {/* <h1>first name is {allvalues.firstName} and last name is {allvalues.lastName}</h1>
    <button onClick={Update}>Update</button> */}

<ol>
    {items.map(item=>(
        <li key={items.id}>{items.value}</li>
    ))}
</ol>
<button onClick={addItems}>Add Items</button>
    </>
  )
}

export default Root8