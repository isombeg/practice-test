export const addQuestion = (id) => ({
    type: "question/addQuestion",
    question: {
        id: id,
        text: ''
    }
})

export const updateQuestion = (id, payload) => ({
    type: "question/updateQuestion",
    question: {
        id: id,
        text: payload
    }
})

export const deleteQuestion = (id) => ({
    type: "question/deleteQuestion",
    id: id
})

export const addAnswer = (questionID) => ({
    type: "answer/addAnswer",
    questionID: questionID
})

export const deleteAnswer = (questionID, answerID) => ({
    type: "answer/deleteAnswer",
    questionID: questionID,
    answerID: answerID
})

export const incrementID = () => ({
    type: "id/increment"
})

