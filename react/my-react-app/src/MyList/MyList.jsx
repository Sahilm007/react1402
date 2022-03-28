import "./MyList.css";
import React from "react";

function template() {
  return (
    <div className="my-list">
      <h1>MyList</h1>
      <h3>Table</h3>
      <table border='1px'>
        <thead>
           <tr>
             <th>Name</th>
             <th>Runs</th>
           </tr>
        </thead>
        <tbody>
           {
             this.data.map((obj,index)=>{
               return  <tr key={index}>
                <td>{obj.name}</td>
                <td>{obj.runs}</td>
              </tr>
             })
           }
           
           
             
        </tbody>
      </table>
      <h3>Players Line by line</h3>
      {
           this.players.map((val,ind)=>{
                  return <p key={ind}>{val}</p>
           })
         }
      <h3>Select box</h3>
      <select>
         {
           this.players.map((val,ind)=>{
                  return <option key={ind}>{val}</option>
           })
         }
      </select>
      <h3>Order List</h3>
      <ol>
       {
           this.players.map((val,ind)=>{
                  return <li key={ind}>{val}</li>
           })
         }
      </ol>
      <h3>UnOrder List</h3>
      <ul>
       {
           this.players.map((val,ind)=>{
                  return <li key={ind}>{val}</li>
           })
         }
      </ul>
      <h3>List of Players side by side</h3>
      {
           this.players.map((val,ind)=>{
                  return <b key={ind}>{val}&nbsp;&nbsp;</b>
           })
         }
    </div>
  );
};

export default template;
