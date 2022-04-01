import React    from "react";
import template from "./Hero.jsx";

class Hero extends React.Component {
  render() {
    return template.call(this);
  }
}

export default Hero;
