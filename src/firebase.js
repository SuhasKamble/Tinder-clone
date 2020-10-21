import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCXhoNoLrPpuuUmdWFWB0PWC30PMYNo9ks",
    authDomain: "tinder-clone-5752a.firebaseapp.com",
    databaseURL: "https://tinder-clone-5752a.firebaseio.com",
    projectId: "tinder-clone-5752a",
    storageBucket: "tinder-clone-5752a.appspot.com",
    messagingSenderId: "848156476996",
    appId: "1:848156476996:web:d3770756296afcca2e9e11",
    measurementId: "G-42761YQ6VX"
  };

  const firebaeApp = firebase.initializeApp(firebaseConfig)
  const db = firebaeApp.firestore()
  
  export default db;