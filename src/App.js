import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MyComponent from './components/MyHookedComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React Hooks Example</p>
        </header>
        <section>
          <MyComponent/>
        </section>
      </div>
    );
  }
}

export default App;
