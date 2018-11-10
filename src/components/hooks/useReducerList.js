import { useReducer } from 'react';

function useReducerList(initialCounter) {
  return useReducer((state, action) => {
    switch(action.type) {
      case "add": 
        return [
          ...state,
          {
            id: state.length,
            name: action.name
          }
        ];
      case "remove":
        return state.filter((_, index) => index != action.index);
      default: return state;
    }
  }, []);
}

//
export { 
  useReducerList
}