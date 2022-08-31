import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value);
  };

  editItem = () => {
    const item = this.props.item;
    let oldLocation = item.location;
    let newLocation = prompt('Please enter your name', oldLocation);
    if (newLocation != null) {
      this.props.store.editItem(item.name, newLocation);
    }
  };

  deleteItem = () => {
    this.props.store.deleteItem(this.props.item.name);
  };

  render() {
    let item = this.props.item;
    return (
      <div className={item.completed ? 'crossed' : null}>
        <input type="checkbox" onChange={this.checkItem} value={item.name} />
        {item.name} {item.location}
        <button onClick={this.editItem}>Edit</button>
        <button onClick={this.deleteItem}>Delete</button>
      </div>
    );
  }
}

export default observer(Item);
