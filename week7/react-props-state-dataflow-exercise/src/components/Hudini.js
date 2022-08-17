import React, { Component } from 'react';

class Hudini extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }
  render() {
    return this.state.show ? (
      <div>Now you see me</div>
    ) : (
      <div>Now you don’t</div>
    );
  }
}

export default Hudini;
