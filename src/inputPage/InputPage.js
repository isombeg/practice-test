import React from 'react';
import QuestionList from '../QuestionList/QuestionList'

class InputPage extends React.Component{
    constructor(){
        super();
        this.state = {
            counter: 0,
            questions : []
        }
    }

    addQuestion = () => {
        this.setState({
            questions: [
                ...this.state.questions,
                {
                    question: "",
                    answers: ['', ''],
                    id: this.state.counter.toString()
                }
            ]
        })
        this.setState({counter: this.state.counter+1});
    }

    addAnswer = (id) => event => {
        const questionIndex = this.state.questions.findIndex(element => element.id === id);
        let newArray = [...this.state.questions];
        newArray[questionIndex].answers.push('')
        this.setState({questions: newArray});
        console.log(this.state.questions);
    }

    deleteQuestion = key => {

    }

    deleteAnswer = (key, id) => {
        
    }

    onQuestionUpdate = id => event => {
        const questionIndex = this.state.questions.findIndex(element => element.id === id);
        let newArray = [...this.state.questions];
        newArray[questionIndex].question = event.target.value;
        this.setState({questions: newArray});
        console.log(this.state.questions);
    }

    onAnswerUpdate = (id, index) => event => {
        const questionIndex = this.state.questions.findIndex(element => element.id === id);
        let newArray = [...this.state.questions];
        newArray[questionIndex].answers[index] = event.target.value;
        this.setState({questions: newArray});
        console.log(this.state.questions);
    }

    render(){
        return (
            <div>
                <div>
                    <QuestionList
                        questions={this.state.questions}
                        addAnswer={this.addAnswer}
                        onQuestionUpdate={this.onQuestionUpdate}
                        onAnswerUpdate={this.onAnswerUpdate}
                    />
                </div>
                <div className="lh-copy mt3">
                    <button onClick={this.addQuestion} href="#0" className="f6 link dim black db pointer">Add Question</button>
                </div>
            </div>
            
        );
    }
}

export default InputPage;