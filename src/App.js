import React, { Component } from 'react';
import './App.css';

class Parr extends Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    else {
      return (<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>);
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }
  render() {
    return (
      <div className="wrapper">
        <label><input type="checkbox" checked={this.state.show} onChange={this.changeState.bind(this)} /> Mostrar información importante</label>
        <Parr show={this.state.show} />
      </div>
    );
  }
  changeState(event) {
    this.setState({
      show: event.target.checked
    });
  }
}

export default App;
