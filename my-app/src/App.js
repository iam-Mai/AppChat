import logo from './logo.svg';
import React, { useRef, useState } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
      apiKey: "AIzaSyBT6kuWKZTRm-oXmnbQQWWkmByMqNjOtAk",
      authDomain: "chatapp-c3a63.firebaseapp.com",
      projectId: "chatapp-c3a63",
      storageBucket: "chatapp-c3a63.appspot.com",
      messagingSenderId: "1098887902648",
      appId: "1:1098887902648:web:342320222c6d273f078b4d",
      measurementId: "G-5ZVMCX0P57"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
