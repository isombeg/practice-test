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
                <Link to="/quiz" className="lh-copy mt3">
                    <button href="#0" className="f6 link dim black db pointer">Submit</button>
                </Link>
            </div>
            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPage);