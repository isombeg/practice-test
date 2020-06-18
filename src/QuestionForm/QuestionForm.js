import React from 'react';
import AnswerList from '../AnswerList/AnswerList';

const QuestionForm = ({id, question, onQuestionUpdate, onAnswerUpdate, addAnswer}) => {
    return (
        <div className="pa4 black-80">
            <div className="measure">
                <label htmlFor="name" className="f6 b db mb2">Question: </label>
                <input id="name"
                    className="input-reset ba b--black-20 pa2 mb2 db w-100" 
                    type="text" 
                    aria-describedby="name-desc" 
                    onChange={onQuestionUpdate(id)}
                />
            </div>
            <AnswerList questionId={id} answers={question.answers} onAnswerUpdate={onAnswerUpdate}/>
            <div>
                <div className='center'>
                    <div className="lh-copy mt3 w-50">
                        <p onClick={addAnswer(id)} href="#0" className="f6 link dim black db pointer">Add Answer</p>
                    </div>
                    <div className="lh-copy mt3 w-50">
                        <p  href="#0" className="f6 link dim black db pointer">Delete Question</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuestionForm;