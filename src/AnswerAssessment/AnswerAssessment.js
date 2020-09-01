import React from 'react';

const AnswerAssessment = (props) => {
    const {question, response} = props;

    if(response === null || question.correctAnswer === response.answerID){
        return (
            <ul className="list pl0">
                {question.answers.map(answer => {
                    return (
                        <li className={answer.id === question.correctAnswer ? "bg-light-green" : ""}>
                            {answer.text}
                        </li>
                    )
                })}
            </ul>
        )
    }

    else{
        return (
            <ul className="list pl0">
                {question.answers.map(answer => {
                    if(answer.id === question.correctAnswer) return (
                        <li className="bg-light-green">{answer.text}</li>
                    )
                    else if(answer.id === response.answerID) return (
                        <li className="bg-red">{answer.text}</li>
                    )
                    else return (
                        <li>{answer.text}</li>
                    )
                })}
            </ul>
        )
    }

}

export default AnswerAssessment;