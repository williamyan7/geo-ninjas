import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
    apiKey: "AIzaSyBtqvNwEtcEShNxbRzJjkUFTPfWq0uXjyY",
    authDomain: "geo-ninjas-16062.firebaseapp.com",
    databaseURL: "https://geo-ninjas-16062.firebaseio.com",
    projectId: "geo-ninjas-16062",
    storageBucket: "geo-ninjas-16062.appspot.com",
    messagingSenderId: "157429868010"
  };

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
