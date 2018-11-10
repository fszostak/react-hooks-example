import React from 'react';

import { useReducerList } from './hooks/useReducerList';

export default function CounterHookedComponent(props) {
 
  const [state, dispatch] = useReducerList();

  return (
    <>
      <ol>
        List={state.map(item => {
          return (<li key={item.id}>{item.name}</li>);
        })}
      </ol>
      <p>
        <button onClick={() => dispatch({type:'add', name: 'Add'})}>
          Add
        </button>
        <button onClick={() => dispatch({type:'remove', imdex: 1})}>
          Remove TODO
        </button>
      </p>
    </>
  );
}