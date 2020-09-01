import React from 'react';
import {connect} from 'react-redux';
import {addResponse} from '../StateManagement/actions';

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddResponse: (questionID, answerID) => () => dispatch(addResponse(questionID, answerID))
    }
}

const QuizAnswerList = (props) => {
    const {question, onAddResponse} = props;
    return (
        question.answers.map((answer) => {
            return (
                <div  className="ma2">
                    <input 
                        type="radio" 
                        id={answer.id.toString()}
                        name={question.id.toString()}
                        onClick={onAddResponse(question.id, answer.id)}
                        />
                    <label className="pa2 f3 fw3 lh-copy" for={answer.id.toString()}>
                        {answer.text}
                    </label><br />
                </div>
            )
        })
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizAnswerList);