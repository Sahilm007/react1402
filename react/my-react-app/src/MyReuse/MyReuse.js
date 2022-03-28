import React    from "react";
import template from "./MyReuse.jsx";

class MyReuse extends React.Component {
  constructor(){
    super();
    this.players=['Sachin','Dhoni','Kohli']
    this.students=['Std1','Std2','Std3','Std4']
  }
  render() {
    return template.call(this);
  }
}

export default MyReuse;
