import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import QuestionList from '../QuestionList/QuestionList'
import {incrementID, addQuestion} from '../StateManagement/actions';

const mapStateToProps = state => {
    return {
        nextID: state.manageNextID.nextID,
        questions: state.manageQuestionList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementID: () => dispatch(incrementID()),
        onAddQuestion: (id) => dispatch(addQuestion(id))
    }
}

class InputPage extends React.Component{
    
   addQuestion = () => {
        this.props.onAddQuestion(this.props.nextID);
        this.props.onIncrementID();
   }

   validate = () => {
    //    To be considered valid:
    //      - must be at least 1 question
    //      - every question must have at least 2 answers
    //      - all text must be full
    //      - all questions must have a correct

        const {questions} = this.props;

        if(!questions.length){
            return (
                <button
                    href="#0"
                    className="f6 link dim black db pointer"
                    disabled
                    >
                        Submit
                </button>
            )
        }

        for(let question of questions){
            if(!question.text.trim().length || question.correctAnswer === null || question.answers.length < 2){
                return (
                    <button
                        href="#0"
                        className="f6 link dim black db pointer"
                        disabled
                        >
                            Submit
                    </button>
                )
            }

            for(let answer of question.answers){
                if(!answer.text.trim().length){
                    return (
                        <button
                            href="#0"
                            className="f6 link dim black db pointer"
                            disabled
                            >
                                Submit
                        </button>
                    )
                }
            }
        }

        return (
            <Link to="/quiz" className="lh-copy mt3">
                <button
                    href="#0"
                    className="f6 link dim black db pointer"
                    >
                        Submit
                    </button>
            </Link>
        )
   }

    render(){
        console.log(this.props.questions);
        return (
            <div>
                <div>
                    <QuestionList />
                </div>
                <div className="lh-copy mt3">
                    <button onClick={this.addQuestion} href="#0" className="f6 link dim black db pointer">Add Question</button>
                </div>
                {this.validate()}
            </div>
            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPage);