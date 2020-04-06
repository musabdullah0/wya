import firebase from 'firebase'
import firestore from 'firestore'

export const signIn = (credentials) => {
  return ( dispatch, getState) => {
    
    //const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS'})
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err})
    })

  }
}

export const signUp = (credentials) => {
  return(dispatch, getState) =>{
    firebase.auth().createUserWithEmailAndPassword(
      credentials.email, credentials.password
    ).then((resp) => {
      return firestore.collection('users').doc(resp.user.uid).set({
        name: credentials.firstName + " "+ credentials.lastName
      })
    }).then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS'})
    })
    .catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err})
    })
  }
}

export const signOut = () => {
    return (dispatch, getState) => {
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }