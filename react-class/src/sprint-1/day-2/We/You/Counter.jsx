import React from "react";
import { useState } from "react";
const Counter = (props) => {
  const [count, setCount] = useState(props.intialvalue);
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h2>Count App: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </>
  );
};
export default Counter;
