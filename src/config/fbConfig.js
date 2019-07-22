import firebase from 'firebase/app' 
import 'firebase/firestore'
import 'firebase/auth'

 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyADDqYjL02ytD2ooiNRVA4REz4RGHk6JVs",
   authDomain: "fire-doc.firebaseapp.com",
   databaseURL: "https://fire-doc.firebaseio.com",
   projectId: "fire-doc",
   storageBucket: "",
   messagingSenderId: "4057329257",
   appId: "1:4057329257:web:8bb3d9ee16a42b8a"
 };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase