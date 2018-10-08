import React, { Component } from 'react';
import './App.css';
import FrontPage from './Components/FrontPage/FrontPage';
import {Route, Switch} from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import SelectGoal from './Components/SelectGoal/SelectGoal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={FrontPage} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/home' component={SelectGoal} />
        </Switch>
      </div>
    );
  }
}

export default App;
