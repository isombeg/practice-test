// Initial states
const initialNextID = {nextID: 0};
const questions = [];

// Reducers

export const manageNextID = (state = initialNextID, action = {}) => {
    switch(action.type){
        case "id/increment":
            return {...state, nextID: state.nextID + 1};
        default:
            return state;
    }
}

export const manageQuestionList = (state = questions, action = {}) => {
    
    console.log('action:', action);
    switch(action.type){

        case "question/addQuestion":
            return [
                ...state,
                action.question
            ]

        case "question/updateQuestion":
            const uptIndex = state.findIndex(elem => elem.id === action.id)
            return [...state.slice(0, uptIndex), action.item, ...state.slice(uptIndex + 1)]
        
        case "question/deleteQuestion":
            const delIndex = state.findIndex(elem => elem.id === action.id)
            return [...state.slice(0, delIndex), ...state.slice(delIndex + 1)]

        default:
            return state;
    }
}