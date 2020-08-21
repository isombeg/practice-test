import React from 'react';
import {connect} from 'react-redux';
import { nextQuestion, prevQuestion } from '../StateManagement/actions';
import QuizAnswerList from '../QuizAnswerList/QuizAnswerList';

const mapStateToProps = state => {
    return {
        questions: state.manageQuestionList,
        currQuestionIndex: state.manageQuizQuestioning.currQuestion,
        responses: state.manageResponseCollection
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNextQuestion: () => dispatch(nextQuestion()),
        onPrevQuestion: () => dispatch(prevQuestion())
    }
}

class Quiz extends React.Component{
    
    constructor(){
        super();

        // this.state = {
        //     questions: [
        //         {
        //             id: 0,
        //             text: 'Question 1',
        //             answers: [
        //                 {
        //                     id: 4,
        //                     text: 'Option A'
        //                 },
        //                 {
        //                     id: 5,
        //                     text: 'Option B'
        //                 },
        //                 {
        //                     id: 6,
        //                     text: 'Option C'
        //                 }
        //             ],
        //             correctAnswer: null
        //         },
        //         {
        //             id: 1,
        //             text: 'Question 2',
        //             answers: [
        //                 {
        //                     id: 7,
        //                     text: 'Option A'
        //                 },
        //                 {
        //                     id: 8,
        //                     text: 'Option B'
        //                 }
        //             ],
        //             correctAnswer: null
        //         },
        //         {
        //             id: 2,
        //             text: 'Question 3',
        //             answers: [
        //                 {
        //                     id: 9,
        //                     text: 'Option A'
        //                 },
        //                 {
        //                     id: 10,
        //                     text: 'Option B'
        //                 },
        //                 {
        //                     id: 11,
        //                     text: 'Option C'
        //                 },
        //                 {
        //                     id: 12,
        //                     text: 'Option D'
        //                 }
        //             ],
        //             correctAnswer: null
        //         },
        //         {
        //             id: 3,
        //             text: 'Question 4',
        //             answers: [
        //                 {
        //                     id: 13,
        //                     text: 'Option A'
        //                 },
        //                 {
        //                     id: 14,
        //                     text: 'Option B'
        //                 },
        //                 {
        //                     id: 15,
        //                     text: 'Option C'
        //                 }
        //             ],
        //             correctAnswer: null
        //         }
        //     ],
        // }
    }

    renderButtons = () => {
        const {
            questions,
            currQuestionIndex,
            onNextQuestion,
            onPrevQuestion
        } = this.props;

        // const {questions} = this.state;
        
        if(currQuestionIndex > 0){
            if(currQuestionIndex + 1 < questions.length){
                return (
                    <div className="measure centre">
                        <button onClick={onPrevQuestion}>Previous</button>
                        <button onClick={onNextQuestion}>Next</button>
                    </div>
                )
            }
            else{
                return (
                    <div className="measure centre">
                        <button onClick={onPrevQuestion}>Previous</button>
                        <button>Submit</button>
                    </div>
                )
            }
        }
        else{
            return (
                <div className="measure centre">
                    <button onClick={onNextQuestion}>Next</button>
                </div>
            )
        }
    }

    renderQuestion = () => {
        const {questions, currQuestionIndex} = this.props
        return questions.length ?
            (
                <div>
                    <p>{questions[currQuestionIndex].text}</p>
                    <QuizAnswerList question={questions[currQuestionIndex]} />
                </div>
            ) :
            (<p></p>)
    }
    
    render(){
        const {
            questions,
            currQuestionIndex,
        } = this.props;

        // const {questions} = this.state;
        
        return (
            
            <div>
                {this.renderQuestion()}
                {this.renderButtons()}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);