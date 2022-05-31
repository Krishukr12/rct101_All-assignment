import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

export const CurrentStatus = () => {
    const { IsAutorized}=useContext(AuthContext);
  return (
    <div>
        <h1>{IsAutorized ?"User is logged out" :"User is login"}</h1>
    </div>
  )
}
