import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/analytics";

import "./index.css";
import App from "./App";

fetch("/__/firebase/init.json").then(async response => {
  firebase.initializeApp(await response.json());
});

ReactDOM.render(<App />, document.getElementById("root"));
