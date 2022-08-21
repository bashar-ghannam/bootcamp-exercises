import React, { Component } from 'react';
import '../styles/about.css';

class About extends Component {
  render() {
    return (
      <div id="about">
        <div>Find out about:</div>
        <div>
          {this.props.items.map((i, index) => {
            return <div key={index}>{i}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default About;
