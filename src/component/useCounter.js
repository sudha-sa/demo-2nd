import {useState} from 'react'

const useCounter = (initialvalue = 0) => {
    
    const [count, setCount] = useState(initialvalue)

    function Increment(){
        setCount(count+1)
    }
    function Decrement(){
        setCount(count-1)
    }
    
  return [count, Increment, Decrement]
}

export default useCounter