import React, {Component} from 'react';
//eslint-disable-next-line
import {ListGroup, ListGroupItem, Button, Form, Input, Label, FormGroup, Navbar, NavbarBrand, NavbarToggler, Collapse, Alert, Col, Row, Nav, NavItem, NavLink} from 'reactstrap';
import moment from 'moment';
import axios from 'axios';
import {connect} from 'react-redux';

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
      isOpen: false
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
    this.setState({endtime: endtime, elapsedtime: moment().diff(starttime, 'minutes')});
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

  render() {
    return(
      <div className='container'>
        <Navbar color="info" dark expand="md">
          <NavbarBrand href="/">SDG Interactions Survey</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/survey">Survey</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/home">Add Goals</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <br />
        <Nav tabs>
          <NavItem>
            <NavLink href="/survey" active>Survey Proper</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/review">Review and Finalize Answers</NavLink>
          </NavItem>
        </Nav>
        <br/>
        <h4>Survey Module</h4>
        { this.state.loadingSubgoals ? <Alert>Loading subgoals</Alert> : ''}
        {/* <Button onClick={this.setStartTime} color='info'>Start Time</Button>
        <p>Start Time: {this.state.starttime === null ? '' : this.state.starttime}</p> */}
        <ListGroup>
          {this.state.subgoals.map((item, i) => {
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
          })}
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