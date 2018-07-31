import React from 'react';
import '../../styles/styles.css';
import {
  BrowserRouter as Router, 
  Route,
  Redirect, 
  Switch,
} from 'react-router-dom';
import MyCourses from '../MyCourses/MyCourses';
import HomePage from '../HomePage/HomePage';
import Login from '../Login/Login';
import Register from '../Login/Register/Register';
import NewScore from '../NewScore/NewScore';
import NewCourse from '../NewCourse/NewCourseTemplate';


const App = () => {
  return <Router>
    <div className="App">
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
          path="/courses"
          component={MyCourses}
        />
        <Route
          path="/newscore"
          component={NewScore}
        />
        <Route
          path="/newcourse"
          component={NewCourse}
        />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  </Router>
}

export default App;
