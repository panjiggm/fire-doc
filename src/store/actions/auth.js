import firebase from '../../config/fbConfig'

export const signIn = credentials => {
   return (dispatch, getState) => {
      
      firebase.auth().signInWithEmailAndPassword(
         credentials.email,
         credentials.password
      ).then(() => {
         dispatch({ type: 'LOGIN_SUCCESS' })
      }).catch(err => {
         dispatch({ type: 'LOGIN_ERROR', err })
      })

   }
}

export const signOut = () => {
   return (dispatch, getState) => {
      firebase.auth().signOut().then(() => {
         dispatch({ type: 'SIGNOUT_SUCCESS' })
      })
   }
}

export const signUp = newUser => {
   return (dispatch, getState, { getFirestore }) => {
      const firestore = getFirestore()

      firebase.auth().createUserWithEmailAndPassword(
         newUser.email,
         newUser.password
      ).then(response => {
         return firestore.collection('user').doc(response.user.uid).set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: `${newUser.firstName[0]}${newUser.lastName[0]}`
         })
      }).then(() => {
         dispatch({ type: 'SIGNUP_SUCCESS' })
      }).catch(err => dispatch({ type: 'SIGNUP_ERROR', err }))
   }
}