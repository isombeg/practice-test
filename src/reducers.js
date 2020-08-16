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
    
    switch(action.type){

        case "question/addQuestion":
            return [
                ...state,
                action.question
            ]

        case "question/updateQuestion":
            return state.map((question) => {
                if (question.id !== action.id) {
                  return question
                }
            
                return {
                  ...question,
                  text: action.payload
                }
            })

        case "question/deleteQuestion":
            const delIndex = state.findIndex(elem => elem.id === action.id)
            return [...state.slice(0, delIndex), ...state.slice(delIndex + 1)]
        
        // case "answer/addAnswer":
        //     return state.map((question) => {
        //         if (question.id !== action.questionID) {
        //           return question
        //         }
            
        //         return {
        //           ...question,
        //           answers: [...answers, action.answer]
        //         }
        //     })

        default:
            return state;
    }
}