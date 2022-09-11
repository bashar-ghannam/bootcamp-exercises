import React, { Component } from 'react';

class NavBar extends Component {
  changeModetoWork = () => {
    this.props.changeMode('work');
  };

  changeModetoBreak = () => {
    this.props.changeMode('break');
  };
  render() {
    return (
      <div>
        <button onClick={this.changeModetoWork}>Work mode</button>
        <button onClick={this.changeModetoBreak}>Break mode</button>
      </div>
    );
  }
}

export default NavBar;
