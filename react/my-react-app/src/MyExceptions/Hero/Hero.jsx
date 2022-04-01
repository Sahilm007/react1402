import "./Hero.css";
import React from "react";

function template() {
  let name=this.props.name;
  if(name == "Joker"){
    throw new Error('You are not a hero')
  }
  return (
    <div className="hero">
      <h1>This is {name}</h1>
    </div>
  );
};

export default template;
