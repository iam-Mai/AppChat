import logo from './logo.svg';
import React, { useRef, useState } from 'react';
import './App.css';
import firebase from './Firebase';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

function App() {

return (
    <div className="App">
      <header>
        <h1>💬</h1>
      </header>

    </div>
  );
}

function Login() {}

function ChatRoom() {}

function ChatMessage(props) {
}

export default App;
