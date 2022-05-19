import React from 'react'
import styled from 'styled-components'
export const Device = ({text}) => {
    const H3=styled.h3`
    padding:0px 25px;
    `
  return (
    <div>
        <H3>{text}</H3>
    </div>
  )
}
