import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const hello = <h1>React is still up!</h1>;
    // ReactDOM.render(hello, root);
    

    ReactDOM.render(<App />, root);
});


// ReactDOM.render(<App name='Leo' />, root);