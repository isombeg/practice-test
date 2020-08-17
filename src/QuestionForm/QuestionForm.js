import React from 'react';
import {connect} from 'react-redux';
import AnswerList from '../AnswerList/AnswerList';
import {incrementID, addAnswer} from '../actions';

const mapStateToProps = state => {
    return {
        nextID: state.manageNextID.nextID,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementID: () => dispatch(incrementID()),
        onAddAnswer: (questionID, answerID) => dispatch(addAnswer(questionID, answerID))
    }
}

class QuestionForm extends React.Component{
    
    addAnswer = () => {
        this.props.onAddAnswer(this.props.question.id, this.props.nextID);
        this.props.onIncrementID();
   }
    
    render(){
        return (
            <div className="pa4 black-80">
                <div className="measure">
                    <label htmlFor="name" className="f6 b db mb2">Question: </label>
                    <input id="name"
                        className="input-reset ba b--black-20 pa2 mb2 db w-100" 
                        type="text" 
                        value={this.props.question.text}
                        aria-describedby="name-desc" 
                        onChange={this.props.onUpdateQuestion}
                    />
                </div>
                <AnswerList
                    question={this.props.question}
                    />
                <div>
                    <div className='center'>
                        <div className="lh-copy mt3 w-50">
                            <p onClick={this.addAnswer} href="#0" className="f6 link dim black db pointer">Add Answer</p>
                        </div>
                        <div className="lh-copy mt3 w-50">
                            <p onClick={this.props.onDeleteQuestion} href="#0" className="f6 link dim black db pointer">Delete Question</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);