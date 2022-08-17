import React, { Component } from 'react';

class Item extends Component {
  render() {
    return (
      <p>
        {this.props.item.item} : original price {this.props.item.price}$ with
        discount :{this.props.item.price * (1 - this.props.item.discount)}$
      </p>
    );
  }
}

export default Item;
