import React, {Component} from 'react';
import MenuBar from '../MenuBar/MenuBar';
import Tabs from '../Tabs/Tabs';
import {Alert, ListGroup, ListGroupItem, Input, Button, Row, Col, Label} from 'reactstrap';
import axios from 'axios';
import Slider from 'rc-slider';
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

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingAnswers: false,
      answers: [],
      totalTime: 0,
      itemBody: []
    }
  }

  componentDidMount() {
    this.setState({loadingAnswers: true});
    axios.post('https://hidden-reef-87726.herokuapp.com/survey/answers/user', [{
      'username': localStorage.getItem('username')
    }]).then(response => {
      this.setState({answers: response.data, loadingAnswers: false}, () => {
        this.state.answers.map((item, i) => {
          if(!item.finished) {
            this.setState((previousState) => {return{totalTime: previousState.totalTime + item.time_answered}}, () => {
              axios.post('https://hidden-reef-87726.herokuapp.com/goals/body', [{
                'goal_id': item.target1_goal,
                'subgoal_id': item.target1_subgoal
              }]).then(response => {
                let alreadyIncluded = false;
                for(let i = 0; i < this.state.itemBody.length; i++) {
                  if(this.state.itemBody[i].goal === item.target1_goal && this.state.itemBody[i].subgoal === item.target1_subgoal) {
                    alreadyIncluded = true;
                    break;
                  }
                }
                if(!alreadyIncluded) {
                  this.setState({itemBody: [...this.state.itemBody, {goal: item.target1_goal, subgoal: item.target1_subgoal, body: response.data}]});
                }
              });
              axios.post('https://hidden-reef-87726.herokuapp.com/goals/body', [{
                'goal_id': item.target2_goal,
                'subgoal_id': item.target2_subgoal
              }]).then(response => {
                let alreadyIncluded = false;
                for(let i = 0; i < this.state.itemBody.length; i++) {
                  if(this.state.itemBody[i].goal === item.target2_goal && this.state.itemBody[i].subgoal === item.target2_subgoal) {
                    alreadyIncluded = true;
                    break;
                  }
                }
                if(!alreadyIncluded) {
                  this.setState({itemBody: [...this.state.itemBody, {goal: item.target2_goal, subgoal: item.target2_subgoal, body: response.data}]});
                }
              });
            });
          }
        });
      });
    });
  }

  onChange = (event) => {
    let i = event.target.id;
    let value = event.target.value;
    let newAnswers = this.state.answers;
    newAnswers[i].reason = value;
    this.setState({answers: newAnswers});
  }

  sliderChange = (value, i) => {
    let newAnswers = this.state.answers;
    newAnswers[i].score = value;
    this.setState({answers: newAnswers});
  }

  finalize = () => {
    this.state.answers.map((item, i) => {
      console.log(item);
      axios.put('https://hidden-reef-87726.herokuapp.com/survey/answer/update', [{
        'target1_goal': item.target1_goal,
        'target1_subgoal': item.target1_subgoal,
        'target2_goal': item.target2_goal,
        'target2_subgoal': item.target2_subgoal,
        'score': item.score,
        'reason': item.reason,
        'username': item.username,
        'finished': true,
        'time_answered': item.time_answered
      }]).then(response => {
        console.log(response);
        if(i === this.state.answers.length - 1) {
          this.setState({answers: [], totalTime: 0});
        }
      });
    });
  }

  colorStyle = (i) => {
    let color = colorScheme[i];
    return {
      color: color, 
    }
  }

  returnBody = (goalID, subgoalID) => {
    axios.post('https://hidden-reef-87726.herokuapp.com/goals/body', [{
      'goal_id': goalID,
      'subgoal_id': subgoalID
    }]).then(response => {
      return (<p>{response.data}</p>);
    });
  }

  render() {
    return(
      <div className='container'>
        <MenuBar />
        <br />
        <Tabs active={'review'}/>
        <br/>
        <h4>Review Module</h4>
        <br/>
        { this.state.loadingAnswers ? <Alert>Loading answers...</Alert> : ''}
        <h4>Time Consumed: {parseInt(this.state.totalTime / 60, 10)} minutes, {this.state.totalTime % 60} seconds</h4>
        <ListGroup>
          {this.state.answers.map((item, i) => {
            if(!item.finished) {
              return(
              <ListGroupItem>
                <Row>
                  <Col>
                    <span style={this.colorStyle(item.target1_goal)}><h4>{item.target1_goal}.{item.target1_subgoal}</h4></span>
                    <p>{this.state.itemBody.map((body, i) => {
                      if(body.goal === item.target1_goal && body.subgoal === item.target1_subgoal) {
                        return body.body;
                      }
                      return '';
                    })}</p>
                  </Col>
                  <Col>
                    <span style={this.colorStyle(item.target2_goal)}><h4>{item.target2_goal}.{item.target2_subgoal}</h4></span>
                    <p>{this.state.itemBody.map((body, i) => {
                      if(body.goal === item.target2_goal && body.subgoal === item.target2_subgoal) {
                        return body.body;
                      }
                      return '';
                    })}</p>
                  </Col>
                </Row>
                <br/>
                <Slider min={-3} max={3} defaultValue={item.score} 
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
                  onChange={value => this.sliderChange(value, i)}
                />
                <br/>
                <Label for="answer"><b>Key Interactions</b> <i>Comments/Additional Notes</i></Label>
                <Input value={item.reason} id={i} onChange={this.onChange}></Input>
              </ListGroupItem>
              );
            }
          })}
        </ListGroup>
        <br />
        {this.state.answers.length > 0 && <Button color='success' onClick={this.finalize}>Finalize and Submit Answers</Button>}
        {/* <Button onClick={this.setEndTime} color='info'>End Time</Button>
        <p>End Time: {this.state.endtime === null ? '' : this.state.endtime}</p>
        <p>Time consumed: {this.state.elapsedtime !== null ? this.state.elapsedtime : ''} {this.state.elapsedtime !== null ? this.state.elapsedtime > 1 ? 'minutes' : this.state.elapsedtime > 0 ? 'minute': '' : '' }</p> */}
      </div>
    );
  }
} 

export default Review;