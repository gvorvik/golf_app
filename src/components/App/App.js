import React, { Component } from 'react';
import './App.css';
import Welcome from '../Welcome/Welcome';
import NewCourse from '../NewCourse/NewCourse';
import Scorecard from '../Scorecard/Scorecard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome/>
        <NewCourse/>
        <Scorecard/>
      </div>
    );
  }
}

export default App;
