// Initial states
const initialNextID = {nextID: 0};
const initialQuestions = {}

// Reducers

export const manageNextID = (state = initialNextID, action = {}) => {
    return {...state, nextID: action.payload};
}

export const manageQuestionList = (state = initialQuestions, action = {}) => {
    switch(action.type){

        case "question/addQuestion":
            return [
                ...state,
                {
                    id: action.id,
                    text: ''
                }
            ]

        case "question/deleteQuestion":
            index = state.findIndex(elem => elem.id === action.id)
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)]

        default:
            return initialQuestions;
    }
}