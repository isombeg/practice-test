import React from 'react';
import {connect} from 'react-redux';
import {setCorrectAnswer, updateAnswer, deleteAnswer} from '../StateManagement/actions';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetCorrectAnswer: (questionID, answerID) => () => dispatch(setCorrectAnswer(questionID, answerID)),
        onUpdateAnswer: (questionID, answerID) => (event) => dispatch(updateAnswer(questionID, answerID, event.target.value)),
        onDeleteAnswer: (questionID, answerID) => () => dispatch(deleteAnswer(questionID, answerID))
    }
}

const AnswerList = ({question, onSetCorrectAnswer, onUpdateAnswer, onDeleteAnswer}) => {
    return (
        question.answers.map((answer) => {
            return (
                <div className="pa4 black-80">
                    <div className="measure centre">
                        <label htmlFor="name" className="f6 b db mb2">Answer: </label>
                        <input
                            id="name"
                            className="input-reset ba b--black-20 pa2 mb2 db w-70"
                            type="text"
                            value={answer.text}
                            aria-describedby="name-desc"
                            onChange={onUpdateAnswer(question.id, answer.id)}
                        />
                        <button 
                            className='w-30 grow f4 link ph3 pv2 dib'
                            onClick={onSetCorrectAnswer(question.id, answer.id)}
                            >
                                Correct Answer
                        </button>
                        <button 
                            className='w-30 grow f4 link ph3 pv2 dib'
                            onClick={onDeleteAnswer(question.id, answer.id)}
                            >
                                Delete
                        </button>
                    </div>
                </div>
            )
        })
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerList);