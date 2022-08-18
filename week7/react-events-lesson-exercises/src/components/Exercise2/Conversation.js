import React, { Component } from 'react';

class Conversation extends Component {
  displayConvo = () => {
    this.props.displayConvo(null);
  };

  render() {
    return (
      <div>
        <button className="back" onClick={this.displayConvo}>
          Back
        </button>
        {this.props.convo.map((msg, index) => {
          return (
            <div key={index}>
              <span>
                {msg.sender === 'self' ? 'Me' : this.props.sender}: {msg.text}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Conversation;
