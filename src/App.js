import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to H!</h1>
        </header>
        <p className="App-intro">
          To get started, message me on <a><code>social-media/linkedin.js</code></a>, and let's chat!
        </p>
      </div>
    );
  }
}

export default App;
