import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import My from './components/MyHookedComponent'
import Another from './components/AnotherHookedComponent'
import Counter from './components/CounterHookedComponent'
import List from './components/ListHookedComponent'

import { LangContext, loadTranslations, defaultLanguage, languageList } from './lang/LangContext'

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      lang: defaultLanguage,
      translations: loadTranslations(defaultLanguage)
    }
  }

  onChange(event) {
    this.setState({
      lang: event.target.value,
      translations: loadTranslations(event.target.value)
    });
  }

  render() {
    if (!this.state.translations) {
      return (<>Loading...</>);
    }

    return (
      <LangContext.Provider value={this.state.translations}>
  
        <div className="App">
        
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>React Hooks Example</p>
              <select onChange={this.onChange.bind(this)}>
              { 
                languageList.map( (lang, index) => {
                  return (
                    <option key={index} value={lang.value}>{lang.name}</option>
                  )
                })
              }
              </select>
            </header>
            
            <section>
              <h1>MyHookedComponent</h1>
              <h3>(useState/useEffect/useContext example)</h3>
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
      </LangContext.Provider>
    );
  }
}

export default App;