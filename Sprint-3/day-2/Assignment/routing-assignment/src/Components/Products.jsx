import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Products = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
    const getData=()=>{
        fetch("http://localhost:8080/posts").then((r)=>r.json()).then((d)=>{
            setData(d);
        })
    }
    getData()
    },[])
  return <div>
     {data.map((data)=>{
        return <h1 id={data.id}>{data.name}</h1>
     })}
  </div>;
};
