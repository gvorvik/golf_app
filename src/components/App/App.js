import React from 'react';
import '../../styles/styles.css';
import {
  BrowserRouter as Router, 
  Route,
  Redirect, 
  Switch,
} from 'react-router-dom';
import NewCourse from '../NewCourse/NewCourse';
import HomePage from '../HomePage/HomePage';
import NavBar from '../NavBar/NavBar';
import Login from '../Login/Login';
import Register from '../Login/Register/Register';
import NewScore from '../NewScore/NewScore';


const App = () => {
  return <Router>
    <div className="App">
      <NavBar />
      <Switch>
      <Redirect exact from="/" to="/login"/>
        <Route
          path="/login"
          component={Login}
        />
        <Route
          path="/register"
          component={Register}
        />
        <Route
          path="/home"
          component={HomePage}
        />
        <Route
          path="/newcourse"
          component={NewCourse}
        />
        <Route
          path="/newscore"
          component={NewScore}
        />
      </Switch>
    </div>
  </Router>
}

export default App;
