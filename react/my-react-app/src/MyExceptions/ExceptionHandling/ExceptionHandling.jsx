import "./ExceptionHandling.css";
import React from "react";

function template() {
  return (
    <div className="exception-handling">
        {this.state.hasException ? this.state.msg : this.props.children}
    </div>
  );
};

export default template;
