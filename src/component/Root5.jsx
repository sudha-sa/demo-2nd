import React from 'react'
import Child from './Child'

const Root5 = () => {
    // const data = 'yoshita';
    function getData (data){
        console.log(data)
    }
  return (
<>
<Child getData = {getData}/>
</>

    )
}

export default Root5