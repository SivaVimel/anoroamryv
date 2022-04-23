
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// eslint-disable-next-line no-unused-vars
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyBlPwQqjr9TYoKVpgCE65tVnk_I-0JYIuo",

  authDomain: "anoroam-ryv.firebaseapp.com",

  projectId: "anoroam-ryv",

  storageBucket: "anoroam-ryv.appspot.com",

  messagingSenderId: "590615179880",

  appId: "1:590615179880:web:d8865bacff0f4456a941dd",

  measurementId: "G-L12C2P13N8"

};
  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;
  