import React, { useEffect, useState } from 'react'

export const Timer = ({intialTime,endTime}) => {
    const [time,setTime]=useState(intialTime);
   if(time===endTime+1){
       setTime(intialTime);
   }
     let id= setInterval(()=>{
          setTime(time+1);
         clearInterval(id);
      },1000)
  return (
    <div>
        <h1>Timer: {time}</h1>
    </div>
  )
}
