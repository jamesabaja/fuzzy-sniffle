import React, {Component} from 'react';
import {Container, Table, Alert} from 'reactstrap';
import MenuBar from '../MenuBar/MenuBar';
import axios from 'axios';

class ViewUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoadingData: false
    }
  }

  componentDidMount() {
    this.setState({isLoadingData: true});
    axios.get('https://hidden-reef-87726.herokuapp.com/users')
    .then(response => {
      this.setState({users: response.data, isLoadingData: false});
    })
  }

  render() {
    return(
      <div>
        <MenuBar />
        <Container>
          <h3>View Registered Users</h3>
          {this.state.isLoadingData ?
          <Alert color='light'>
            Loading data, please wait ...
          </Alert>
          :
          <Table responsive>
            <thead>
              <tr>
                <th>Name</th>
                <th>Primary Affiliation</th>
                <th>Highest Educational Attainment</th>
                <th>Professor</th>
              </tr>
            </thead>
            <tbody>
            {this.state.users.map((item, i) => {
              if(!item.pending) {
                return(
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.primary_aff}</td>
                    <td>{item.educ_attain === 'bachelor\'s degree' ? 'Bachelor\'s Degree' : item.educ_attain === "master's or professional degree" || item.educ_attain === "Masters" ? "Master's or Professional Degree" : "PhD Degree" }</td>
                    <td>{item.contact_person}</td>
                  </tr>
                );
              }
            })}
            </tbody>
          </Table>}
        </Container>
      </div>
    );
  }
}  

export default ViewUsers;