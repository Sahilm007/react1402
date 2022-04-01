import React    from "react";
import template from "./ExceptionHandling.jsx";

class ExceptionHandling extends React.Component {
  state={
    hasException:false,
    msg:''
  }
  static getDerivedStateFromError(error){
     return {
       hasException:true,
       msg:error.message
     }
  }
  
  componentDidCatch(err){
     console.log('::::::' + err.message)
  }
  render() {
    return template.call(this);
  }
}

export default ExceptionHandling;
