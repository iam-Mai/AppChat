import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const config = {
    //add firebase config here
  };
firebase.initializeApp(config);

export default firebase;
