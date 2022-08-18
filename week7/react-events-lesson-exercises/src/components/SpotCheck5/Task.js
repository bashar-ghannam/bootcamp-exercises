import React, { Component } from 'react';

class Task extends Component {
  complete = () => {
    this.props.markComplete(this.props.task.text);
  };

  render() {
    return (
      <div>
        <p>
          {this.props.task.text} -{' '}
          <button onClick={this.complete}>Complete</button>
        </p>
      </div>
    );
  }
}

export default Task;
