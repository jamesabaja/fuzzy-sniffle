import React, { Component } from 'react';
import './App.css';
import FrontPage from './components/FrontPage/FrontPage';
import {Route, Switch} from 'react-router-dom';
import Signup from './components/Signup/Signup';
import SelectGoal from './components/SelectGoal/SelectGoal';
import Login from './components/Login/Login';
import Survey from './components/Survey/Survey';
import Review from './components/Review/Review';
import AddGoals from './components/AddGoals/AddGoals';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={FrontPage} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/home' component={SelectGoal} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/survey' component={Survey} />
          <Route exact path='/review' component={Review} />
          <Route exact path='/add' component={AddGoals} />
        </Switch>
      </div>
    );
  }
}

export default App;
