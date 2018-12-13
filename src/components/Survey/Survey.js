import React, {Component} from 'react';
//eslint-disable-next-line
import {ListGroup, ListGroupItem, Button, Form, Input, Label, FormGroup, Navbar, NavbarBrand, NavbarToggler, Collapse, Alert, Col, Row, Nav, NavItem, NavLink} from 'reactstrap';
import moment from 'moment';
import axios from 'axios';
import {connect} from 'react-redux';
import MenuBar from '../MenuBar/MenuBar';
import Tabs from '../Tabs/Tabs';
import Slider, { Range } from 'rc-slider';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';

let colorScheme = {
  '1': '#EB1C2D',
  '2': '#D3A029',
  '3': '#4CA146',
  '4': '#C7212F',
  '5': '#EF402D',
  '6': '#27BFE6',
  '7': '#FBC412',
  '8': '#A31C44',
  '9': '#F36D25',
  '10': '#DD1367',
  '11': '#F89D2A',
  '12': '#CF8D2A',
  '13': '#48773E',
  '14': '#1F97D4',
  '15': '#3EB049',
  '16': '#136A9F',
  '17': '#183668'
}

//let selected = ["1", "2", "6"];
class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starttime: null,
      endtime: null,
      elapsedtime: null,
      subgoals: [],
      loadingSubgoals: true,
      isOpen: false,
      activeSubgoal: 0,
      pairings: [],
      scoreValue: 0,
      comment: '',
      isEmpty: false
    }
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  setStartTime = () => {
    this.setState({starttime: moment().format('h:mm:ss a')});
  }

  setEndTime = () => {
    let endtime = moment().format('h:mm:ss a');
    let starttime = moment(this.state.starttime, 'h:mm:ss a');
    this.setState({endtime: endtime, elapsedtime: moment().diff(starttime)/1000});
  }

  submitAnswer = (goal1, sub1, goal2, sub2) => {
    let target1_goal, target1_subgoal, target2_goal, target2_subgoal;
    let endtime = moment().format('h:mm:ss a');
    let starttime = moment(this.state.starttime, 'h:mm:ss a');
    this.setState({endtime: endtime, elapsedtime: moment().diff(starttime)/1000}, () => {
      if(parseInt(goal1, 10) < parseInt(goal2, 10)) {
        target1_goal = goal1;
        target1_subgoal = sub1;
        target2_goal = goal2;
        target2_subgoal = sub2;
      }else {
        if(parseInt(goal1, 10) === parseInt(goal2, 10)) {
          target1_goal = goal1;
          target2_goal = goal2;
          if(parseInt(sub1, 10) <= parseInt(sub2, 10)) {
            target1_subgoal = sub1;
            target2_subgoal = sub2;
          }else {
            target1_subgoal = sub2;
            target2_subgoal = sub1;
          }
        }else {
          target1_goal = goal2;
          target1_subgoal = sub2;
          target2_goal = goal1;
          target2_subgoal = sub1;
        }
      }
      if(this.state.scoreValue < 0 && this.state.comment === '') {
        this.setState({isEmpty: true});
      }else {
        console.log({
          'target1_goal': target1_goal,
          'target1_subgoal': target1_subgoal,
          'target2_goal': target2_goal,
          'target2_subgoal': target2_subgoal,
          'score': parseInt(this.state.scoreValue, 0),
          'reason': this.state.comment,
          'username': localStorage.getItem('username'),
          'finished': false,
          'time_answered': parseInt(this.state.elapsedtime, 10)
        });
        axios.post('https://hidden-reef-87726.herokuapp.com/survey/answer', [{
          'target1_goal': target1_goal,
          'target1_subgoal': target1_subgoal,
          'target2_goal': target2_goal,
          'target2_subgoal': target2_subgoal,
          'score': parseInt(this.state.scoreValue, 0),
          'reason': this.state.comment,
          'username': localStorage.getItem('username'),
          'finished': false,
          'time_answered': parseInt(this.state.elapsedtime, 10)
        }]).then(response => {
          console.log({
            'target1_goal': target1_goal,
            'target1_subgoal': target1_subgoal,
            'target2_goal': target2_goal,
            'target2_subgoal': target2_subgoal,
            'score': parseInt(this.state.scoreValue, 0),
            'reason': this.state.comment,
            'username': localStorage.getItem('username'),
            'finished': false,
            'time_answered': parseInt(this.state.elapsedtime, 10)
          })
          console.log(response);
          this.setState({comment: ''});
          if(response.status === 200) {
            this.nextSubgoal();
          }
        });
      }
    });
  }

  componentWillMount() {
    axios.post('https://hidden-reef-87726.herokuapp.com/users/goals', [{
      user_id: localStorage.getItem('user_id')
    }])
    .then(response => {
      let selected = response.data;
      selected.map((item, i) => {
        axios.post('https://hidden-reef-87726.herokuapp.com/goals/sub', [{
          goal_id: item.toString()
        }])
        .then(response => {
          this.setState({loadingSubgoals: false});
          response.data.filter((item) => {
            if(item.subgoal_id === '0' || item.subgoal_id === 'title') {
              return false;
            }else {
              this.setState(prevState => {
                return {subgoals: [...prevState.subgoals, item]}; 
              }); 
            }
            return true;
          });
        });
        return true;
      });
    });
  }

  colorStyle = (i) => {
    let color = colorScheme[i];
    return {
      color: color, 
    }
  }

  nextSubgoal = () => {
    this.setState(prevState => {
      let randomIndex = Math.floor(Math.random() * Math.floor(this.state.pairings.length));
      return {activeSubgoal: randomIndex}
    });
    this.setStartTime();
  }

  sliderChange = (value) => {
    this.setState({scoreValue: value});
  }

  onDismiss = () => {
    this.setState({ isEmpty: false });
  }

  generateSurvey = () => {
    for(let i = 0; i < this.state.subgoals.length; i++) {
      for(let j = 0; j < this.state.subgoals.length; j++) {
        this.setState(prevState => {
          return {pairings: [...prevState.pairings, [this.state.subgoals[i], this.state.subgoals[j]]],
          activeSubgoal: Math.floor(Math.random() * Math.floor(prevState.pairings.length))}
        });
      }
    }
    this.setStartTime();
  }

  onChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({[id]: value});
  }

  render() {
    return(
      <div className='container'>
        <MenuBar />
        <br />
        <Tabs active={'survey'}/>
        <br/>
        <h4>Survey Module</h4>
        { this.state.loadingSubgoals ? <Alert>Loading subgoals</Alert> : ''}
        {/* <Button onClick={this.setStartTime} color='info'>Start Time</Button>
        <p>Start Time: {this.state.starttime === null ? '' : this.state.starttime}</p> */}
        <Button onClick={this.generateSurvey}>Generate Survey</Button>
        <br/>
        <br/>
        <Alert color='danger' isOpen={this.state.isEmpty} toggle={this.onDismiss}>
          Key Interaction field is required as you have entered a negative interaction score for the targets.
        </Alert>
        <ListGroup>
          {/*this.state.subgoals.map((item, i) => {
            return(
              <ListGroupItem id={i}>
                <Row>
                  <Col>
                  <span style={this.colorStyle(item.goal_id)}>
                  <h4>{item.goal_id}.{item.subgoal_id}</h4> 
                  {item.body}
                  </span>
                  </Col>
                  <Col>
                  <span style={this.colorStyle(item.goal_id)}>
                  <h4>{item.goal_id}.{item.subgoal_id}</h4> 
                  {item.body}
                  </span>
                  </Col>
                </Row>
              </ListGroupItem>
              
            );
          })*/}
          { this.state.pairings.length > 0 &&
            <ListGroupItem>
              <Row>
                <Col>
                  <Button onClick={this.nextSubgoal}>Skip</Button>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                <span style={this.colorStyle(this.state.pairings[this.state.activeSubgoal][0].goal_id)}>
                <h4>{this.state.pairings[this.state.activeSubgoal][0].goal_id}.{this.state.pairings[this.state.activeSubgoal][0].subgoal_id}</h4> </span>
                {this.state.pairings[this.state.activeSubgoal][0].body}
                </Col>
                <Col>
                <span style={this.colorStyle(this.state.pairings[this.state.activeSubgoal][1].goal_id)}>
                <h4>{this.state.pairings[this.state.activeSubgoal][1].goal_id}.{this.state.pairings[this.state.activeSubgoal][1].subgoal_id}</h4> </span>
                {this.state.pairings[this.state.activeSubgoal][1].body}
                </Col>
              </Row>
              <br/>
              <Slider min={-3} max={3} defaultValue={0} 
                marks={{
                  '-3': {"style": 'bold', 'label': '-3'},
                  '-2': '-2',
                  '-1': '-1',
                  '0': '0',
                  '1': '1',
                  '2': '2',
                  '3': '3'
                }}
                included={false}
                onChange={this.sliderChange}
              />
              <br/>
              {this.state.scoreValue >= 0 && <Label for="answer"><b>Key Interactions</b> <i>Comments/Additional Notes</i></Label>}
              {this.state.scoreValue < 0 && <Label style={{color: 'red'}}for="answer"><b>Key Interactions</b> <i>Comments/Additional Notes (REQUIRED)</i></Label>}
              <Input value={this.state.comment} type="text" name="answer" id="comment" onChange={this.onChange}/>
              <br />
              <Button color='success' onClick={() => this.submitAnswer(this.state.pairings[this.state.activeSubgoal][0].goal_id, this.state.pairings[this.state.activeSubgoal][0].subgoal_id, this.state.pairings[this.state.activeSubgoal][1].goal_id, this.state.pairings[this.state.activeSubgoal][1].subgoal_id)}>Submit</Button>
            </ListGroupItem>
          }
        </ListGroup>
        <br/>
        {/* <Button onClick={this.setEndTime} color='info'>End Time</Button>
        <p>End Time: {this.state.endtime === null ? '' : this.state.endtime}</p>
        <p>Time consumed: {this.state.elapsedtime !== null ? this.state.elapsedtime : ''} {this.state.elapsedtime !== null ? this.state.elapsedtime > 1 ? 'minutes' : this.state.elapsedtime > 0 ? 'minute': '' : '' }</p> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user_id: state.user_id
});

export default connect(mapStateToProps)(Survey);