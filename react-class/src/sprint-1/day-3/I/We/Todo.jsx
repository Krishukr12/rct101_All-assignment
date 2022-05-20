import React from 'react'
import { useState } from 'react'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'
export const Todo = () => {
    const [todos,setTodos]=useState([]);
    const addTodo=(newTodos)=>{
        setTodos(...todos,newTodos);
    }
  return (
    <div>
        <h1>TO DO APPLICATION</h1>
        <TodoInput />
        <TodoList/>
    </div>
  )
}
