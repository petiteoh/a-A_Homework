import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import App from './components/app'
import Root from './components/root'
import { allTodos } from './reducers/selectors.js';
import { receiveTodo, receiveTodos } from './actions/todos_action';

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('root');
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.store = configureStore;
    window.allTodos = allTodos;
    ReactDOM.render(<Root store={store} />, content);
});

// Consider de-structuring props
// const newTodos = [{ id: 10, title: "abc" }, { id: 11, title: "def" }, { id: 13, title: "ghi" }]