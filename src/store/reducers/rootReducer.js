import authReducer from './authReducer'
import sessionReducer from './sessionReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    session: sessionReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;