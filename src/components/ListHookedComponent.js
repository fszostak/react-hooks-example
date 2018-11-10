import React from 'react';

import { useReducerList } from './hooks/useReducerList';

export default function CounterHookedComponent(props) {
 
  const [state, dispatch] = useReducerList();

  return (
    <>
      <ol>
        {state.map(item => {
          return (<li key={item.id}>
            {item.name}
            <button onClick={() => dispatch({type:'delete', id: item.id})}>
              Delete
            </button>
          </li>);
        })}
      </ol>
      <p>
        <button onClick={() => dispatch({type:'insert', name: 'New item'})}>
          New item  
        </button>
      </p>
    </>
  );
}