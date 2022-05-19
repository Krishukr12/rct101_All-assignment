import React from 'react'
import styled from 'styled-components'
export const Date = ({date}) => {
  const Div =styled.div`
  // border:1px solid teal;
  width:200px;
  height:50px;
  padding-top:5px;
  // margin-top:10px;
  text-align:center;
  `
  return (
    <Div>
        <h2>{date}</h2>
    </Div>
  )
}
