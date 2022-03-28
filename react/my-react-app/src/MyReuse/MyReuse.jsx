import "./MyReuse.css";
import React from "react";
import {ListReuse} from '../ListReuse'
function template() {
  return (
    <div className="my-reuse">
      <h1>MyReuse</h1>
      <ListReuse data={this.players} />
      <ListReuse data={this.students} />
     
    </div>
  );
};

export default template;
