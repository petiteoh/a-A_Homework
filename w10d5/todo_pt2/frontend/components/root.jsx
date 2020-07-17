import React from "react";
import { Provider } from "react-redux";
import App from "./app";

const Root = ({ store }) => (
    <Provider store={store}> // gives access to container components
        <App /> // manual update to props object
    </Provider>
);
export default Root;