import React, { Component } from "react";

export default class AdjustSpeed extends Component {
  handleClick = event => {
    this.props.chooseSpeed(event.target.value);
  };
  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="verySlow" /> very slow
        <input type="radio" name="src" value="slow" /> slow
        <input type="radio" name="src" value="fast" /> fast
        <input type="radio" name="src" value="veryFast" /> very fast
      </form>
    );
  }
}
