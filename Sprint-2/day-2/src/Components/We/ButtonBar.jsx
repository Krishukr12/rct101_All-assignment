import React from 'react'
import styled from "styled-components"
const Button=styled.button`
color:rgb(181,181,181);
border:none;
margin-left:30px;
font-size:40px;
font-family: 'Merriweather', serif;
gap:30px;
font-weight:bold;
cursor:pointer;
`
export const ButtonBar = ({start,pause,reset}) => {
  return (
    <div>
        <Button  onClick={start}>Start</Button>
        <Button  onClick={pause}>Stop</Button>
        <Button  onClick={reset}>Reset</Button>
    </div>
  )
}
