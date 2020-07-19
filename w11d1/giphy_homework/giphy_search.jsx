import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';
import Root from './components/root';

// test
import { fetchSearchGiphys } from './util/api_util'
import { receiveSearchGiphys } from './actions/giphy_actions'
import { fetchSearchGiphys as thisGif } from './actions/giphy_actions'
// test

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore({});

    // test
    window.store = store;
    window.fetchSearchGiphys = fetchSearchGiphys;
    window.receiveSearchGiphys = receiveSearchGiphys;
    window.thisGif = thisGif;
    // test

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});