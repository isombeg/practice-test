import React from 'react';
import InputPage from './inputPage/InputPage'
import Quiz from './Quiz/Quiz';
import './App.css';
import {
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component{
  
  render(){
    return (
      <Switch>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/">
          <InputPage />
        </Route>
      </Switch>
    );
  }
}

export default App;
