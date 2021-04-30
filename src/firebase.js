import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCU1fmZX8uhfvaxnrBIRlOXJXV-5aTUzcA",
    authDomain: "disney-yt-clone.firebaseapp.com",
    projectId: "disney-yt-clone",
    storageBucket: "disney-yt-clone.appspot.com",
    messagingSenderId: "143114919386",
    appId: "1:143114919386:web:65d9c2f90be63762ae74e3",
    measurementId: "G-8Q9TTHRSKP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;