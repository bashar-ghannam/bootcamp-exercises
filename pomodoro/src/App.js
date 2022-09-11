import React, { Component } from 'react';
import './App.css';
import ActionRow from './components/ActionRow';
import Clock from './components/Clock';
import NavBar from './components/NavBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      minutes: 1,
      seconds: 5,
      timer: null,
      isWorkMode: true,
      isActive: false,
    };
  }

  start = () => {
    let timer = setInterval(() => {
      this.tick();
    }, 1000);
    this.setState({ timer: timer, isActive: true });
  };

  pause = () => {
    clearInterval(this.state.timer);
    this.setState({ isActive: false });
  };

  finished = () => {
    this.setState({ isWorkMode: !this.state.isWorkMode }, this.reset());
  };

  reset = () => {
    this.pause();
    this.state.isWorkMode
      ? this.setState({ minutes: 25, seconds: 0 })
      : this.setState({ minutes: 5, seconds: 0 });
  };

  changeMode = async (mode) => {
    if (mode === 'work') {
      await this.setState({ isWorkMode: true });
      this.reset();
    } else {
      await this.setState({ isWorkMode: false });
      this.reset();
    }
  };

  tick = () => {
    if (this.state.seconds === 0) {
      if (this.state.minutes === 0) {
        this.finished();
      } else {
        this.setState({ minutes: this.state.minutes - 1, seconds: 59 });
      }
    } else {
      this.setState({
        seconds: this.state.seconds - 1,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <NavBar changeMode={this.changeMode} />
        <Clock minutes={this.state.minutes} seconds={this.state.seconds} />
        <ActionRow
          activateAction={this.state.isActive ? this.pause : this.start}
          resetClicked={this.reset}
          currentAction={this.state.isActive ? 'pause' : 'start'}
        />
      </div>
    );
  }
}

export default App;
