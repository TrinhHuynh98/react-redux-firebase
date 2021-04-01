export const addProject = (project) => {

    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstname: 'trinh',
            authorLastname: 'huynh',
            authorID: 123456,
            createAt: new Date()
        }).then(() => {
            dispatch ({type: "CREATE_PROJECT", project});
        }).catch((err) => {
            dispatch ({type: "CREATE_PROJECT_ERR", err});
        })
        
    }
};