import React from 'react'
import styled from "styled-components"
export const Links = (props) => {
    const Link=styled.a`
    color:white;
    font-size:16px;
    padding-top:10px;
    `
  return (
  <>
    <Link href='/'>{props.name}</Link>
  </>
  )
}
