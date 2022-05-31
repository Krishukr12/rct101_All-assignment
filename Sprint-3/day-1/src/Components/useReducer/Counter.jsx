import React from 'react'
import { useReducer } from 'react'
import { reducer } from './reducer';
const Counter = () => {
    const [count,dispatch]=useReducer(reducer,0);
  return (
    <div>
  <h1>Counter: {count}</h1>
  <div>
  <button style={{fontSize:"30px"}} onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
  <button style={{fontSize:"30px"}} onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
  </div>
    </div>
  )
}

export default Counter