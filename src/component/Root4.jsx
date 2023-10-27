import React, { useRef, useState } from 'react'

const Root4 = () => {

    /*controlled component*/

    // const [Name, setName] = useState("")
    // const [pswd, setPassword] = useState("")
    // function handleChange(e){
    //     console.log(e.target.name)
    //     if(e.target.name == "firstname"){
    //          const capName = (e.target.value).toUpperCase();
    //                  setName(capName)
    //     }
    //     else{
    //         setPassword(e.target.value)
    //     }
       
    // }
   /*uncontrolled component*/

const refObject = useRef()
 console.log(refObject)
 function handleSubmit(e){
    e.preventDefault();
   console.log((refObject.current.value).toUpperCase());
 }

    return (
        <>
            <form className='Root4' onSubmit={handleSubmit}>
                {/* <label>First Name:</label><br />
                <input type='text'name='firstname' value={Name} onChange={handleChange}/><br/>
                <label>Password:</label><br />
                <input type='text'name='password' value={pswd} onChange={handleChange}/><br/> */}

   <label>First Name:</label><br />
                 <input type='text' ref={refObject}/><br/>
<button>Submit</button>
            </form>
        </>
    )
}

export default Root4