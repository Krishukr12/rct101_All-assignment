import React from "react";
import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
    }
    const decrementCount = () => {
        setCount(count - 1);
    }
    return (
        <>
            <h2>Count App:  {count}</h2>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </>
    )
}
export default Counter;