import React from "react";
import ReactDOM from "react-dom";
import "./scss/styles.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker.js";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(<App />, document.getElementById("root"));
