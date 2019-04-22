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
import Dashboard from './components/ADMIN/Dashboard/Dashboard';
import ViewUsers from './components/ADMIN/ViewUsers/ViewUsers';
import ConfirmPending from './components/ADMIN/ConfirmPending/ConfirmPending';
import Query from './components/Query/Query';
import Settings from './components/Settings/Settings';
import ViewAnswers from './components/ViewAnswers/ViewAnswers';
import ViewAllAnswers from './components/ADMIN/ViewAllAnswers/ViewAllAnswers';
import GraphQuery from './components/ADMIN/Graph/Graph';

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
          <Route exact path='/query' component={Query} />
          <Route exact path='/settings' component={Settings} />
          <Route exact path='/view/answers' component={ViewAnswers} />
          <Route exact path='/admin' component={Dashboard} />
          <Route exact path='/admin/view/users' component={ViewUsers} />
          <Route exact path='/admin/view/pending' component={ConfirmPending} />
          <Route exact path='/admin/view/answers' component={ViewAllAnswers} />
          <Route exact path='/admin/graph' component={GraphQuery} />
        </Switch>
      </div>
    );
  }
}

export default App;
