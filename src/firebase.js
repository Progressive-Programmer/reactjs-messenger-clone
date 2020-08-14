import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
 
        apiKey: "AIzaSyAGl9DZ5rsGJA5D7Pm4qke2iAYh3_RtG9g",
        authDomain: "messenger-clonejs.firebaseapp.com",
        databaseURL: "https://messenger-clonejs.firebaseio.com",
        projectId: "messenger-clonejs",
        storageBucket: "messenger-clonejs.appspot.com",
        messagingSenderId: "810553918391",
        appId: "1:810553918391:web:b68b6f413448b7ea17de32",
        measurementId: "G-2D3W91S39W"
      

});

const db = firebaseApp.firestore();

export default db;
