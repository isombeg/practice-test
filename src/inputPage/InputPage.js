import React from 'react';
import {connect} from 'react-redux';
import QuestionList from '../QuestionList/QuestionList'
import {incrementID, addQuestion} from '../actions';

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
        console.log('questions', this.props.questions);
   }

    render(){
        const {questions} = this.props;
        
        return (
            <div>
                <div>
                    <QuestionList
                        questions={questions}
                    />
                </div>
                <div className="lh-copy mt3">
                    <button onClick={this.addQuestion} href="#0" className="f6 link dim black db pointer">Add Question</button>
                </div>
            </div>
            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputPage);

 // constructor(){
    //     super();
    //     this.state = {
    //         counter: 0,
    //         questions : []
    //     }
    // }

    // addQuestion = () => {
    //     this.setState({
    //         questions: [
    //             ...this.state.questions,
    //             {
    //                 question: "",
    //                 answers: ['', ''],
    //                 id: this.state.counter.toString()
    //             }
    //         ]
    //     })
    //     this.setState({counter: this.state.counter+1});
    // }

    // addAnswer = (id) => () => {
    //     const questionIndex = this.state.questions.findIndex(element => element.id === id);
    //     let newArray = [...this.state.questions];
    //     newArray[questionIndex].answers.push('')
    //     this.setState({questions: newArray});
    //     console.log(this.state.questions);
    // }

    // deleteQuestion = key => () => {
    //     let newArray = this.state.questions.filter(question => question.id !== key);
    //     this.setState({questions: newArray});
    // }

    // deleteAnswer = (key, index) => () => {
    //     const questionIndex = this.state.questions.findIndex(element => element.id === key);
    //     let newArray = [...this.state.questions];
    //     newArray[questionIndex].answers.splice(index, 1);
    //     this.setState({questions: newArray});
    // }

    // onQuestionUpdate = id => event => {
    //     const questionIndex = this.state.questions.findIndex(element => element.id === id);
    //     let newArray = [...this.state.questions];
    //     newArray[questionIndex].question = event.target.value;
    //     this.setState({questions: newArray});
    //     console.log(this.state.questions);
    // }

    // onAnswerUpdate = (id, index) => event => {
    //     const questionIndex = this.state.questions.findIndex(element => element.id === id);
    //     let newArray = [...this.state.questions];
    //     newArray[questionIndex].answers[index] = event.target.value;
    //     this.setState({questions: newArray});
    //     console.log(this.state.questions);
    // }