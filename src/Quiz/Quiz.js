import React from 'react';
import {connect} from 'react-redux';
import { nextQuestion, prevQuestion } from '../StateManagement/actions';
import QuizAnswerList from '../QuizAnswerList/QuizAnswerList';

const mapStateToProps = state => {
    return {
        questions: state.manageQuestionList,
        currQuestionIndex: state.manageQuizQuestioning
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNextQuestion: () => dispatch(nextQuestion()),
        onPrevQuestion: () => dispatch(prevQuestion())
    }
}

class Quiz extends React.Component{

    render(){
        const {
            questions,
            currQuestionIndex,
            onNextQuestion,
            onPrevQuestion
        } = this.props;
        
        return (
            <div>
                <p>{questions[currQuestionIndex].text}</p>
                <QuizAnswerList question={questions[currQuestionIndex]} />
                <div className="measure centre">
                    <button onClick={onPrevQuestion}>Previous</button>
                    <button onClick={onNextQuestion}>Next</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);