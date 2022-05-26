import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    isIndian: false,
  });
  const handleForm = (e) => {
    let { name, value, checked, type } = e.target;
    if (type === "checkbox") {
      setData({
        ...data,
        [name]: checked,
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  };
  return (
    <div>
      <div>
        <label>Name : </label>
        <input
          type="text"
          placeholder="Enter Name.."
          name="name"
          onChange={handleForm}
        ></input>
      </div>
      <div>
        <label>Email : </label>
        <input
          type="email"
          name="email"
          placeholder="Enter Email.."
          onChange={handleForm}
        ></input>
      </div>
      <div>
        <label>Password : </label>
        <input
          type="password"
          name="password"
          placeholder="Enter password.."
          onChange={handleForm}
        ></input>
      </div>
      <div>
        <label>Number : </label>
        <input
          type="number"
          name="number"
          placeholder="Enter Number.."
          onChange={handleForm}
        ></input>
      </div>
      <div>
        <input type="checkbox" name="isIndian" onChange={handleForm}></input>
        <label>: Is Indian</label>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
};

export default Form;
