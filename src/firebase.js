import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBwDpQALBpFyx7ukJmJi5pA7HRXhgsZAno",
        authDomain: "facebook-messenger-clone-7f687.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-7f687.firebaseio.com",
        projectId: "facebook-messenger-clone-7f687",
        storageBucket: "facebook-messenger-clone-7f687.appspot.com",
        messagingSenderId: "510264164599",
        appId: "1:510264164599:web:916b10404a7c6bfade53f2",
        measurementId: "G-M1EC52ZYZP"
});

const db = firebaseApp.firestore();

export default db;