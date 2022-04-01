import React    from "react";
import template from "./Ajax.jsx";

class Ajax extends React.Component {
  state={
    data:[]
  }
  fnGetUsers=()=>{
      let obj=new  XMLHttpRequest();
      obj.open('get','https://jsonplaceholder.typicode.com/users')
      obj.send()
      obj.onload=()=>{
        let res=obj.responseText
        res=JSON.parse(res)
        this.setState({
          data:res
        })
      }
      obj.onerror=()=>{
        let res=obj.responseText
        this.setState({
          data:[]
        })
      }
  }
  render() {
    return template.call(this);
  }
}

export default Ajax;
