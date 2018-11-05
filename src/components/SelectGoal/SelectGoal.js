import React, {Component} from 'react';
import { 
  Card, 
  CardImg, 
  CardDeck, 
  CardText, 
  CardBody, 
  CardTitle, 
  CardSubtitle, 
  Button, 
  Collapse,
  Alert
} from 'reactstrap';
import axios from 'axios';

class SelectGoal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      peopleGoals: false, 
      planetGoals: false,
      prosperityGoals: false,
      goal1tooltip: false,
      goals: [],
      peopleItems: ['1', '2', '3', '4', '5', '6'],
      planetItems: ['7', '9', '11', '13', '14', '15'],
      prosperityItems: ['8', '10', '12', '16', '17'],
      selectedGoals: [],
      loadingData: true
    };
  }

  togglePeopleGoals = () => {
    this.setState({peopleGoals: !this.state.peopleGoals});
  }

  togglePlanetGoals = () => {
    this.setState({planetGoals: !this.state.planetGoals});
  }

  toggleProsperityGoals = () => {
    this.setState({prosperityGoals: !this.state.prosperityGoals});
  }

  onClick = (event) => {
    let goal_id = event.target.name;
    this.setState(prevState => {
      if(!this.state.selectedGoals.includes(goal_id)) {
        return {selectedGoals: [...prevState.selectedGoals, goal_id]};
      }else {
        let newSelected = prevState.selectedGoals.filter((item) => {
          if(item === goal_id) {
            return false;
          }
          return true;
        });
        return {selectedGoals: newSelected}
      }
    });
    console.log(this.state.selectedGoals);
  }

  componentWillMount() {
    axios.get('https://hidden-reef-87726.herokuapp.com/goals/all').then(
      response => {
        this.setState({
          goals: response.data,
          loadingData: false
        });  
      }
    )
  }

  render() {
    return(
      <div className='container'>
        <a href='/'>Logout</a>
        <br/>
        <a href='/survey'>Proceed to survey</a>
        <br/>
        <br/>
        <h3>Select Goals</h3>
        <h4>Selected Goals: {this.state.selectedGoals.sort().map((item, i) => {return item + " "})}</h4>
        {this.state.loadingData ? <Alert color="info"> Loading data, please wait ... </Alert> : <div><Button color='info' name='peopleGoals' onClick={this.togglePeopleGoals} style={{ marginBottom: '1rem' }}>{this.state.peopleGoals? 'Hide' : 'Show'} People Goals</Button>
        <Collapse isOpen={this.state.peopleGoals}>
          <CardDeck>
          {this.state.goals.map((goal, i) => {
            if(this.state.peopleItems.includes(goal.goal_id) && goal.subgoal_id === '0') {
              return(
                <Card className='clickable' id={`goal${goal.goal_id}`}>
                  <CardImg top src={require(`../../assets/Images/Goal${goal.goal_id}.png`)} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Goal {goal.goal_id}</CardTitle>
                    {/*<CardSubtitle>TEXT</CardSubtitle>*/}
                    {/* <br /> */}
                    {/*<CardText>{goal.body}</CardText>*/}
                    <Button onClick={this.onClick} name={goal.goal_id}>{this.state.selectedGoals.includes(goal.goal_id) ? "Unselect" : "Select" } </Button>
                  </CardBody>
                </Card>
              );
            }
            return false;
          })}
          </CardDeck>
        </Collapse>
        <br />
        <Button color='success' name='planetGoals' onClick={this.togglePlanetGoals} style={{ marginBottom: '1rem' }}>{this.state.planetGoals? 'Hide' : 'Show'} Planet Goals</Button>
        <Collapse isOpen={this.state.planetGoals}>
          <CardDeck>
          {this.state.goals.map((goal, i) => {
            if(this.state.planetItems.includes(goal.goal_id) && goal.subgoal_id === '0') {
              return(
                <Card className='clickable' id={`goal${goal.goal_id}`}>
                  <CardImg top src={require(`../../assets/Images/Goal${goal.goal_id}.png`)} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Goal {goal.goal_id}</CardTitle>
                    {/*<CardSubtitle>TEXT</CardSubtitle>*/}
                    {/* <br /> */}
                    {/*<CardText>{goal.body}</CardText>*/}
                    <Button onClick={this.onClick} name={goal.goal_id}>{this.state.selectedGoals.includes(goal.goal_id) ? "Unselect" : "Select" } </Button>
                  </CardBody>
                </Card>
              );
            }
            return false;
          })}
          </CardDeck>
        </Collapse>
        <br />
        <Button color='warning' name='prosperityGoals' onClick={this.toggleProsperityGoals} style={{ marginBottom: '1rem' }}>{this.state.prosperityGoals? 'Hide' : 'Show'} Prosperity Goals</Button>
        <Collapse isOpen={this.state.prosperityGoals}>
          <CardDeck>
          {this.state.goals.map((goal, i) => {
            if(this.state.prosperityItems.includes(goal.goal_id) && goal.subgoal_id === '0') {
              return(
                <Card className='clickable' id={`goal${goal.goal_id}`}>
                  <CardImg top src={require(`../../assets/Images/Goal${goal.goal_id}.png`)} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Goal {goal.goal_id}</CardTitle>
                    {/*<CardSubtitle>TEXT</CardSubtitle>*/}
                    {/* <br /> */}
                    {/*<CardText>{goal.body}</CardText>*/}
                    <Button onClick={this.onClick} name={goal.goal_id}>{this.state.selectedGoals.includes(goal.goal_id) ? "Unselect" : "Select" } </Button>
                  </CardBody>
                </Card>
              );
            }
            return false;
          })}
          </CardDeck>
        </Collapse></div>}
      </div>
    );
  }
}

export default SelectGoal;