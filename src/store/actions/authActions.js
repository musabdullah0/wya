import firebase from 'firebase'

export const signIn = (credentials) => {
  return ( dispatch, getState) => {
    
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

  const db = firebase.firestore();

  return(dispatch, getState) =>{
    firebase.auth().createUserWithEmailAndPassword(
      credentials.email, credentials.password
    ).then((resp) => {
      db.collection('users').doc(resp.user.uid).set({
        name: credentials.name,
        email: credentials.email,
        inSession: false
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