import React, {Component} from 'react';
import MenuBar from '../MenuBar/MenuBar';

class AddGoals extends Component {
  render() {
    return(
      <div className='container'>
        <MenuBar />
        <br />
        <h4>Add Goals</h4>
        <br/>
      </div>
    );
  }
}

export default AddGoals;