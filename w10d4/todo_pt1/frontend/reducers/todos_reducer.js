import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todos_action';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
cons
    switch (action.type) { // action.todos => [{ id: 1, ...etc }, { id: 2, ...etc }, ...etc]
      case RECEIVE_TODOS:
          action.todos.forEach((obj) => {
            //[obj.id]:
            
                initialState[id] = obj.id,
          });
        
        return newTodos;
      case RECEIVE_TODO:
        //
      default:
        return state;
  }
};

export default todosReducer;