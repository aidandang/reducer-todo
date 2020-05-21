import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';

export default function Todos(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <>
    <div>
      <ul>
        {state.map(todo => <li>{todo.item}</li>)}
      </ul>
    </div>
  </>
}