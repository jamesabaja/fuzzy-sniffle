import React, {Component} from 'react';
//eslint-disable-next-line
import {ListGroup, ListGroupItem, Button, Form, Input, Label, FormGroup, Alert, Col, Row} from 'reactstrap';
import moment from 'moment';
import axios from 'axios';
import {connect} from 'react-redux';

//let selected = ["1", "2", "6"];
class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starttime: null,
      endtime: null,
      elapsedtime: null,
      subgoals: [],
      loadingSubgoals: true
    }
  }

  setStartTime = () => {
    this.setState({starttime: moment().format('h:mm:ss a')});
  }

  setEndTime = () => {
    let endtime = moment().format('h:mm:ss a');
    let starttime = moment(this.state.starttime, 'h:mm:ss a');
    this.setState({endtime: endtime, elapsedtime: moment().diff(starttime, 'minutes')});
  }

  componentWillMount() {
    axios.post('https://hidden-reef-87726.herokuapp.com/users/goals', [{
      user_id: this.props.user_id.toString()
    }])
    .then(response => {
      let selected = response.data;
      console.log(selected);
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

  render() {
    return(
      <div className='container'>
        <a href='/'>Logout</a>
        <br/>
        <a href='/home'>Back to select goals</a>
        <br/>
        <br/>
        <Row>
        <Col xs='4'>
        </Col>
        <Col xs='8'>
        <h4>Survey proper</h4>
        { this.state.loadingSubgoals ? <Alert>Loading subgoals</Alert> : ''}
        <Button onClick={this.setStartTime} color='info'>Start Time</Button>
        <p>Start Time: {this.state.starttime === null ? '' : this.state.starttime}</p>
        <ListGroup>
          {this.state.subgoals.map((item, i) => {
            return(
              <ListGroupItem id={i}>
                {item.goal_id}.{item.subgoal_id} <br />
                {item.body}
              </ListGroupItem>
            );
          })}
        </ListGroup>
        <br/>
        <Button onClick={this.setEndTime} color='info'>End Time</Button>
        <p>End Time: {this.state.endtime === null ? '' : this.state.endtime}</p>
        <p>Time consumed: {this.state.elapsedtime !== null ? this.state.elapsedtime : ''} {this.state.elapsedtime !== null ? this.state.elapsedtime > 1 ? 'minutes' : this.state.elapsedtime > 0 ? 'minute': '' : '' }</p>
        </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user_id: state.user_id
});

export default connect(mapStateToProps)(Survey);