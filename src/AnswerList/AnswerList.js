import React from 'react';
import {connect} from 'react-redux';
import {updateAnswer, deleteAnswer} from '../actions';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateAnswer: (questionID, answerID) => (event) => dispatch(updateAnswer(questionID, answerID, event.target.value)),
        onDeleteAnswer: (questionID, answerID) => () => dispatch(deleteAnswer(questionID, answerID))
    }
}

const AnswerList = ({question, onUpdateAnswer, onDeleteAnswer}) => {
    return (
        question.answers.map((answer) => {
            return (
                <div class="pa4 black-80">
                    <div class="measure centre">
                        <label htmlFor="name" class="f6 b db mb2">Answer: </label>
                        <input
                            id="name"
                            class="input-reset ba b--black-20 pa2 mb2 db w-70"
                            type="text"
                            value={answer.text}
                            aria-describedby="name-desc"
                            onChange={onUpdateAnswer(question.id, answer.id)}
                        />
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