import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const config = {
                       apiKey: "AIzaSyBT6kuWKZTRm-oXmnbQQWWkmByMqNjOtAk",
                       authDomain: "chatapp-c3a63.firebaseapp.com",
                       projectId: "chatapp-c3a63",
                       storageBucket: "chatapp-c3a63.appspot.com",
                       messagingSenderId: "1098887902648",
                       appId: "1:1098887902648:web:342320222c6d273f078b4d",
                       measurementId: "G-5ZVMCX0P57"
  };
firebase.initializeApp(config);

export default firebase;
