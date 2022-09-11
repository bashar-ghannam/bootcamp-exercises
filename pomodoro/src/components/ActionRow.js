import React, { Component } from 'react';

class ActionRow extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.activateAction}>
          {this.props.currentAction}
        </button>
        <button onClick={this.props.resetClicked}>reset</button>
      </div>
    );
  }
}

export default ActionRow;
