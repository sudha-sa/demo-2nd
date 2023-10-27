import React from 'react'
import {A} from './A'

export const Root1 = () => {
    const obj = {
        name : "I am Sudha Rani",
        status : "Student",
    }
  return (
    <>
    <A values = {obj}/>
    </>
  )
}
