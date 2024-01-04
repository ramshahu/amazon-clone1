import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBnLtgsq-7VRPU3eh_WQcSnOuSKUE5fyeU",
    authDomain: "my-project-1547014337338.firebaseapp.com",
    projectId: "my-project-1547014337338",
    storageBucket: "my-project-1547014337338.appspot.com",
    messagingSenderId: "222065954771",
    appId: "1:222065954771:web:ad1dda511d703d71ac2926",
    measurementId: "G-3D282SQ0NT"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{ db, auth };