import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      visible: false,
      isLoading: false
    };
  }

  onChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    this.setState({[id]: value});
  }

  signUp = () => {
    console.log({
      username: this.state.username,
      password: this.state.password
    });
    this.setState({isLoading: true})
    axios.post('http://hidden-reef-87726.herokuapp.com/users/confirm', [{
      username: this.state.username,
      password: this.state.password
    }])
    .then(response => {
      if(response.status === 200) {
        this.setState({isLoading: false});
        this.props.history.push('/home');
        console.log('Login successful');
      }
    })
    .catch(error => {
      if(error.response.status === 404) {
        this.setState({visible: true, isLoading: false});
      }
    });
  }

  onDismiss = () => {
    this.setState({visible: false});
  }

  render() {
    return(
      <div className='container'>
        <a href='/'>Back to home</a>
        <br /><br />
        <h4>Login</h4>
        <Alert color='danger' isOpen={this.state.visible} toggle={this.onDismiss}>
          Invalid username and/or password.
        </Alert>
        <Alert color="light" isOpen={this.state.isLoading}>
          Verifying your login credentials, please wait...
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
        <a href='/signup'>Don't have an account? Signup here.</a>
        <br/>
        {/*<a href='/'>*/}<Button color='info' onClick={this.signUp}>Submit</Button>{/*</a>*/}
      </div>
    );
  }
};

export default Login;