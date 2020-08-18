export const incrementID = () => ({
    type: "id/increment"
})

export const addQuestion = (id) => ({
    type: "question/addQuestion",
    question: {
        id: id,
        text: '',
        answers: [],
        correctAnswer: null
    }
})

export const updateQuestion = (id, payload) => ({
    type: "question/updateQuestion",
    id: id,
    payload: payload,
})

export const deleteQuestion = (id) => ({
    type: "question/deleteQuestion",
    id: id
})

export const setCorrectAnswer = (questionID, answerID) => ({
    type: "question/setCorrectAnswer",
    questionID: questionID,
    answerID: answerID
})

export const addAnswer = (questionID, answerID) => ({
    type: "answer/addAnswer",
    questionID: questionID,
    answer: {
        id: answerID,
        text: ''
    }
})

export const updateAnswer = (questionID, answerID, payload) => ({
    type: "answer/updateAnswer",
    questionID: questionID,
    answerID: answerID,
    payload: payload
})

export const deleteAnswer = (questionID, answerID) => ({
    type: "answer/deleteAnswer",
    questionID: questionID,
    answerID: answerID
})

export const nextQuestion = () => ({
    type: "quiz/nextQuestion"
})

export const prevQuestion = () => ({
    type: "quiz/prevQuestion"
})

export const addResponse = (questionID, answerID) => ({
    type: "quiz/addResponse",
    reponse: {
        questionID: questionID,
        answerID: answerID
    }
})