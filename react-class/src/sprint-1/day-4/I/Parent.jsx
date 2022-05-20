import React from 'react'
import { Child1 } from './Child1'
import { Child2 } from './Child2'
export const Parent = () => {
  return (
    <div>
       <h1>Parrent {}</h1>
        <Child1/>
        <Child2/>
    </div>
  )
}
