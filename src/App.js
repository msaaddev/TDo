import React from "react";
import Home from "./components/home/home";
import "./App.css";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrHnzZg7gMl4XDugKL9v5qhPG9hj_Jbh0",
  authDomain: "tdo-project.firebaseapp.com",
  databaseURL: "https://tdo-project.firebaseio.com",
  projectId: "tdo-project",
  storageBucket: "tdo-project.appspot.com",
  messagingSenderId: "761181474595",
  appId: "1:761181474595:web:1410533813358dd5c74696",
  measurementId: "G-0D4D4W1SSF"
};

function App() {
  return <Home />;
}

firebase.initializeApp(firebaseConfig);

export default App;
