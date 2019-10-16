import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/analytics";

import "./index.css";
import App from "./App";

firebase.initializeApp({
  apiKey: "AIzaSyClRaDww0-eBeMyWgvqTlWhGOzVb1ptJOI",
  projectId: "personalsite-94754",
  messagingSenderId: "441431197153",
  appId: "1:441431197153:web:7dd096e74cb6ab94463ea0",
  measurementId: "G-B7TW4Z6NT1"
});

ReactDOM.render(<App />, document.getElementById("root"));
