import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './App.css';
import Item from './components/Item';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      newItem: e.target.value,
    });
  };

  addItem = () => {
    this.props.store.addItem(this.state.newItem);
  };

  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} value={this.state.newItem} />
        <button onClick={this.addItem}>Add</button>
        {this.props.store.list.map((item, index) => {
          console.log(item);
          return <Item key={index} item={item} store={this.props.store} />;
        })}
      </div>
    );
  }
}

export default observer(App);
