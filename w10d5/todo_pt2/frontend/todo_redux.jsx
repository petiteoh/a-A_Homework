import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'


document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    window.store = configureStore;
    ReactDOM.render(content)
});