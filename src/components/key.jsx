import React, { Component } from "react";

class Key extends Component {
  isOperator = (value) => {
    return !isNaN(value) || value === "." || value === "=";
  };

  render() {
    return (
      <div
        onClick={() => this.props.handleClick(this.props.children)}
        style={{
          width: 98,
          height: 80,
          margin: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={
          this.isOperator(this.props.children)
            ? `btn btn-primary btn-lg`
            : `btn btn-danger btn-lg`
        }
      >
        {this.props.children}
      </div>
    );
  }
}

export default Key;
