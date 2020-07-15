import React from 'react';
import ReactDOM from 'react-dom';
import Game from './game';

// attach event listener to the page using vanilla JS
document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(<Game />, root);
});