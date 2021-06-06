import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC7elJ5PAH3wO-NmLqm_WaYELg44m1XqyY",
    authDomain: "andriichat-97f8b.firebaseapp.com",
    projectId: "andriichat-97f8b",
    storageBucket: "andriichat-97f8b.appspot.com",
    messagingSenderId: "49970506034",
    appId: "1:49970506034:web:1167522786f01472090f2b"
  }).auth();

  