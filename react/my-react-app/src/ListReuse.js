import React from 'react'

export const ListReuse = (props) => {
  return (
    <ol>
    {
      props.data.map((v,i)=>{
        return <li key={i}>{v}</li>
      })
    }
  </ol>
  )
}

