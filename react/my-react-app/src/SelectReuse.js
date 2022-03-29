import React from 'react'

export const SelectReuse = (props) => {
  return (
      <div>
          <h3>{props.heading}</h3>
      <select>
           {
               props.data.map((v,i)=>{
                   return <option key={i}>{v}</option>
               })
           }
      </select>
      </div>
  )
}


