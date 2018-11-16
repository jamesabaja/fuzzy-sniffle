import React, {Component} from 'react';
import MenuBar from '../MenuBar/MenuBar';
import Tabs from '../Tabs/Tabs';

class Review extends Component {
  render() {
    return(
      <div className='container'>
        <MenuBar />
        <br />
        <Tabs active={'review'}/>
        <br/>
        <h4>Review Module</h4>
        <br/>
        {/* <Button onClick={this.setEndTime} color='info'>End Time</Button>
        <p>End Time: {this.state.endtime === null ? '' : this.state.endtime}</p>
        <p>Time consumed: {this.state.elapsedtime !== null ? this.state.elapsedtime : ''} {this.state.elapsedtime !== null ? this.state.elapsedtime > 1 ? 'minutes' : this.state.elapsedtime > 0 ? 'minute': '' : '' }</p> */}
      </div>
    );
  }
} 

export default Review;