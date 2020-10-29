import firebase from "firebase";


// create a firebase app and place the configuration here
const firebaseConfig = {
 
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;