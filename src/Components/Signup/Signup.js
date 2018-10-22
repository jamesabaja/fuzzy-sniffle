import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: false
    };
  }

  onChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({[id]: value});
  }

  signUp = () => {
    this.setState({isLoading: true})
    axios.post('https://hidden-reef-87726.herokuapp.com/users/add', [{
      username: this.state.username,
      password: this.state.password
    }])
    .then(response => {
      this.setState({isLoading: false});
      if(response.status === 200) {
        this.props.history.push('/');
      }
    });
  }

  render() {
    return(
      <div className='container'>
        <a href='/'>Back to home</a>
        <br /><br />
        <h4>Signup</h4>
        <h5>Personal Information</h5>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="text" id="name" placeholder="Juan dela Cruz" />
          </FormGroup>
          <FormGroup>
            <Label for="affiliation">Primary Affiliation (usually an office)</Label>
            <Input type="text" name="text" id="affiliation" placeholder="University of the Philippines Diliman" />
          </FormGroup>
          <FormGroup>
            <Label for="affiliation">Secondary Affiliation (usually a school)</Label>
            <Input type="text" name="text" id="affiliation" placeholder="University of the Philippines Diliman" />
          </FormGroup>
          <Label for="educAttainment">Highest Educational Attainment</Label>
          <FormGroup check id="educAttainment">
            <Label check>
              <Input type="radio" name="educAttainment" />{' '}
              Bachelor's Degree
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="educAttainment" />{' '}
              Master's or Professional Degree
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="educAttainment" />{' '}
              PhD Degree
            </Label>
          </FormGroup>
          <br />
          <Label for="howLong">How long have you been in the general area of sustainability/development studies or practice? (may include years in graduate school) </Label>
          <FormGroup check id='howLong'>
            <Label check>
              <Input type="radio" name="howLong" />{' '}
              Less than 5 years
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="howLong" />{' '}
              Less than 10 years
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="howLong" />{' '}
              More than 10 years
            </Label>
          </FormGroup>
        </Form>
        <br />
        <h5>Login Credentials</h5>
        <Alert color="light" isOpen={this.state.isLoading}>
          Creating your account, please wait...
        </Alert>
        <Form>
          <FormGroup>
            <Label for="accountName">Username</Label>
            <Input type="text" name="text" id="username" onChange={this.onChange} />
          </FormGroup>
          <FormGroup>
            <Label for="accountName">Password</Label>
            <Input type="password" name="text" id="password" onChange={this.onChange} />
          </FormGroup>
        </Form>
        {/*<a href='/'>*/}<Button color='info' onClick={this.signUp}>Submit</Button>{/*</a>*/}
      </div>
    );
  }
};

export default Signup;