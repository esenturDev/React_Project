import React from 'react'

export const Input = ({type, value, setData}) => {
  return (
    <input type={type} value={value} onChange={(e) => {
      setData(e.target.value)
    }}/>
  ) 
}
