import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div style={{display:"flex",gap:"10px",justifyContent:"center",fontSize:"30px"}}>
     <Link to="/">Home</Link>
     <Link to="/products">Products</Link>
    </div>
  );
};
