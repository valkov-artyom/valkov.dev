import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyA2TRO7DzcTkY3M8znD0k296pE-SQ_Os5c",
  authDomain: "valkov-development.firebaseapp.com",
  databaseURL: "https://valkov-development.firebaseio.com",
  projectId: "valkov-development",
  storageBucket: "valkov-development.appspot.com",
  messagingSenderId: "339928430378",
  appId: "1:339928430378:web:1565136fd1ce9ddd2d9053",

};
try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
const fire = firebase;
export default fire;
