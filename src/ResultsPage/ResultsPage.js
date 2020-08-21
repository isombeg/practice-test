import React from 'react';
import {connect} from 'react-redux';


const mapStateToProps = state => {
    return {
        questions: state.manageQuestionList,
        responses: state.manageResponseCollection
    }
}

const ResultsPage = (props) => {
    return
}

export default connect(mapStateToProps)(ResultsPage)