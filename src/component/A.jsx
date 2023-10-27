import React from 'react'
import {B} from './B'

export const A = (props) => {
  console.log(props.values)
  return (
    
    <>
    <h1>{props.values.name}</h1>
    <h3>{props.values.status}</h3>
    </>
  )
}
