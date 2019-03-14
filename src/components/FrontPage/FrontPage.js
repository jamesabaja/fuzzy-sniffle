import React, {Component} from 'react';
import {Button, Jumbotron} from 'reactstrap';

class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blink: false
    }
  }
  
  blinkText = () => {
    let blink = !this.state.blink;
    this.setState({blink: blink});
  }

  componentDidMount() {
    setInterval(this.blinkText, 500);
  }

  render() {
    return(
      <div className='container centered'>
        <Jumbotron>
          <h2 className="display-4" style={this.state.blink ? {color: 'red'} : {color: 'green'}}>ACTIVE RESEARCH WEBSITE !!!</h2>
          <p className="lead">This website is owned and operated by the System Modeling and Simulation Laboratory of the Department of Computer Science, UP Diliman.</p>
          <p>
            Data gathered and displayed here are curated by: <br/><br/>
            <b>Dr. Vena Pearl Bongolan</b>, <i>College of Engineering</i> <br/>
            <b>Dr. Rizalino B. Cruz</b>, <i>National College of Public Administration and Governance (NCPAG)</i> <br/>
            <b>Prof. Roselle Leah K. Rivera</b>, <i>College of Social Work and Community Development</i>

            <br/>
            <b>James Gabriel Abaja</b> and <b>Wystan Concepcion</b>, <i>Undergraduate Students</i> <br/>
          </p>
          <p>
          <b>Analysis is exclusively for the Philippine setting</b>, and individual respondents are <b>required a minimum of five years</b> in the practice or study of sustainability and development issues (may include years in graduate school). Foreign respondents are welcome if the Philippines is one of their study or practice areas, and have at least five years total experience (practice or study), including Philippine experience. 
          </p>
          <p className='lead'><i>Chrome is the recommended browser for the software; we are working on compatibility issues with FireFox.</i></p>
          <hr className="my-2" />
          <p className="lead">
            <Button outline color='primary' href='/signup'>Signup </Button>{' '}
            <Button outline color='success' href='/login'>Login</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
};

export default FrontPage;
