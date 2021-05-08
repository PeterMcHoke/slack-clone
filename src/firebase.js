import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCShDTdumRsLBnft6bJiQLMvWtJJUXH3GA",
    authDomain: "slack-clone-31e63.firebaseapp.com",
    projectId: "slack-clone-31e63",
    storageBucket: "slack-clone-31e63.appspot.com",
    messagingSenderId: "964737581192",
    appId: "1:964737581192:web:0567ba2a5b301fcfcfdf3d",
    measurementId: "G-6CNQ17YCJD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { db, auth, provider };