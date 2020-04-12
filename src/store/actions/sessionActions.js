export const createSession = (session) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        // const authorId = getState().firebase.auth.uid;
        firestore.collection('sessions').add({
            ...session,
            // authorFirstName: profile.firstName,
            // authorLastName: profile.lastName,
            // authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_SESSION_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'CREATE_SESSION_ERROR' }, err);
        });
    }
};