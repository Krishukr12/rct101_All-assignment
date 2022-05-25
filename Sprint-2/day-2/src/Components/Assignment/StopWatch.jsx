import React, { useState } from 'react'
import styled from 'styled-components';
import { ButtonBar } from './ButtonBar';
const Div=styled.div`
color:rgb(181,181,181)l
`
const H1=styled.h1`
font-size:90px;
`
export const StopWatch = () => {
    const [watch,setWatch]=useState(0);
    const [id,setId]=useState(null);
    const start=()=>{
       let id= setInterval(()=>{
            setWatch((watch)=>watch+1)
        },1000);
        setId(id);
    }
    const pause=()=>{
        clearInterval(id);
        setId(null);
    }
    const reset=()=>{
        setWatch(0);
        clearInterval(id);
    }
  return (
    <Div>
         <ButtonBar  start={start} pause={pause} reset={reset}/ >

             <H1>{watch}</H1>
       
    </Div>
  )
}
