import React from 'react'
import styled from "styled-components"
const Button = (props) => {
    const Button=styled.button`
    height:30px;
    width:90px;
    background:rgb(2,134,168);
    border-radius:25px;
    cursor:pointer;
    margin-top:10px;
`
  return (
    <Button>{props.name}</Button>
  )
}

export default Button