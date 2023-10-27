import React from 'react'

const Root7 = () => {
   const IPL = ["CSK", "MI", "RCB", "RCB"]
//    const li = [{
//     id:"1",
//     name: "yoshita"
// },
// {
//     id:"2",
//     name: "yoshita"
// }]
   
    const result = IPL.map((ipl, index)=><h1 key={index}>{ipl} index is {index}</h1>)
  return (
    <div className='Root7'>
{/* {IPL[0]}<br/>
{IPL[1]}<br/>
{IPL[2]} */}
<h1>{result}</h1>
    </div>
  )
}

export default Root7