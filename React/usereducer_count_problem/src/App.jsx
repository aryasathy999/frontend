import { useReducer } from 'react';

  const Actions={
    INCREMENT: "increment",
    DECREMENT: "decrement",
    RESET: "reset"
  }
  //Step 1: Define Initial State
  const initialState = 0;
  //Step 2: Define the Reducer function
  const reducer = (state,action) => {
    switch(action){
      case Actions.INCREMENT:
        return state + 1;
      case Actions.DECREMENT:
        return state - 1;
      case Actions.RESET:
        return initialState;
      default:
        return state; //Return current state without any changes
    }
  };
  //Step 3: Define the Component
  function Counting() {
    //useReducer hook returns dispatch
    const [count, dispatch] = useReducer(reducer,initialState);
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => dispatch(Actions.INCREMENT)}>Increment</button>
        <button onClick={() => dispatch(Actions.DECREMENT)}>Decrement</button>
        <button onClick={() => dispatch(Actions.RESET)}>Reset</button>
      </div>
    )
  }

export default Counting;
