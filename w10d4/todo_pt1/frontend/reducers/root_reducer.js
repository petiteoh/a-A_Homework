import { combineReducers } from "redux";
import todosReducer from './todos_reducer';

// const rootReducer = (state = {todos: {}}, action) => {
//     return state;
// };

// export default combineReducers({
//     root: rootReducer,
//     todos: todosReducer
// });

// const rootReducer = combineReducers({
//     defaultState, // key name same as the carefully renamed default export
//     firstState: firstNamedReducer, // specific key name instead of the variable name
//     secondState // key name same as the carefully renamed named export
// })

export const defaultState = {
    todos: {
    }
}


export const rootReducer = combineReducers({
    defaultState,
    todos: todosReducer
})
