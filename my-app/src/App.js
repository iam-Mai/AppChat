import logo from './logo.svg';
import React, { useRef, useState } from 'react';
import './App.css';
import firebase from './Firebase';
import Login from './Login';
import InputData from './InputData'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {

return (
    <div className="App">
    <Login />
    </div>
  );
}

export default App;
