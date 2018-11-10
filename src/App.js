import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import My from './components/MyHookedComponent'
import Another from './components/AnotherHookedComponent'
import Counter from './components/CounterHookedComponent'
import List from './components/ListHookedComponent'

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
          <h3>(useState/useEffect example)</h3>
          <My/>
        </section>

        <section>
          <h1>AnotherHookedComponent</h1>
          <h3>(shared useFormInput example)</h3>
          <Another/>
        </section>
        
        <section>
          <h1>CounterHookedComponent</h1>
          <h3>(useReducer example)</h3>
          <Counter initial={0} />
          <Counter initial={5} />
        </section>

        <section>
          <h1>ListHookedComponent</h1>
          <h3>(useReducer example)</h3>
          <List />
        </section>
      
      </div>
    );
  }
}

export default App;
