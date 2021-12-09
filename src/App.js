import "./App.css";
import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Key from "./components/key";
import Input from "./components/input";
import ClearButton from "./components/ClearButton";

class App extends Component {
  state = {
    input: "",
    previousNumber: "",
    currentNumber: "",
    operator: "",
  };

  handleInput = (value) => {
    this.setState({ input: this.state.input + value });
    console.log(this.state.value);
  };

  handleDecimal = (value) => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + value });
    }
  };

  handleClear = () => {
    this.setState({
      input: "",
      previousNumber: "",
      currentNumber: "",
      lastNumber: "",
      operator: "",
    });
  };

  handleAddition = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "+";
  };

  handleSubtraction = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "-";
  };

  handleMultiplication = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "x";
  };

  handleDivision = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "/";
  };

  handleBackspace = () => {
    const number = this.state.input.slice(0, -1);
    this.setState({ input: number });
  };

  handleCalc = () => {
    this.state.currentNumber = this.state.input;

    if (this.state.operator === "+") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) +
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator === "-") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) -
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator === "x") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) *
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator === "/") {
      this.setState({
        input:
          parseInt(this.state.previousNumber) /
          parseInt(this.state.currentNumber),
      });
    }

    this.state.previousNumber = "";
    this.state.operator = "";
  };

  render() {
    return (
      <div className="App">
        <div class="wrapper">
          <div class="container">
            <div class="row">
              <Input value={this.state.previousNumber}></Input>
            </div>
            <div class="row">
              <Input value={this.state.operator}></Input>
            </div>
            <div class="row">
              <Input value={this.state.input}></Input>
            </div>
            <div className="row">
              <Key handleClick={this.handleInput}>7</Key>
              <Key handleClick={this.handleInput}>8</Key>
              <Key handleClick={this.handleInput}>9</Key>
              <Key handleClick={this.handleDivision}>/</Key>
            </div>
            <div className="row">
              <Key handleClick={this.handleInput}>4</Key>
              <Key handleClick={this.handleInput}>5</Key>
              <Key handleClick={this.handleInput}>6</Key>
              <Key handleClick={this.handleMultiplication}>x</Key>
            </div>
            <div className="row">
              <Key handleClick={this.handleInput}>1</Key>
              <Key handleClick={this.handleInput}>2</Key>
              <Key handleClick={this.handleInput}>3</Key>
              <Key handleClick={this.handleAddition}>+</Key>
            </div>
            <div className="row">
              <Key handleClick={this.handleDecimal}>.</Key>
              <Key handleClick={this.handleInput}>0</Key>
              <Key handleClick={this.handleCalc}>=</Key>
              <Key handleClick={this.handleSubtraction}>-</Key>
            </div>
            <div class="row">
              <ClearButton handleClick={this.handleClear}>
                Clear All
              </ClearButton>
              <ClearButton handleClick={this.handleBackspace}>
                BackSpace
              </ClearButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
