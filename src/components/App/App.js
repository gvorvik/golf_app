import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import NewCourse from '../NewCourse/NewCourse';


const App = () => {
  return <Router>
    <div className="App">
      <Switch>
        <Route
          path="/newcourse"
          component={NewCourse}
        />
      </Switch>
    </div>
  </Router>
}

export default App;
