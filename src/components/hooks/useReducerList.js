import { useReducer } from 'react';

function useReducerList(initialCounter) {
  return useReducer((state, action) => {
    switch(action.type) {
      case "insert": 
        let newid = Math.random();
        return [
          ...state,
          {
            id: newid,
            name: `${action.name} ${newid}`
          }
        ];
      case "delete":
        return state.filter(item => {
          return item.id !== action.id
        });
      default: 
        return state;
    }
  }, []);
}

//
export { 
  useReducerList
}