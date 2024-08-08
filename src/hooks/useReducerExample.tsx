import { FC, useReducer } from 'react';

type State = { count: number };
type Action = { type: 'increment' | 'decrement' };

const initialState: State = { count: 0 };

// Создать reducer, использовать гугл можно =)
// const reducer =

const UseReducerExample: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default UseReducerExample;
