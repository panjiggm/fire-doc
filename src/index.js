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
import firebase from './config/fbConfig'
import 'firebase/firestore'
import 'firebase/auth'

const store = createStore(rootReducer, compose( 
   applyMiddleware(thunk.withExtraArgument( {getFirestore} )), 
   reduxFirestore(firebase)
))

const rrfProps = {
   firebase,
   config: {
      userProfile: "user",
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
serviceWorker.unregister();