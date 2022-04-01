import "./MyExceptions.css";
import React from "react";
import Hero from './Hero/index'
import ExceptionHandling from "./ExceptionHandling/ExceptionHandling";
import Salary from './Salary/index'
function template() {
  return (
    <div className="my-exceptions">
      <h1>MyExceptions</h1>
        <ExceptionHandling>
            <Hero name='Super Man'/>
        </ExceptionHandling>

        
        <ExceptionHandling>
           <Hero name='Spider Man' />
        </ExceptionHandling>
        <ExceptionHandling>   
            <Hero name='Joker' />
        </ExceptionHandling>
        <ExceptionHandling>   
        <Salary name='E1' sal={1000} />
        </ExceptionHandling>
        <ExceptionHandling>   
        <Salary name='E2' sal={-1000} />
        </ExceptionHandling>

    </div>
  );
};

export default template;
