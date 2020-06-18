import React from 'react';
import QuestionForm from '../QuestionForm/QuestionForm';

const QuestionList = ({questions, onQuestionUpdate, onAnswerUpdate, addAnswer}) => {
    
    return(
        questions.map(
            q => {
                return (<div key={q.id.toString()}>
                    <QuestionForm
                        id={q.id.toString()}
                        question={q}
                        onQuestionUpdate={onQuestionUpdate}
                        onAnswerUpdate={onAnswerUpdate}
                        addAnswer={addAnswer}
                    />
                    </div>);
            }
        )
    )
}

export default QuestionList;