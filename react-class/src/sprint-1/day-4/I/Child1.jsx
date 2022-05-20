import React,{useState} from 'react'
export const Child1 = () => {
    const [value,setValue]=useState("");
  return (
    <div>
        <h1>Child1{value}</h1>
    </div>
  )
}
