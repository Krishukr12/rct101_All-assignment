import React from 'react'
import styled from "styled-components";
import classes from "./Todo.module.css"
const Div=styled.div`
height:40px;
width:100%;
border:1px solid teal;
font-size:30px;
text-align:left;
border-radius:10px;
padding-left:10px;

`
export const TodoList = ({todos}) => {
  return (
    <div className={classes.list}>
      {todos.map((todos)=>{
        return <Div>{todos}</Div>
      })}
    </div>
  )
}
