import React, { useState } from "react";
import { Component } from "react";
import { Button } from "./Button";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  decrementCount = () => {
    console.log("a", this.state.count);
    this.setState((prev) => ({
      count: prev.count > 0 ? prev.count - 1 : 0,
    }));
  };

  render() {
    const btnProperty =
      "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2";

    return (
      <>
        <p className="text-purple m-2">
          The Current Count is {this.state.count}
        </p>
        <Button
          className={btnProperty}
          onClick={this.incrementCount}
          label="Click to Increment Count"
        ></Button>
        <br></br>
        <br></br>
        <Button
          className={btnProperty}
          onClick={this.decrementCount}
          label="Click to Decrement Count"
        ></Button>
      </>
    );
  }
}
