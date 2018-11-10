import { useReducer } from 'react';

function useReducerCounter(initialCounter) {
  return useReducer((state, action) => {
    switch(action.type) {
      case "add": 
        return { count: state.count + 1 };
      case "remove": 
        return { count: state.count - 1 };
      default: 
        return state;
    }
  }, { count: initialCounter });
}

//
export { 
  useReducerCounter
}