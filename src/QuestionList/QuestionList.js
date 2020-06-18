import React from 'react';
import QuestionForm from '../QuestionForm/QuestionForm';

const QuestionList = (props) => {
    
    return(
        props.questions.map(
            q => {
                return (<div key={q.id.toString()}>
                    <QuestionForm
                        id={q.id.toString()}
                        question={q}
                        onQuestionUpdate={props.onQuestionUpdate}
                        onAnswerUpdate={props.onAnswerUpdate}
                        addAnswer={props.addAnswer}
                        deleteQuestion={props.deleteQuestion}
                        deleteAnswer={props.deleteAnswer}
                    />
                    </div>);
            }
        )
    )
}

export default QuestionList;