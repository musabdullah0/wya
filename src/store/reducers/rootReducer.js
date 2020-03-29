import authReducer from './authReducer'
import sessionReducer from './sessionReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    session: sessionReducer
})

export default rootReducer;