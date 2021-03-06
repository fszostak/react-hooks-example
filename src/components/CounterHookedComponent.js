import React from 'react';

import { useReducerCounter } from './hooks/useReducerCounter';

export default function CounterHookedComponent(props) {
 
  const [state, dispatch] = useReducerCounter(props.initial);

  return (
    <>
      <p>
        Count={state.count}
      </p>
      <p>
        <button onClick={() => dispatch({type:'add'})}>
          +
        </button>
        <button onClick={() => dispatch({type:'remove'})}>
          -
        </button>
      </p>
    </>
  );
}