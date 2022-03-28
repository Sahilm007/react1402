import React    from "react";
import template from "./MyList.jsx";

class MyList extends React.Component {
  constructor(){
    super();
    this.players=['Sachin','Dhoni','Kohli','uv']
    this.data=[
      {
        name:'Sachin',
        runs:20000
      },
      {
        name:'Dhoni',
        runs:10000
      },
      {
        name:'Kohli',
        runs:15000
      },
      {
        name:'uv',
        runs:9000
      }
    ]
  }
  render() {
    return template.call(this);
  }
}

export default MyList;
