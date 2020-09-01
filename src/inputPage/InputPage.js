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
                <a
                    class="f6 link ph3 pv2 mb2 dib white bg-mid-gray"
                    href="#0"
                    >
                        Submit
                </a>
            )
        }

        for(let question of questions){
            if(!question.text.trim().length || question.correctAnswer === null || question.answers.length < 2){
                return (
                    <a
                        class="f6 link ph3 pv2 mb2 dib white bg-mid-gray"
                        href="#0"
                        >
                            Submit
                    </a>
                )
            }

            for(let answer of question.answers){
                if(!answer.text.trim().length){
                    return (
                        <a
                            class="f6 link ph3 pv2 mb2 dib white bg-mid-gray"
                            href="#0"
                            >
                                Submit
                        </a>
                    )
                }
            }
        }

        return (
            <Link to="/quiz" className="lh-copy mt3">
                <a
                    class="f6 link dim ph3 pv2 mb2 dib white bg-black"
                    href="#0"
                    >
                        Submit
                </a>
            </Link>
        )
   }

    render(){
        console.log(this.props.questions);
        return (
            <div className="center-hor">
                <div>
                    <QuestionList />
                </div>
                <a 
                    onClick={this.addQuestion}
                    className="f6 link dim ba bw1 ph3 pv2 mb2 dib black"
                    href="#0"
                    >
                        Add Question</a>
                {this.validate()}
            </div>
            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPage);