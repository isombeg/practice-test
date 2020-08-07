export const addQuestion = (id) => ({
    type: "question/addQuestion",
    id: id
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

export const incrementID = (nextID) => ({
    type: "id/increment",
    payload: nextID
})