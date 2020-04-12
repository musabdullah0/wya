const sessionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CREATE_SESSION_SUCCESS':
            console.log('create session success')
            return {
                ...state,
                sessionError: null
            }
        case 'CREATE_SESSION_ERROR':
            console.log('create session error', action.err)
            return {
                ...state,
                sessionError: action.message
            }
        default:
            return state
    }
}

export default sessionReducer;