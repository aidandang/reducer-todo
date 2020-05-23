import uuid from 'react-uuid';

export const initialState = {
  todos: [
    {
      item: 'Read primative types and Objects in JavaScript',
      completed: false,
      id: '1'
    },
    {
      item: 'Learn about reducers',
      completed: false,
      id: '2'
    },
    {
      item: 'Complete the project',
      completed: false,
      id: '4'
    }
  ],
  query: ''
}

export const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed === false)
      }
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos, 
          { id: uuid(), item: action.item, completed: false }
        ]
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case 'SET_QUERY':
      return {
        ...state,
        query: action.query,
      };
    default:
      return state;
  }
};