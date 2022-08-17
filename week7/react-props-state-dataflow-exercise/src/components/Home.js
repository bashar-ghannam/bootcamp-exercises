import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {
  render() {
    return this.props.store.map((item) => (
      <Item
        item={item}
        key={item.item}
        shouldDiscount={this.props.shouldDiscount}
      />
    ));
  }
}

export default Home;
