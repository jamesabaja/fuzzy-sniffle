import React, {Component} from 'react';
import axios from 'axios';
import {Container} from 'reactstrap';
import MenuBar from '../MenuBar/MenuBar';

class ViewAnswers extends Component {
  render() {
    return(
      <div>
        <MenuBar />
        <Container>
          <h3>View Survey Answers</h3>
          <hr/>
        </Container>
      </div>
    )
  }
}

export default ViewAnswers;