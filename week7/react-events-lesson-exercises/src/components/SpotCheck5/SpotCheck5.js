import React, { Component } from 'react';
import Task from './Task';

class SpotCheck5 extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { text: 'Take out trash', complete: false },
        { text: 'Trash talk Carrie', complete: true },
        { text: 'Carry boxes upstairs', complete: false },
      ],
    };
  }

  markComplete = (text) => {
    let currentTask = [...this.state.tasks];
    currentTask.find((task) => task.text === text).complete = true;
    this.setState({ tasks: currentTask });
  };

  render() {
    return (
      <div>
        {this.state.tasks
          .filter((task) => task.complete === false)
          .map((task, index) => {
            return (
              <Task task={task} key={index} markComplete={this.markComplete} />
            );
          })}
      </div>
    );
  }
}

export default SpotCheck5;
