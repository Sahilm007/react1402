import React from 'react'

export const TableReuse = (props) => {
  return (
    <div>
        <h3>{props.heading}</h3>
      {props.data.length ?  <table border='1px'>
                <thead>
                        <tr>
                            {
                                props.ths.map((v,i)=>{
                                    return <th key={i} >{v}</th>
                                })
                            }
                        </tr>
                </thead>
                <tbody>
                    {
                        props.data.map((obj,index)=>{
                            return <tr key={index}>
                                  {
                                      props.keys.map((k,i)=>{
                                          return <td key={i}>{obj[k]}</td>
                                      })
                                  }
                            </tr>
                        })
                    }
                </tbody>
        </table>
        :
        <h3>No Data Found</h3>
                }
    </div>
  )
}
