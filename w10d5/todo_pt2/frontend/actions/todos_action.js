export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";


export const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS,
        todos: todos // this will have [id, title, body, done]
    };
};

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo: todo // this will have [id, title, body, done]
    };
};

// export const receiveTodo = (title, body) => {
//     return {
//         type: RECEIVE_TODO,
//         id: Math.floor(Math.random() * 1000),
//         title: title,
//         body: body,
//         done: false
//     };
// };