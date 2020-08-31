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

const showIfCorrect = (question, answer) => {
    if(question.correctAnswer === answer.id){
        // return (
        //     <label className="bg-green">  Correct Answer</label>
        // )
        return "input-reset ba b--black-20 pa2 mb2 db w-70 h2 bg-light-green"
    }
    else return "input-reset ba b--black-20 pa2 mb2 db w-70 h2";
}

const AnswerList = ({question, onSetCorrectAnswer, onUpdateAnswer, onDeleteAnswer}) => {
    return (
        question.answers.map((answer) => {
            return (
                <div className="pa2 black-80">
                    <div className="measure center-vert">
                        <input 
                            type="radio"
                            className="mh1"
                            id={answer.id.toString()}
                            name={question.id.toString()}
                            onClick={onSetCorrectAnswer(question.id, answer.id)}
                            />
                        <label 
                            htmlFor={answer.id.toString()}
                            className="f6 b db mh1">
                            Answer: 
                        </label>
                        <input
                            id="name"
                            className={showIfCorrect(question, answer)}
                            type="text"
                            value={answer.text}
                            aria-describedby="name-desc"
                            onChange={onUpdateAnswer(question.id, answer.id)}
                            />
                        <a 
                            className="f6 link dim ba ph3 pv2 mb2 dib mh1 black"
                            href="#0"
                            onClick={onDeleteAnswer(question.id, answer.id)}
                            >
                                Delete
                        </a>

                        {/* {showIfCorrect(question, answer)} */}
                    </div>
                </div>
            )
        })
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerList);