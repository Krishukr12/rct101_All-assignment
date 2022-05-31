import React from 'react'
import { useContext } from 'react'
import Increment from './Increment'
import { CounterContext } from '../Context/CounterContext'
export const Counter = () => {
  const {value}=useContext(CounterContext)
  return (
      <>
       <div>Counter:{value}</div>
     <Increment/>
    </>
   
  )
}
