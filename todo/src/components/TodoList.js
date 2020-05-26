import React, { useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';

const TodoList = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  const setQuery = (event) => {
    dispatch({ type: 'SET_QUERY', query: event.target.value });
  };
  const addTodo = (event) => {
    event.preventDefault();
    if (state.query !== '') {
      dispatch({ type: 'ADD_TODO', item: state.query });
      dispatch({ type: 'SET_QUERY', query: '' });
    }
  }
  const toggleTodo = (event) => {
    event.persist();
    dispatch({ type: 'TOGGLE_TODO', id: event.target.id});
  }

  const setFilter = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED' });
  }

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-8">
          <div className="card text-white bg-warning">
            <div className="card-header h4">
              Todos:
            </div>
            <ul className="list-group list-group-flush">
              {state.todos.map(todo => 
                <li
                  onClick={toggleTodo} 
                  key={todo.id} 
                  id={todo.id} 
                  className={todo.completed ? 'list-group-item bg-warning completed' : 'list-group-item bg-warning'}
                >
                  {todo.item}
                </li>
              )}
            </ul>
            <div className="card-body">
              <form onSubmit={addTodo}>
                <div className="form-group mb-5 mt-4">
                  <input 
                    type="text" 
                    onChange={setQuery} 
                    className="form-control" 
                    id="newtodo" 
                    placeholder="Input here..."
                    value={state.query}
                  />
                </div>
                <button 
                  type="submit" 
                  className={state.query === "" ? "disabled btn btn-primary mr-4" : "btn btn-primary mr-4"}
                >
                  Add Todo
                </button>
                <button
                  onClick={setFilter}
                  className={state.todos.filter(todo => todo.completed === true).length > 0 ? "btn btn-primary": "btn btn-primary disabled"}>
                  Clear Completed
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

};

export default TodoList;