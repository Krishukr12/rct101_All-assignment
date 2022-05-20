import React from "react";
import { useState } from "react";
export const Child2 = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <h1>Child2:{value}</h1>
    </div>
  );
};
