import React, {Component} from 'react';
import axios from 'axios';
import {Container, Table, Button, Alert} from 'reactstrap';
import MenuBar from '../MenuBar/MenuBar';

class ConfirmPending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoadingData: false,
      pendingUsers: []
    }
  }

  componentDidMount() {
    this.setState({isLoadingData: true});
    axios.get('https://hidden-reef-87726.herokuapp.com/users')
    .then(response => {
      this.setState({users: response.data, isLoadingData: false});
      let pendingUsers = this.state.users.filter((item, i) => {
        return item.pending;
      })
    })
  }

  confirmRequest = (username) => {
    axios.put('https://hidden-reef-87726.herokuapp.com/users/grant', [{
      username: username
    }])
    .then(response => {
      window.location.reload();
    })
  }

  render() {
    return(
      <div>
        <MenuBar />
        <Container>
          <h3>Confirm Pending Signup Requests</h3>
          {this.state.isLoadingData ? 
          <Alert color='light'>
            Loading data, please wait ...
          </Alert>
          :
          this.state.pendingUsers.length === 0 ?
          <Alert color='light'>
            No pending signup requests.
          </Alert>
          :
          <Table responsive>
            <thead>
              <th>Name</th>
              <th>Email Address</th>
              <th>Professor</th>
              <th>Settings</th>
            </thead>
            <tbody>
            {this.state.pendingUsers.sort((a,b) => a.contact_person.localeCompare(b.contact_person)).map((item, i) => {
              if(item.pending) {
                return(
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.username}</td>
                    <td>{item.contact_person}</td>
                    <td><Button color='warning'>View Details</Button>{' '}<Button color='success' onClick={()=>this.confirmRequest(item.username)}>Confirm Request</Button></td>
                  </tr>
                );
              }
            })}
            </tbody>
          </Table>}
        </Container>
      </div>
    )
  }
}

export default ConfirmPending;