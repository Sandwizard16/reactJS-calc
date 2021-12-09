import React, { Component } from "react";
import "../css/input.css";

class Input extends Component {
  render() {
    return <div class="input">{this.props.value}</div>;
  }
}

export default Input;
