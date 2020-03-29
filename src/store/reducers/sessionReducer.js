const initState = {
    sessions: [
        { 'id': '1', 'subject': 'computer science', 'latitude': '30.577485', 'longitude': '-97.652840' },
        { 'id': '2', 'subject': 'stats', 'latitude': '30.579028', 'longitude': '-97.656702' },
        { 'id': '3', 'subject': 'architecture', 'latitude': '30.581472', 'longitude': '-97.656919' }
    ]
}

const sessionReducer = (state = initState, action) => {
    return state
}

export default sessionReducer;