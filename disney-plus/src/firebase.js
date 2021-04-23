const firebaseConfig = {
  apiKey: "AIzaSyBkgMsY2FdUcnmQQrTn-Di1AQwkn_wR69k",
  authDomain: "disney-plus-bk.firebaseapp.com",
  projectId: "disney-plus-bk",
  storageBucket: "disney-plus-bk.appspot.com",
  messagingSenderId: "948146277151",
  appId: "1:948146277151:web:1e74469133235c646dbe2a",
  measurementId: "G-TME3222XPS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
