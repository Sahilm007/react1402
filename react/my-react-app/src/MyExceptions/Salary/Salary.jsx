import "./Salary.css";
import React from "react";

function template() {
 const {name,sal} =this.props
 if(sal < 0){
   throw new Error("Salary should +ve")
 }
  return (
    <div className="salary">
      <h1>{`My Name is ${name} , and my salary is ${sal}`}</h1>
    </div>
  );
};

export default template;
