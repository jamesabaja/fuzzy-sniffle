import React, {Component} from 'react';
import {Container, Row, Col, Jumbotron, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Card, CardImg, CardText, CardBody, CardTitle, } from 'reactstrap';
import axios from 'axios';
import MenuBar from '../MenuBar/MenuBar';

let GOALS = [
  {
    name: 'GOAL 1: No Poverty',
    colorScheme: '#EB1C2D',
    number: '1'
  },
  {
    name: 'GOAL 2: Zero Hunger',
    colorScheme: '#D3A029',
    number: '2'
  },
  {
    name: 'GOAL 3: Good Health and Well-Being',
    colorScheme: '#4CA146',
    number: '3'
  },
  {
    name: 'GOAL 4: Quality Education',
    colorScheme: '#C7212F',
    number: '4'
  },
  {
    name: 'GOAL 5: Gender Equality',
    colorScheme: '#EF402D',
    number: '5'
  },
  {
    name: 'GOAL 6: Clean Water and Sanitation',
    colorScheme: '#27BFE6',
    number: '6'
  },
  {
    name: 'GOAL 7: Affordable and Clean Energy',
    colorScheme: '#FBC412',
    number: '7'
  },
  {
    name: 'GOAL 8: Decent Work and Economic Growth',
    colorScheme: '#A31C44',
    number: '8'
  },
  {
    name: 'GOAL 9: Industry, Innovation and Infrastructure',
    colorScheme: '#F36D25',
    number: '9'
  },
  {
    name: 'GOAL 10: Reduced Inequalities',
    colorScheme: '#DD1367',
    number: '10'
  },
  {
    name: 'GOAL 11: Sustainable Cities and Communities',
    colorScheme: '#F89D2A',
    number: '11'
  },
  {
    name: 'GOAL 12: Responsible Consumption and Production',
    colorScheme: '#CF8D2A',
    number: '12'
  },
  {
    name: 'GOAL 13: Climate Action',
    colorScheme: '#48773E',
    number: '13'
  },
  {
    name: 'GOAL 14: Life below Water',
    colorScheme: '#1F97D4',
    number: '14'
  },
  {
    name: 'GOAL 15: Life on Land',
    colorScheme: '#3EB049',
    number: '15'
  },
  {
    name: 'GOAL 16: Peace, Justice, and Strong Institutions',
    colorScheme: '#136A9F',
    number: '16'
  },
  {
    name: 'GOAL 17: Partnership for the Goals',
    colorScheme: '#183668',
    number: '17'
  }
]

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstGoalDropdown: false,
      secondGoalDropdown: false,
      selectedFirstGoal: {name: '', number: 1},
      selectedSecondGoal: {name: '', number: 1},
      firstIndex: 0,
      secondIndex: 0
    }
  }

  toggleFirstGoalDropdown = () => {
    this.setState({firstGoalDropdown: !this.state.firstGoalDropdown});
  }

  toggleSecondGoalDropdown = () => {
    this.setState({secondGoalDropdown: !this.state.secondGoalDropdown});
  }

  selectGoal = (goal, order, index) => {
    switch(order) {
      case 'first':
        this.setState({selectedFirstGoal: goal, firstIndex: index, selectedSecondGoal: {name: '', number: '1'}});
        break;
      case 'second':
        this.setState({selectedSecondGoal: goal, secondIndex: index});
        break;
    }
  }

  render() {
    return(
      <div>
        <MenuBar/>
        <Container>
          <h3>Query Goals</h3>
          <Row>
            <Col>
              <ButtonDropdown isOpen={this.state.firstGoalDropdown} toggle={this.toggleFirstGoalDropdown}>
                <DropdownToggle caret color='warning'>
                {this.state.selectedFirstGoal.name === '' ? 'Select Goal 1' : this.state.selectedFirstGoal.name}
                </DropdownToggle>
                <DropdownMenu>
                  {GOALS.map((item, i) => {
                    return (<DropdownItem onClick={() => this.selectGoal(item, 'first', i)}>{item.name}</DropdownItem>);
                  })}
                </DropdownMenu>
              </ButtonDropdown>
              <br/>
              <br/>
              {/*this.state.selectedFirstGoal.name !== '' ? <Card className='clickable'>
                <CardImg height="10%" width="10%" src={require(`../../../assets/Images/Goal${this.state.selectedFirstGoal.number}.png`)} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Goal {this.state.selectedFirstGoal.number}</CardTitle>
                </CardBody>
                </Card>: ''*/}
              {this.state.selectedFirstGoal.name !== '' ? <Jumbotron>
                <img className='center' height="30%" width="30%" src={require(`../../../assets/Images/Goal${this.state.selectedFirstGoal.number}.png`)}/>
                <br/>
                <span style={{color: this.state.selectedFirstGoal.colorScheme}}><h1 className="display-5 centered">Goal {this.state.selectedFirstGoal.number}</h1></span>
              </Jumbotron>: ''}
            </Col>
            <Col>
              <ButtonDropdown isOpen={this.state.secondGoalDropdown} toggle={this.toggleSecondGoalDropdown}>
                <DropdownToggle caret color='warning'>
                  {this.state.selectedSecondGoal.name === '' ? 'Select Goal 2' : this.state.selectedSecondGoal.name}
                </DropdownToggle>
                <DropdownMenu>
                  {GOALS.map((item, i) => {
                    if(i >= this.state.firstIndex) {
                      return (<DropdownItem onClick={() => this.selectGoal(item, 'second', i)}>{item.name}</DropdownItem>);
                    }
                  })}
                </DropdownMenu>
              </ButtonDropdown>
              <br/>
              <br/>
              {this.state.selectedSecondGoal.name !== '' ? <Jumbotron>
                <img className='center' height="30%" width="30%" src={require(`../../../assets/Images/Goal${this.state.selectedSecondGoal.number}.png`)}/>
                <br/>
                <span style={{color: this.state.selectedSecondGoal.colorScheme}}><h1 className="display-5 centered">Goal {this.state.selectedSecondGoal.number}</h1></span>
              </Jumbotron>: ''}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Query;