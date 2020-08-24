import React from 'react';
import {connect} from 'react-redux';


const mapStateToProps = state => {
    return {
        questions: state.manageQuestionList,
        responses: state.manageResponseCollection
    }
}

class ResultsPage extends React.Component{

    computeResults = () => {
        const {questions, responses} = this.props;
        let correctResps = 0, resp_ind = 0;

        for(let question of questions){
            console.log('question:', question)
            console.log('response:', responses[resp_ind])
            if(question.id !== responses[resp_ind].questionID)
                break;
            else if(question.correctAnswer === responses[resp_ind].answerID){
                correctResps++;
            }
            resp_ind++;
        }

        return correctResps;
    }

    renderUnanswered = () => {
        const {questions, responses} = this.props;
        if(responses.length < questions.length){
            return (
                <p>You didn't answer {questions.length - responses.length} question{
                    (questions.length - responses.length) > 1 ? "s" : ''
                }.</p>
            )
        }
    }

    render(){
        const {questions} = this.props;
        const correctAnswers = this.computeResults();
        
        return (
            <div>
                <p>You answered <em>{correctAnswers}</em> of <em>{questions.length}</em> correctly.</p>
                {this.renderUnanswered()}
                <p>Your score: <em>{100*(correctAnswers/questions.length)} %</em></p>
            </div>
        )
    }
}

export default connect(mapStateToProps)(ResultsPage)