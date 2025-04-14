import React from "react";
import { Component } from "react";

export class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  render() {
    return (
      <>
        <p>Hello There, {this.props.name}</p>
        {this.props.children}
      </>
    );
  }
}
