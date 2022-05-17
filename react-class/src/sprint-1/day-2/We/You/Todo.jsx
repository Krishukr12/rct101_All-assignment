import React from 'react'
import { useState } from 'react'

export const Todo = () => {
    const [todo,setTodo]=useState(["krishan"])
  return (
   <div>
       <input placeholder='Type todo'></input>
       <button>Add</button>
   </div>
  )
}
