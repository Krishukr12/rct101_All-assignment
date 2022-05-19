import React from 'react'
import styled from "styled-components";
import { Date } from './Date';
import { Logo } from './Logo';
import classes from "./Payment.module.css"
import { Button } from './Button';
import { Gift } from './Gift';
import { Device } from './Device';
import ButtonSymbol from './ButtonSymbol';
export const Payment = () => {
  const Div=styled.div`
  height:390px;
  width:700px;
  // border:1px solid red;
  background-color:rgb(255,148,0);
  // background-color:teal;
  margin:auto;
  `;
  return (
    <Div>
      <div className={classes.main}>
           <Date date="28/10/2012"/>
          <Logo/>
      </div>
      <div className={classes.second}>
      <Button text="Case Study"/>
      </div>
      <div className={classes.third}>
       <Gift text="Amazon Gift"/>
      </div>
      <div className={classes.forth}>
      <Gift text="Pay"/>
      </div>
      <div className={classes.fifth}>
          <Device text="Desktop-Mobile"/>
          <ButtonSymbol/>
      </div>
      
    </Div>
  )
}
