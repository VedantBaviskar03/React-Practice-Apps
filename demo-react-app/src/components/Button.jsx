import React from "react";
import { Component } from "react";

export class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, onClick, className } = this.props;
    return (
      <>
        <button className={className} onClick={onClick}>
          {label}
        </button>
      </>
    );
  }
}
