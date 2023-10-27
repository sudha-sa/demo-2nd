import React, { useReducer } from 'react'
 
const initialstate = 0;
const reducer = (state, action)=>{
  switch(action){
    case "Increment":
      return state +1;
      case "Decrement":
        return state - 1;
        default:
          return state;
  }
}
const Root10 = () => {

  const [count, dispatch] = useReducer(reducer, initialstate)
  return (
    <>
    <div>count = {count}</div>
    <button onClick={()=>dispatch("Increment")}>Increment</button>
    <button onClick={()=>dispatch("Decrement")}>Decrement</button>
    
    </>
  )
}

export default Root10