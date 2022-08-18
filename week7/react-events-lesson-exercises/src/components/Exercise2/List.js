import React, { Component } from 'react';
import Contact from './Contact';

class List extends Component {
  render() {
    return (
      <div>
        {this.props.contacts.map((name, index) => (
          <Contact
            name={name}
            key={index}
            displayConvo={this.props.displayConvo}
          />
        ))}
      </div>
    );
  }
}

export default List;
