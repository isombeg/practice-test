import React from 'react';
import QuestionForm from '../QuestionForm/QuestionForm';

const QuestionList = (props) => {
    
    return(
        props.questions.map(
            q => {
                return (
                    <div>
                        <QuestionForm
                            question={q}
                        />
                    </div>
                );
            }
        )
    )
}

export default QuestionList;