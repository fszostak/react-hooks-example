import React, { useState, useContext } from 'react';
import logo from './logo.svg';
import './App.css';


import My from './components/MyHookedComponent'
import Another from './components/AnotherHookedComponent'
import Counter from './components/CounterHookedComponent'
import List from './components/ListHookedComponent'

import { LangContext, loadTranslations, defaultLanguage, languageList } from './lang/LangContext'

function App(props) {
  const [lang, setLang] = useState('pt');
  const [translations, setTranslations] = useState(loadTranslations(defaultLanguage));

  const onChange = (event) => {
    console.log('selected', event.target.value);
    setLang(event.target.value);
    setTranslations( loadTranslations(event.target.value) );
  }

  if (!translations) {
    return (<>Loading...</>);
  }

  return (
    <LangContext.Provider value={ translations }>

      <div className="App">
      
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>React Hooks Example</p>
            <select onChange={onChange.bind(this)}>
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

export default App;