import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext';
const Increment = () => {
  const {increment,decrement}=useContext(CounterContext)
  return (
    <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Increment