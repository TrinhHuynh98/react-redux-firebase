const initState = {
    projects: [
        {id: '1', title: 'title 1', content: 'content1'},
        {id: '2', title: 'title 2', content: 'content2'},
        {id: '3', title: 'title 3', content: 'content3'},
    ]
}
const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log("create project", action.project);
            return state;
        case 'CREATE_PROJECT_ERR':
            console.log("create project error", action.err);
            return state;
        default:
            return state;
    }
}
export default projectReducer;