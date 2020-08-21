// Initial states
const initialNextID = {nextID: 0};
const questions = [];
const initCurrQuestion = {currQuestion: 0};
const responses = [];

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

        case "question/setCorrectAnswer":
            return state.map((question) => {
                if (question.id !== action.questionID) {
                  return question
                }
            
                return {
                  ...question,
                  correctAnswer: action.answerID
                }
            })
        
        case "answer/addAnswer":
            return state.map((question) => {
                if (question.id !== action.questionID) {
                  return question
                }
            
                return {
                  ...question,
                  answers: [...question.answers, action.answer]
                }
            })

        case "answer/updateAnswer":
            return state.map((question) => {
                if (question.id !== action.questionID) {
                  return question
                }
            
                return {
                    ...question,
                    answers: question.answers.map(answer => {
                        if(answer.id !== action.answerID){
                            return answer;
                        }

                        return {
                            ...answer,
                            text: action.payload
                        }
                    })
                }
            })

        case "answer/deleteAnswer":
            return state.map((question) => {
                if (question.id !== action.questionID) {
                  return question
                }
            
                const delIndex = question.answers.findIndex(elem => elem.id === action.answerID)
                return {
                  ...question,
                  answers: [...question.answers.slice(0, delIndex), ...question.answers.slice(delIndex + 1)],
                  correctAnswer: (question.correctAnswer === action.answerID) ? null : question.correctAnswer
                }
            })

        default:
            return state;
    }
}

export const manageQuizQuestioning = (state = initCurrQuestion, action = {}) => {
    
    switch(action.type){
        case "quiz/nextQuestion":
            return {
                ...state,
                currQuestion: state.currQuestion + 1
            }

        case "quiz/prevQuestion":
            return {
                ...state,
                currQuestion: state.currQuestion - 1
            }

        default:
            return state;
    }
}

export const manageResponseCollection = (state = responses, action = {}) => {

    switch(action.type){
        case "quiz/addResponse":
        
            if(!(state.length)){
                return [...state, action.response];
            }
            
            let mid = 0, left = 0, right = state.length - 1;
            while(right > left){
                mid = Math.floor((right-left)/2);

                if(action.response.questionID === state[mid].questionID){
                    return [...state.slice(0, mid), action.response, ...state.slice(mid + 1)];
                }
                else if(action.response.questionID < state[mid].questionID){
                    right--;
                }
                else{
                    left++;
                }
            }

            if(action.response.questionID === state[left].questionID){
                return [...state.slice(0, left), action.response, ...state.slice(left + 1)];
            }
            return action.response.questionID > state[left].questionID ?
                [...state.slice(0, left + 1), action.response, ...state.slice(left + 1)] :
                [...state.slice(0, left), action.response, ...state.slice(left)];
            
        default:
            return state;
    }
}