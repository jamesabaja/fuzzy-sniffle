import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardGroup, Button, Collapse } from 'reactstrap';
import Goal1 from '../../Assets/Images/Goal1.png';
import Goal2 from '../../Assets/Images/Goal2.png';
import Goal3 from '../../Assets/Images/Goal3.jpg';
import Goal4 from '../../Assets/Images/Goal4.jpg';
import Goal5 from '../../Assets/Images/Goal5.jpg';
import Goal6 from '../../Assets/Images/Goal6.jpg';
import Goal7 from '../../Assets/Images/Goal7.jpg';
import Goal8 from '../../Assets/Images/Goal8.jpg';
import Goal9 from '../../Assets/Images/Goal9.png';
import Goal10 from '../../Assets/Images/Goal10.png';
import Goal11 from '../../Assets/Images/Goal11.jpg';
import Goal12 from '../../Assets/Images/Goal12.png';
import Goal13 from '../../Assets/Images/Goal13.png';
import Goal14 from '../../Assets/Images/Goal14.jpg';
import Goal15 from '../../Assets/Images/Goal15.png';
import Goal16 from '../../Assets/Images/Goal16.jpg';
import Goal17 from '../../Assets/Images/Goal17.png';

class SelectGoal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      peopleGoals: false, 
      planetGoals: false,
      prosperityGoals: false
    };
  }

  togglePeopleGoals = () => {
    this.setState({peopleGoals: !this.state.peopleGoals});
  }

  togglePlanetGoals = () => {
    this.setState({planetGoals: !this.state.planetGoals});
  }
  toggleProsperityGoals = () => {
    this.setState({prosperityGoals: !this.state.prosperityGoals});
  }

  render() {
    return(
      <div className='container'>
        <a href='/'>Logout</a>
        <h3>Select Goals</h3>
        <Button color='info' name='peopleGoals' onClick={this.togglePeopleGoals} style={{ marginBottom: '1rem' }}>{this.state.peopleGoals? 'Hide' : 'Show'} People Goals</Button>
        <Collapse isOpen={this.state.peopleGoals}>
        <CardGroup>
          <Card>
            <CardImg top src={Goal1} alt="Card image cap" />
            <CardBody>
              <CardTitle>Goal 1</CardTitle>
              <CardSubtitle>No Poverty</CardSubtitle>
              <br />
              <CardText><i>End poverty in all its forms everywhere.</i></CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top src={Goal2} alt="Card image cap" />
            <CardBody>
              <CardTitle>Goal 2</CardTitle>
              <CardSubtitle>End Hunger</CardSubtitle>
              <br />
              <CardText><i>End hunger, achieve food security and improved nutrition, and promote sustainable agriculture.</i></CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top src={Goal3} alt="Card image cap" />
            <CardBody>
              <CardTitle>Goal 3</CardTitle>
              <CardSubtitle>Good Health and Well-being</CardSubtitle>
              <br />
              <CardText><i>Ensure healthy lives and promote well-being for all at all ages.</i></CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top src={Goal4} alt="Card image cap" />
            <CardBody>
              <CardTitle>Goal 4</CardTitle>
              <CardSubtitle>Quality Education</CardSubtitle>
              <br />
              <CardText><i>Ensure inclusive and equitable quality education and promote lifelong education learning opportunities for all.</i></CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top src={Goal5} alt="Card image cap" />
            <CardBody>
              <CardTitle>Goal 5</CardTitle>
              <CardSubtitle>Gender Equality</CardSubtitle>
              <br />
              <CardText><i>Achieve gender equality and empower all women and girls.</i></CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top src={Goal6} alt="Card image cap" />
            <CardBody>
              <CardTitle>Goal 6</CardTitle>
              <CardSubtitle>Gender Equality</CardSubtitle>
              <br />
              <CardText><i>Achieve gender equality and empower all women and girls.</i></CardText>
            </CardBody>
          </Card>
        </CardGroup>
        </Collapse>
        <br />
        <Button color='success' name='planetGoals' onClick={this.togglePlanetGoals} style={{ marginBottom: '1rem' }}>{this.state.planetGoals? 'Hide' : 'Show'} Planet Goals</Button>
        <Collapse isOpen={this.state.planetGoals}>
          <CardGroup>
            <Card>
              <CardImg top src={Goal7} alt="Card image cap" />
              <CardBody>
                <CardTitle>Goal 7</CardTitle>
                <CardSubtitle>Affordable and Clean Energy</CardSubtitle>
                <br />
                <CardText><i>Ensure access to affordable, reliable, sustainable, and modern energy for all.</i></CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg top src={Goal9} alt="Card image cap" />
              <CardBody>
                <CardTitle>Goal 9</CardTitle>
                <CardSubtitle>Industry, Innovation and Infrastructure</CardSubtitle>
                <br />
                <CardText><i>Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation.</i></CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg top src={Goal11} alt="Card image cap" />
              <CardBody>
                <CardTitle>Goal 11</CardTitle>
                <CardSubtitle>Sustainable Cities and Communities</CardSubtitle>
                <br />
                <CardText><i>Make cities and human settlements inclusive, safe, resilient and sustainable.</i></CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg top src={Goal13} alt="Card image cap" />
              <CardBody>
                <CardTitle>Goal 13</CardTitle>
                <CardSubtitle>Climate Action</CardSubtitle>
                <br />
                <CardText><i>Take urgent action to combat climate change and its impacts.</i></CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg top src={Goal14} alt="Card image cap" />
              <CardBody>
                <CardTitle>Goal 14</CardTitle>
                <CardSubtitle>Life Below Water</CardSubtitle>
                <br />
                <CardText><i>Conserve and sustainably use the oceans, seas and marine resources for sustainable development.</i></CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg top src={Goal15} alt="Card image cap" />
              <CardBody>
                <CardTitle>Goal 15</CardTitle>
                <CardSubtitle>Life on Land</CardSubtitle>
                <br />
                <CardText><i>Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification and halt and reverse biodiversity lossland degradation.</i></CardText>
              </CardBody>
            </Card>
          </CardGroup>
        </Collapse>
        <br />
        <Button color='warning' name='prosperityGoals' onClick={this.toggleProsperityGoals} style={{ marginBottom: '1rem' }}>{this.state.prosperityGoals? 'Hide' : 'Show'} Prosperity Goals</Button>
        <Collapse isOpen={this.state.prosperityGoals}>
          <CardGroup>
            <Card>
              <CardImg top src={Goal8} alt="Card image cap" />
              <CardBody>
                <CardTitle>Goal 8</CardTitle>
                <CardSubtitle>Decent Work and Economic Growth</CardSubtitle>
                <br />
                <CardText><i>Promote sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.</i></CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg top src={Goal10} alt="Card image cap" />
              <CardBody>
                <CardTitle>Goal 10</CardTitle>
                <CardSubtitle>Reduced Inequalities</CardSubtitle>
                <br />
                <CardText><i>Reduce inequality within and among countries.</i></CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg top src={Goal12} alt="Card image cap" />
              <CardBody>
                <CardTitle>Goal 12</CardTitle>
                <CardSubtitle>Responsible Consumption and Production</CardSubtitle>
                <br />
                <CardText><i>Ensure sustainable consumption and production patterns.</i></CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg top src={Goal16} alt="Card image cap" />
              <CardBody>
                <CardTitle>Goal 16</CardTitle>
                <CardSubtitle>Peace, Justice, and Strong Institutions</CardSubtitle>
                <br />
                <CardText><i>Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.</i></CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg top src={Goal17} alt="Card image cap" />
              <CardBody>
                <CardTitle>Goal 17</CardTitle>
                <CardSubtitle>Partnerships for the Goals</CardSubtitle>
                <br />
                <CardText><i>Strengthen the means of implementation and revitalize the global partnership for sustainable development.</i></CardText>
              </CardBody>
            </Card>
          </CardGroup>
        </Collapse>
      </div>
    );
  }
}

export default SelectGoal;