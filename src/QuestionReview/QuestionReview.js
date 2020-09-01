import React from 'react';
import {connect} from 'react-redux';
import AnswerAssessment from '../AnswerAssessment/AnswerAssessment'

const mapStateToProps = state => {
    return {
        questions: state.manageQuestionList,
        responses: state.manageResponseCollection
    }
}

class QuestionReview extends React.Component {

    render(){
        const {questions, responses} = this.props;
        let respIndex = 0;
        return (
            questions.map(q => {
                if(q.id === responses[respIndex].questionID){
                    return (
                        <div className={q.correctAnswer === responses[respIndex].answerID ? "bg-washed-green" : "bg-washed-red"}>
                            <p>{q.text}</p>
                            <AnswerAssessment question={q} response={responses[respIndex++]} />
                        </div>
                    )
                }
                else return (
                    <div className="bg-washed-yellow">
                        <p>{q.text}</p>
                        <AnswerAssessment question={q} response={null} />
                    </div>
                )
            })
        )
    }
}

export default connect(mapStateToProps)(QuestionReview)