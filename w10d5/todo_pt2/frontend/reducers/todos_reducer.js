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
    let newState = {};

    switch (action.type) { // action.todos => [{ id: 1, ...etc }, { id: 2, ...etc }, ...etc]
      case RECEIVE_TODOS:
        action.todos.forEach((obj) => { // { id: 1, ...etc }
            newState[obj.id] = obj; // { 1: {id: 1, ...etc}, 2: {id: 2, ...etc} }
          });
        return newState;
      case RECEIVE_TODO: //action.todo => { id: 1, type: RECEIVE_TODO, todo: { body: "", tile, done} }
        newState = Object.assign({}, state, {[action.todo.id]: action.todo})
        // state[action.todo.id]
        // Make a new object setting a single key value pair for action.todo
        // Return a new state object by merging your previous state and your
        // new object
        return newState;
      default:
        return state;
  }
};

export default todosReducer;