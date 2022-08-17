import React, { Component } from 'react';

class Landing extends Component {
  getHottestItem() {
    this.props.store
      .filter((item) => item.hottest == true)
      .map((item) => {
        return <div>{item.item}</div>;
      });
  }
  render() {
    return (
      <div>
        Welcome, {this.props.name},
        {this.props.store
          .filter((item) => item.hottest == true)
          .map((item) => {
            return `The hottest item is ${item.item} for $${item.price}`;
          })}
      </div>
    );
  }
}

export default Landing;
