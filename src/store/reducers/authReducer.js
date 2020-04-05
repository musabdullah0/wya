const initState = {
    authError: null
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type){
      case 'SIGNUP_ERROR':
        console.log('sign up error');
        return{
          ...state,
          authError: action.message
        }
        case 'SIGNUP_SUCCESS':
          console.log('sign up success');
          return {
           ...state, 
           authError: null
          }
      case 'LOGIN_ERROR':
        console.log('log in error');
        return {
          ...state,
          authError: action.err.message
        }
      case 'LOGIN_SUCCESS':
        console.log('login success');
        return {
         ...state, 
         authError: null
        }

      case 'SIGNOUT_SUCCESS':
          console.log('signout success');
          return state;
          
      default:
        return state
    }
  };
  
  export default authReducer;