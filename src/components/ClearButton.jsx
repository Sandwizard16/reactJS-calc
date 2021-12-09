import React, { Component } from "react";

class ClearButton extends Component {
  state = {};
  render() {
    return (
      <div
        onClick={this.props.handleClick}
        className="btn btn-secondary btn-lg"
        style={{ marginBottom: 1 }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ClearButton;
