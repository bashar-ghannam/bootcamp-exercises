import React, { Component } from 'react';

export const Home = function () {
  return <div className="home">Welcome to our page</div>;
};

export const About = function () {
  return <div className="about">It’s great here</div>;
};

export class SpotCheck2 extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
    };
  }

  toggleState = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <div>
        {this.state.toggle ? <Home /> : <About />}
        <button onClick={this.toggleState}>Toggle</button>
      </div>
    );
  }
}
