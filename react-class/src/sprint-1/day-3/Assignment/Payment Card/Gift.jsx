import React from 'react'
import styled from 'styled-components'
export const Gift = ({text}) => {
    const H1=styled.h1`
    font-size:35px;
    padding:0px 25px;
    `
  return (
   <H1>{text}</H1>
  )
}
