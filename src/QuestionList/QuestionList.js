import React from 'react';
import {connect} from 'react-redux';
import QuestionForm from '../QuestionForm/QuestionForm';
import {updateQuestion, deleteQuestion} from '../StateManagement/actions';

const mapStateToProps = state => {
    return {
        questions: state.manageQuestionList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUpdateQuestion: id => event => dispatch(updateQuestion(id, event.target.value)),
        onDeleteQuestion: id => () => dispatch(deleteQuestion(id))
    }
}

const QuestionList = (props) => {
    
    return(
        props.questions.map(
            q => {
                return (
                    <div>
                        <QuestionForm
                            question={q}
                            onUpdateQuestion={props.onUpdateQuestion(q.id)}
                            onDeleteQuestion={props.onDeleteQuestion(q.id)}
                        />
                    </div>
                );
            }
        )
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);