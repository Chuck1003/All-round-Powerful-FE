import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Clock from './components/Clock.js';
import List from './components/List.js';
import LoginControl from './components/LoginControl.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}

          <LoginControl />
          <Clock />
          {/* <List listName='233' /> */}
          <List />
        </header>
      </div>
    );
  }
}
export default App;
