import "./Ajax.css";
import React from "react";
import {TableReuse} from '../TableReuse'
function template() {
  return (
    <div className="ajax">
      <h1>Ajax</h1>
      <button onClick={this.fnGetUsers}>Get Users</button>
      <TableReuse heading='Users' ths={['Name','User Name', 'Email']} data={this.state.data} keys={['name','username','email']}/>
    </div>
  );
};

export default template;
