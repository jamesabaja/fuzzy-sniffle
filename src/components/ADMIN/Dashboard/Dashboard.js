import React, {Component} from 'react';
import {Container} from 'reactstrap';
import MenuBar from '../MenuBar/MenuBar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <MenuBar/>
        <Container>
          <h3>Dashboard</h3>
          <h5>Welcome, Admin.</h5>
        </Container>
      </div>
    );
  }
}

export default Dashboard;