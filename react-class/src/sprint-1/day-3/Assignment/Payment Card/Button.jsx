import React from 'react'
import styled from 'styled-components'
export const Button = ({text}) => {
    const Button=styled.button`
    background-color:black;
    height:40px;
    width:130px;
    color:white;
    font-size:16px;
    margin:2% 30px;
    cursor:pointer;
    `
  return (
    <Button>{text}</Button>
  )
}
