import React from 'react'
import {C} from './C'

export const B = (props) => {
  console.log(props.values)
  return (
    
    <>
    <h1>{props.values.name}</h1>
    <h3>{props.values.status}</h3>
    </>
  )
}
