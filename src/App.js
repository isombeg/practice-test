import React from 'react';
import {connect} from 'react-redux'
import InputPage from './inputPage/InputPage'
import './App.css';

import {
  manageNextID,
  manageQuestionList
} from './reducers';

class App extends React.Component{
  
  render(){
    return (
      <InputPage />
    );
  }
}

export default App;
