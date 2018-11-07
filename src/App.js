import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MyHookedComponent from './components/MyHookedComponent'
import AnotherHookedComponent from './components/AnotherHookedComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>React Hooks Example</p>
        </header>
        <section>
          <h1>MyHookedComponent</h1>
          <MyHookedComponent/>
        </section>
        <section>
          <h1>AnotherHookedComponent</h1>
          <AnotherHookedComponent/>
        </section>
      </div>
    );
  }
}

export default App;
