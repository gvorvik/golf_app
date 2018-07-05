import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Route,
  Redirect, 
  Switch,
} from 'react-router-dom';
import NewCourse from '../NewCourse/NewCourse';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';


const App = () => {
  return <Router>
    <div className="App">
      <NavBar />
      <Switch>
      <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={HomePage}
        />
        <Route
          path="/newcourse"
          component={NewCourse}
        />
      </Switch>
    </div>
  </Router>
}

export default App;
