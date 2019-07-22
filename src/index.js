import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducers/rootReducer'
import thunk from 'redux-thunk'
import { getFirestore, createFirestoreInstance, reduxFirestore } from 'redux-firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
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

const store = createStore(rootReducer, compose( 
   applyMiddleware(thunk.withExtraArgument( {getFirestore} )), 
   reduxFirestore(firebase)
))

const rrfProps = {
   firebase,
   config: {
      userProfile: "users",
      useFirestoreForProfile: true
	},
   dispatch: store.dispatch,
   createFirestoreInstance
}   

ReactDOM.render(
   <Provider store={store} > 
      <ReactReduxFirebaseProvider {...rrfProps}>
         <App />
      </ReactReduxFirebaseProvider>
   </Provider>, 
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
