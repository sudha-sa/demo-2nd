import {React, memo} from 'react'

const ChildA = (Learning, count) => {
    console.log("Child Component")
  return (
    <div>ChildA</div>
  )
}

export default memo(ChildA)