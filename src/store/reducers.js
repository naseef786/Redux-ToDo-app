 const todoReducer = (state = { todos: [] }, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: new Date().getTime(),
              text: action.payload,
              completed: false
            }
          ]
        };
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          )
        };
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
        case 'EDIT_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                  todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
                )
              };
      default:
        return state;
    }
  };
  export default todoReducer