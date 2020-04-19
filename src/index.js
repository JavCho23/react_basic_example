import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import RegisterForm from './components/RegisterForm';
import PersonsPanel from "./views/admin/PersonsPanel";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <PersonsPanel />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
